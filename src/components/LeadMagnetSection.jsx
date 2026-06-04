import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, ListChecks, ClipboardCheck, Mail, ArrowUpRight } from 'lucide-react';
import BookCallCTA from './BookCallCTA';

/**
 * Homepage "free tools" band — converts brand/top-of-funnel traffic into the
 * lead-magnet funnel. Cards drive to the interactive tools (contextual capture);
 * the inline form is a direct, low-friction grab.
 */

const TOOLS = [
    { icon: Calculator, title: 'Sales Automation ROI Calculator', blurb: 'Run your hours-and-dollars saved before you spend a cent.', href: '/blog/sales-automation-roi-calculator' },
    { icon: ListChecks, title: 'Cold Email Infrastructure Checklist', blurb: 'The pre-flight list that keeps you out of spam and off blocklists.', href: '/blog/cold-email-infrastructure-how-many-domains-inboxes' },
    { icon: ClipboardCheck, title: 'AI Automation Readiness Quiz', blurb: 'Score your readiness and see the single best place to start.', href: '/blog/how-to-know-if-your-business-needs-ai-automation' },
    { icon: Mail, title: 'B2B Cold Email Swipe File', blurb: '30+ subject lines and 5 sequences that actually get replies.', href: '/blog/cold-email-subject-lines-that-get-b2b-replies' },
];

export default function LeadMagnetSection() {
    return (
        <section className="relative z-10 py-24 px-6 sm:px-12 md:px-24 bg-background border-t-4 border-primary">
            <div className="max-w-6xl mx-auto">
                <div className="inline-block bg-primary px-4 py-2 mb-6 font-mono text-xs text-textInverted font-bold tracking-widest uppercase">
                    FREE_TOOLKIT
                </div>
                <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-primary tracking-tighter uppercase leading-none mb-4">
                    Steal our systems
                </h2>
                <p className="font-sans text-base text-primary/70 max-w-2xl mb-12">
                    The same tools and playbooks we use with clients — free, no call required. Use them, and if you want a second set of eyes, you know where we are.
                </p>

                <div className="grid sm:grid-cols-2 gap-4 mb-12">
                    {TOOLS.map((t) => (
                        <Link
                            key={t.title}
                            to={t.href}
                            className="group bg-surface border-4 border-primary p-6 flex items-start gap-4 hover:bg-primary transition-colors shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px]"
                        >
                            <span className="flex-none w-11 h-11 bg-accent flex items-center justify-center">
                                <t.icon size={22} className="text-textInverted" />
                            </span>
                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="font-heading font-black text-lg text-primary uppercase tracking-tight leading-tight group-hover:text-textInverted transition-colors">
                                        {t.title}
                                    </h3>
                                    <ArrowUpRight size={18} className="flex-none text-primary/40 group-hover:text-accent transition-colors" />
                                </div>
                                <p className="font-sans text-sm text-primary/70 mt-1 group-hover:text-textInverted/70 transition-colors">{t.blurb}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                <BookCallCTA
                    title="Not sure where to start?"
                    subtext="Book a free 20-minute call. We'll look at your pipeline, tell you the single highest-leverage thing to fix first, and whether we're even the right fit — no pitch."
                />
            </div>
        </section>
    );
}
