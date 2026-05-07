import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogAiLeadGen() {
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
                        <time dateTime="2026-04-28" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">April 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['AI Lead Generation', 'B2B Sales', 'Sales Automation'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        AI Lead Generation for B2B Companies: A 2026 Playbook
                    </h1>
                </header>

                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Every B2B founder in 2026 has been pitched "AI lead generation" — usually by someone selling a tool that turns your sales team into a prompt engineer. The reality is more useful and more boring: AI is a research multiplier, not a replacement for sales. Here's the actual stack that works, where AI wins, and where it still loses.
                        </p>
                    </div>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What "AI Lead Generation" Actually Means
                        </h2>
                        <p className="mb-4">
                            Strip the marketing fluff and AI lead generation is three things stacked on top of each other:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                            {[
                                { num: '01', label: 'Sourcing', desc: 'Pull prospects matching your ICP from public sources at scale.' },
                                { num: '02', label: 'Enrichment', desc: 'Add context: role, company stage, signals, intent triggers.' },
                                { num: '03', label: 'Activation', desc: 'Reach out with the right message, at the right time, on the right channel.' },
                            ].map((item) => (
                                <div key={item.num} className="bg-primary p-4 border-4 border-primary">
                                    <div className="font-mono text-xs text-accent font-bold mb-2">{item.num}</div>
                                    <div className="font-mono text-sm text-surface font-bold uppercase mb-2">{item.label}</div>
                                    <div className="font-sans text-xs text-surface/70 font-bold">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6">
                            Two of the three (sourcing and enrichment) are exactly where AI excels. The third (activation) is where most "AI lead gen" tools quietly fail — because writing copy that converts cold humans is still a human skill.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Where AI Wins (Use It Aggressively)
                        </h2>
                        <p className="mb-4">
                            These are the layers where AI delivers real, measurable leverage — and where teams that aren't using AI in 2026 are operating at a structural disadvantage:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {[
                                'Scraping and structuring company websites for context',
                                'Summarizing LinkedIn activity into talking points',
                                'Detecting buying signals (hiring, funding, product launches, tech changes)',
                                'Inferring decision-maker hierarchy from public data',
                                'Cleaning and deduplicating lead lists across sources',
                                'Predicting which prospects are worth contacting (and which to skip)',
                                'Routing replies to the right rep based on intent classification',
                                'A/B testing subject lines and analyzing open-rate patterns',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Where AI Still Loses (Don't Outsource These)
                        </h2>
                        <p className="mb-4">
                            And then there are the layers where AI consistently underperforms — and where the agencies promising "fully autonomous lead gen" are quietly tanking client results:
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4 mb-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Writing the actual cold email opener. Choosing the hook. Crafting the CTA. Picking the timing. Reading the room of a specific prospect's reply. These remain human skills — and the gap between "AI-written cold email" and "human-written, AI-researched cold email" shows up directly in reply rates.
                            </p>
                        </div>
                        <p>
                            We covered this in detail in <Link to="/blog/ai-vs-human-cold-email-copy" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">AI vs Human Cold Email Copy</Link> — the short version is that LLMs produce safe, average, agreeable text, which is the opposite of what cuts through a busy inbox.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Realistic Conversion Benchmarks
                        </h2>
                        <p className="mb-4">
                            If a vendor or agency can't tell you their realistic numbers, walk away. Here's what we see consistently across B2B clients running an AI-research + human-copy hybrid:
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">2026 Benchmarks (Cold B2B Outreach)</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: 'Open Rate', value: '50-65%' },
                                    { label: 'Overall Reply Rate', value: '~4%' },
                                    { label: 'Positive Reply Rate', value: '1-2%' },
                                    { label: 'Meetings / 1,000 Sent', value: '1.5-2.5' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-primary p-4">
                                        <span className="font-heading font-black text-2xl text-accent block">{stat.value}</span>
                                        <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mt-6">
                            At 10,000 sends per month, those numbers translate to roughly 15-25 booked meetings — which is what we deliver consistently. <Link to="/blog/cold-email-system-20-appointments-month" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">Here's the full breakdown of the system that gets there</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The 2026 Stack (What We Actually Deploy)
                        </h2>
                        <p className="mb-4">
                            We're not religious about specific vendors — the stack changes every 6-9 months as tools improve. But the layers stay the same:
                        </p>
                        <div className="space-y-3">
                            {[
                                { layer: 'Data layer', desc: 'Multi-source ICP databases, custom scrapers for niche verticals, intent signal feeds.' },
                                { layer: 'Enrichment layer', desc: 'LLM-powered company research, role inference, signal detection.' },
                                { layer: 'Sending layer', desc: 'Owned domains, warmed mailboxes, SPF/DKIM/DMARC, dedicated IPs at scale.' },
                                { layer: 'Copy layer', desc: 'AI-assisted research briefs + human-written templates with prospect-level personalization.' },
                                { layer: 'CRM layer', desc: 'Automated intake, intent scoring, reply classification, calendar routing.' },
                                { layer: 'Reporting layer', desc: 'Live dashboards on deliverability, reply quality, meeting-to-close rates.' },
                            ].map((item) => (
                                <div key={item.layer} className="bg-surface border-2 border-primary p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                                    <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest sm:w-40 shrink-0">{item.layer}</span>
                                    <span className="font-sans text-sm text-primary/80 font-bold">{item.desc}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Build vs. Buy vs. Retainer
                        </h2>
                        <p className="mb-4">
                            Three paths. Different math.
                        </p>
                        <div className="space-y-4">
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">Build in-house</h3>
                                <p className="font-sans text-sm text-primary/70 font-bold">Best long-term ROI. 4-6 month ramp. Needs a competent ops hire and tolerance for trial-and-error.</p>
                            </div>
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">Buy a SaaS platform</h3>
                                <p className="font-sans text-sm text-primary/70 font-bold">Faster but generic. You inherit their templates, their data sources, their assumptions. Ceiling is low.</p>
                            </div>
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">Hire a retainer agency</h3>
                                <p className="font-sans text-sm text-primary/70 font-bold">Fast results, indefinite cost, zero ownership. <Link to="/blog/why-you-should-own-your-cold-email-infrastructure" className="text-accent underline decoration-2 underline-offset-4 hover:text-primary">Why this is usually a trap</Link>.</p>
                            </div>
                            <div className="bg-primary border-4 border-accent p-6">
                                <h3 className="font-heading font-black text-lg text-textInverted uppercase mb-2">The hybrid (what we do)</h3>
                                <p className="font-sans text-sm text-textInverted/80 font-bold">External team builds the system on your infrastructure, trains your team, hands over the keys. Cost ceiling, asset built, no lock-in.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Bottom Line for Founders
                        </h2>
                        <p>
                            AI lead generation is real, valuable, and underutilized — but only when you treat AI as a research and routing multiplier, not a copywriter. Build (or buy a build) on your own infrastructure, keep humans in the loop on every outbound message, and measure ruthlessly against realistic benchmarks. The companies winning B2B outbound in 2026 are the ones who refused to outsource judgment to a model.
                        </p>
                    </section>

                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want To See This Stack In Action?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We'll walk through your ICP, current funnel, and the exact AI lead generation stack we'd build for your team. Free 15-30 minute call.
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

                    <RelatedReading currentSlug="ai-lead-generation-for-b2b-companies" />
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
    'ai-lead-generation-for-b2b-companies': [
        { slug: 'cold-email-system-20-appointments-month', title: 'How We Get 15-20 Qualified Appointments Per Month With Cold Email' },
        { slug: 'ai-vs-human-cold-email-copy', title: 'AI vs Human Cold Email Copy: Why Full Automation Kills Your Reply Rate' },
        { slug: 'cold-email-vs-paid-ads-b2b', title: 'Cold Email vs Paid Ads: Which Actually Works for B2B in 2026?' },
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
