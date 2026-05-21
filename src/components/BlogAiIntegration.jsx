import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogAiIntegration() {
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
                        <time dateTime="2026-05-20" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">May 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['AI Integration', 'AI Automation', 'Strategy'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        How to Integrate AI Into Your Business: A Step-by-Step 2026 Playbook
                    </h1>
                </header>

                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            "Integrate AI into your business" sounds like a transformation project. It is not. It is a sequence of small, measured bets — start with one workflow, prove the value, win the team's trust, then expand. This playbook is the order of operations that avoids the two failure modes: doing nothing, and doing everything at once.
                        </p>
                    </div>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The 6-Step Integration Playbook
                        </h2>
                        <div className="space-y-3">
                            {[
                                { step: 'Pick one painful workflow', desc: 'Not a department, not a strategy — one repetitive, high-volume task with a clear owner.' },
                                { step: 'Get your data ready', desc: 'AI is only as good as the data it reads. Clean and connect the inputs that workflow needs.' },
                                { step: 'Build the smallest useful version', desc: 'Ship a narrow automation with a human approving the output. Run it beside the manual process.' },
                                { step: 'Measure against a baseline', desc: 'Track hours saved or revenue gained vs the old way for 30 days. Numbers win skeptics.' },
                                { step: 'Train the team and hand over', desc: 'The people doing the work must understand and trust it, or they will route around it.' },
                                { step: 'Expand to the next workflow', desc: 'Reinvest the saved time. Repeat the loop. Compounding beats big-bang.' },
                            ].map((item, i) => (
                                <div key={item.step} className="bg-surface border-2 border-primary p-4 flex gap-4 items-start">
                                    <span className="font-heading font-black text-xl text-accent shrink-0">{`0${i + 1}`}</span>
                                    <div>
                                        <div className="font-heading font-black text-base text-primary uppercase">{item.step}</div>
                                        <div className="font-sans text-sm text-primary/70 font-bold mt-1">{item.desc}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Integrate AI Without Overwhelming Your Team
                        </h2>
                        <p className="mb-4">
                            The biggest blocker to AI integration is rarely technology — it is people who fear being replaced or distrust a black box. Defuse it directly:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {[
                                'Frame AI as removing the boring 20% of the job, not the job',
                                'Keep humans approving anything customer-facing — visibly',
                                'Start with a volunteer team that wants the time back',
                                'Show the saved-hours numbers to the whole team, fast',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Data and Tooling Layer
                        </h2>
                        <p>
                            Integration usually means connecting AI to systems you already run — your CRM, helpdesk, docs, and databases. Most of the work is plumbing: clean data in, the right model or rule in the middle, the result written back to where your team already works. You rarely need to rip anything out. For the tools that do this connecting, see <Link to="/blog/best-ai-automation-tools-2026" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">the best AI automation tools</Link>, and for the end-to-end version, <Link to="/blog/ai-business-process-automation" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">AI business process automation</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Before You Start: Are You Ready?
                        </h2>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                If your processes are undocumented, your data is scattered, or you cannot name the one workflow to start with, AI integration will amplify the chaos. Fix that first. The readiness check below tells you in ten minutes whether to integrate now or clean house first.
                            </p>
                        </div>
                        <p className="mt-6">
                            Run the five-question <Link to="/blog/how-to-know-if-your-business-needs-ai-automation" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">readiness check</Link>, and if you would rather have a partner sequence the rollout, here's <Link to="/blog/do-you-need-an-ai-automation-consultant" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">when an AI automation consultant is worth it</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Bottom Line
                        </h2>
                        <p>
                            Integrating AI into your business is a loop, not a launch: one workflow, ready data, smallest useful build, measured against a baseline, team trained, then expand. Keep humans on the risky steps and let the saved hours fund the next step. Companies that win with AI in 2026 are not the ones who did the most at once — they are the ones who started small and never stopped.
                        </p>
                    </section>

                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want a Sequenced AI Rollout?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We will pick the first workflow, build it on your stack, prove the ROI, and map the rollout from there. Free 15-30 minute call.
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

                    <RelatedReading currentSlug="how-to-integrate-ai-into-your-business" />
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
    'how-to-integrate-ai-into-your-business': [
        { slug: 'how-to-know-if-your-business-needs-ai-automation', title: 'How To Know If Your Business Is Ready For AI Automation' },
        { slug: 'ai-business-process-automation', title: 'AI Business Process Automation: A Practical Guide for B2B Teams' },
        { slug: 'do-you-need-an-ai-automation-consultant', title: 'Do You Need an AI Automation Consultant? When to Hire One vs Build In-House' },
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
