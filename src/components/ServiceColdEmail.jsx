import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const CAL = 'https://cal.com/vasu-gupta-wv3e0q/discovery-call-quickomate';

export default function ServiceColdEmail() {
    return (
        <div className="min-h-screen bg-background text-textMain pt-32 pb-20 px-6 sm:px-12 md:px-24">
            <div className="max-w-5xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors mb-12">
                    <ArrowLeft size={14} />
                    Home
                </Link>

                <header className="mb-16 border-b-4 border-primary pb-8">
                    <div className="font-mono text-[10px] text-accent font-bold uppercase tracking-widest bg-accent/10 px-2 py-1 inline-block border border-accent/30 mb-6">
                        SERVICE // COLD_EMAIL
                    </div>
                    <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-primary tracking-tighter uppercase leading-[1.05]">
                        B2B Cold Email Agency
                    </h1>
                    <p className="font-sans text-lg sm:text-xl text-primary/70 font-bold max-w-3xl mt-6 border-l-4 border-accent pl-6 leading-relaxed">
                        We build cold email systems that book 15-20 qualified B2B appointments a month at a realistic ~4% reply rate — AI-assisted research, human-crafted copy, and infrastructure you own.
                    </p>
                    <a href={CAL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 font-mono font-bold text-sm tracking-widest uppercase bg-accent text-background px-8 py-4 mt-8 border-4 border-accent hover:bg-transparent hover:text-accent transition-colors shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                        LET'S TALK <ArrowUpRight size={18} />
                    </a>
                </header>

                <div className="flex flex-col gap-12 font-sans text-base text-primary/80 leading-relaxed">
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What You Get
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                'Dedicated sending domains and warmed mailboxes with SPF, DKIM, and DMARC',
                                'Fresh, verified lead lists matched to your ICP — never bought lists',
                                'AI-researched, human-written copy that books meetings, not spam folders',
                                'CRM intake, lead scoring, reply routing, and automated follow-up',
                                'Live dashboards on deliverability, reply quality, and meetings booked',
                                'Full ownership: every domain, mailbox, and lead stays yours',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold">{item}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Realistic Numbers
                        </h2>
                        <div className="bg-surface border-4 border-primary p-6">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    { v: '15-20', l: 'Qualified appointments / month' },
                                    { v: '~4%', l: 'Overall reply rate' },
                                    { v: '1-2%', l: 'Positive reply rate' },
                                ].map((s) => (
                                    <div key={s.l} className="bg-primary p-4">
                                        <span className="font-heading font-black text-3xl text-accent block">{s.v}</span>
                                        <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">{s.l}</span>
                                    </div>
                                ))}
                            </div>
                            <p className="font-sans text-sm text-primary/70 font-bold mt-4">
                                Anyone promising 8-10%+ reply rates on cold traffic is cherry-picking warm leads or burning sending domains. We optimize for sustainable inbox placement and long-term reputation.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Proof: Solaris Wireless
                        </h2>
                        <p>
                            We deployed an end-to-end AI cold email system that autonomously prospects, qualifies, and delivers 15-20 warm leads every month — paired with a custom CRM with intelligent scoring and automated nurture that prioritizes high-intent enterprise buyers.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Go Deeper
                        </h2>
                        <p>
                            See exactly how the system works: <Link to="/blog/cold-email-system-20-appointments-month" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">how we get 15-20 appointments a month</Link>, <Link to="/blog/cold-email-deliverability-spf-dkim-dmarc-guide" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">the deliverability stack</Link>, and <Link to="/blog/why-you-should-own-your-cold-email-infrastructure" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">why you should own your infrastructure</Link>. Comparing options? <Link to="/blog/how-to-vet-a-cold-email-agency-red-flags" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">How to vet a cold email agency</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-6 border-l-4 border-accent pl-4">
                            FAQ
                        </h2>
                        <div className="space-y-4">
                            {[
                                { q: 'How many appointments will a cold email system book?', a: 'A well-built system consistently books 15-20 qualified B2B appointments per month at a realistic ~4% reply rate, sending roughly 5,000-15,000 emails.' },
                                { q: 'How long until I see meetings?', a: 'Mailbox warm-up and infrastructure setup take about 2-3 weeks before sending at scale. Most clients see their first qualified meetings within 30-45 days of kickoff.' },
                                { q: 'Do I own the cold email system?', a: 'Yes. Unlike agencies that lock you into a retainer and take their leads when you leave, we build everything on your infrastructure. You own every domain, mailbox, lead, and campaign from day one.' },
                            ].map((f) => (
                                <div key={f.q} className="bg-surface border-4 border-primary p-5">
                                    <h3 className="font-heading font-black text-base text-primary uppercase mb-2">{f.q}</h3>
                                    <p className="font-sans text-sm text-primary/70 font-bold">{f.a}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section className="bg-primary border-4 border-primary p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want 15-20 Meetings a Month?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We will walk through your ICP, current funnel, and the exact cold email system we would build for your team. Free 15-30 minute call.
                        </p>
                        <a href={CAL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 font-mono font-bold text-sm tracking-widest uppercase bg-accent text-background px-8 py-4 border-4 border-accent hover:bg-transparent hover:text-accent transition-colors shadow-[4px_4px_0px_0px_rgba(232,228,221,1)]">
                            LET'S TALK <ArrowUpRight size={18} />
                        </a>
                    </section>
                </div>
            </div>
        </div>
    );
}
