// Generates a self-contained, light-themed HTML plan from the ranking-research raw JSON.
const fs = require('fs');
const d = JSON.parse(fs.readFileSync(__dirname + '/ranking-research-raw.json', 'utf8'));
const esc = (s) => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const host = (u) => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return u; } };

const pill = (v, kind) => {
  const c = { High: '#16a34a', Medium: '#d97706', Low: '#64748b' }[v] || '#64748b';
  const label = kind === 'impact' ? `${v} impact` : `${v} effort`;
  return `<span class="pill" style="background:${c}1a;color:${c};border:1px solid ${c}55">${label}</span>`;
};
const ownerChip = (o) => {
  const map = {
    'Claude (on-site)': ['#0ea5e9', 'I build it'],
    'Vasu (off-site)': ['#E63B2E', 'You do it'],
    'Both': ['#7c3aed', 'Together'],
  };
  const [c, t] = map[o] || ['#64748b', o];
  return `<span class="chip" style="background:${c};">${t}</span>`;
};

// Onsite implementation status (set by me as I ship)
const ONSITE_STATUS = {
  1: 'shipping', 2: 'shipping', 5: 'shipping',
  7: 'needs-you', 8: 'next', 11: 'partly',
};
const statusBadge = (s) => {
  const map = {
    shipping: ['#16a34a', '● Implementing now'],
    partly: ['#d97706', '◑ Partly done'],
    next: ['#0ea5e9', '○ Next pass'],
    'needs-you': ['#E63B2E', '⊘ Needs your input'],
  };
  const [c, t] = map[s] || ['#64748b', s];
  return `<span class="status" style="color:${c};border-color:${c}55;background:${c}12">${t}</span>`;
};

const must = d.verify.mustDoFirst;
const onsite = must.filter((m) => m.owner === 'Claude (on-site)');
const offsite = must.filter((m) => m.owner !== 'Claude (on-site)');

const rankRows = must.map((m, i) => `
  <tr>
    <td class="num">${i + 1}</td>
    <td>${ownerChip(m.owner)}</td>
    <td class="act">${esc(m.action)}</td>
    <td>${pill(m.impact, 'impact')}</td>
    <td>${pill(m.effort, 'effort')}</td>
  </tr>`).join('');

