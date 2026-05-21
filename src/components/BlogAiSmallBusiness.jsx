import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogAiSmallBusiness() {
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
                        {['AI Automation', 'Small Business', 'Growth Systems'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        AI Automation for Small Business: Where to Start (and What to Skip) in 2026
                    </h1>
                </header>

                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Small businesses have the most to gain from AI automation and the least margin for a failed experiment. The winning move is not "adopt AI" — it is to automate the one or two tasks stealing your week, prove it, and reinvest the time. Here is where to start, what to skip, and how to do it without a technical team or a big budget.
                        </p>
                    </div>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Why Small Businesses Win Faster With Automation
                        </h2>
                        <p>
                            You have fewer approval layers, simpler processes, and a clearer view of where time leaks. A big company needs a committee to change a workflow; you can change one this afternoon. That speed is your advantage — the constraint is focus. The mistake is spreading a small budget across five half-built automations instead of nailing one.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Start Here (Highest ROI for Small Teams)
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {[
                                'Auto-follow-up on leads and quotes that go cold after one touch',
                                'Turn inbound enquiries into clean CRM records automatically',
                                'Draft replies to common customer questions for you to approve',
                                'Generate first-draft proposals and invoices from a template',
                                'Schedule and remind: bookings, payments, review requests',
                                'Repurpose one piece of content into a week of posts',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6">
                            The follow-up one alone usually pays for everything else — most small businesses lose more revenue to <Link to="/blog/follow-up-system-for-b2b" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">weak follow-up</Link> than to weak lead flow.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What to Skip (For Now)
                        </h2>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Skip fully autonomous customer-facing agents, anything that needs clean data you do not have yet, and "AI strategy" engagements that produce a deck instead of a working system. Skip automating a process you cannot yet describe in five steps — fix it by hand first, then automate the version that works.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What It Costs
                        </h2>
                        <p className="mb-4">
                            Small-business automation does not require enterprise budgets. Realistic 2026 ranges:
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    { label: 'DIY tools / month', value: '$50–$300' },
                                    { label: 'One workflow built', value: '$500–$3k' },
                                    { label: 'Done-for-you system', value: '$2k–$8k' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-primary p-4">
                                        <span className="font-heading font-black text-2xl text-accent block">{stat.value}</span>
                                        <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mt-6">
                            For tool picks at the DIY end, see <Link to="/blog/best-ai-automation-tools-2026" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">the best AI automation tools</Link>; for the full menu, <Link to="/blog/ai-automation-services-explained" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">AI automation services explained</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Bottom Line
                        </h2>
                        <p>
                            Pick one painful, repetitive task. Automate it with a human approving the output. Measure the hours you get back for 30 days. Reinvest those hours into the next one. That compounding loop — not a big-bang AI rollout — is how small businesses turn automation into a real advantage in 2026.
                        </p>
                    </section>

                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Find Your First Automation
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We will look at your week, find the one task worth automating first, and tell you whether to DIY it or have it built. Free 15-30 minute call.
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

                    <RelatedReading currentSlug="ai-automation-for-small-business" />
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
    'ai-automation-for-small-business': [
        { slug: 'ai-automation-examples', title: '27 Real AI Automation Examples by Business Function' },
        { slug: 'best-ai-automation-tools-2026', title: 'The Best AI Automation Tools in 2026 (Honest Comparison by Use Case)' },
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
