import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';

export default function About() {
    return (
        <div className="min-h-screen bg-background text-textMain pt-32 pb-20 px-6 sm:px-12 md:px-24">
            <div className="max-w-4xl mx-auto">
                <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors mb-12">
                    <ArrowLeft size={14} />
                    Home
                </Link>

                <header className="mb-16 border-b-4 border-primary pb-8">
                    <div className="font-mono text-[10px] text-accent font-bold uppercase tracking-widest bg-accent/10 px-2 py-1 inline-block border border-accent/30 mb-6">
                        ABOUT QUICKOMATE
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        The AI Growth Partner for B2B Companies That Want to Own Their Systems
                    </h1>
                </header>

                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Quickomate builds custom AI automation and B2B lead-generation systems — and hands you the keys. No retainers you can never cancel, no black box, no leads that walk out the door when the engagement ends. You own the infrastructure from day one.
                        </p>
                    </div>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What We Do
                        </h2>
                        <p className="mb-4">
                            We design, build, and deploy AI-driven growth infrastructure for fast-moving B2B companies: cold email systems that book 15-20 qualified appointments a month, AI lead generation and qualification, CRM and sales automation, LLM agents, and end-to-end business process automation. Every system is built on your accounts and your data, then handed over with your team trained to run it.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {[
                                { label: 'AI Lead Generation', desc: 'Sourcing, enrichment, and outreach systems that fill the pipeline.' },
                                { label: 'Sales & CRM Automation', desc: 'Stage-based triggers, follow-up engines, lead scoring and routing.' },
                                { label: 'LLM Agents', desc: 'Scoped, guard-railed agents that automate real, repetitive work.' },
                                { label: 'Process Automation', desc: 'End-to-end workflows with humans on the steps that matter.' },
                            ].map((item) => (
                                <div key={item.label} className="bg-primary p-4 border-4 border-primary">
                                    <div className="font-mono text-sm text-surface font-bold uppercase mb-1">{item.label}</div>
                                    <div className="font-sans text-xs text-surface/70 font-bold">{item.desc}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What Makes Us Different
                        </h2>
                        <div className="space-y-4">
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">You own everything</h3>
                                <p className="font-sans text-sm text-primary/70 font-bold">Domains, mailboxes, CRM, API keys, lead lists — all on your accounts. The day you stop working with us, nothing leaves with us.</p>
                            </div>
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">Realistic numbers, not hype</h3>
                                <p className="font-sans text-sm text-primary/70 font-bold">We optimize for a sustainable ~4% cold reply rate and long-term sender reputation — not vanity metrics that burn your domains.</p>
                            </div>
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-2">AI where it wins, humans where they win</h3>
                                <p className="font-sans text-sm text-primary/70 font-bold">AI for research, routing, and scale; humans on copy, judgment, and anything customer-facing. The hybrid is what actually performs.</p>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Who's Behind It
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                            <div className="md:col-span-3">
                                <div className="w-full aspect-square max-w-[260px] border-4 border-primary shadow-[8px_8px_0px_0px_rgba(230,59,46,1)] overflow-hidden bg-surface">
                                    <img
                                        src="/vasu-gupta.jpg"
                                        alt="Vasu Gupta, CEO and Founder of Quickomate"
                                        className="w-full h-full object-cover"
                                        width="260"
                                        height="260"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                            <div className="md:col-span-9 flex flex-col gap-4">
                                <div>
                                    <h3 className="font-heading font-black text-2xl text-primary uppercase tracking-tight">Vasu Gupta</h3>
                                    <span className="font-mono text-xs text-accent font-bold tracking-widest uppercase">CEO &amp; Founder</span>
                                </div>
                                <p className="font-sans text-sm text-primary/80 font-bold border-l-2 border-primary/20 pl-4 leading-relaxed">
                                    Vasu was early to spot the business utility of generative AI, building proprietary automation systems for B2B companies before most agencies knew what a prompt was. A strategic consultant and AI systems architect, he helps companies deploy AI-driven growth infrastructure — from cold email systems that generate 15-20 qualified leads a month to fully automated onboarding pipelines.
                                </p>
                                <p className="font-sans text-sm text-primary/80 font-bold border-l-2 border-primary/20 pl-4 leading-relaxed">
                                    His hands-on approach to lead generation infrastructure and sales automation means every system he builds is battle-tested in production, not just a demo. He writes the playbooks on this blog from live client work.
                                </p>
                                <div className="flex gap-4 mt-2">
                                    <a href="https://x.com/vaaasug" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors">
                                        X (Twitter) <ArrowUpRight size={14} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/refer-vasu/" target="_blank" rel="noreferrer" className="flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors">
                                        LinkedIn <ArrowUpRight size={14} />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Learn the Approach
                        </h2>
                        <p>
                            Everything we believe about building growth systems is on the <Link to="/blog" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">blog</Link> — start with <Link to="/blog/what-is-an-ai-automation-agency" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">what an AI automation agency actually does</Link>, <Link to="/blog/ai-lead-generation-for-b2b-companies" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">our AI lead generation playbook</Link>, or <Link to="/blog/why-you-should-own-your-cold-email-infrastructure" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">why you should own your infrastructure</Link>.
                        </p>
                    </section>

                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Let's Build Your Growth System
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We will map your highest-leverage opportunity and show you exactly what we would build — on your infrastructure, owned by you. Free 15-30 minute call.
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
                </article>

                <nav aria-label="Page navigation" className="mt-16 pt-8 border-t-4 border-primary flex gap-4">
                    <Link to="/blog" className="font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors inline-block">
                        Read the Blog →
                    </Link>
                    <Link to="/" className="font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors inline-block">
                        ← Home
                    </Link>
                </nav>
            </div>
        </div>
    );
}
