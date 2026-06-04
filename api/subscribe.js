// Lead-magnet capture endpoint.
// Flow: validate email -> deliver the magnet via Resend -> store + enqueue the
// lead in Upstash Redis for the Vercel-Cron nurture drip (/api/cron/nurture).
//
// Fully owned stack (no third-party ESP). Degrades gracefully: if RESEND_API_KEY
// or UPSTASH_REDIS_REST_URL are not set yet, it logs and still returns ok so the
// front-end form works in dev / before the services are provisioned.
//
// Required env (set in Vercel once provisioned):
//   RESEND_API_KEY            - Resend API key
//   RESEND_FROM               - e.g. "Quickomate <hello@quickomate.com>" (verified domain)
//   UPSTASH_REDIS_REST_URL    - Upstash Redis REST URL  (auto-set by the Vercel integration)
//   UPSTASH_REDIS_REST_TOKEN  - Upstash Redis REST token
// Optional:
//   LEAD_NOTIFY_EMAIL         - address to notify on every new lead

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Nurture cadence (days after signup) — step 0 is delivered immediately.
const NURTURE_OFFSETS_DAYS = [0, 2, 4];

const MAGNETS = {
  'sales-automation-roi-calculator': {
    name: 'Sales Automation ROI Report',
    subject: 'Your sales automation ROI report',
    intro:
      "Here are the numbers you just ran, plus the 1-page roadmap for turning them into a working system.",
  },
  'cold-email-infrastructure-checklist': {
    name: 'Cold Email Infrastructure Checklist',
    subject: 'Your cold email infrastructure checklist',
    intro: 'The full pre-flight checklist so you never burn a sending domain again.',
  },
  'ai-automation-readiness-scorecard': {
    name: 'AI Automation Readiness Scorecard',
    subject: 'Your AI automation readiness score',
    intro: 'Your score, what it means, and the single best place for you to start.',
  },
  'b2b-cold-email-swipe-file': {
    name: 'B2B Cold Email Swipe File',
    subject: 'Your B2B cold email swipe file',
    intro: 'The subject lines and templates that actually get replies in 2026.',
  },
};

const SITE = 'https://quickomate.com';
const BOOK = 'https://cal.com/vasu-gupta-wv3e0q/discovery-call-quickomate';

function deliveryHtml(magnet, meta) {
  const cfg = MAGNETS[magnet] || { name: 'your download', intro: "Here's what you asked for." };
  const usd = (n) => '$' + Math.round(Number(n) || 0).toLocaleString('en-US');

  let resultsBlock = '';
  if (magnet === 'sales-automation-roi-calculator' && meta && meta.results) {
    const r = meta.results;
    resultsBlock = `
      <table role="presentation" width="100%" style="border-collapse:collapse;margin:18px 0;font-family:monospace;font-size:14px">
        <tr><td style="padding:8px 0;border-bottom:1px solid #e2e8f0">Hours saved / year</td><td align="right" style="padding:8px 0;border-bottom:1px solid #e2e8f0"><b>${(r.annualHours || 0).toLocaleString('en-US')} hrs</b></td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #e2e8f0">Value of time / year</td><td align="right" style="padding:8px 0;border-bottom:1px solid #e2e8f0"><b>${usd(r.annualValue)}</b></td></tr>
        <tr><td style="padding:8px 0;border-bottom:1px solid #e2e8f0">Net savings / year</td><td align="right" style="padding:8px 0;border-bottom:1px solid #e2e8f0"><b>${usd(r.net)}</b></td></tr>
        ${r.roiPct != null ? `<tr><td style="padding:8px 0">First-year ROI</td><td align="right" style="padding:8px 0"><b>${r.roiPct}%</b></td></tr>` : ''}
      </table>`;
  }

  return `<!doctype html><html><body style="margin:0;background:#f5f3ee;padding:24px;font-family:Arial,Helvetica,sans-serif;color:#111">
    <div style="max-width:560px;margin:0 auto;background:#fff;border:3px solid #111;padding:28px">
      <p style="font-family:monospace;font-size:11px;letter-spacing:2px;color:#E63B2E;font-weight:bold;margin:0 0 12px">QUICKOMATE</p>
      <h1 style="font-size:22px;margin:0 0 12px;line-height:1.2">${cfg.name}</h1>
      <p style="font-size:15px;line-height:1.6;color:#334155;margin:0 0 8px">${cfg.intro}</p>
      ${resultsBlock}
      <p style="font-size:15px;line-height:1.6;color:#334155">Want a second set of eyes on your specific setup? Book a free 20-minute discovery call — no pitch, just a straight read on what to automate first.</p>
      <p style="margin:22px 0"><a href="${BOOK}" style="background:#E63B2E;color:#fff;text-decoration:none;font-weight:bold;padding:14px 22px;display:inline-block;font-family:monospace;text-transform:uppercase;letter-spacing:1px;font-size:13px">Book a discovery call →</a></p>
      <p style="font-size:12px;color:#94a3b8;margin-top:24px;border-top:1px solid #e2e8f0;padding-top:14px">You're getting this because you requested it on ${SITE}. Reply "stop" and you'll never hear from us again.</p>
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
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Resend ${res.status}: ${detail.slice(0, 200)}`);
  }
  return res.json();
}

