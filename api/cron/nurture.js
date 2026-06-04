// Nurture drip — runs daily via Vercel Cron (see vercel.json).
// Reads the Upstash queue populated by /api/subscribe and sends the follow-up
// emails: step 1 (value) ~2 days after signup, step 2 (offer) ~2 days later.
// Step 0 (the magnet itself) is delivered immediately by /api/subscribe.
//
// Fully owned (Resend + Upstash, no third-party ESP). No-ops gracefully until
// both are configured, and leaves the queue intact so the drip resumes once they
// are — no leads are skipped.
//
// Cadence cron: "0 14 * * *" (daily 14:00 UTC). Protect with CRON_SECRET (Vercel
// sets the Authorization header automatically when the env var exists).

const DAY = 86400000;
const STEP_GAP_DAYS = 2;
const LAST_STEP = 2;

const BOOK = 'https://cal.com/vasu-gupta-wv3e0q/discovery-call-quickomate';

const NURTURE = {
  1: {
    subject: 'The part most people skip',
    title: 'One thing that quietly kills most of these projects',
    body:
      "Quick follow-up. The number-one reason automation and outbound projects underperform isn't the tools — it's starting too broad. The teams that win pick the single highest-volume, most painful task, automate just that, measure it against a baseline, and only then expand. Everything else is a distraction until that first loop is paying for itself.",
  },
  2: {
    subject: 'Want a second set of eyes on yours?',
    title: 'Happy to take a look at your specific setup',
    body:
      "If it's useful, book a free 20-minute call — no pitch, just a straight read on what to automate first and what to skip for now. If it's not the right time, no worries at all; the resources are yours to keep either way.",
  },
};

function nurtureHtml(step) {
  const n = NURTURE[step];
  return `<!doctype html><html><body style="margin:0;background:#f5f3ee;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#111">
    <div style="max-width:560px;margin:0 auto;background:#fff;border:3px solid #111;padding:28px">
      <p style="font-family:monospace;font-size:11px;letter-spacing:2px;color:#E63B2E;font-weight:bold;margin:0 0 12px">QUICKOMATE</p>
      <h1 style="font-size:20px;margin:0 0 12px;line-height:1.3">${n.title}</h1>
      <p style="font-size:15px;line-height:1.6;color:#334155;margin:0 0 16px">${n.body}</p>
      <p style="margin:18px 0"><a href="${BOOK}" style="background:#E63B2E;color:#fff;text-decoration:none;font-weight:bold;padding:14px 22px;display:inline-block;font-family:monospace;text-transform:uppercase;letter-spacing:1px;font-size:13px">Book a discovery call →</a></p>
      <p style="font-size:12px;color:#94a3b8;margin-top:24px;border-top:1px solid #e2e8f0;padding-top:14px">Reply "stop" and you'll never hear from us again.</p>
    </div></body></html>`;
}

async function resendSend({ to, subject, html }) {
  const key = process.env.RESEND_API_KEY;
  if (!key) return { skipped: true };
  const from = process.env.RESEND_FROM || 'Quickomate <hello@quickomate.com>';
  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({ from, to, subject, html }),
  });
  if (!res.ok) throw new Error(`Resend ${res.status}`);
  return res.json();
}

const U_URL = process.env.UPSTASH_REDIS_REST_URL;
const U_TOKEN = process.env.UPSTASH_REDIS_REST_TOKEN;

async function redis(cmd) {
  const res = await fetch(U_URL, {
    method: 'POST',
    headers: { Authorization: `Bearer ${U_TOKEN}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(cmd),
  });
  if (!res.ok) throw new Error(`Upstash ${res.status}`);
  const json = await res.json();
  return json.result;
}

export default async function handler(req, res) {
  // Verify the Vercel Cron secret if configured.
  if (process.env.CRON_SECRET && req.headers.authorization !== `Bearer ${process.env.CRON_SECRET}`) {
    return res.status(401).json({ ok: false, error: 'Unauthorized' });
  }
  // Need both storage and delivery; otherwise leave the queue untouched.
  if (!U_URL || !U_TOKEN || !process.env.RESEND_API_KEY) {
    return res.status(200).json({ ok: true, skipped: 'not-configured' });
  }

  const now = Date.now();
  let processed = 0;
  try {
    const due = (await redis(['ZRANGEBYSCORE', 'nurture:queue', '0', String(now)])) || [];
    for (const member of due) {
      const sep = member.indexOf('|');
      const magnet = member.slice(0, sep);
      const email = member.slice(sep + 1);
      const raw = await redis(['GET', `lead:${magnet}:${email}`]);
      const lead = raw ? JSON.parse(raw) : { step: 0 };
      const nextStep = (lead.step ?? 0) + 1;

      if (nextStep > LAST_STEP || !NURTURE[nextStep]) {
        await redis(['ZREM', 'nurture:queue', member]);
        continue;
      }

      await resendSend({ to: email, subject: NURTURE[nextStep].subject, html: nurtureHtml(nextStep) });
      lead.step = nextStep;
      await redis(['SET', `lead:${magnet}:${email}`, JSON.stringify(lead)]);

      if (nextStep < LAST_STEP) {
        await redis(['ZADD', 'nurture:queue', String(now + STEP_GAP_DAYS * DAY), member]);
      } else {
        await redis(['ZREM', 'nurture:queue', member]);
      }
      processed += 1;
    }
    return res.status(200).json({ ok: true, processed });
  } catch (err) {
    console.error('[nurture] error', err);
    return res.status(200).json({ ok: false, processed, error: String(err).slice(0, 200) });
  }
}
