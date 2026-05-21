import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogAiAutomationConsultant() {
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
                        <time dateTime="2026-05-21" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">May 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['AI Automation', 'Consulting', 'Strategy'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        Do You Need an AI Automation Consultant? When to Hire One vs Build In-House
                    </h1>
                </header>

                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            An AI automation consultant is worth real money in exactly one situation: when you do not yet know what to automate or in what order. That is a strategy problem, and strategy is what consultants are for. If you already know what to build, you do not need advice — you need a builder. Here is how to tell which problem you actually have.
                        </p>
                    </div>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What an AI Automation Consultant Does (and Doesn't)
                        </h2>
                        <p className="mb-4">
                            A consultant diagnoses. They map your processes, find the bottlenecks, calculate where automation returns the most, and hand you a prioritized roadmap. Most do not build the systems themselves — automation consulting and automation building are different jobs, and conflating them is how budgets get wasted.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div className="bg-primary p-5 border-4 border-primary">
                                <div className="font-mono text-sm text-accent font-bold uppercase mb-2">A consultant SHOULD</div>
                                <ul className="font-sans text-xs text-surface/80 font-bold space-y-2">
                                    <li>— Audit your processes and data readiness</li>
                                    <li>— Rank opportunities by ROI and effort</li>
                                    <li>— Tell you what NOT to automate</li>
                                    <li>— Give you a build sequence and budget</li>
                                </ul>
                            </div>
                            <div className="bg-primary p-5 border-4 border-primary">
                                <div className="font-mono text-sm text-accent font-bold uppercase mb-2">A consultant is NOT</div>
                                <ul className="font-sans text-xs text-surface/80 font-bold space-y-2">
                                    <li>— A builder who ships the system</li>
                                    <li>— A reseller pushing one vendor</li>
                                    <li>— A substitute for fixing a broken process</li>
                                    <li>— Worth a retainer once the roadmap exists</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Hire a Consultant When...
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {[
                                'You have many possible automations and no idea which to do first',
                                'Leadership disagrees on where AI fits and you need a neutral read',
                                'You tried automating before and it failed or got abandoned',
                                'Your data and processes are messy and you need a readiness assessment',
                                'You are about to spend serious budget and want a second opinion',
                                'You need a roadmap to get internal buy-in or funding',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Build In-House (or Hire a Build Team) When...
                        </h2>
                        <p className="mb-4">
                            If you already know the answer to "what should we automate first," paying for more analysis is procrastination. You need execution. Three execution paths:
                        </p>
                        <div className="space-y-4">
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">In-house</h3>
                                <p className="font-sans text-sm text-primary/70 font-bold">Best long-term ROI if you have a capable ops person and tolerance for a 3-6 month learning curve.</p>
                            </div>
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">SaaS platform</h3>
                                <p className="font-sans text-sm text-primary/70 font-bold">Fast to start, generic by design, low ceiling. You inherit the vendor's assumptions.</p>
                            </div>
                            <div className="bg-primary border-4 border-accent p-6">
                                <h3 className="font-heading font-black text-lg text-textInverted uppercase mb-2">Build team / agency that hands over ownership</h3>
                                <p className="font-sans text-sm text-textInverted/80 font-bold">They build it on your infrastructure and train your team. Fast results, no permanent dependency. <Link to="/blog/what-is-an-ai-automation-agency" className="text-accent underline decoration-2 underline-offset-4 hover:text-primary">How to choose one</Link>.</p>
                            </div>
                        </div>
                        <p className="mt-6">
                            The same build-vs-buy logic we apply to outbound applies here — see the decision framework in <Link to="/blog/build-in-house-or-hire-cold-email-agency" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">Build It In-House or Hire an Agency</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Trap: Paying for Strategy You'll Never Execute
                        </h2>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                The most common waste in this space is a $10k strategy deck that sits in a drawer because nobody on the team can actually build what it recommends. Strategy without execution capacity is a receipt, not a result. If you buy advice, make sure you have a clear, funded path to act on it.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            A Faster First Step
                        </h2>
                        <p>
                            Before you pay anyone for a strategy engagement, run the free five-question readiness check in <Link to="/blog/how-to-know-if-your-business-needs-ai-automation" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">How To Know If Your Business Is Ready For AI Automation</Link>. It tells you in ten minutes whether your real problem is strategy, execution, or a process that needs fixing by hand first. That answer decides whether you need a consultant at all.
                        </p>
                    </section>

                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Strategy AND a Working System
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We do both — diagnose the highest-ROI opportunity and build it on your infrastructure, then hand you the keys. Free 15-30 minute call to see where you'd start.
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

                    <RelatedReading currentSlug="do-you-need-an-ai-automation-consultant" />
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
    'do-you-need-an-ai-automation-consultant': [
        { slug: 'what-is-an-ai-automation-agency', title: 'What Is an AI Automation Agency? What They Do, Cost, and How to Choose' },
        { slug: 'how-to-know-if-your-business-needs-ai-automation', title: 'How To Know If Your Business Is Ready For AI Automation' },
        { slug: 'sales-automation-roi-calculator', title: 'The Real ROI of Sales Automation: Calculate Hours and Dollars First' },
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
