# Quickomate — SEO + Lead Magnet Execution Progress

_Resumable checkpoint file. Plan: `research/SEO-LEADMAGNET-PLAN.html`. Started 2026-06-04._

## 🚀 SHIPPED TO PRODUCTION — 2026-06-04 (commit 772bb47, pushed → Vercel Ready)
Live on quickomate.com & verified: entity schema, all 4 lead magnets + homepage toolkit,
**Microsoft Clarity (id x1q9yo84hf) recording**, and **route code-splitting (888KB→234KB main bundle)**.
- Speed reality: the Vercel "30 / 24s FCP" panel was a **7-visit sample artifact** (impossible 17s TTFB on CDN-served static HTML). Real fix shipped = the bundle split + modulepreload. Re-check Speed Insights in ~1 week once real data replaces the sample.
- STILL the only blocker for lead-magnet email: **Resend + Upstash** (forms now degrade honestly — "you're on the list" — until then).
- Follow-up cleanup: duplicate Organization/WebSite schema (one set in index.html, one in App.jsx Helmet) — harmless, de-dup later.

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

## PHASE 3 — Nurture sequences
- [ ] `/api/cron/nurture` Vercel Cron drip
- [ ] 3-email sequence per magnet (deliver → value → offer)
- [ ] vercel.json crons config
- [ ] Test end-to-end

## BLOCKERS / NEEDS FROM USER
- Resend account + `RESEND_API_KEY` (+ verify quickomate.com sending domain via DNS)
- DB provisioning choice (Upstash Redis recommended) via Vercel marketplace
- Push approval (commits are autonomous; pushes need OK)
