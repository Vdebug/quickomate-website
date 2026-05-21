# Agent 5 — Backlink Intelligence + On-Page / E-E-A-T / Technical Audit
**Target:** quickomate.com · **Date:** 2026-05-22 · Brand: Quickomate (AI automation / B2B growth, founder Vasu Gupta)

---

## PART A — BACKLINK INTELLIGENCE

### A.1 Baseline (Semrush `backlinks_overview`, root_domain)

| Domain | Authority Score | Total backlinks | Ref. domains | Ref. URLs | Follow links |
|---|---|---|---|---|---|
| **quickomate.com (us)** | **2** | **27** | **17** | **28** | **5** |
| relevanceai.com | 43 | 364,181 | 5,031 | 353,413 | 342,021 |
| lindy.ai | 47 | 79,075 | 7,079 | 61,688 | 50,983 |
| gumloop.com | 45 | 59,323 | 3,549 | 50,012 | 24,319 |

**Read:** We are at a true cold start. AS 2, only 17 referring domains, and our current refdomains are spam/auto-generated junk (`n8nworkflows.xyz`, `buzzshrink.website`, `optimizeflow.top`, `byteshort.xyz`, `analyticshaven.top` — all AS 2-5). Effectively **zero authoritative links today.** Competitors sit at AS 43-47 with 3,500-7,000 referring domains. The realistic 12-month goal is not to match them but to (a) clean the link profile signal, and (b) land 30-60 *genuine, topically-relevant* referring domains, which at our size moves AS materially.

CSVs saved: `research/backlinks_quickomate.com.csv`, `backlinks_lindy.ai.csv`, `backlinks_gumloop.com.csv`, `backlinks_relevanceai.com.csv`.

### A.2 What competitors' referring domains tell us
The competitor refdomain lists are dominated by **AI-tool directories and roundups** — the single most repeatable, get-able link type in this category. Domains appearing across MULTIPLE competitors (the highest-confidence targets):

- **topai.tools** (AS 39) — appears for all three competitors
- **aitoolnet.com** (AS 13) — all three
- **seektool.ai** (AS 6) — all three
- **eesel.ai** (AS 46), **aitools.love**, **aitoolsspace.com**, **navgood.com**, **toolquestor.com**, **aitinkerers.org** (AS 31), **postmake.io** (AS 23), **saashub.com** (AS 37), **saaspo.com** (AS 30), **toolify.ai** (AS 41), **starterstory.com** (AS 39)

Caveat: many high-`backlinks_num` rows are low-AS link farms (AS 2). Chase **authority + topical fit**, not raw link count. Quickomate is an *agency/service*, not a self-serve tool, so some pure "AI tool" directories may reject us — lean toward agency directories, B2B service marketplaces, and editorial roundups.

### A.3 Twelve to fifteen concrete link / mention opportunities

**Directories & marketplaces (fast, high-confidence):**
1. **Clutch.co / DesignRum / The Manifest** — agency directories; reviews here also feed AI answer engines for "best AI automation agency."
2. **saashub.com (AS 37)** and **saaspo.com (AS 30)** — competitor-validated; submit Quickomate as an AI growth service.
3. **topai.tools (AS 39)** + **aitoolnet.com** + **toolify.ai (AS 41)** — list the productized cold-email/lead-gen offer as a "service/tool."
4. **starterstory.com (AS 39)** — pitch a founder story / case study (revenue + system build) — editorial, durable link.
5. **n8n.io community / templates (AS 65)** — relevanceai.com gets links here; publish a public n8n workflow/template that links back. Highest-authority realistic target on the list.
6. **G2 / Capterra / Product Hunt** — service/agency listings; strong brand-SERP + AI-citation signal.

**Editorial / guest / community (slower, higher value):**
7. **Guest posts** on B2B growth blogs (Lemlist blog, Smartlead, Instantly, Clay community) — adjacent tools whose audiences overlap; offer the "realistic 4% reply rate" data angle.
8. **HARO / Featured / Qwoted / SourceBottle** — respond to journalist queries on "AI in sales / cold email deliverability"; founder quotes earn editorial links + E-E-A-T.
9. **r/Emailmarketing, r/sales, r/Entrepreneur, indiehackers.com** — answer threads, link the benchmark posts where genuinely useful (no spam).
10. **Podcast guesting** (B2B sales / GTM podcasts) — show-notes links + named-author authority.
11. **aitinkerers.org (AS 31)** + AI builder communities — share the LLM-agent / automation posts.
12. **Original-data PR**: publish a "2026 Cold Email Benchmark Report" (we already have the numbers) as a linkable asset and pitch it to newsletters (beehiiv lists already link competitors).
13. **Partner / integration pages** (Cal.com, Smartlead, n8n) — request a customer/partner listing.
14. **LinkedIn + X founder presence** → drives brand searches that Google rewards; cross-link the `sameAs` profiles already in schema.
15. **Reclaim the junk profile**: disavow nothing yet (low risk at this size) but stop any prior link-farm activity; future signal should be clean and topical.

---

## PART B — ON-PAGE / E-E-A-T / TECHNICAL AUDIT

**What's already strong (keep):** rich site-wide JSON-LD (Organization, WebSite, ProfessionalService, Person); per-post BlogPosting + Breadcrumb + (17/31) FAQPage + a HowTo; full AI-crawler allowlist in `robots.txt` (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.); clean canonicals; build-time prerender so crawlers get real HTML; sitemap with all 31 routes and lastmod; dynamic OG images; question-style H2s and answer-first/TL;DR blocks in posts; internal "Related Reading" linking. This is already above-average for the niche.

