import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogAiAutomationExamples() {
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
                            <Clock size={12} /> 10 min read
                        </span>
                        <time dateTime="2026-05-22" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">May 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['AI Automation', 'Examples', 'AI for Business'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        27 Real AI Automation Examples by Business Function (2026)
                    </h1>
                </header>

                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            The fastest way to find your own AI automation opportunity is to see what others have already automated. Below are 27 concrete AI business automation examples grouped by function — sales, marketing, support, operations, finance, and HR. Every one is in production somewhere today. Use them as a checklist against your own week.
                        </p>
                    </div>

                    {[
                        {
                            fn: 'Sales',
                            items: [
                                'Auto-research every inbound lead into a one-page brief before a rep calls',
                                'Score and route leads by intent so reps only touch the hot ones',
                                'Fire the next follow-up the moment a CRM stage changes',
                                'Draft personalized first-pass outreach for human review',
                                'Generate proposals and quotes from a deal record in minutes',
                            ],
                        },
                        {
                            fn: 'Marketing',
                            items: [
                                'Turn one long-form asset into a week of social posts',
                                'Repurpose webinar transcripts into blog drafts and summaries',
                                'Monitor competitors and brand mentions, alert the right person',
                                'Generate and test ad/landing-page copy variants at scale',
                            ],
                        },
                        {
                            fn: 'Customer Support',
                            items: [
                                'Triage and tag incoming tickets by intent and urgency',
                                'Draft replies a human approves before they send',
                                'Deflect repeat FAQs with an AI assistant that escalates correctly',
                                'Summarize long ticket threads for the next agent',
                            ],
                        },
                        {
                            fn: 'Operations',
                            items: [
                                'Extract structured data from contracts, invoices, and forms',
                                'Auto-fill and sync records across disconnected tools',
                                'Run onboarding checklists and nudges for new customers or hires',
                                'Generate first-draft SOPs from a recorded process',
                                'Flag exceptions in workflows for human attention',
                            ],
                        },
                        {
                            fn: 'Finance',
                            items: [
                                'Match invoices to purchase orders and flag mismatches',
                                'Categorize expenses and surface anomalies',
                                'Draft first-pass financial summaries from raw reports',
                                'Chase overdue payments with automated, escalating reminders',
                            ],
                        },
                        {
                            fn: 'HR & Recruiting',
                            items: [
                                'Screen and summarize inbound applications against a role',
                                'Draft tailored outreach to passive candidates for review',
                                'Auto-schedule interviews and send prep materials',
                                'Answer common policy questions from an internal knowledge base',
                                'Generate structured interview scorecards from notes',
                            ],
                        },
                    ].map((group) => (
                        <section key={group.fn}>
                            <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                                {group.fn}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {group.items.map((item, i) => (
                                    <div key={i} className="bg-primary p-4 border-4 border-primary">
                                        <span className="font-mono text-sm text-surface font-bold">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    ))}

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Pattern Behind Every Good Example
                        </h2>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Notice what every example has in common: the task is repetitive, high-volume, and rules-based or research-heavy — and a human still approves anything customer-facing or irreversible. That is the recipe. If a task on your list does not fit it, automation is probably the wrong tool.
                            </p>
                        </div>
                        <p className="mt-6">
                            Want the deeper map of categories and pricing? Read <Link to="/blog/ai-automation-services-explained" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">AI Automation Services Explained</Link>. For the tools that run these, see <Link to="/blog/best-ai-automation-tools-2026" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">the best AI automation tools</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            How to Pick Your First One
                        </h2>
                        <p>
                            Do not start with the most exciting example — start with the one eating the most expensive hour on your team's calendar. Pick the task that is repetitive, painful, and high-volume, add a human approval step, and measure hours saved for a month. When in doubt, run the five-question <Link to="/blog/how-to-know-if-your-business-needs-ai-automation" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">readiness check</Link> first.
                        </p>
                    </section>

                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            See Which Example Fits Your Business
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            Tell us your most repetitive workflow and we will show you exactly how we would automate it — and what it would save. Free 15-30 minute call.
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

                    <RelatedReading currentSlug="ai-automation-examples" />
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
    'ai-automation-examples': [
        { slug: 'ai-automation-services-explained', title: "AI Automation Services Explained: What's Included and What to Pay" },
        { slug: 'best-ai-automation-tools-2026', title: 'The Best AI Automation Tools in 2026 (Honest Comparison by Use Case)' },
        { slug: 'generative-ai-for-business-use-cases', title: 'Generative AI for Business: 12 Use Cases That Actually Move Revenue' },
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