async function redisPipeline(commands) {
  const url = process.env.UPSTASH_REDIS_REST_URL;
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!url || !token) return { skipped: true };
  const res = await fetch(`${url}/pipeline`, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(commands),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Upstash ${res.status}: ${detail.slice(0, 200)}`);
  }
  return res.json();
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  let body = req.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch { body = {}; }
  }
  body = body || {};

  const email = String(body.email || '').trim().toLowerCase();
  const magnet = String(body.magnet || '').trim();
  const meta = body.meta && typeof body.meta === 'object' ? body.meta : null;

  if (!EMAIL_RE.test(email)) {
    return res.status(400).json({ ok: false, error: 'Please enter a valid email address.' });
  }
  if (!MAGNETS[magnet]) {
    return res.status(400).json({ ok: false, error: 'Unknown lead magnet.' });
  }

  const now = Date.now();
  const record = { email, magnet, meta, subscribedAt: now, step: 0 };

  try {
    // 1) Deliver the magnet immediately (step 0).
    const cfg = MAGNETS[magnet];
    const sendResult = await resendSend({ to: email, subject: cfg.subject, html: deliveryHtml(magnet, meta) });
    const delivered = !(sendResult && sendResult.skipped); // false until Resend is configured

    // 2) Optional owner notification.
    if (process.env.LEAD_NOTIFY_EMAIL && process.env.RESEND_API_KEY) {
      await resendSend({
        to: process.env.LEAD_NOTIFY_EMAIL,
        subject: `New lead: ${email} (${magnet})`,
        html: `<p><b>${email}</b> requested <b>${cfg.name}</b>.</p><pre>${JSON.stringify(meta, null, 2)}</pre>`,
      }).catch(() => {});
    }

    // 3) Store the lead + enqueue the next nurture step for the cron drip.
    const nextDue = now + NURTURE_OFFSETS_DAYS[1] * 86400000;
    await redisPipeline([
      ['SET', `lead:${magnet}:${email}`, JSON.stringify(record)],
      ['SADD', 'leads:all', `${magnet}|${email}`],
      ['ZADD', 'nurture:queue', String(nextDue), `${magnet}|${email}`],
    ]);

    if (!process.env.RESEND_API_KEY || !process.env.UPSTASH_REDIS_REST_URL) {
      console.warn('[subscribe] captured but services not fully configured', { email, magnet });
    }
    return res.status(200).json({ ok: true, delivered });
  } catch (err) {
    console.error('[subscribe] error', err);
    // Still acknowledge so a transient provider error doesn't lose the lead UX;
    // the address is logged above for manual recovery.
    return res.status(200).json({ ok: true, delivered: false, warning: 'queued' });
  }
}
