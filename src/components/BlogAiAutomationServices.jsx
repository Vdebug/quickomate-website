import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogAiAutomationServices() {
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
                        {['AI Automation', 'Services', 'Growth Systems'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        AI Automation Services Explained: What's Included, What's Hype, and What to Pay in 2026
                    </h1>
                </header>

                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            "AI automation services" is a catch-all that hides huge differences in value. Some of it replaces a full-time hire. Some of it is a Zapier zap with a chatbot bolted on and a 5x markup. This is the plain-English map of what the category actually includes, where AI business automation pays for itself, and where it is sold as magic to people who do not know better.
                        </p>
                    </div>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Six Service Categories
                        </h2>
                        <p className="mb-4">
                            Almost every AI automation service offering maps to one of six categories. Knowing which one you are buying tells you what to expect and what it should cost.
                        </p>
                        <div className="space-y-3">
                            {[
                                { layer: 'Lead generation', desc: 'Sourcing, enrichment, outreach systems, reply routing. The highest-ROI category for most B2B companies.' },
                                { layer: 'Sales operations', desc: 'CRM automation, stage-based triggers, proposal generation, pipeline hygiene, follow-up engines.' },
                                { layer: 'Customer support', desc: 'AI triage, ticket tagging, FAQ deflection, draft replies a human approves. Cuts response time, not headcount-on-day-one.' },
                                { layer: 'Back-office ops', desc: 'Document processing, data entry, invoice handling, onboarding workflows, internal approvals.' },
                                { layer: 'Content & research', desc: 'First-draft generation, summarization, monitoring, competitive and market research at scale.' },
                                { layer: 'Custom AI agents', desc: 'Multi-step LLM workflows that read context, decide, and act across your tools. The frontier — powerful, easy to oversell.' },
                            ].map((item) => (
                                <div key={item.layer} className="bg-surface border-2 border-primary p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                                    <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest sm:w-44 shrink-0">{item.layer}</span>
                                    <span className="font-sans text-sm text-primary/80 font-bold">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Where AI Business Automation Actually Pays Off
                        </h2>
                        <p className="mb-4">
                            The work that gives you the fastest, cleanest return shares three traits: it is <strong>repetitive</strong>, <strong>high-volume</strong>, and <strong>rules-based or research-heavy</strong>. The clearest wins we see:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {[
                                'Researching and enriching inbound leads before a rep ever sees them',
                                'Firing the right follow-up the moment a CRM stage changes',
                                'Turning messy form data into clean, deduplicated records',
                                'Drafting first-pass replies, proposals, and reports for human review',
                                'Tagging and routing support tickets by intent',
                                'Monitoring signals (hiring, funding, news) and alerting the right person',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6">
                            Lead gen is usually the first place to look — see the full <Link to="/blog/ai-lead-generation-for-b2b-companies" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">AI lead generation playbook</Link> and how <Link to="/blog/crm-automation-systems-for-b2b" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">stage-based CRM automation</Link> gives reps 9-14 hours back a week.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Where It's Mostly Hype
                        </h2>
                        <p className="mb-4">
                            Be skeptical when a service promises any of these. They are where automation projects quietly fail and where markups hide:
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                "Fully autonomous" anything that touches a customer relationship. "AI that writes all your copy" (it writes safe, average copy — fine for a draft, fatal for a cold opener). "Set it and forget it" agents with no human in the loop. And any automation of a process that is broken to begin with — you will just break things faster.
                            </p>
                        </div>
                        <p className="mt-6">
                            We unpack the copy trap specifically in <Link to="/blog/ai-vs-human-cold-email-copy" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">AI vs Human Cold Email Copy</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What You Should Pay
                        </h2>
                        <p className="mb-4">
                            Pricing models you will encounter, and how to read them:
                        </p>
                        <div className="space-y-4">
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">Project / build fee — $1.5k–$15k</h3>
                                <p className="font-sans text-sm text-primary/70 font-bold">One system, scoped and delivered. Best when the process is well-defined and you want to own it outright.</p>
                            </div>
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">Monthly retainer — $3k–$12k/mo</h3>
                                <p className="font-sans text-sm text-primary/70 font-bold">Ongoing build + run + optimize. Fine if it is producing measurable output. A trap if you are paying for "maintenance" of something static.</p>
                            </div>
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">Per-outcome / performance — varies</h3>
                                <p className="font-sans text-sm text-primary/70 font-bold">Pay per meeting, per processed document, etc. Aligns incentives but watch for inflated "outcomes" that do not convert.</p>
                            </div>
                        </div>
                        <p className="mt-6">
                            Whatever the model, judge it on cost per outcome, not sticker price. The <Link to="/blog/sales-automation-roi-calculator" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">ROI calculator</Link> gives you the three equations to run before you commit.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The One Rule That Protects You
                        </h2>
                        <p>
                            Buy automation that lives on <strong>your</strong> accounts, your domains, your CRM, your API keys — with documentation your team can read. Services that keep the system in their environment are selling you dependence, not capability. Ownership is the difference between an asset on your balance sheet and a subscription you can never cancel.
                        </p>
                    </section>

                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Not Sure Which Service You Need?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            Tell us the work eating your team's time and we will show you the highest-ROI thing to automate first — and what it should cost. Free 15-30 minute call.
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

                    <RelatedReading currentSlug="ai-automation-services-explained" />
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
    'ai-automation-services-explained': [
        { slug: 'what-is-an-ai-automation-agency', title: 'What Is an AI Automation Agency? What They Do, Cost, and How to Choose' },
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
