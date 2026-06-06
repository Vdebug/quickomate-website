import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Calculator, ClipboardCheck, Mail, BarChart3, FileText } from 'lucide-react';

const TOOLS = [
    {
        icon: Calculator,
        name: 'Sales Automation ROI Calculator',
        desc: 'Plug in your team size, hourly cost, and hours lost to manual sales work. Get the dollar value of automating it — hours saved, annual savings, and payback in seconds.',
        to: '/blog/sales-automation-roi-calculator',
        tag: 'Interactive',
    },
    {
        icon: ClipboardCheck,
        name: 'AI Automation Readiness Quiz',
        desc: 'Seven questions that score whether your business is actually ready to automate — and which workflow to start with. Routes you to the right next step.',
        to: '/blog/how-to-know-if-your-business-needs-ai-automation',
        tag: 'Interactive',
    },
    {
        icon: Mail,
        name: 'Cold Email Infrastructure Checklist',
        desc: 'The exact domain, inbox, warm-up, and authentication setup behind a deliverable cold email system — as an interactive checklist you can work through.',
        to: '/blog/cold-email-infrastructure-how-many-domains-inboxes',
        tag: 'Checklist',
    },
    {
        icon: FileText,
        name: 'B2B Cold Email Swipe File',
        desc: 'Subject-line and opener patterns pulled from campaigns that actually book meetings — the archetypes that beat generic outreach.',
        to: '/blog/cold-email-subject-lines-that-get-b2b-replies',
        tag: 'Swipe File',
    },
    {
        icon: BarChart3,
        name: 'Realistic Cold Email Benchmarks (2026)',
        desc: 'A poor / average / good / elite benchmark table for reply rate, positive reply rate, and meetings per send — honest numbers you can cite, with an embeddable snippet.',
        to: '/blog/b2b-cold-email-benchmarks-2026',
        tag: 'Data',
    },
];

export default function ToolsHub() {
    return (
        <div className="min-h-screen bg-background text-textMain pt-32 pb-20 px-6 sm:px-12 md:px-24">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <header className="mb-16 border-b-4 border-primary pb-8">
                    <span className="font-mono text-xs text-accent font-bold tracking-widest uppercase mb-4 bg-accent/10 px-3 py-1 inline-block border border-accent/30">
                        FREE_TOOLKIT
                    </span>
                    <h1 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-primary tracking-tighter uppercase leading-none mb-6">
                        Free B2B Automation &amp; Cold Email Tools
                    </h1>
                    <p className="font-sans text-base sm:text-lg text-primary/75 font-bold max-w-3xl border-l-4 border-accent pl-5 leading-relaxed">
                        No email gate, no sign-up. Free interactive calculators, checklists, and benchmark data from Quickomate — the same tools we use when we scope automation and cold email systems for B2B clients. Use them, cite them, link to them.
                    </p>
                </header>

                {/* Tool grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {TOOLS.map((t) => {
                        const Icon = t.icon;
                        return (
                            <Link
                                key={t.name}
                                to={t.to}
                                className="group bg-surface border-4 border-primary p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] transition-all duration-300 flex flex-col"
                            >
                                <div className="flex justify-between items-start mb-5">
                                    <Icon className="text-accent" size={32} />
                                    <span className="font-mono text-[10px] font-bold text-primary bg-primary/10 px-2 py-1 uppercase tracking-widest">{t.tag}</span>
                                </div>
                                <h2 className="font-heading font-black text-xl sm:text-2xl text-primary uppercase tracking-tight mb-3 group-hover:text-accent transition-colors">
                                    {t.name}
                                </h2>
                                <p className="font-sans text-sm text-primary/70 leading-relaxed flex-1">
                                    {t.desc}
                                </p>
                                <span className="mt-6 inline-flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase tracking-widest">
                                    Open tool
                                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                </span>
                            </Link>
                        );
                    })}
                </div>

                {/* CTA */}
                <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-12 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                    <h2 className="font-heading font-black text-2xl sm:text-3xl text-textInverted uppercase tracking-tight mb-4">
                        Want the system, not just the tool?
                    </h2>
                    <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                        These tools tell you what to build. We build it — AI automation, cold email infrastructure, and B2B lead generation systems your team owns outright. Book a call and we'll scope it against your real numbers.
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

                {/* Internal links to services */}
                <nav aria-label="Services" className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-t-4 border-primary pt-8">
                    <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest shrink-0">
                        Our systems <span className="text-accent">→</span>
                    </span>
                    <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm font-bold">
                        <Link to="/ai-automation-agency" className="text-primary underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors">AI automation agency</Link>
                        <Link to="/cold-email-agency" className="text-primary underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors">Cold email infrastructure</Link>
                        <Link to="/b2b-lead-generation-agency" className="text-primary underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors">B2B lead generation</Link>
                    </div>
                </nav>
            </div>
        </div>
    );
}
