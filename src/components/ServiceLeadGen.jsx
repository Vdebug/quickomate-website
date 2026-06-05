import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const CAL = 'https://cal.com/vasu-gupta-wv3e0q/discovery-call-quickomate';

export default function ServiceLeadGen() {
    return (
        <div className="min-h-screen bg-background text-textMain pt-32 pb-20 px-6 sm:px-12 md:px-24">
            <div className="max-w-5xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors mb-12">
                    <ArrowLeft size={14} />
                    Home
                </Link>

                <header className="mb-16 border-b-4 border-primary pb-8">
                    <div className="font-mono text-[10px] text-accent font-bold uppercase tracking-widest bg-accent/10 px-2 py-1 inline-block border border-accent/30 mb-6">
                        SERVICE // LEAD_GEN
                    </div>
                    <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-primary tracking-tighter uppercase leading-[1.05]">
                        B2B Lead Generation Agency
                    </h1>
                    <p className="font-sans text-lg sm:text-xl text-primary/70 font-bold max-w-3xl mt-6 border-l-4 border-accent pl-6 leading-relaxed">
                        We build AI-powered lead generation systems that fill your pipeline with qualified B2B opportunities — sourcing, enrichment, outreach, and routing — all owned by you, built for SaaS and fast-moving B2B teams.
                    </p>
                    <a href={CAL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 font-mono font-bold text-sm tracking-widest uppercase bg-accent text-background px-8 py-4 mt-8 border-4 border-accent hover:bg-transparent hover:text-accent transition-colors shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                        LET'S TALK <ArrowUpRight size={18} />
                    </a>
                </header>

                <div className="flex flex-col gap-12 font-sans text-base text-primary/80 leading-relaxed">
                    <section className="bg-accent/10 border-4 border-accent p-6">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            The lead generation system is part of the larger AI automation stack: sourcing, enrichment, verification, qualification, outreach, CRM routing, and follow-up all connect so your pipeline becomes an owned operating system instead of a rented agency spreadsheet.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Lead Engine We Build
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { h: 'Sourcing', p: 'Pull prospects matching your exact ICP from multiple data sources at scale.' },
                                { h: 'Enrichment', p: 'Add role, company stage, tech stack, and buying-intent signals to every lead.' },
                                { h: 'Qualification', p: 'AI scores fit and intent so your reps only ever work the leads worth working.' },
                                { h: 'Activation', p: 'The right message, on the right channel, with automated follow-up and routing.' },
                            ].map((item) => (
                                <div key={item.h} className="bg-primary p-5 border-4 border-primary">
                                    <div className="font-heading font-black text-lg text-surface uppercase mb-1">{item.h}</div>
                                    <div className="font-sans text-xs text-surface/70 font-bold">{item.p}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Built for B2B & SaaS
                        </h2>
                        <p>
                            We specialize in narrow, definable B2B and SaaS audiences — exactly where targeted outbound beats paid ads on cost per opportunity. You get a predictable, owned pipeline instead of a rented one that disappears when you stop paying an agency retainer.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Proof
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { stat: '15-20', label: 'Qualified leads / month (Solaris Wireless)' },
                                { stat: '~4%', label: 'Realistic cold reply rate' },
                                { stat: '+185%', label: 'Engagement lift (Aikon outreach)' },
                            ].map((c) => (
                                <div key={c.label} className="bg-surface border-4 border-primary p-5 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)]">
                                    <span className="font-heading font-black text-3xl text-accent block">{c.stat}</span>
                                    <span className="font-sans text-xs text-primary/70 font-bold block mt-2">{c.label}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Go Deeper
                        </h2>
                        <p>
                            Read the full <Link to="/blog/ai-lead-generation-for-b2b-companies" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">AI lead generation playbook</Link>, how <Link to="/blog/ai-lead-qualification" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">AI lead qualification</Link> focuses your reps, the <Link to="/blog/ai-sales-prospecting" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">AI sales prospecting workflow</Link>, and the math on <Link to="/blog/cold-email-vs-paid-ads-b2b" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">cold email vs paid ads</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-6 border-l-4 border-accent pl-4">
                            FAQ
                        </h2>
                        <div className="space-y-4">
                            {[
                                { q: 'What does a B2B lead generation agency do?', a: 'It builds and runs the system that fills your pipeline — sourcing prospects to your ICP, enriching and qualifying them, and activating outreach — so your sales team spends time selling, not prospecting.' },
                                { q: 'Is this better for SaaS and B2B specifically?', a: 'Yes. Targeted outbound works best for narrow, definable B2B and SaaS audiences, where it beats paid ads on cost per qualified opportunity.' },
                                { q: 'Do I own the lead generation system and data?', a: 'Yes. The infrastructure, lead data, and CRM all live on your accounts. You keep every lead and the whole engine if you ever stop working with us.' },
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
                            Fill Your Pipeline — and Own It
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We will map your ICP and the exact lead generation engine we would build for your team. Free 15-30 minute call.
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