### Prioritized, implementable checklist (ranked by impact)

| # | Fix | Why it helps ranking / AEO | File(s) to change |
|---|---|---|---|
| **1** | **Split the 937 KB single JS bundle.** No `manualChunks` config; everything ships in `dist/assets/index-*.js`. Add `build.rollupOptions.output.manualChunks` (vendor/react/router split) + route-level `React.lazy` for the 29 blog page components. | Core Web Vitals (LCP/INP/TBT) is a ranking factor; a 937 KB blocking bundle hurts mobile especially. Faster pages also get crawled deeper. | `vite.config.js`, `src/App.jsx` (lazy imports) |
| **2** | **Add FAQPage JSON-LD to the 14 posts that lack it** (17/31 have it). Each new AI-automation post especially. | FAQ rich results + direct extraction into AI Overviews / ChatGPT / Perplexity answers. Highest-leverage AEO win we can ship today. | `src/App.jsx` (per-post `<Helmet>`) |
| **3** | **Ship a dedicated `/about` route with deep founder E-E-A-T.** Today the bio lives only in the homepage `AboutUs` section; there is no standalone About page and no `/about` in `getRoutes()`. Add named credentials, concrete numbers (clients, revenue influenced, years), and AboutPage + Person schema. | E-E-A-T "Experience/Authoritativeness" — Google and AI engines look for an authoritative author/entity page; strengthens the whole domain's trust. | new `src/components/About*.jsx`, route in `src/App.jsx`, `scripts/prerender.js` (`getRoutes`), `public/sitemap.xml` |
| **4** | **Strengthen the author bio with hard, verifiable specifics.** Current AboutUs copy ("significant revenue," "battle-tested") is vague. Add: years of experience, named platforms, # systems shipped, a credential/affiliation, link to LinkedIn/X (already in `sameAs`). | First-hand experience + verifiable detail is exactly what helpful-content / E-E-A-T rewards and what LLMs cite as a credible source. | `src/components/AboutUs.jsx`, `PERSON_SCHEMA` in `src/App.jsx` |
| **5** | **Surface "Last updated" visibly + fix dateModified hygiene.** 30 posts carry `dateModified` in JSON-LD but it is invisible to readers, and several posts set `datePublished == dateModified` or omit `article:modified_time`. Render a visible "Updated <date>" near the byline and keep modified dates honest as content is refreshed. | Freshness signal for both Google and AI answer engines; visible dates increase click trust and match the structured data. | blog components (e.g. `BlogAiLeadGen.jsx` header), `src/App.jsx` meta |
| **6** | **Add real `alt` text on meaningful images.** Site-wide there are only 2 `alt` attributes; Hero backgrounds are correctly decorative (`alt=""`), but any content/diagram images need descriptive alt. Founder photo alt is good — replicate that quality everywhere images carry meaning. | Accessibility + image SEO; descriptive alt also feeds multimodal AI crawlers. | `src/components/*` with `<img>` (audit each as images are added) |
| **7** | **Add `Article`/`author` `Person` reference + `mainEntityOfPage` consistency, and reuse `PERSON_SCHEMA` `@id` as the post author.** Posts use an inline `{ "@type":"Person","name":"Vasu Gupta" }` instead of referencing the canonical `${SITE_URL}/#vasu-gupta` Person entity. | Entity consolidation — one strong author entity across all posts beats 31 disconnected name strings for E-E-A-T and knowledge-graph linking. | `src/App.jsx` (BlogPosting `author` blocks) |
| **8** | **Deepen internal linking with descriptive anchors + a hub/cluster structure.** `RelatedReading` exists only in some components (hardcoded per-file map) and isn't on every post; build topic clusters (cold-email hub, AI-automation hub) with keyword-rich anchors. | Distributes authority, helps Google understand topical depth, and gives AI engines clear topic boundaries to cite. | each `Blog*.jsx`, consider a shared `RelatedReading` component |
| **9** | **Add an HTML sitemap / clear nav to all posts + breadcrumb UI.** Breadcrumb JSON-LD exists but there's no visible breadcrumb; BlogIndex lists posts but there's no on-page crawl hub beyond it. | Improves crawl depth and matches BreadcrumbList schema with a visible UI (Google prefers parity). | `src/components/BlogIndex.jsx`, blog headers |
| **10** | **Add `Service`/`Offer` pages or anchored sections with their own canonical + schema** for the core offers (cold-email lead gen, CRM automation, AI agents). Today services live only inside homepage schema. | Lets each commercial term rank on a dedicated, schema-backed URL and gives AI engines a clean entity to recommend for "AI automation agency / cold email agency." | new route(s) in `src/App.jsx`, `prerender.js`, `sitemap.xml` |

**Secondary / lower-effort items:**
- Add `Speakable` schema to FAQ answers for voice/AI-assistant surfacing.
- Add `wordCount` + `articleSection` to ALL BlogPosting blocks (only some have it).
- Confirm `logo.png` referenced in Organization schema actually exists at 512×512 (some posts reference `logo.svg`, others `logo.png` — standardize).
- Add `og:image:alt` and `twitter:image:alt` to the dynamic OG tags.
- Consider an `llms.txt` at site root summarizing offers + key URLs (emerging AEO convention) to complement the robots.txt AI allowlist.
- Add visible review/testimonial content + `AggregateRating`/`Review` schema once real reviews exist (do not fabricate) — directly fuels "best agency" AI answers.
