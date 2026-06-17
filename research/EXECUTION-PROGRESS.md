# Quickomate — SEO + Lead Magnet Execution Progress

_Resumable checkpoint file. Plan: `research/SEO-LEADMAGNET-PLAN.html`. Started 2026-06-04._

## 🚀 SHIPPED TO PRODUCTION — 2026-06-04 (commit 772bb47, pushed → Vercel Ready)
Live on quickomate.com & verified: entity schema, all 4 lead magnets + homepage toolkit,
**Microsoft Clarity (id x1q9yo84hf) recording**, and **route code-splitting (888KB→234KB main bundle)**.
- Speed reality: the Vercel "30 / 24s FCP" panel was a **7-visit sample artifact** (impossible 17s TTFB on CDN-served static HTML). Real fix shipped = the bundle split + modulepreload. Re-check Speed Insights in ~1 week once real data replaces the sample.
- STILL the only blocker for lead-magnet email: **Resend + Upstash** (forms now degrade honestly — "you're on the list" — until then).
- Follow-up cleanup: duplicate Organization/WebSite schema (one set in index.html, one in App.jsx Helmet) — harmless, de-dup later.

## 🔎 SEO / AI-SEO PROGRAM (user opted into all 4, 2026-06-04)
- [x] **#2 Book-a-call CTA on every blog post** — shipped (commit 16adfb1) via shared `BlogPostLayout` (Outlet + BookCallCTA). All ~40 posts now have a booking path; /blog index excluded. (4 magnet posts have 2 CTAs — mid + bottom — acceptable.)
- [x] **#1 FAQ schema + AEO blitz** — DONE (commit c284bdb + 845e2d3). Posts already had quality FAQ *schema* (42 blocks); built `FAQSection` that reads the page's FAQPage JSON-LD and renders it as a VISIBLE accordion on every post (single source of truth). Now AI-citable + matches schema.
- [x] **#3 New low-KD posts** — DONE (commit 845e2d3). 3 full posts: what-business-processes-to-automate (KD7), ai-sales-prospecting, ai-agent-workflow-automation. Each: leaf + route + Helmet/BlogPosting/breadcrumb/FAQPage schema + auto FAQ/CTA. 48 routes total, in sitemap.
- [x] **#4 Answer-first + internal linking** — covered: every post now leads sections answer-first + has the FAQ block + existing "Related reading" internal links + booking CTA.
- [x] **Placement fix** — replaced BlogPostLayout (rendered FAQ/CTA after footer) with BlogPostFooter injected inside each post's `<main>` → FAQ + CTA now before the footer on all 38 posts.

### SEO PROGRAM COMPLETE. Site funnel = free content/tools (SEO+AEO) → Book-a-call. Remaining = OFF-SITE authority (user: backlinks/Clutch/G2/Product Hunt/LinkedIn) + email later (Resend/Upstash).

## Decisions (locked)
- **Magnets to build (in order):** 1) Sales Automation ROI Calculator, 2) Cold Email Infrastructure Checklist, 3) AI Automation Readiness Quiz, 4) B2B Cold Email Swipe File.
- **Email infra:** Resend (delivery) + Vercel Cron (nurture drip) — fully owned. Storage TBD (Upstash Redis or Neon via Vercel marketplace).
- **Bing URL submission:** DONE this session.

## Baseline (live data, 2026-06-04)
- GSC: 54 clicks / 1,350 impr / pos 38.4 / 41 indexed / 172 queries. All clicks → homepage (brand). Posts rank pg 4–7.
- Bing: 3 indexed, 0 clicks, 0 AI citations. (sitemap + 45 URLs resubmitted today)
- No email capture anywhere — only cal.com booking.

---

## PHASE 0 — SEO/AEO quick wins (code, no external deps)
- [x] Bing: submit 45 URLs + resubmit sitemap (browser) — DONE 15:27
- [x] WebSite + Organization schema, graph-linked to founder (commit bfa04f1) — verified in dist
- [ ] CTR title/meta rewrites — DEPRIORITIZED (low value at pos 36-66; revisit once authority lifts positions)
- [ ] FAQ/AEO: answer surfaced question queries ("how can i verify contact data before sales outreach", "what roi from automating sales data entry")
- [x] Build + verify + commit

## PHASE 1 — Email infra + Magnet 01 (ROI Calculator)
- [x] `/api/subscribe` Node fn (capture → Resend deliver → Upstash store/enqueue, graceful no-op w/o keys) — commit 31f4d73
- [x] EmailCapture form component (brutalist, on-brand)
- [x] ROI Calculator interactive component — embedded in ranking post, math verified in browser (811 hrs, $36,504, 103% ROI)
- [x] Reused the existing ranking URL /blog/sales-automation-roi-calculator (no new page — keeps 190 impr)
- [ ] **BLOCKED:** Resend (RESEND_API_KEY + verify domain DNS) + Upstash (Vercel marketplace) — needs user
- [ ] Homepage capture section
- [ ] Push (needs user approval)

