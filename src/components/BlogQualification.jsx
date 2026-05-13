import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogQualification() {
    return (
        <div className="min-h-screen bg-background text-textMain pt-32 pb-20 px-6 sm:px-12 md:px-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link to="/blog" className="inline-flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors mb-12">
                    <ArrowLeft size={14} />
                    All Posts
                </Link>

                {/* Header */}
                <header className="mb-16 border-b-4 border-primary pb-8">
                    <div className="flex items-center gap-4 flex-wrap mb-6">
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest flex items-center gap-1">
                            <Clock size={12} /> 9 min read
                        </span>
                        <time dateTime="2026-05-08" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">May 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['Sales', 'Qualification', 'Sales Process'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        B2B Lead Qualification in 2026: BANT vs MEDDIC vs CHAMP (and What Actually Works)
                    </h1>
                </header>

                {/* Article Body */}
                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">

                    {/* Intro */}
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Most qualification frameworks are sales-coach LinkedIn theater. Here's what actually predicts a close in 2026 — and the B2B lead qualification framework we run on every deal at Quickomate.
                        </p>
                    </div>

                    {/* Section: What lead qualification really decides */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What Lead Qualification Really Decides
                        </h2>
                        <p className="mb-4">
                            Founders and SDR managers ask the wrong question. They ask "is this a lead?" — which is a binary, low-resolution question that any form-fill or email opt-in already answered. The real question every B2B sales qualification framework is trying to answer is sharper:
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-2 mb-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Is this lead worth one hour of an AE's calendar this week — or should we deprioritize, nurture, or drop it?
                            </p>
                        </div>
                        <p>
                            Qualification is a capacity-allocation problem, not a labeling exercise. Every rep has roughly 20 productive selling hours a week. The framework you pick is just the rule you use to decide which of the 60+ inbound and outbound conversations get those hours. Pick the wrong framework for your motion and you'll either burn your reps on tiny deals or fumble your enterprise pipeline with shallow discovery.
                        </p>
                    </section>

                    {/* Section: BANT */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            BANT: Budget, Authority, Need, Timeline
                        </h2>
                        <p className="mb-4">
                            BANT is the grandfather. IBM cooked it up in the 1960s as a way to triage mainframe leads, and it has survived 60 years of sales evolution mostly because it's dead simple. You ask four things: Does the buyer have <strong>Budget</strong>? Are they the <strong>Authority</strong>? Is there a real <strong>Need</strong>? What's the <strong>Timeline</strong>?
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-6">
                            <div className="bg-primary p-4 border-4 border-primary">
                                <span className="font-mono text-xs text-accent font-bold uppercase block mb-2">STRENGTHS</span>
                                <span className="font-sans text-sm text-surface">Five minutes to apply. Fast disqualification. Easy to coach junior reps on. Works fine on transactional, single-stakeholder deals.</span>
                            </div>
                            <div className="bg-primary p-4 border-4 border-primary">
                                <span className="font-mono text-xs text-accent font-bold uppercase block mb-2">WEAKNESSES</span>
                                <span className="font-sans text-sm text-surface">Asking about budget on call one kills warm leads. "Authority" is mythical in modern B2B where 4-7 people influence every six-figure decision. Timeline is the easiest thing for a buyer to lie about.</span>
                            </div>
                        </div>
                        <p>
                            Honest take: BANT in its original form is broken for anything above a $5k ACV. Buyers don't have allocated budget until they've decided to buy. Anyone telling a rep "yes we have budget" on a first call is either lying or already sold — which means BANT mostly qualifies in deals that were going to close anyway. Use it as a checklist, not as a gate.
                        </p>
                    </section>

                    {/* Section: MEDDIC */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            MEDDIC: The Enterprise Standard
                        </h2>
                        <p className="mb-4">
                            MEDDIC was developed at PTC in the 1990s and quietly became the default operating system for enterprise SaaS sales. It's six letters:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-6">
                            {[
                                { letter: 'M', label: 'Metrics', desc: 'The quantified business impact. Not "we want to grow" — "we need to cut CAC by 30% by Q3."' },
                                { letter: 'E', label: 'Economic Buyer', desc: 'The single person who can write the check without asking permission. Find them. Talk to them.' },
                                { letter: 'D', label: 'Decision Criteria', desc: 'The literal scorecard the buyer is using to compare options. Get the scorecard.' },
                                { letter: 'D', label: 'Decision Process', desc: 'Who signs in what order, what review cycles, what procurement steps. Map it on paper.' },
                                { letter: 'I', label: 'Identify Pain', desc: 'A specific, named, owned business problem. No pain, no purchase.' },
                                { letter: 'C', label: 'Champion', desc: 'An internal advocate with political capital who sells for you when you\'re not in the room.' },
                            ].map((item) => (
                                <div key={item.label} className="bg-surface border-4 border-primary p-4">
                                    <span className="font-heading font-black text-3xl text-accent block">{item.letter}</span>
                                    <span className="font-mono text-xs text-primary font-bold uppercase block mb-1">{item.label}</span>
                                    <span className="font-sans text-sm text-primary/70">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            Where MEDDIC wins: complex enterprise sales with $100k+ ACVs, 3+ stakeholders, and 60+ day cycles. It forces reps to do real discovery instead of pitching features. Forecasting accuracy on a MEDDIC-disciplined pipeline is genuinely 2-3x better than on a BANT one.
                        </p>
                        <p>
                            Where MEDDIC fails: SMB and PLG motions. Fully qualifying six dimensions takes 3-4 calls. If your ACV is under $20k, you've burned your margin before the deal even moves to procurement. MEDDIC is a heavy framework — only spin it up if the deal size justifies the overhead.
                        </p>
                    </section>

                    {/* Section: MEDDPICC / MEDDICC */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            MEDDPICC and MEDDICC Extensions
                        </h2>
                        <p className="mb-4">
                            Two letters got bolted onto MEDDIC over the years. <strong>MEDDICC</strong> adds a second C for <strong>Competition</strong> — what other vendors are in the deal and how the buyer is comparing you. <strong>MEDDPICC</strong> adds <strong>Paper Process</strong> on top — the legal, security, and procurement gauntlet that kills more deals at the finish line than anything else.
                        </p>
                        <p>
                            Use the extensions when you're selling into companies with InfoSec reviews, SOC2/HIPAA requirements, or active competitive displacements. For most mid-market deals, MEDDIC core is enough — the extra letters are scaffolding for the long-tail risks at enterprise scale.
                        </p>
                    </section>

                    {/* Section: CHAMP */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            CHAMP: Pain-First Qualification
                        </h2>
                        <p className="mb-4">
                            CHAMP is BANT with the order surgically reversed: <strong>Challenges, Authority, Money, Prioritization</strong>. The change looks small. It is not. Putting Challenges first does something BANT structurally can't — it forces the rep to earn the right to ask about budget by surfacing real pain first.
                        </p>
                        <p className="mb-4">
                            In 2026, buyers control the sales process. They've already read your G2 reviews, watched your demo videos, and short-listed three vendors before you ever pick up the phone. Asking about budget early — the BANT default — signals you're a vendor trying to qualify them out, not a partner trying to solve a problem. CHAMP flips the dynamic.
                        </p>
                        <p>
                            Prioritization at the end is the underrated piece. A buyer can have a real challenge, the right authority, and the money — and still not buy this quarter because it's the seventh-most-urgent thing on their list. "Where does this sit on your 2026 roadmap?" is one of the highest-signal questions in B2B sales.
                        </p>
                    </section>

                    {/* Section: GPCT / ANUM / FAINT */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            GPCT, ANUM, and FAINT
                        </h2>
                        <p className="mb-4">
                            Three frameworks worth knowing because people search them and reps quote them, even though none of them have meaningfully displaced MEDDIC or CHAMP:
                        </p>
                        <p className="mb-4">
                            <strong>GPCT (Goals, Plans, Challenges, Timeline)</strong> — HubSpot's inbound-era replacement for BANT. Useful for inbound leads where the buyer is already self-educated. Reads like a discovery script for marketing-qualified leads.
                        </p>
                        <p className="mb-4">
                            <strong>ANUM (Authority, Need, Urgency, Money)</strong> — a reshuffle of BANT that starts with Authority. Honestly weaker than CHAMP for the same reason BANT is weak: it asks gatekeeping questions before establishing value.
                        </p>
                        <p>
                            <strong>FAINT (Funds, Authority, Interest, Need, Timing)</strong> — designed for selling into companies that don't have an explicit allocated budget. "Funds" replaces "Budget" — meaning, do they have the cash if convinced. Useful for net-new product categories where buyers haven't budgeted for your solution yet.
                        </p>
                    </section>

                    {/* Section: Decision Matrix */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            How To Choose The Framework For Your Motion
                        </h2>
                        <p className="mb-4">
                            Stop arguing about BANT vs MEDDIC in the abstract. The right framework depends on four variables: deal size, sales cycle length, number of stakeholders, and how educated the buyer is when they reach you. Here's the matrix we use:
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4 mb-4">
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { acv: 'ACV < $10K', cycle: '< 14 day cycle, 1-2 stakeholders', framework: 'CHAMP or BANT-Lite. One call, four questions, done. MEDDIC is overkill and will tank your conversion rate.' },
                                    { acv: 'ACV $10K - $100K', cycle: '30-90 day cycle, 2-4 stakeholders', framework: 'CHAMP for discovery, MEDDPICC-Lite for late-stage. Skip Paper Process unless legal review is in play.' },
                                    { acv: 'ACV $100K+', cycle: '90+ day cycle, 4-7 stakeholders', framework: 'Full MEDDIC or MEDDPICC. Anything less and your forecast becomes fiction by Q3.' },
                                ].map((row, i) => (
                                    <div key={i} className="border-l-4 border-accent pl-4 py-2">
                                        <span className="font-mono text-xs text-accent font-bold uppercase block">{row.acv}</span>
                                        <span className="font-mono text-[11px] text-primary/60 font-bold uppercase block mb-2">{row.cycle}</span>
                                        <span className="font-sans text-sm text-primary">{row.framework}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p>
                            One sales motion, one framework. Mixing them mid-pipeline is how SDRs end up qualifying with BANT while AEs are trying to apply MEDDIC and nothing ever lines up in the CRM.
                        </p>
                    </section>

                    {/* Section: PASS — Quickomate's framework */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Quickomate Qualification Framework: PASS
                        </h2>
                        <p className="mb-4">
                            We run a lot of outbound for mid-market B2B clients. Most of our deals land in the $15k - $80k ACV band — too big for casual BANT, too small for full MEDDIC bureaucracy. So we built our own: <strong>PASS</strong>. Four questions, one call, binary scoring.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-6">
                            {[
                                { letter: 'P', label: 'Problem', desc: 'Is the problem we solve in their top three priorities for the next two quarters? If it\'s priority #7, they will not buy. Hard pass.' },
                                { letter: 'A', label: 'Access', desc: 'Are we talking to the right person — or do we have a clean intro path to them within 14 days? Champion-by-end-of-call rule.' },
                                { letter: 'S', label: 'Stack', desc: 'Can we technically integrate with what they\'re running? CRM, data sources, sending infrastructure. Pre-call enrichment answers this.' },
                                { letter: 'S', label: 'Signal', desc: 'Is there a timing event — new funding, new hire, recent churn, leadership change — that makes "now" more likely than "next year"?' },
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-5 border-4 border-primary">
                                    <span className="font-heading font-black text-3xl text-accent block">{item.letter}</span>
                                    <span className="font-mono text-xs text-surface font-bold uppercase block mb-1">{item.label}</span>
                                    <span className="font-sans text-sm text-surface/80">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            Score each one yes/no. <strong>4/4 is a qualified deal that moves to proposal.</strong> 3/4 with a clear path to the missing piece becomes nurture. Anything under 3 gets dropped — politely, by email, with a Q+1 follow-up cadence. No "maybe in six months" purgatory clogging up the pipeline.
                        </p>
                    </section>

                    {/* Section: Where AI fits */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Where AI Fits In Qualification
                        </h2>
                        <p className="mb-4">
                            In 2026, AI changes the economics of qualification in three specific places — but it does not replace rep judgment. Anyone telling you their AI will fully qualify deals end-to-end is selling you a demo, not a product.
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4 mb-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">Where AI Actually Helps</h3>
                            <div className="grid grid-cols-1 gap-4">
                                {[
                                    { stage: 'PRE-CALL', desc: 'Enrichment at scale. Job-change signals, funding events, hiring spikes, tech-stack detection. Surfaces the "S" in PASS before the rep dials.' },
                                    { stage: 'ON-CALL', desc: 'Gong, Chorus, and Fathom now extract MEDDIC signals automatically from call transcripts. "Economic buyer mentioned? Yes. Metrics quantified? No." Saved as CRM fields.' },
                                    { stage: 'POST-CALL', desc: 'Auto-scoring against your framework, next-step suggestion, and forecast confidence. The rep validates, edits, and commits — they don\'t blindly accept.' },
                                ].map((row, i) => (
                                    <div key={i} className="bg-primary p-4">
                                        <span className="font-mono text-xs text-accent font-bold uppercase block mb-1">{row.stage}</span>
                                        <span className="font-sans text-sm text-surface/90">{row.desc}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p>
                            AI augments the rep's judgment by removing the busywork — note-taking, CRM hygiene, enrichment. It does not replace the part where a human decides whether a buyer is bluffing about timeline. That call is still yours.
                        </p>
                    </section>

                    {/* Section: Common mistakes */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Common Qualification Mistakes
                        </h2>
                        <p className="mb-4">
                            We've watched dozens of sales teams break their pipelines in the same three ways:
                        </p>
                        <div className="grid grid-cols-1 gap-4 mt-4">
                            {[
                                { mistake: 'OVER-QUALIFYING SMALL DEALS', fix: 'Running MEDDIC on a $5k deal is how you get a $5k deal that took six weeks to close. Match framework weight to deal size.' },
                                { mistake: 'UNDER-QUALIFYING LARGE DEALS', fix: 'Skipping the Economic Buyer or Paper Process on a $200k deal is how you lose at procurement after three months of demos. Front-load the hard questions.' },
                                { mistake: 'CONFUSING ENGAGEMENT WITH INTENT', fix: 'Opens, clicks, page views, and demo signups are not buying signals — they\'re curiosity signals. Treat them as a starting point, not as qualification.' },
                            ].map((row, i) => (
                                <div key={i} className="bg-surface border-4 border-primary p-5">
                                    <span className="font-mono text-xs text-accent font-bold uppercase block mb-2">{row.mistake}</span>
                                    <span className="font-sans text-sm text-primary/80">{row.fix}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6">
                            The third one is the most expensive. We've seen teams forecast 60% of pipeline based on email engagement metrics — and miss quota by 40% because none of those "engaged" leads ever planned to buy. Engagement is a vanity metric in qualification. Throw it out.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want a Qualification System That Actually Filters?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            If your reps are wasting cycles on leads that were never going to close — or your pipeline forecast is fiction by mid-quarter — we'll build the qualification system, AI enrichment, and CRM scoring around your motion. Let's talk for 15-30 minutes.
                        </p>
                        <a
                            href="https://cal.com/vasu-gupta-wv3e0q/discovery-call-quickomate"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 font-mono font-bold text-sm tracking-widest uppercase bg-accent text-background px-8 py-4 border-4 border-accent hover:bg-transparent hover:text-accent transition-colors shadow-[4px_4px_0px_0px_rgba(232,228,221,1)]"
                        >
                            BOOK A DISCOVERY CALL
                            <ArrowUpRight size={18} />
                        </a>
                    </section>

                    <section aria-label="Related reading" className="mt-16 border-t-4 border-primary pt-8">
                        <h2 className="font-mono text-xs text-accent font-bold tracking-widest uppercase mb-6 bg-accent/10 px-3 py-1 inline-block border border-accent/30">
                            RELATED_READING
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { slug: 'follow-up-system-for-b2b', title: 'The Follow-Up System That Turns Cold Leads Into Booked Calls' },
                                { slug: 'crm-automation-systems-for-b2b', title: 'CRM Automation Systems for B2B: What to Build vs Buy' },
                                { slug: 'ai-lead-generation-for-b2b-companies', title: 'AI Lead Generation for B2B Companies: A 2026 Playbook' },
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

                {/* Back to Blog */}
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
