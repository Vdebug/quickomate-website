# Quickomate — SEO + Lead Magnet Execution Progress

_Resumable checkpoint file. Plan: `research/SEO-LEADMAGNET-PLAN.html`. Started 2026-06-04._

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
- [ ] WebSite schema + alternateName "Quickomate" (entity signal)
- [ ] CTR title/meta rewrites: marketing-automation-roi-2026, sales-automation-roi-calculator, ai-automation-examples, cold-email-subject-lines, how-to-find-verified-emails
- [ ] FAQ/AEO: answer surfaced question queries ("how can i verify contact data before sales outreach", "what roi from automating sales data entry")
- [ ] Build + verify + commit

## PHASE 1 — Email infra + Magnet 01 (ROI Calculator)
- [ ] `/api/subscribe` serverless fn (capture → store → Resend deliver)
- [ ] Lead storage (DB provisioning — needs user)
- [ ] Resend integration (needs RESEND_API_KEY + domain DNS — user)
- [ ] EmailCapture form component (brutalist, on-brand)
- [ ] ROI Calculator interactive component
- [ ] Landing page `/sales-automation-roi-calculator` (lead magnet) + prerender + sitemap
- [ ] Homepage capture section
- [ ] Build + verify + commit

## PHASE 2 — Magnets 02–04
- [ ] Cold Email Infrastructure Checklist (asset + landing page)
- [ ] AI Automation Readiness Quiz (component + landing page)
- [ ] B2B Cold Email Swipe File (asset + landing page)
- [ ] Blog post contextual CTA boxes
- [ ] Exit-intent / scroll popup

## PHASE 3 — Nurture sequences
- [ ] `/api/cron/nurture` Vercel Cron drip
- [ ] 3-email sequence per magnet (deliver → value → offer)
- [ ] vercel.json crons config
- [ ] Test end-to-end

## BLOCKERS / NEEDS FROM USER
- Resend account + `RESEND_API_KEY` (+ verify quickomate.com sending domain via DNS)
- DB provisioning choice (Upstash Redis recommended) via Vercel marketplace
- Push approval (commits are autonomous; pushes need OK)
