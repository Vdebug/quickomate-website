import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogColdEmailVsPaidAds() {
    return (
        <div className="min-h-screen bg-background text-textMain pt-32 pb-20 px-6 sm:px-12 md:px-24">
            <div className="max-w-4xl mx-auto">
                <Link to="/blog" className="inline-flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors mb-12">
                    <ArrowLeft size={14} />
                    All Posts
                </Link>

                <header className="mb-16 border-b-4 border-primary pb-8">
                    <div className="flex items-center gap-4 flex-wrap mb-6">
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest flex items-center gap-1">
                            <Clock size={12} /> 8 min read
                        </span>
                        <time dateTime="2026-04-25" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">April 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['Cold Email', 'Paid Ads', 'B2B Marketing'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        Cold Email vs Paid Ads: Which Actually Works for B2B in 2026?
                    </h1>
                </header>

                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Every B2B founder eventually has to pick: pour budget into Meta/LinkedIn/Google ads, or build a cold email engine. We recommend cold email for most B2B companies — but the answer is not universal. It depends on your ICP, your niche, and one thing almost nobody talks about clearly: how the cost structures of these two channels are fundamentally different.
                        </p>
                    </div>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Why Cold Email Is B2B-Only
                        </h2>
                        <p className="mb-4">
                            This is the cleanest line in the sand. Cold email works in B2B and does not work in B2C — full stop. The reason isn't strategy, it's law and data access:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div className="bg-primary p-6 border-4 border-primary">
                                <div className="font-mono text-xs text-accent font-bold uppercase mb-2">B2B</div>
                                <div className="font-sans text-sm text-surface font-bold">Business email is broadly fair game under most outreach laws (with proper opt-out and identification). Huge databases of business contacts can be scraped and enriched legally.</div>
                            </div>
                            <div className="bg-primary p-6 border-4 border-primary">
                                <div className="font-mono text-xs text-accent font-bold uppercase mb-2">B2C</div>
                                <div className="font-sans text-sm text-surface font-bold">Consumer email is locked down by strict opt-in laws (GDPR, CAN-SPAM, CASL). You can't scrape consumer emails. There's no legal cold-email path to a private inbox.</div>
                            </div>
                        </div>
                        <p className="mt-6">
                            If your business sells to consumers — DTC products, B2C services, retail — stop reading. Cold email isn't your channel. Paid ads, content, and creator partnerships are. The rest of this post assumes you sell to other businesses.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Even In B2B, Niche Fit Decides Everything
                        </h2>
                        <p className="mb-4">
                            Cold email assumes one thing: your prospect actually checks their email. That's true for most B2B niches. It's not true for all of them.
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4 mb-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Realtors are the canonical bad-fit example. Small teams, inboxes flooded with spam, and the entire industry runs on phone calls. You'll get replies — but the conversion rate is awful, because that channel isn't where they make decisions. Cold-call them and they'll respond. Cold-email them and you're shouting into a void.
                            </p>
                        </div>
                        <p className="mb-4">
                            The pattern is consistent across niches: <strong>small-team, low-email-reliance industries underperform on cold email.</strong> Higher-tier companies with more employees rely on email every day — that's where your campaigns book meetings. Defining ICP isn't just about industry and title; it's about whether the people in those titles actually live in their inbox.
                        </p>
                        <p className="font-bold text-primary">
                            The first job before launching cold email is answering this honestly: <em>does my ICP read email?</em> If yes, build the engine. If no, recommend cold call (or another channel) and don't waste the money.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Cost Structure Nobody Explains
                        </h2>
                        <p className="mb-4">
                            This is the part most agencies fudge. Cold email and paid ads have fundamentally different cost structures, and once you see it, the channel choice gets a lot clearer.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-xl text-primary uppercase mb-4 border-b-2 border-accent pb-2">Cold Email: Capped Cost</h3>
                                <p className="font-sans text-sm text-primary/80 font-bold mb-4">
                                    The infrastructure has a hard ceiling. To run aggressive cold email at scale you need ~30 mailboxes spread across multiple sending domains.
                                </p>
                                <ul className="space-y-3 font-sans text-sm text-primary/80 font-bold">
                                    <li className="border-l-2 border-accent pl-3">~30 mailboxes (across multiple domains)</li>
                                    <li className="border-l-2 border-accent pl-3">~$500 max even at the 40-50 mailbox tier</li>
                                    <li className="border-l-2 border-accent pl-3">21-day warm-up, then send</li>
                                    <li className="border-l-2 border-accent pl-3">Costs barely move once running</li>
                                </ul>
                                <div className="bg-primary p-4 mt-6 font-mono text-sm text-surface font-bold uppercase">
                                    &gt; CAPPED COST. UNCAPPED RESULTS.
                                </div>
                            </div>

                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-xl text-primary uppercase mb-4 border-b-2 border-accent pb-2">Paid Ads: No Cap</h3>
                                <p className="font-sans text-sm text-primary/80 font-bold mb-4">
                                    Ads are an auction. You're bidding for one prospect's attention against every other business chasing the same person.
                                </p>
                                <ul className="space-y-3 font-sans text-sm text-primary/80 font-bold">
                                    <li className="border-l-2 border-accent pl-3">Per-click / per-impression cost</li>
                                    <li className="border-l-2 border-accent pl-3">Costs rise with competition in your niche</li>
                                    <li className="border-l-2 border-accent pl-3">Spend scales linearly with results</li>
                                    <li className="border-l-2 border-accent pl-3">Pause = pipeline stops</li>
                                </ul>
                                <div className="bg-primary p-4 mt-6 font-mono text-sm text-surface font-bold uppercase">
                                    &gt; UNCAPPED SPEND. AUCTION-DRIVEN.
                                </div>
                            </div>
                        </div>

                        <p className="mt-6">
                            That's the core difference. Cold email's investment is mostly fixed and front-loaded — you pay for infrastructure once, then run it. Paid ads is a variable cost that climbs with your ambition. Neither is "better" in a vacuum — but they reward different kinds of operators.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Both Channels Live On Analytics
                        </h2>
                        <p className="mb-4">
                            One thing that's identical: both channels are won or lost in the analytics layer. There's no "set and forget" version of either.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                            <div className="bg-primary p-6 border-4 border-primary">
                                <div className="font-mono text-xs text-accent font-bold uppercase mb-3">Cold Email Optimization Loop</div>
                                <ul className="space-y-2 font-mono text-xs text-surface font-bold uppercase">
                                    <li>&gt; Open rate by subject line</li>
                                    <li>&gt; Reply rate by hook / opener</li>
                                    <li>&gt; Positive vs negative sentiment</li>
                                    <li>&gt; Inbox placement / spam triggers</li>
                                    <li>&gt; Cut losing variants, scale winners</li>
                                </ul>
                            </div>
                            <div className="bg-primary p-6 border-4 border-primary">
                                <div className="font-mono text-xs text-accent font-bold uppercase mb-3">Paid Ads Optimization Loop</div>
                                <ul className="space-y-2 font-mono text-xs text-surface font-bold uppercase">
                                    <li>&gt; CTR by creative</li>
                                    <li>&gt; CPC / CPM by audience</li>
                                    <li>&gt; Conversion rate by landing page</li>
                                    <li>&gt; Pipeline value by source</li>
                                    <li>&gt; Cut losing variants, scale winners</li>
                                </ul>
                            </div>
                        </div>
                        <p className="mt-6">
                            Same operating model. Different cost structure. Different reach mechanism. Whoever wins is whoever reads their numbers honestly and iterates faster.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Why We Recommend Cold Email First (For Most B2B)
                        </h2>
                        <p className="mb-4">
                            For B2B companies whose ICP reads email, cold email is usually the right first move. Three reasons:
                        </p>
                        <div className="space-y-4">
                            {[
                                {
                                    h: '01 — Capped cost protects early-stage companies',
                                    p: 'You can\'t out-bid Salesforce in an ad auction. You can absolutely build a 30-mailbox cold email engine that competes with anyone\'s pipeline.'
                                },
                                {
                                    h: '02 — Precision targeting at the individual level',
                                    p: 'Ads target segments. Cold email targets a specific person at a specific company on a specific day with a specific message. Nothing matches that targeting precision.'
                                },
                                {
                                    h: '03 — You build an asset, not rent attention',
                                    p: 'Domain reputation, mailbox warm-up, lead databases — these compound. Pause your ads and the pipeline stops. Cold email infrastructure keeps producing.'
                                },
                            ].map((item) => (
                                <div key={item.h} className="bg-surface border-4 border-primary p-6">
                                    <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">{item.h}</h3>
                                    <p className="font-sans text-sm text-primary/70 font-bold">{item.p}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Bottom Line
                        </h2>
                        <p className="mb-4">
                            <strong>If you sell to consumers:</strong> cold email is illegal and impossible. Run ads.
                        </p>
                        <p className="mb-4">
                            <strong>If you sell to small-team B2B niches that don't live in email</strong> (realtors, certain trades): cold call, don't cold email.
                        </p>
                        <p className="mb-4">
                            <strong>If you sell to B2B where the ICP reads email</strong> (most service, SaaS, agency, and enterprise plays): start with cold email. The capped cost makes it the cheapest predictable pipeline you'll ever run. Layer paid ads on top once you have product-market fit and need to scale or defend brand search.
                        </p>
                        <p>
                            We help B2B teams figure out which side of those lines they're on, then build the system. <Link to="/blog/cold-email-system-20-appointments-month" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">Here's exactly how we build it</Link>.
                        </p>
                    </section>

                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Need Help Picking The Right Channel?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We'll look at your ICP, ACV, and current funnel and tell you straight whether cold email, ads, or both is the right move. No retainer pitch.
                        </p>
                        <a
                            href="https://cal.com/vasu-gupta-wv3e0q/discovery-call-quickomate"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 font-mono font-bold text-sm tracking-widest uppercase bg-accent text-background px-8 py-4 border-4 border-accent hover:bg-transparent hover:text-accent transition-colors shadow-[4px_4px_0px_0px_rgba(232,228,221,1)]"
                        >
                            BOOK A CALL
                            <ArrowUpRight size={18} />
                        </a>
                    </section>

                    <section aria-label="Related reading" className="mt-16 border-t-4 border-primary pt-8">
                        <h2 className="font-mono text-xs text-accent font-bold tracking-widest uppercase mb-6 bg-accent/10 px-3 py-1 inline-block border border-accent/30">
                            RELATED_READING
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { slug: 'ai-lead-generation-for-b2b-companies', title: 'AI Lead Generation for B2B Companies: A 2026 Playbook' },
                                { slug: 'cold-email-system-20-appointments-month', title: 'How We Get 15-20 Qualified Appointments Per Month With Cold Email' },
                                { slug: 'why-you-should-own-your-cold-email-infrastructure', title: 'Why You Should Own Your Cold Email Infrastructure' },
                            ].map((p) => (
                                <Link
                                    key={p.slug}
                                    to={`/blog/${p.slug}`}
                                    className="bg-surface border-4 border-primary p-4 hover:bg-primary hover:text-surface transition-colors"
                                >
                                    <span className="font-heading font-black text-sm uppercase tracking-tight">
                                        {p.title}
                                    </span>
                                </Link>
                            ))}
                        </div>
                    </section>
                </article>

                <nav aria-label="Article navigation" className="mt-16 pt-8 border-t-4 border-primary flex gap-4">
                    <Link to="/blog" className="font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors inline-flex items-center gap-2">
                        <ArrowLeft size={14} />
                        All Posts
                    </Link>
                    <Link to="/" className="font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors inline-block">
                        ← Home
                    </Link>
                </nav>
            </div>
        </div>
    );
}
