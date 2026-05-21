import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogBusinessProcessAutomation() {
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
                        <time dateTime="2026-05-20" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">May 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['AI Automation', 'Business Process', 'Operations'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        AI Business Process Automation: A Practical Guide for B2B Teams (2026)
                    </h1>
                </header>

                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Business process automation (BPA) is the practice of running an end-to-end workflow — not a single task — without manual hand-offs. The AI part adds judgment to the steps that used to need a human: reading, deciding, drafting. This is the practical guide: how to find the right process, automate it without breaking it, and where AI belongs versus plain rules.
                        </p>
                    </div>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            BPA vs Task Automation vs RPA
                        </h2>
                        <p className="mb-4">
                            These terms get used interchangeably and shouldn't be:
                        </p>
                        <div className="space-y-4">
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">Task automation</h3>
                                <p className="font-sans text-sm text-primary/70 font-bold">One step fires automatically — a single trigger and action. The building block.</p>
                            </div>
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">RPA (robotic process automation)</h3>
                                <p className="font-sans text-sm text-primary/70 font-bold">A bot mimics clicks/keystrokes across legacy apps. Brittle when UIs change; good for old systems with no API.</p>
                            </div>
                            <div className="bg-primary border-4 border-accent p-6">
                                <h3 className="font-heading font-black text-lg text-textInverted uppercase mb-2">AI business process automation</h3>
                                <p className="font-sans text-sm text-textInverted/80 font-bold">A full workflow runs end to end, with AI handling the judgment steps (read, classify, draft, decide) and humans approving the risky ones.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            How to Choose Which Process to Automate
                        </h2>
                        <p className="mb-4">
                            Score each candidate process on four factors. High on all four = automate now:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {[
                                { num: '01', label: 'Volume', desc: 'Runs often enough that saved minutes add up to real hours.' },
                                { num: '02', label: 'Stability', desc: 'The steps rarely change, so the automation does not constantly break.' },
                                { num: '03', label: 'Rules-clarity', desc: 'You can describe the logic; it is not pure gut feel.' },
                                { num: '04', label: 'Cost of delay', desc: 'Doing it slowly or late actually costs money or customers.' },
                            ].map((item) => (
                                <div key={item.num} className="bg-primary p-4 border-4 border-primary">
                                    <div className="font-mono text-xs text-accent font-bold mb-2">{item.num}</div>
                                    <div className="font-mono text-sm text-surface font-bold uppercase mb-2">{item.label}</div>
                                    <div className="font-sans text-xs text-surface/70 font-bold">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6">
                            Need examples to spark candidates? See <Link to="/blog/ai-automation-examples" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">27 AI automation examples by function</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The 6-Step Implementation Loop
                        </h2>
                        <div className="space-y-3">
                            {[
                                'Map the current process exactly as it runs today — every step and hand-off',
                                'Fix the obvious waste by hand first (never automate a broken process)',
                                'Split steps into rules (deterministic) vs judgment (AI) vs human-approval',
                                'Build the smallest end-to-end version and run it in parallel with the manual one',
                                'Add monitoring and a human checkpoint at the risky step',
                                'Measure against the manual baseline, then expand scope',
                            ].map((item, i) => (
                                <div key={i} className="bg-surface border-2 border-primary p-4 flex gap-4 items-start">
                                    <span className="font-heading font-black text-xl text-accent shrink-0">{`0${i + 1}`}</span>
                                    <span className="font-sans text-sm text-primary/80 font-bold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Where AI Belongs (and Where Plain Rules Win)
                        </h2>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Use plain deterministic rules wherever the logic is clear — they are cheaper, faster, and never hallucinate. Reserve AI for the steps that genuinely need reading, classifying, summarizing, or drafting. The most expensive mistake in BPA is wrapping an LLM around a step that an "if-this-then-that" rule would handle perfectly.
                            </p>
                        </div>
                        <p className="mt-6">
                            For the deeper how on the AI steps, see <Link to="/blog/llm-agents-for-business" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">LLM Agents for Business</Link>; for the service and pricing landscape, <Link to="/blog/ai-automation-services-explained" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">AI Automation Services Explained</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Bottom Line
                        </h2>
                        <p>
                            AI business process automation pays off when you pick a high-volume, stable, rules-clear process, fix it by hand first, automate the smallest end-to-end version, and keep humans on the risky steps. Use AI only where judgment is genuinely needed and rules everywhere else. That discipline is the difference between a workflow that quietly saves hours and an expensive science project.
                        </p>
                    </section>

                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Automate a Whole Process, Not Just a Task
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We will map one end-to-end process, mark the AI vs rules vs human steps, and build it on your infrastructure. Free 15-30 minute call.
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

                    <RelatedReading currentSlug="ai-business-process-automation" />
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
    'ai-business-process-automation': [
        { slug: 'ai-automation-examples', title: '27 Real AI Automation Examples by Business Function' },
        { slug: 'ai-automation-services-explained', title: "AI Automation Services Explained: What's Included and What to Pay" },
        { slug: 'llm-agents-for-business', title: 'LLM Agents for Business: How They Automate Real Work in 2026' },
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
