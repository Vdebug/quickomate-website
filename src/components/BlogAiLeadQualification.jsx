import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogAiLeadQualification() {
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
                            <Clock size={12} /> 9 min read
                        </span>
                        <time dateTime="2026-05-21" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">May 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['Lead Qualification', 'AI Automation', 'Sales Ops'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        AI Lead Qualification: How to Score and Route Leads Automatically (2026)
                    </h1>
                </header>

                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            AI lead qualification means scoring and routing every inbound lead automatically — before a human spends a minute on it — so reps only work the leads worth working. Done right, it cuts response time to seconds, kills the "spray every lead equally" tax, and lifts conversion without adding headcount. Here is how automated lead qualification actually works and how to set it up.
                        </p>
                    </div>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What AI Lead Qualification Actually Does
                        </h2>
                        <p className="mb-4">
                            It runs four steps the instant a lead arrives — steps an SDR used to do by hand, hours later:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {[
                                { num: '01', label: 'Enrich', desc: 'Pull company size, role, tech stack, and signals from public data.' },
                                { num: '02', label: 'Score', desc: 'Rate fit and intent against your ICP rules and past-deal patterns.' },
                                { num: '03', label: 'Route', desc: 'Send hot leads to the right rep instantly; nurture the rest.' },
                                { num: '04', label: 'Flag', desc: 'Surface the "why" so the rep opens with context, not a cold start.' },
                            ].map((item) => (
                                <div key={item.num} className="bg-primary p-4 border-4 border-primary">
                                    <div className="font-mono text-xs text-accent font-bold mb-2">{item.num}</div>
                                    <div className="font-mono text-sm text-surface font-bold uppercase mb-2">{item.label}</div>
                                    <div className="font-sans text-xs text-surface/70 font-bold">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Fit vs Intent: Score Both
                        </h2>
                        <p className="mb-4">
                            The mistake is scoring one dimension. A perfect-fit company with no buying signal is a slow nurture; a mediocre-fit company actively comparing vendors is a call-now lead. Score them on two axes:
                        </p>
                        <div className="space-y-4">
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">Fit (who they are)</h3>
                                <p className="font-sans text-sm text-primary/70 font-bold">Industry, size, role, geography, tech stack — does this match your ICP at all?</p>
                            </div>
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">Intent (what they're doing)</h3>
                                <p className="font-sans text-sm text-primary/70 font-bold">Pricing-page visits, demo requests, hiring, funding, competitor research — are they in-market now?</p>
                            </div>
                        </div>
                        <p className="mt-6">
                            This pairs with a human framework for the deeper deals — see <Link to="/blog/b2b-lead-qualification-bant-meddic-champ-2026" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">BANT vs MEDDIC vs CHAMP</Link> for when to apply which.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            How to Set It Up (5 Steps)
                        </h2>
                        <div className="space-y-3">
                            {[
                                { layer: 'Define your ICP', desc: 'Write down the fit and intent signals that actually predict a closed deal.' },
                                { layer: 'Wire enrichment', desc: 'Auto-append firmographic and behavioral data the moment a lead lands.' },
                                { layer: 'Build the score', desc: 'Weight signals, set thresholds for hot / warm / nurture. Start simple.' },
                                { layer: 'Automate routing', desc: 'Push hot leads to a rep in seconds; sequence the rest automatically.' },
                                { layer: 'Review and tune', desc: 'Compare scores to outcomes monthly and adjust the weights.' },
                            ].map((item, i) => (
                                <div key={item.layer} className="bg-surface border-2 border-primary p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                                    <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest sm:w-44 shrink-0">{`0${i + 1} ${item.layer}`}</span>
                                    <span className="font-sans text-sm text-primary/80 font-bold">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6">
                            The routing and follow-up live in your CRM — see how <Link to="/blog/crm-automation-systems-for-b2b" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">stage-based CRM automation</Link> fires the right action at each step.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Where to Keep a Human
                        </h2>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Let AI score and route everything. Do not let it disqualify high-value leads outright — a borderline enterprise lead deserves a human glance, not an auto-rejection. Automate the sorting; keep judgment on the edge cases. The cost of an AI false-negative on a big deal dwarfs the time it saves.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Bottom Line
                        </h2>
                        <p>
                            AI lead qualification is one of the highest-ROI, lowest-risk automations in B2B: it speeds response, focuses reps on the right leads, and pays back fast because it sits on data you already collect. Score fit and intent, route in seconds, keep a human on the edge cases — and stop taxing your team with leads that were never going to close.
                        </p>
                    </section>

                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want Leads Scored and Routed Automatically?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We will build an AI lead qualification flow on your CRM — fit + intent scoring, instant routing, context for every rep. Free 15-30 minute call.
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

                    <RelatedReading currentSlug="ai-lead-qualification" />
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

const RELATED_POSTS = {
    'ai-lead-qualification': [
        { slug: 'b2b-lead-qualification-bant-meddic-champ-2026', title: 'B2B Lead Qualification in 2026: BANT vs MEDDIC vs CHAMP' },
        { slug: 'ai-lead-generation-for-b2b-companies', title: 'AI Lead Generation for B2B Companies: A 2026 Playbook' },
        { slug: 'crm-automation-systems-for-b2b', title: 'CRM Automation: How Stage-Based Triggers Free Up Your Sales Team' },
    ],
};

function RelatedReading({ currentSlug }) {
    const posts = RELATED_POSTS[currentSlug] || [];
    if (!posts.length) return null;
    return (
        <section aria-label="Related reading" className="mt-16 border-t-4 border-primary pt-8">
            <h2 className="font-mono text-xs text-accent font-bold tracking-widest uppercase mb-6 bg-accent/10 px-3 py-1 inline-block border border-accent/30">
                RELATED_READING
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {posts.map((p) => (
                    <Link
                        key={p.slug}
                        to={`/blog/${p.slug}`}
                        className="bg-surface border-4 border-primary p-4 hover:bg-primary hover:text-surface transition-colors group"
                    >
                        <span className="font-heading font-black text-sm uppercase tracking-tight">
                            {p.title}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