## PHASE 2 — Magnets 02–04 + homepage  (commit 6e6726e)
- [x] Cold Email Infrastructure Checklist (interactive) — embedded in /blog/cold-email-infrastructure-how-many-domains-inboxes
- [x] AI Automation Readiness Quiz (7-Q, scored, routes to service) — embedded in /blog/how-to-know-if-your-business-needs-ai-automation, verified interactive
- [x] B2B Cold Email Swipe File (teaser + gated pack) — embedded in /blog/cold-email-subject-lines-that-get-b2b-replies
- [x] Homepage "free toolkit" section (LeadMagnetSection) — 4 cards + swipe-file capture, before CTA
- [x] Build verified (45/45 prerender); calculator + quiz tested live in browser
- [ ] Other blog posts → contextual CTA boxes linking the relevant magnet (not yet)
- [ ] Exit-intent / scroll popup (not yet)
- [ ] Polished downloadable assets (PDF checklist, swipe-file doc, ROI report) — delivery email currently sends templated HTML, not a PDF

## PHASE 3 — Nurture sequences  (commit 789db02, deployed)
- [x] `/api/cron/nurture` Vercel Cron drip — built, no-ops until Resend+Upstash
- [x] 3-email sequence (step 0 deliver = subscribe.js; steps 1 value + 2 offer = cron)
- [x] vercel.json crons config (daily 14:00 UTC) — registered on Vercel
- [ ] End-to-end test — pending Resend + Upstash connection

## STRATEGY NOTE (2026-06-04): gate vs free content
Keep the email capture — it's the only way to collect *contactable* leads (Clarity = anonymous behavior only).
Already a hybrid: tools/content free on-page (SEO/trust/AI-cited), email gates only the bonus (90/10 rule).
Upstash = data collection (worth connecting now, free), Resend = delivery (later). Both env-gated.
Optional next: richer deliverable content (emails or on-site pages) + exit-intent popup + a real case-study page (needs client data).

## BLOCKERS / NEEDS FROM USER
- Resend account + `RESEND_API_KEY` (+ verify quickomate.com sending domain via DNS)
- DB provisioning choice (Upstash Redis recommended) via Vercel marketplace
- Push approval (commits are autonomous; pushes need OK)

---

## PHASE 4 — Brand-SERP domination + authority (2026-06-06)
Trigger: brand "quickomate" autocorrects to "quickmate" on Google; money keywords stuck pp.4-9.
Research: 6-agent web-grounded workflow + adversarial verify → research/RANKING-AUTHORITY-PLAN.html (+ ranking-research-raw.json).

### Shipped on-site (commit 7bd0c15, deployed)
- [x] Org schema: brand node, alternateName variants, areaServed US, slogan, disambiguatingDescription ("not Quickmate"); SAME_AS append-only.
- [x] Homepage FAQPage: "Is Quickomate the same as Quickmate?" Q&A.
- [x] AboutUs: visible crawlable "Quickomate (with an O), not Quickmate" line.
- [x] Features/Services: crawlable internal links → /ai-automation-agency, /cold-email-agency, /b2b-lead-generation-agency (was footer-only).

### Search-engine actions (browser, Vasu profile)
- [x] Bing: resubmitted sitemap.xml (was stale @28 URLs, last crawl 6/4) → Processing; bulk-submitted all 48 URLs (quota 100/day).
- [x] Google GSC: requested indexing — homepage (recrawl for new schema) + the 3 service money pages.
- [!] CRITICAL FINDING: all 3 money pages (/ai-automation-agency, /cold-email-agency, /b2b-lead-generation-agency) were "Discovered – currently not indexed", Last crawl N/A — Google had NEVER crawled them. Now in priority crawl queue + now have inbound internal links.

### Remaining
- [ ] #8 on-site: /tools (or /resources) hub + WebApplication schema on ROI calculator + quiz + "embed this" attribution snippet (passive link magnet). CLAUDE can do.
- [ ] #11 on-site: AI-Overview answer-capsule formatting on ~10 impression-earning posts (partly done via answer-first). CLAUDE can do.
- [ ] #7: /resources/cold-email-benchmarks-2026 original-data page — BLOCKED on Vasu's real reply/deliverability numbers (do not fabricate).
- [ ] OFF-SITE (Vasu): LinkedIn Company Page → send URL for SAME_AS; journalist stack (Source of Sources/Featured/Help-a-B2B-Writer) 3-5/wk; free citations (Crunchbase/SaaSHub/AlternativeTo/GitHub org/Indie Hackers); founder Reddit; "search Quickomate on Google" CTAs.
- SKIP (verified): GBP/Bing Places/Apple (ineligible), paid AI dirs, llms.txt tuning, paid retargeting, Crunchbase-as-link.

