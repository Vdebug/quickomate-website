import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogOwnInfra() {
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
                            <Clock size={12} /> 6 min read
                        </span>
                        <time dateTime="2026-04-15" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">April 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['Cold Email', 'Agency vs In-House', 'B2B Growth'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        Why You Should Own Your Cold Email Infrastructure (Not Rent It From An Agency)
                    </h1>
                </header>

                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Most B2B agencies sell you "outsourced lead generation" — but what they actually sell is a monthly retainer with a hidden lock-in. The mailboxes, domains, lead lists, and CRM all live on their side. The day you stop paying, the entire pipeline disappears. Here's why that model is broken, and why you should own the infrastructure end-to-end.
                        </p>
                    </div>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Retainer Trap
                        </h2>
                        <p className="mb-4">
                            Traditional cold email agencies operate on a simple model: they own the sending infrastructure (their domains, their mailboxes, their tools), they generate leads on their systems, and they bill you monthly. As long as the retainer keeps flowing, leads keep coming. Stop paying, and overnight you go from a steady pipeline to zero. No domains. No warmed-up mailboxes. No lead history. Nothing.
                        </p>
                        <p>
                            The agencies will tell you this is fine — that the value is in the operation, not the assets. But you wouldn't outsource your own product or your own customer database to a third party with no transfer rights. Your top-of-funnel lead engine is no different.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What "Owning" Actually Means
                        </h2>
                        <p className="mb-4">
                            When we say you should own your cold email infrastructure, we mean every layer of the stack lives on your accounts:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {[
                                'Sending domains registered to your business',
                                'Mailboxes warmed up under your DNS authentication',
                                'Lead databases stored in your CRM, not theirs',
                                'Sequences and automations on tools you have admin access to',
                                'Reply inboxes routed to your people',
                                'Analytics dashboards you can audit anytime',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Sender Reputation Problem
                        </h2>
                        <p className="mb-4">
                            Here's something most clients don't realize until it's too late: when an agency runs cold email through their own pooled infrastructure, you're sharing sender reputation with every other client they have. One bad campaign from another customer can torpedo deliverability for everyone in the pool — including you.
                        </p>
                        <p>
                            When the infrastructure lives on your domains, your reputation is yours alone. The investment in warm-up, DNS, and inbox placement compounds over time and becomes a moat. Three years in, your domain reputation is one of the most valuable assets you own. With a pooled agency setup, you have nothing to show for those three years if the relationship ends.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Cost Math Over 24 Months
                        </h2>
                        <p className="mb-4">
                            A typical retainer agency charges $4,000-$8,000 per month indefinitely. Over 24 months that's $96,000-$192,000 — and at the end you own nothing. With an owned-infrastructure model, you pay a build fee upfront, run the system on your stack, and at month 24 you have a fully working pipeline plus all the institutional knowledge that comes with it.
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">24-Month Comparison</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: 'Retainer Agency Spend', value: '$96K-$192K' },
                                    { label: 'Assets Owned After', value: '$0' },
                                    { label: 'Owned-Infra Spend', value: 'Build fee + ops' },
                                    { label: 'Assets Owned After', value: 'Full pipeline' },
                                ].map((stat) => (
                                    <div key={stat.label + stat.value} className="bg-primary p-4">
                                        <span className="font-heading font-black text-2xl text-accent block">{stat.value}</span>
                                        <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            How Quickomate Does It Differently
                        </h2>
                        <p className="mb-4">
                            We build everything on your infrastructure from day one. Your domains. Your mailboxes. Your CRM. Your data warehouse. We document every automation, train your team, and step back when you're confident running it without us.
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Our goal isn't a 36-month retainer. Our goal is to prove the system works on your stack, hand you the keys, and have you running it independently. That's the whole point.
                            </p>
                        </div>
                    </section>

                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want To Own Your Pipeline?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            If you're tired of agency lock-in and want a cold email system that actually belongs to you, let's talk for 15-30 minutes.
                        </p>
                        <a
                            href="https://cal.com/vasu-gupta-wv3e0q/discovery-call-quickomate"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 font-mono font-bold text-sm tracking-widest uppercase bg-accent text-background px-8 py-4 border-4 border-accent hover:bg-transparent hover:text-accent transition-colors shadow-[4px_4px_0px_0px_rgba(232,228,221,1)]"
                        >
                            LET'S TALK
                            <ArrowUpRight size={18} />
                        </a>
                    </section>
                    <section aria-label="Related reading" className="mt-16 border-t-4 border-primary pt-8">
                        <h2 className="font-mono text-xs text-accent font-bold tracking-widest uppercase mb-6 bg-accent/10 px-3 py-1 inline-block border border-accent/30">
                            RELATED_READING
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { slug: 'cold-email-vs-paid-ads-b2b', title: 'Cold Email vs Paid Ads: Which Actually Works for B2B in 2026?' },
                                { slug: 'ai-lead-generation-for-b2b-companies', title: 'AI Lead Generation for B2B Companies: A 2026 Playbook' },
                                { slug: 'cold-email-system-20-appointments-month', title: 'How We Get 15-20 Qualified Appointments Per Month With Cold Email' },
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