// Off-site step cards (the "what you need to do" list) — pull richest steps from findings by matching keywords
const findAll = d.research.flatMap((r) => r.findings);
const offsiteCards = offsite.map((m, i) => {
  // try to find a matching finding to grab steps/sources
  const kw = m.action.toLowerCase().split(/[^a-z]+/).filter((w) => w.length > 4).slice(0, 4);
  let best = null, bestScore = 0;
  for (const f of findAll) {
    const hay = (f.tactic + ' ' + f.what).toLowerCase();
    const score = kw.reduce((a, w) => a + (hay.includes(w) ? 1 : 0), 0);
    if (score > bestScore) { bestScore = score; best = f; }
  }
  const steps = best && bestScore >= 2 ? best.steps : [];
  const sources = best && bestScore >= 2 ? best.sources : [];
  return `
  <div class="ocard">
    <div class="ocard-h">
      <span class="onum">${i + 1}</span>
      <div><div class="otitle">${esc(m.action)}</div>
      <div class="ometa">${pill(m.impact, 'impact')} ${pill(m.effort, 'effort')} <span class="muted">${esc(best ? best.cost : '')}</span></div></div>
    </div>
    <div class="owhy">${esc(m.why)}</div>
    ${steps.length ? `<details><summary>How to do it (${steps.length} steps)</summary><ol>${steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol>${sources.length ? `<div class="src">Sources: ${sources.slice(0, 4).map((u) => `<a href="${esc(u)}" target="_blank">${esc(host(u))}</a>`).join(' · ')}</div>` : ''}</details>` : ''}
  </div>`;
}).join('');

const skipRows = d.verify.outdatedOrWrong.map((o) => `
  <div class="skip">
    <div class="skip-t">✗ ${esc(o.tactic.length > 90 ? o.tactic.slice(0, 90) + '…' : o.tactic)}</div>
    <div class="skip-p"><b>Why it's wrong:</b> ${esc(o.problem)}</div>
    <div class="skip-c"><b>Do instead:</b> ${esc(o.correction)}</div>
  </div>`).join('');

const missingList = d.verify.missing.map((m) => `<li>${esc(m)}</li>`).join('');

const dimSections = d.research.map((r) => `
  <details class="dim">
    <summary><b>${esc(r.dimension)}</b> <span class="muted">(${r.findings.length})</span></summary>
    <p class="dsum">${esc(r.summary)}</p>
    ${r.findings.map((f) => `
      <div class="finding">
        <div class="f-h">${ownerChip(f.owner)} <b>${esc(f.tactic)}</b> ${pill(f.impact, 'impact')} ${pill(f.effort, 'effort')} <span class="muted">${esc(f.cost)}</span></div>
        <div class="f-what">${esc(f.what)}</div>
        <div class="f-why"><b>Why it works:</b> ${esc(f.whyItWorks)}</div>
        ${f.steps && f.steps.length ? `<details><summary>Steps</summary><ol>${f.steps.map((s) => `<li>${esc(s)}</li>`).join('')}</ol></details>` : ''}
        ${f.sources && f.sources.length ? `<div class="src">${f.sources.slice(0, 5).map((u) => `<a href="${esc(u)}" target="_blank">${esc(host(u))}</a>`).join(' · ')}</div>` : ''}
        ${f.risk && f.risk !== 'Low' ? `<div class="risk">⚠ ${esc(f.risk)}</div>` : ''}
      </div>`).join('')}
  </details>`).join('');

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Quickomate — Brand SERP & Authority Plan</title>
<style>
  :root{--ink:#1e293b;--mut:#64748b;--line:#e2e8f0;--accent:#E63B2E;--bg:#f8fafc;--card:#fff}
  *{box-sizing:border-box}
  body{margin:0;font:15px/1.55 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;color:var(--ink);background:var(--bg)}
  .wrap{max-width:1060px;margin:0 auto;padding:32px 22px 80px}
  h1{font-size:30px;margin:0 0 4px;letter-spacing:-.5px}
  h2{font-size:21px;margin:40px 0 14px;letter-spacing:-.3px;border-bottom:2px solid var(--line);padding-bottom:7px}
  .sub{color:var(--mut);margin:0 0 22px;font-size:14px}
  .verdict{background:linear-gradient(135deg,#fff,#fff7f6);border:1px solid #f1c9c4;border-left:5px solid var(--accent);border-radius:12px;padding:18px 20px;margin:18px 0}
  .verdict b{color:var(--accent)}
  .grid2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
  @media(max-width:760px){.grid2{grid-template-columns:1fr}}
  .card{background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px 18px}
  .prob{border-top:4px solid var(--accent)}
  .prob h3{margin:0 0 6px;font-size:15px}
  .serp{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:12.5px;background:#0f172a;color:#e2e8f0;border-radius:8px;padding:12px 14px;margin-top:10px;line-height:1.5}
  .serp .hl{color:#fca5a5;font-weight:700}
  .serp .ok{color:#86efac}
  table{width:100%;border-collapse:collapse;background:#fff;border:1px solid var(--line);border-radius:12px;overflow:hidden;font-size:13.5px}
  th{background:#f1f5f9;text-align:left;padding:9px 11px;font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--mut)}
  td{padding:9px 11px;border-top:1px solid var(--line);vertical-align:middle}
  td.num{font-weight:800;color:var(--accent);width:26px;text-align:center}
  td.act{font-weight:500}
  .pill{display:inline-block;font-size:10.5px;font-weight:700;padding:1px 7px;border-radius:20px;white-space:nowrap}
  .chip{display:inline-block;font-size:10.5px;font-weight:700;color:#fff;padding:2px 8px;border-radius:6px;white-space:nowrap}
  .status{display:inline-block;font-size:11px;font-weight:700;padding:2px 9px;border-radius:20px;border:1px solid}
  .ocard{background:#fff;border:1px solid var(--line);border-radius:11px;padding:14px 16px;margin-bottom:11px}
  .ocard-h{display:flex;gap:11px;align-items:flex-start}
  .onum{flex:none;width:24px;height:24px;border-radius:50%;background:var(--accent);color:#fff;font-weight:800;font-size:13px;display:grid;place-items:center;margin-top:2px}
  .otitle{font-weight:650;font-size:14.5px}
  .ometa{margin-top:4px}
  .owhy{color:#475569;font-size:13px;margin:9px 0 4px;padding-left:35px}
  details{margin:6px 0}summary{cursor:pointer;font-weight:600;font-size:13px;color:#334155}
  .ocard ol,.finding ol{margin:8px 0 4px 18px;padding:0;font-size:12.5px;color:#475569}
  .ocard li,.finding li{margin:3px 0}
  .src{font-size:11px;color:var(--mut);margin-top:6px}.src a{color:#0ea5e9;text-decoration:none}
  .muted{color:var(--mut);font-size:12px}
  .skip{background:#fff;border:1px solid var(--line);border-left:4px solid #94a3b8;border-radius:9px;padding:12px 15px;margin-bottom:10px}
  .skip-t{font-weight:700;color:#475569;margin-bottom:5px}
  .skip-p,.skip-c{font-size:12.5px;color:#475569;margin-top:3px}
  .skip-c{color:#166534}
  .dim{background:#fff;border:1px solid var(--line);border-radius:10px;padding:8px 14px;margin-bottom:9px}
  .dim>summary{font-size:14px;color:#0f172a}
  .dsum{font-size:13px;color:#475569;background:#f8fafc;border-radius:7px;padding:10px 12px}
  .finding{border-top:1px solid var(--line);padding:11px 0}
  .f-h{display:flex;gap:7px;align-items:center;flex-wrap:wrap;font-size:13.5px}
  .f-what{font-size:13px;color:#334155;margin:6px 0}
  .f-why{font-size:12.5px;color:#475569}
  .risk{font-size:12px;color:#b45309;background:#fffbeb;border-radius:6px;padding:5px 9px;margin-top:6px}
  .legend{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0 0}
  .foot{margin-top:34px;color:var(--mut);font-size:12px;border-top:1px solid var(--line);padding-top:14px}
  .kpi{display:flex;gap:10px;flex-wrap:wrap;margin:14px 0}
  .kpi .k{flex:1;min-width:150px;background:#fff;border:1px solid var(--line);border-radius:10px;padding:12px 14px}
  .kpi .kn{font-size:22px;font-weight:800;color:var(--accent)}
  .kpi .kl{font-size:12px;color:var(--mut)}
</style></head><body><div class="wrap">

<h1>Brand SERP &amp; Authority Growth Plan</h1>
<p class="sub">Quickomate · US market · generated from 6 web-grounded research agents + an adversarial reality-check (136 searches). Lead with the verdict, act on the priority board, full findings collapsed at the bottom.</p>

<div class="verdict">
  <b>The honest verdict.</b> You have two real, confirmed problems — and neither is fixed by "more content." (1) <b>Google autocorrects "quickomate" → "quickmate"</b> and shows 9 unrelated companies; your site is hidden behind a "search instead" link. (2) <b>Authority deficit</b> — your keywords sit on pages 4–9 with impressions but no clicks. Both come down to <b>brand-entity signals + genuine backlinks + branded-search demand</b>, which compound over <b>weeks-to-months, not days</b>. Realistic 90-day win: <b>the autocorrect starts breaking, +5–15 genuine referring domains, and first ChatGPT/Perplexity citations</b> — not page-1 commercial rankings. The fastest wins are the on-site entity/disambiguation fixes (I'm shipping those now) + Bing indexation + a LinkedIn Company Page.</p>
</div>

<div class="kpi">
  <div class="k"><div class="kn">quickmate</div><div class="kl">what Google shows instead of your brand</div></div>
  <div class="k"><div class="kn">pos 38.9</div><div class="kl">avg position · 57 clicks / 1.4k impr (3mo)</div></div>
  <div class="k"><div class="kn">2 → 12+</div><div class="kl">profiles in your entity sameAs (now → target)</div></div>
  <div class="k"><div class="kn">~3</div><div class="kl">pages indexed in Bing (of 48) — AI-search blind spot</div></div>
</div>

<h2>The brand-SERP problem, exactly as Google sees it</h2>
<div class="grid2">
  <div class="card prob"><h3>① Brand-entity / autocorrect</h3>
   <p class="muted" style="margin:0">Live SERP for <b>quickomate</b>:</p>
   <div class="serp"><span class="hl">These are results for quickmate</span><br>Search instead for quickomate<br><br>· quickmate.in · Quickmate (Play Store app)<br>· quickmate.io · Quickmate (App Store)<br>· Quickmate on LinkedIn / Instagram<br>· "QuickMate" AI tool<br><br><span class="ok">quickomate.com → not on page 1</span></div>
   <p class="muted" style="margin-top:9px">Google has near-zero signal that "quickomate" is a real, intentional word, so it "corrects" to the common one. Fix = build a recognized entity + real branded-search demand.</p>
  </div>
  <div class="card prob"><h3>② Authority deficit (GSC)</h3>
   <table style="font-size:12.5px"><tr><th>Query</th><th>Impr</th><th>Pos</th></tr>
   <tr><td>marketing automation roi</td><td>79</td><td>70</td></tr>
   <tr><td>b2b email subject lines</td><td>51</td><td>85</td></tr>
   <tr><td>ai automation examples</td><td>44</td><td>43</td></tr>
   <tr><td>ai automation agency</td><td>34</td><td>82</td></tr>
   <tr><td>quickomate.com</td><td>51</td><td class="ok">1.0</td></tr></table>
   <p class="muted" style="margin-top:9px">Impressions exist, clicks don't — everything's on pages 4–9. Striking-distance inventory is thin, so this is a <b>links</b> problem, not an on-page nudge.</p>
  </div>
</div>

<h2>Priority board — do these first (ranked)</h2>
<div class="legend">${ownerChip('Claude (on-site)')} I implement in the codebase &nbsp; ${ownerChip('Vasu (off-site)')} you do manually &nbsp; ${ownerChip('Both')} I prep, you finish</div>
<table style="margin-top:10px"><thead><tr><th>#</th><th>Owner</th><th>Action</th><th>Impact</th><th>Effort</th></tr></thead><tbody>${rankRows}</tbody></table>

<h2>① What I'm implementing on-site now ${statusBadge('shipping')}</h2>
<div class="card">
  <p style="margin:0 0 10px">These are fully in my control and ship in the codebase. No action needed from you.</p>
  <ul style="margin:0;padding-left:20px;font-size:13.5px">
    <li><b>Entity &amp; disambiguation schema</b> — add a <code>brand</code> node, <code>legalName</code>, <code>foundingDate</code>, <code>areaServed: US</code>, <code>slogan</code>, and a <code>disambiguatingDescription</code> ("Quickomate is a US B2B AI automation agency… unrelated to Quickmate"); make <code>sameAs</code> append-only. ${statusBadge('shipping')}</li>
    <li><b>"Quickomate (with an O), not Quickmate" disambiguation</b> — a crawlable line in the hero/About + an FAQ Q&amp;A mirrored into FAQ schema, with the brand token dense in title/H1/first paragraph. ${statusBadge('shipping')}</li>
    <li><b>Internal-link sculpting</b> — surface the 3 service money pages in the nav + contextual links up from blog spokes (varied anchors) so authority stops pooling on the homepage. ${statusBadge('shipping')}</li>
    <li><b>"Embed this" snippets + /tools hub + WebApplication schema</b> on the ROI calculator &amp; quiz to harvest passive links. ${statusBadge('next')}</li>
    <li><b>AI-Overview-citable formatting</b> on the ~10 impression-earning posts (answer capsules + cited stats + FAQ). ${statusBadge('partly')}</li>
    <li><b>Original-data benchmark page</b> (<code>/resources/cold-email-benchmarks-2026</code>) — biggest passive link magnet. ${statusBadge('needs-you')} <span class="muted">needs your real reply/deliverability numbers — I won't fabricate stats.</span></li>
  </ul>
</div>

<h2>② What you need to do off-site (the part only you can)</h2>
<p class="sub" style="margin-top:-6px">Ranked by leverage. Each has the why + collapsed step-by-step. This is the half that actually builds authority — links and brand demand can't be coded.</p>
${offsiteCards}

<h2>Skip these — verified myths &amp; traps</h2>
<p class="sub" style="margin-top:-6px">The reality-check agent fact-checked every tactic. These were proposed but are wrong/dead/risky in 2026 — don't waste time or money on them.</p>
${skipRows}

<h2>How we'll know it's working (free weekly checks)</h2>
<div class="card"><ul style="margin:0;padding-left:20px;font-size:13.5px">
${missingList}
</ul></div>

<h2>Full research — all 60 findings by dimension</h2>
<p class="sub" style="margin-top:-6px">Collapsed to keep this skimmable. Expand any dimension for the complete tactic list with steps + sources.</p>
${dimSections}

<div class="foot">Generated for Quickomate · 6 research agents + adversarial verification · all tactics web-confirmed current for 2026 · raw data: research/ranking-research-raw.json</div>
</div></body></html>`;

fs.writeFileSync(__dirname + '/RANKING-AUTHORITY-PLAN.html', html);
console.log('wrote research/RANKING-AUTHORITY-PLAN.html (' + html.length + ' bytes)');
console.log('onsite must-do:', onsite.length, '| offsite must-do:', offsite.length);
