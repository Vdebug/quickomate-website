import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

const CAL = 'https://cal.com/vasu-gupta-wv3e0q/discovery-call-quickomate';

export default function ServiceAiAutomation() {
    return (
        <div className="min-h-screen bg-background text-textMain pt-32 pb-20 px-6 sm:px-12 md:px-24">
            <div className="max-w-5xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors mb-12">
                    <ArrowLeft size={14} />
                    Home
                </Link>

                <header className="mb-16 border-b-4 border-primary pb-8">
                    <div className="font-mono text-[10px] text-accent font-bold uppercase tracking-widest bg-accent/10 px-2 py-1 inline-block border border-accent/30 mb-6">
                        SERVICE // AI_AUTOMATION
                    </div>
                    <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-primary tracking-tighter uppercase leading-[1.05]">
                        AI Automation Agency
                    </h1>
                    <p className="font-sans text-lg sm:text-xl text-primary/70 font-bold max-w-3xl mt-6 border-l-4 border-accent pl-6 leading-relaxed">
                        We build custom AI automation systems that run your lead generation, sales operations, and back office — on infrastructure you own outright. No black box. No retainer you can never cancel.
                    </p>
                    <a href={CAL} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 font-mono font-bold text-sm tracking-widest uppercase bg-accent text-background px-8 py-4 mt-8 border-4 border-accent hover:bg-transparent hover:text-accent transition-colors shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                        LET'S TALK <ArrowUpRight size={18} />
                    </a>
                </header>

                <div className="flex flex-col gap-12 font-sans text-base text-primary/80 leading-relaxed">
                    <section className="bg-accent/10 border-4 border-accent p-6">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Quickomate is best for B2B teams that already know manual work is slowing revenue: lead research, CRM admin, qualification, follow-up, reporting, onboarding, or support triage. We map the bottleneck, build the smallest automation that pays back, and hand over the system with docs.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What We Automate
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { num: 'INFRA_01', label: 'AI Lead Generation', desc: 'Prospecting, enrichment, verification, and personalization systems that turn cold traffic into qualified meetings.' },
                                { num: 'INFRA_02', label: 'LLM Agents', desc: 'Narrow agents that classify, summarize, draft, and route work with guardrails and human approval where risk is high.' },
                                { num: 'INFRA_03', label: 'Sales & CRM Automation', desc: 'Automated intake, lead scoring, routing, nurture, and CRM cleanup so reps spend time selling.' },
                            ].map((item) => (
                                <div key={item.num} className="bg-primary p-5 border-4 border-primary">
                                    <div className="font-mono text-xs text-accent font-bold mb-2">{item.num}</div>
                                    <div className="font-heading font-black text-lg text-surface uppercase mb-2">{item.label}</div>
                                    <div className="font-sans text-xs text-surface/70 font-bold">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            AI Automation Services We Prioritize
                        </h2>
                        <div className="bg-surface border-4 border-primary overflow-hidden">
                            {[
                                { service: 'Lead qualification', signal: 'Inbound leads are slow to score or route', outcome: 'Hot leads reach the right rep in minutes' },
                                { service: 'Sales ops automation', signal: 'CRM hygiene and follow-up depend on reps', outcome: 'Cleaner pipeline and fewer dropped deals' },
                                { service: 'LLM agent workflows', signal: 'Work needs reading, classifying, or drafting', outcome: 'AI handles judgment-heavy steps with guardrails' },
                                { service: 'Back-office workflow automation', signal: 'Forms, docs, invoices, or handoffs repeat weekly', outcome: 'Manual admin shrinks without adding headcount' },
                            ].map((row) => (
                                <div key={row.service} className="grid grid-cols-1 md:grid-cols-3 border-b-2 border-primary last:border-b-0">
                                    <div className="bg-primary p-4 font-heading font-black text-surface uppercase">{row.service}</div>
                                    <div className="p-4 font-mono text-xs font-bold text-primary/70 uppercase">{row.signal}</div>
                                    <div className="p-4 font-mono text-xs font-bold text-primary uppercase">{row.outcome}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Why Quickomate
                        </h2>
                        <div className="space-y-4">
                            {[
                                { h: 'You own everything', p: 'Domains, mailboxes, CRM, API keys, lead data — all on your accounts. Nothing leaves with us.' },
                                { h: 'Realistic numbers, not hype', p: 'We optimize for a sustainable ~4% cold reply rate and long-term sender reputation, not vanity metrics.' },
                                { h: 'AI where it wins, humans where they win', p: 'AI for research, routing, and scale; humans on copy and judgment. The hybrid is what performs.' },
                                { h: 'Built and handed over', p: 'We deploy on your infrastructure and train your team — fast results without permanent dependency.' },
                            ].map((item) => (
                                <div key={item.h} className="bg-surface border-4 border-primary p-5">
                                    <h3 className="font-heading font-black text-lg text-primary uppercase mb-1">{item.h}</h3>
                                    <p className="font-sans text-sm text-primary/70 font-bold">{item.p}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Deployed Systems
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {[
                                { client: 'Solaris Wireless', stat: '15-20', label: 'Qualified leads / month via AI cold email' },
                                { client: 'EcomOS', stat: '-62%', label: 'CPA reduction via automated ad analysis' },
                                { client: 'Aikon', stat: '+340%', label: 'Response rate via WhatsApp API automation' },
                            ].map((c) => (
                                <div key={c.client} className="bg-surface border-4 border-primary p-5 shadow-[6px_6px_0px_0px_rgba(17,17,17,1)]">
                                    <span className="font-heading font-black text-3xl text-accent block">{c.stat}</span>
                                    <span className="font-mono text-[10px] text-primary/60 font-bold uppercase tracking-widest block mt-1">{c.client}</span>
                                    <span className="font-sans text-xs text-primary/70 font-bold block mt-2">{c.label}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            How It Works
                        </h2>
                        <div className="space-y-3">
                            {[
                                { n: '01', h: 'Map & Diagnose', p: 'We analyze your operations, bottlenecks, and data to locate the highest-leverage automation.' },
                                { n: '02', h: 'Engineer & Automate', p: 'We build bespoke AI agents and pipelines integrated directly into your existing stack.' },
                                { n: '03', h: 'Monitor & Scale', p: 'Continuous telemetry ensures uptime and self-learning logic that scales with revenue.' },
                            ].map((s) => (
                                <div key={s.n} className="bg-surface border-2 border-primary p-4 flex gap-4 items-start">
                                    <span className="font-heading font-black text-2xl text-accent shrink-0">{s.n}</span>
                                    <div>
                                        <div className="font-heading font-black text-base text-primary uppercase">{s.h}</div>
                                        <div className="font-sans text-sm text-primary/70 font-bold mt-1">{s.p}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Learn More
                        </h2>
                        <p>
                            New to the category? Start with <Link to="/blog/what-is-an-ai-automation-agency" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">what an AI automation agency actually does</Link>, the <Link to="/blog/ai-automation-services-explained" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">services explained</Link>, <Link to="/blog/llm-agents-for-business" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">LLM agents for business</Link>, or <Link to="/blog/ai-automation-examples" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">27 real automation examples</Link>.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-6 border-l-4 border-accent pl-4">
                            FAQ
                        </h2>
                        <div className="space-y-4">
                            {[
                                { q: 'What does an AI automation agency do?', a: 'It finds the repetitive, rules-based, or research-heavy work in your business and replaces the manual version with a system — across lead generation, sales operations, support, and back office — built on your own infrastructure.' },
                                { q: 'How much does it cost?', a: 'Realistic 2026 ranges: $1.5k–$5k for a single workflow build, $3k–$12k/mo for a multi-system retainer, and $10k–$30k+ for a full revenue engine. We price against cost per outcome, not sticker price.' },
                                { q: 'Do I own the systems you build?', a: 'Yes. Everything is built on your accounts, domains, and CRM, with documentation your team can run. When the engagement ends, nothing leaves with us.' },
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
                            Ready to Scale With Precision?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We will map your highest-leverage process and show you exactly what we would automate first — on your infrastructure, owned by you. Free 15-30 minute call.
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
