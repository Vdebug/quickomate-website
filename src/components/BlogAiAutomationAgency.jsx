import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogAiAutomationAgency() {
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
                        <time dateTime="2026-05-22" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">May 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['AI Automation', 'Agency', 'B2B Growth'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        What Is an AI Automation Agency? What They Do, What It Costs, and How to Choose
                    </h1>
                </header>

                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            An AI automation agency builds custom systems that do work your team is currently doing by hand — lead generation, data entry, follow-up, reporting, support triage. The good ones hand you an asset you own. The bad ones rent you a black box and disappear with the logins. Here is exactly what the category is, what it costs in 2026, and how to tell the two apart before you sign anything.
                        </p>
                    </div>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What an AI Automation Agency Actually Does
                        </h2>
                        <p className="mb-4">
                            Strip away the buzzwords and an AI automation agency does one thing: it finds the repetitive, rules-based, or research-heavy work inside your business and replaces the manual version with a system. Sometimes that system uses a large language model. Sometimes it is plain workflow automation with no AI at all. A serious agency cares about the outcome, not about cramming "AI" into every step.
                        </p>
                        <p className="mb-4">
                            The work usually falls into four buckets:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {[
                                { num: '01', label: 'Lead & Revenue', desc: 'Outbound systems, lead sourcing, enrichment, CRM routing, follow-up sequences.' },
                                { num: '02', label: 'Operations', desc: 'Data entry, document processing, onboarding flows, internal approvals, reporting.' },
                                { num: '03', label: 'Customer-Facing', desc: 'Support triage, AI chat that escalates correctly, ticket tagging, FAQ deflection.' },
                                { num: '04', label: 'Knowledge & Research', desc: 'Summarizing data, drafting first-pass content, monitoring signals, competitive research.' },
                            ].map((item) => (
                                <div key={item.num} className="bg-primary p-4 border-4 border-primary">
                                    <div className="font-mono text-xs text-accent font-bold mb-2">{item.num}</div>
                                    <div className="font-mono text-sm text-surface font-bold uppercase mb-2">{item.label}</div>
                                    <div className="font-sans text-xs text-surface/70 font-bold">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6">
                            If you want the deeper breakdown of what falls under each, read <Link to="/blog/ai-automation-services-explained" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">AI Automation Services Explained</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Agency vs Consultant vs SaaS Tool
                        </h2>
                        <p className="mb-4">
                            "AI automation agency" gets confused with two adjacent things. They are not the same purchase:
                        </p>
                        <div className="space-y-4">
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">SaaS tool (Zapier, Make, an AI SDR product)</h3>
                                <p className="font-sans text-sm text-primary/70 font-bold">You build and maintain it yourself. Cheapest sticker price, highest hidden cost in your team's time. Generic by design.</p>
                            </div>
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">Consultant</h3>
                                <p className="font-sans text-sm text-primary/70 font-bold">Tells you what to build and how, often does not build it. Great for strategy and audits. <Link to="/blog/do-you-need-an-ai-automation-consultant" className="text-accent underline decoration-2 underline-offset-4 hover:text-primary">When you actually need one</Link>.</p>
                            </div>
                            <div className="bg-primary border-4 border-accent p-6">
                                <h3 className="font-heading font-black text-lg text-textInverted uppercase mb-2">Agency (build + run + hand over)</h3>
                                <p className="font-sans text-sm text-textInverted/80 font-bold">Designs, builds, and deploys the system end to end on your infrastructure, then trains your team. Best when you want the outcome without becoming an automation shop yourself.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What It Costs in 2026
                        </h2>
                        <p className="mb-4">
                            Pricing varies wildly because "automation" can mean a single workflow or a full revenue engine. Realistic 2026 ranges:
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    { label: 'Single workflow build', value: '$1.5k–$5k' },
                                    { label: 'Multi-system retainer', value: '$3k–$12k/mo' },
                                    { label: 'Full revenue engine', value: '$10k–$30k+' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-primary p-4">
                                        <span className="font-heading font-black text-2xl text-accent block">{stat.value}</span>
                                        <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mt-6">
                            The number that matters is not the monthly fee — it is cost per outcome. A $5k/month system that saves 60 staff hours and books 15 extra meetings is cheap. A $2k/month system nobody can explain is expensive. Run the math before you buy: our <Link to="/blog/sales-automation-roi-calculator" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">automation ROI breakdown</Link> shows exactly how.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            How to Choose One (and the Red Flags)
                        </h2>
                        <p className="mb-4">
                            The single most important question: <strong>who owns the system when the engagement ends?</strong> If the answer is anything other than "you do," walk away. Other signals that separate a real agency from a reseller:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {[
                                'They build on YOUR accounts and infrastructure, not theirs',
                                'They can explain what each automation does in plain English',
                                'They start with a process audit, not a tool recommendation',
                                'They quote outcomes and timelines, not just "AI transformation"',
                                'They tell you where automation is the WRONG answer',
                                'They train your team to maintain it after handover',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-6">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Biggest red flag: an agency that keeps the logins. If the domains, API keys, and CRM live in their account, you are renting — and the day you stop paying, the system and its data leave with them.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Do You Even Need One Yet?
                        </h2>
                        <p>
                            Not every business is ready. If your process is not documented, your data is a mess, or you are automating something that should not exist at all, an agency will just help you go faster in the wrong direction. Run the five-question readiness check in <Link to="/blog/how-to-know-if-your-business-needs-ai-automation" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">How To Know If Your Business Is Ready For AI Automation</Link> first. The honest answer is sometimes "fix the process manually, then automate."
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Bottom Line
                        </h2>
                        <p>
                            An AI automation agency is worth it when you want a working system you own — not a subscription to someone else's black box. Buy the outcome, insist on ownership, and make them prove they understand your process before they touch a single tool. That one filter eliminates most of the market.
                        </p>
                    </section>

                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want a System You Actually Own?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We will map your highest-leverage process, show you what we would automate first, and tell you honestly if you are not ready yet. Free 15-30 minute call.
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

                    <RelatedReading currentSlug="what-is-an-ai-automation-agency" />
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
    'what-is-an-ai-automation-agency': [
        { slug: 'ai-automation-services-explained', title: "AI Automation Services Explained: What's Included and What to Pay" },
        { slug: 'do-you-need-an-ai-automation-consultant', title: 'Do You Need an AI Automation Consultant? When to Hire One vs Build In-House' },
        { slug: 'how-to-know-if-your-business-needs-ai-automation', title: 'How To Know If Your Business Is Ready For AI Automation' },
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