---

## PHASE 5 — Live-data audit + measurement layer + internal linking (2026-06-17, commit ec18d4f)
Pulled live GSC + Bing + Clarity (via Claude-in-Chrome, Vasu profile). Full diagnosis: research/MARKETING-GROWTH-PLAN.html.

### Fresh baseline (2026-06-17, was 2026-06-04)
- **GSC (3mo):** 77 clicks (was 54), 3.47k impr (was 1.35k, +157%), CTR 2.2%, avg pos 34.1 (was 38.4). 49 indexed (was 41), 375 queries (was 172). "Discovered-not-indexed" now 0 (money pages crawled). 5 non-indexed all benign (canonicals/redirects).
- **The core problem:** content earns big impressions but sits page 3-6 → ~0 clicks. Homepage pos 3.0 but 52 of 77 clicks are "quickmate.com" brand-confusion (not qualified). Striking-distance pages (pos 11-30): ai-agent-workflow-automation (672 impr @ 25.3), b2b-sales-automation-2026 (202 @ 22.5), ai-sales-prospecting (126 @ 19.6). Far pages (pos 36-57): sales-roi-calc (56.9), what-processes (52.6), ai-automation-examples (49.3), generative-ai (49.7), mktg-roi (36.1).
- **Bing:** 0 clicks, 0 impr, 0 AI citations (Copilot). Non-factor; needs off-site authority. No technical issues flagged.
- **Clarity (90d):** 96 sessions, 80 users, 1.52 pp/session, 59s active, 32% scroll. NO UX red flags (0% rage, 2% dead clicks, 0% excessive scroll). Channels: Other 37, OrganicSearch 28, Referral 18, **AIPlatform 10**, Direct 9. Outbound clicks (booking proxy): 9. Funnels: not set up. Verdict: traffic volume is the bottleneck, not UX.

### Shipped (commit ec18d4f)
- [x] **GA4 + conversion tracking** (was Clarity-only, zero attribution). analytics.js: env-gated GA4 (VITE_GA_ID), SPA page_view on route change, ONE delegated listener fires book_call_click for every cal.com link site-wide. New /booking-confirmed (noindex) fires book_call_confirmed conversion — the cal.com "redirect on booking" target → real appointments measurable.
- [x] **Internal-link sculpting.** getRelatedPosts() → shared-tag relevance + priority boost; BlogPostFooter renders crawlable "Related guides" on all 40 posts. Orphans fixed: ai-agent-workflow-automation 0→8, b2b-sales-automation-2026 0→9, ai-sales-prospecting 3→12 inbound links.

### BLOCKERS / MANUAL (Vasu)
- [ ] **Create GA4 property** → add `VITE_GA_ID=G-XXXX` to Vercel env (Production) → redeploy. Mark book_call_confirmed + book_call_click as Key Events in GA4.
- [ ] **cal.com:** event type → Advanced → Redirect on booking → https://quickomate.com/booking-confirmed (activates real appointment tracking).
- [ ] **Push** commit ec18d4f to prod (needs approval; gh active acct = Vdebug).
- [ ] **Off-site content** (publish, drafts in MARKETING-GROWTH-PLAN.html): LinkedIn 2x/wk, journalist answers 3-5/wk, Reddit, listicle pitches.

### GA4 ACTIVATED + VERIFIED LIVE (2026-06-17, commits 8e3f44f, bd35333)
- Created GA4 property "Quickomate" (id 542051976) → stream "Quickomate Web" (quickomate.com), **Measurement ID G-50HX9YWEYH** (hardcoded default in analytics.js, public/safe; overridable via VITE_GA_ID). Objectives: Generate leads + Understand web traffic. Enhanced Measurement ON (owns pageviews + outbound clicks).
- **BUG FOUND + FIXED:** prerenderer bakes the gtag.js <script id="ga4-tag"> into static HTML → initGA's `getElementById('ga4-tag')` idempotency guard returned early on real loads, skipping `gtag('config')` → tag loaded but never configured, zero data. Fixed by guarding on runtime flag `window.__qkmGAInit` instead; only the script injection is skipped when baked. (Clarity unaffected — its tag isn't baked + self-inits from URL.) **Lesson: any prerender-baked analytics tag must guard config on a runtime flag, not a DOM node.**
- Verified END-TO-END on live site: window.gtag=function, dataLayer has ["config","G-50HX9YWEYH"], collect beacon 204, **GA4 Realtime showed 1 user / 2 page_views**. ✅

### REMAINING MANUAL (Vasu)
- [ ] **cal.com:** discovery-call event → Advanced → "Redirect on booking" → https://quickomate.com/booking-confirmed (activates book_call_confirmed conversion = real appointments).
- [ ] **GA4 key events:** once book_call_click + book_call_confirmed first fire, star them in GA4 → Admin → Events as key events (can't pre-create by name in this GA4 version).
