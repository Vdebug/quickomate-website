import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';
import AiReadinessQuiz from './AiReadinessQuiz';

export default function BlogReadinessCheck() {
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
                        <time dateTime="2026-04-29" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">April 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['AI Automation', 'Growth Systems', 'ROI'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        How To Know If Your Business Is Ready For AI Automation
                    </h1>
                </header>

                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Every founder gets pitched AI automation in 2026. Most don't need it yet — and the ones who do often need a different system than the one they were sold. The actual question isn't "should I use AI?" It's "is there a process in my business that, if automated, would either make me more money, save me money, or save my team's time?" If yes, build it. If no, you're not ready, and no software will fix that.
                        </p>
                    </div>

                    {/* AI Automation Readiness Quiz (lead magnet) */}
                    <AiReadinessQuiz />

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Only Three Reasons To Install An Automation
                        </h2>
                        <p className="mb-4">
                            Every system Quickomate ships hits one of three outcomes. If a proposed automation doesn't clearly land in one of these buckets, we don't build it:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                            {[
                                {
                                    h: 'Make More Money',
                                    p: 'Lead generation, follow-up, conversion lift, upsell automations, win-back sequences. Direct revenue impact.'
                                },
                                {
                                    h: 'Save Money',
                                    p: 'Cut tooling costs, reduce CAC, eliminate redundant SaaS, replace agency retainers with owned systems.'
                                },
                                {
                                    h: 'Save Team Time',
                                    p: 'Remove repetitive tasks from people who should be selling, building, or strategizing instead.'
                                },
                            ].map((item) => (
                                <div key={item.h} className="bg-primary p-6 border-4 border-primary">
                                    <h3 className="font-heading font-black text-lg text-surface uppercase mb-2">{item.h}</h3>
                                    <p className="font-sans text-sm text-surface/80 font-bold">{item.p}</p>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6">
                            "Cool AI demo" is not on that list. "We should use AI because everyone is" is not on that list. If you can't draw a clear line from automation to one of these three outcomes, the system isn't worth building yet.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Readiness Test (5 Questions)
                        </h2>
                        <p className="mb-4">
                            Walk through these. Honest answers in under three minutes will tell you whether you're ready for AI automation today, in six months, or never.
                        </p>
                        <div className="space-y-4">
                            {[
                                {
                                    q: '01 — Do you have a documented process that runs at least weekly?',
                                    a: 'You can\'t automate what you can\'t describe. If the process changes every time, or only one person knows how it works, automate the documentation first.'
                                },
                                {
                                    q: '02 — Is the process eating real hours from someone who should be doing higher-value work?',
                                    a: 'A rep doing 4 hours/week of CRM data entry is a candidate. A founder spending 20 minutes a week on accounting is not.'
                                },
                                {
                                    q: '03 — Can you draw a straight line from this automation to revenue, cost, or time saved?',
                                    a: 'If the answer is "we\'d be more efficient" — too vague. If the answer is "this saves 15 hours/week of rep time so I don\'t need to hire SDR #4" — green light.'
                                },
                                {
                                    q: '04 — Do you have product-market fit?',
                                    a: 'Pre-PMF, automation is premature optimization. The shape of your funnel changes too fast to lock in workflows. Ship the product first.'
                                },
                                {
                                    q: '05 — Do you have at least one of: 50+ leads/month, 5+ team members, or a documented sales cycle?',
                                    a: 'Below this threshold, automation overhead exceeds the time it saves. You\'re better off doing the thing manually for another quarter.'
                                },
                            ].map((item) => (
                                <div key={item.q} className="bg-surface border-4 border-primary p-6">
                                    <h3 className="font-heading font-black text-base text-primary uppercase mb-2 tracking-tight">{item.q}</h3>
                                    <p className="font-sans text-sm text-primary/70 font-bold border-l-2 border-accent pl-3">{item.a}</p>
                                </div>
                            ))}
                        </div>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-6">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Five "yes" answers = you're ready and the ROI math will work fast. Three or four = build the smallest, most targeted automation possible and prove ROI before scaling. Fewer than three = focus on the business fundamentals first.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Where Most Teams Should Start
                        </h2>
                        <p className="mb-4">
                            If you pass the test, here's the install order we recommend in 90% of cases. Do them in this sequence — each one compounds on the previous:
                        </p>
                        <div className="space-y-3">
                            {[
                                {
                                    n: '01',
                                    h: 'Lead Capture & Routing',
                                    p: 'Every lead from every source lands in one CRM with proper attribution. No leads in spreadsheets, inboxes, or DMs. ROI: time + revenue.',
                                    link: null
                                },
                                {
                                    n: '02',
                                    h: 'Follow-Up Automation',
                                    p: 'Sequences fire based on lead behavior. Reps stop manually managing cadence. ROI: revenue (highest in our experience).',
                                    link: { slug: 'follow-up-system-for-b2b', label: 'See the playbook' }
                                },
                                {
                                    n: '03',
                                    h: 'Stage-Based CRM Triggers',
                                    p: 'Move a lead between stages and the right things happen automatically — emails, reminders, handoffs, alerts. ROI: time.',
                                    link: { slug: 'crm-automation-systems-for-b2b', label: 'See how stage triggers work' }
                                },
                                {
                                    n: '04',
                                    h: 'Outbound (If Applicable)',
                                    p: 'Layer cold email or paid ads only after the inbound funnel converts properly. Otherwise you pour leads into a leaky bucket. ROI: revenue.',
                                    link: { slug: 'cold-email-vs-paid-ads-b2b', label: 'Cold email vs paid ads' }
                                },
                                {
                                    n: '05',
                                    h: 'Reporting & Optimization Layer',
                                    p: 'Dashboards that show what\'s working and what isn\'t in real time. Without this, you can\'t iterate. ROI: better decisions = revenue + cost.',
                                    link: null
                                },
                            ].map((item) => (
                                <div key={item.n} className="bg-surface border-2 border-primary p-4 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                                    <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest sm:w-8 shrink-0">{item.n}</span>
                                    <div>
                                        <div className="font-heading font-black text-sm text-primary uppercase mb-1 tracking-tight">{item.h}</div>
                                        <div className="font-sans text-sm text-primary/80 font-bold mb-1">{item.p}</div>
                                        {item.link && (
                                            <Link to={`/blog/${item.link.slug}`} className="font-mono text-xs text-accent font-bold uppercase tracking-widest hover:underline">
                                                → {item.link.label}
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            How To Calculate ROI Before You Build
                        </h2>
                        <p className="mb-4">
                            Don't install anything until you've done this math. It takes 10 minutes and saves you from buying systems that look impressive but pay back slowly.
                        </p>
                        <div className="bg-primary border-4 border-primary p-6 mt-4">
                            <p className="font-mono text-sm text-surface font-bold uppercase mb-3 border-b border-surface/20 pb-2">THE THREE ROI EQUATIONS</p>
                            <div className="font-mono text-xs text-surface/90 font-bold space-y-3">
                                <div>&gt; <span className="text-accent">Revenue lift:</span> (extra deals/year × avg deal size) − annual system cost</div>
                                <div>&gt; <span className="text-accent">Cost savings:</span> (tools or headcount eliminated × cost) − annual system cost</div>
                                <div>&gt; <span className="text-accent">Time savings:</span> (hours saved/week × 50 × loaded hourly cost) − annual system cost</div>
                            </div>
                        </div>
                        <p className="mt-6">
                            If the result of any one of those three is at least 3-5x the system cost, build it. If not, the project is too small or the ROI assumption is too soft.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Bottom Line
                        </h2>
                        <p>
                            Don't install AI automation because everyone says you should. Install it when you've found a process that's costing you real money or time, you can describe it clearly, and the math says the system pays for itself in months — not years. Anything else is a distraction. The best automation is invisible: it just makes the business work better, every single day, while your team focuses on the things that need a human.
                        </p>
                    </section>

                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Not Sure If You're Ready?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            Free 15-30 minute audit. We'll walk through your business, find the highest-ROI automation candidate, and tell you straight whether to build now or wait.
                        </p>
                        <a
                            href="https://cal.com/vasu-gupta-wv3e0q/discovery-call-quickomate"
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-3 font-mono font-bold text-sm tracking-widest uppercase bg-accent text-background px-8 py-4 border-4 border-accent hover:bg-transparent hover:text-accent transition-colors shadow-[4px_4px_0px_0px_rgba(232,228,221,1)]"
                        >
                            BOOK AN AUDIT
                            <ArrowUpRight size={18} />
                        </a>
                    </section>

                    <section aria-label="Related reading" className="mt-16 border-t-4 border-primary pt-8">
                        <h2 className="font-mono text-xs text-accent font-bold tracking-widest uppercase mb-6 bg-accent/10 px-3 py-1 inline-block border border-accent/30">
                            RELATED_READING
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { slug: 'follow-up-system-for-b2b', title: 'You Don\'t Have a Lead Problem. You Have a Follow-Up Problem.' },
                                { slug: 'crm-automation-systems-for-b2b', title: 'CRM Automation: How Stage-Based Triggers Free Up Your Sales Team' },
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
