import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogFollowUpSystem() {
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
                            <Clock size={12} /> 7 min read
                        </span>
                        <time dateTime="2026-04-29" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">April 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['Follow-Up', 'Conversion', 'Revenue Recovery'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        You Don't Have a Lead Problem. You Have a Follow-Up Problem.
                    </h1>
                </header>

                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Most businesses we audit don't need more leads. Their inbound is already working — referrals, ads, organic, events. The leads come in, get one or two human follow-ups, and then quietly disappear into a CRM nobody opens. That gap between "lead arrived" and "deal closed" is where most companies are leaving real money on the floor. A follow-up system fixes it — and the ROI shows up the same month it's installed.
                        </p>
                    </div>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Hidden Hole In Your Funnel
                        </h2>
                        <p className="mb-4">
                            When we run an audit, the conversation usually starts with "we need more leads." Then we look at the data. Lead volume isn't the problem. The problem is that 60-80% of those leads never get followed up with more than twice — and most of them needed five to seven touches to convert.
                        </p>
                        <p className="mb-4">
                            Every B2B sales benchmark study lands in the same place: most closed deals took 5-12 touches. Most sales teams stop after 2-3. That gap is your follow-up hole, and it's worth more than any new lead source you could add.
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                The math is brutal. If you generate 100 leads/month and convert 5%, doubling lead volume costs you another full marketing budget. Doubling your follow-up coverage costs roughly nothing — and often produces the same revenue lift.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What A Follow-Up System Actually Does
                        </h2>
                        <p className="mb-4">
                            A follow-up system isn't "more email blasts." It's an automated layer that sits on top of your existing CRM and makes sure every lead gets the right touch at the right time, without your sales team having to remember anything.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {[
                                'Auto-trigger when a lead enters or moves in your CRM',
                                'Multi-channel sequences — email, SMS, LinkedIn, WhatsApp depending on the lead',
                                'Branching logic based on lead behavior (opened, clicked, replied, ghosted)',
                                'Human handoff exactly when intent crosses a threshold',
                                'Re-engagement waves for cold leads (the 90/180/365-day automation)',
                                'Daily ops dashboard showing which leads need attention right now',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Where The ROI Comes From
                        </h2>
                        <p className="mb-4">
                            Every system Quickomate installs is judged on one of three outcomes: <strong>more revenue, less cost, or saved time</strong>. Follow-up systems hit all three at once, which is why they're usually the highest-ROI install we do:
                        </p>
                        <div className="space-y-4">
                            {[
                                {
                                    h: 'More Revenue',
                                    p: 'You close more of the leads you already have. We routinely see 20-40% lift in conversion rate from inbound leads in the first 60 days after install. That\'s pure margin — no extra acquisition spend.'
                                },
                                {
                                    h: 'Less Cost',
                                    p: 'You stop paying for new leads to plug a leaky funnel. Cost per closed deal drops without your ad spend or lead gen budget changing at all.'
                                },
                                {
                                    h: 'Saved Time',
                                    p: 'Reps stop manually managing follow-up cadences. Their job becomes "talk to leads who are ready" — not "remember which lead I sent something to two weeks ago."'
                                },
                            ].map((item) => (
                                <div key={item.h} className="bg-surface border-4 border-primary p-6">
                                    <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">{item.h}</h3>
                                    <p className="font-sans text-sm text-primary/70 font-bold">{item.p}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Who Needs This (And Who Doesn't)
                        </h2>
                        <p className="mb-4">
                            Not every business needs a follow-up system. Here's the simple test:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-3 border-b-2 border-accent pb-2">Install One If</h3>
                                <ul className="space-y-3 font-sans text-sm text-primary/80 font-bold">
                                    <li className="border-l-2 border-accent pl-3">You generate &gt;50 leads/month from any source.</li>
                                    <li className="border-l-2 border-accent pl-3">Your sales cycle is 7+ days.</li>
                                    <li className="border-l-2 border-accent pl-3">Reps are stretched and dropping leads.</li>
                                    <li className="border-l-2 border-accent pl-3">Your "show rate" or "reply rate" on leads feels low.</li>
                                    <li className="border-l-2 border-accent pl-3">You've never run a re-engagement campaign on cold leads.</li>
                                </ul>
                            </div>
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-3 border-b-2 border-accent pb-2">Skip It If</h3>
                                <ul className="space-y-3 font-sans text-sm text-primary/80 font-bold">
                                    <li className="border-l-2 border-accent pl-3">Your sales cycle is &lt;48 hours and reps already close on first contact.</li>
                                    <li className="border-l-2 border-accent pl-3">Your lead volume is &lt;10/month — too small for automation to matter.</li>
                                    <li className="border-l-2 border-accent pl-3">You don't have product-market fit yet (fix that first).</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What Installation Looks Like
                        </h2>
                        <p className="mb-4">
                            We don't replace your CRM or sales tools. We layer automation on top of whatever you already use (HubSpot, Pipedrive, Close, Salesforce, GoHighLevel, custom). The install is usually 2-4 weeks:
                        </p>
                        <div className="space-y-3">
                            {[
                                { w: 'Week 1', t: 'Audit current funnel, lead sources, CRM stages, drop-off points. Map every lead path.' },
                                { w: 'Week 2', t: 'Design sequences (channels, timing, branching). Write copy. Build automations.' },
                                { w: 'Week 3', t: 'Wire it into the CRM. Test on a small slice of inbound. Tune timing and copy.' },
                                { w: 'Week 4', t: 'Full rollout. Hand off dashboards. Train the team. Document the system.' },
                            ].map((item) => (
                                <div key={item.w} className="bg-surface border-2 border-primary p-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                                    <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest sm:w-24 shrink-0">{item.w}</span>
                                    <span className="font-sans text-sm text-primary/80 font-bold">{item.t}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6">
                            The system runs on your infrastructure. You own every automation, every sequence, every piece of customer data. We hand over the keys — same operating principle as <Link to="/blog/why-you-should-own-your-cold-email-infrastructure" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">our cold email builds</Link>.
                        </p>
                    </section>

                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Stop Losing Leads You Already Paid For.
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            Free 15-30 minute audit of your current follow-up flow. If you have a hole worth fixing, we'll show you the exact lift you'd get.
                        </p>
                        <a
                            href="https://cal.com/vasu-gupta-wv3e0q/discovery-call-quickomate"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 font-mono font-bold text-sm tracking-widest uppercase bg-accent text-background px-8 py-4 border-4 border-accent hover:bg-transparent hover:text-accent transition-colors shadow-[4px_4px_0px_0px_rgba(232,228,221,1)]"
                        >
                            BOOK AUDIT
                            <ArrowUpRight size={18} />
                        </a>
                    </section>

                    <section aria-label="Related reading" className="mt-16 border-t-4 border-primary pt-8">
                        <h2 className="font-mono text-xs text-accent font-bold tracking-widest uppercase mb-6 bg-accent/10 px-3 py-1 inline-block border border-accent/30">
                            RELATED_READING
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { slug: 'crm-automation-systems-for-b2b', title: 'CRM Automation: How Stage-Based Triggers Free Up Your Sales Team' },
                                { slug: 'how-to-know-if-your-business-needs-ai-automation', title: 'How To Know If Your Business Is Ready For AI Automation' },
                                { slug: 'ai-lead-generation-for-b2b-companies', title: 'AI Lead Generation for B2B Companies: A 2026 Playbook' },
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
