import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogCrmAutomation() {
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
                        {['CRM', 'Automation', 'Sales Ops'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        CRM Automation: How Stage-Based Triggers Free Up Your Sales Team
                    </h1>
                </header>

                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            A CRM is a database. A CRM with stage-based automation is a sales operating system. The difference shows up in how much time your reps spend selling versus how much time they spend remembering to send the email they should have sent on Tuesday. Here's what an automated CRM actually looks like and where the time savings come from.
                        </p>
                    </div>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What Stage-Based Automation Means
                        </h2>
                        <p className="mb-4">
                            Every CRM has stages. New Lead → Qualified → Proposal Sent → Negotiation → Closed Won/Lost (your stages will vary). Without automation, moving a lead between stages does exactly one thing: it changes a label in a database.
                        </p>
                        <p className="mb-4">
                            With automation, every stage transition fires a workflow. Move a lead to "Proposal Sent" and the system automatically:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {[
                                'Sends the proposal email with the right template',
                                'Schedules a follow-up reminder for 3 days later',
                                'Tags the lead with proposal-sent metadata',
                                'Notifies the rep\'s Slack channel',
                                'Logs the activity in the timeline',
                                'Triggers a different sequence if the lead opens the proposal vs ignores it',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6">
                            That's six tasks the rep no longer has to remember. Multiply by every lead, every stage, every week.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            A Real Example: The Lead Stage Trigger
                        </h2>
                        <p className="mb-4">
                            Here's the simplest, highest-impact automation we install. Pick any stage in your CRM. The moment a lead enters that stage, an email goes out — written ahead of time, branded, personalized with their data, sent at the right hour for their timezone.
                        </p>
                        <div className="bg-primary border-4 border-primary p-6 mt-4">
                            <p className="font-mono text-sm text-surface font-bold uppercase mb-3 border-b border-surface/20 pb-2">EXAMPLE: STAGE = "DEMO_BOOKED"</p>
                            <div className="font-mono text-xs text-surface/90 font-bold space-y-2">
                                <div>&gt; T+0min: Confirmation email with calendar invite + meeting prep doc</div>
                                <div>&gt; T+24hr: Reminder email with agenda + relevant case study</div>
                                <div>&gt; T+1hr-before: SMS reminder with join link</div>
                                <div>&gt; T+1hr-after: Follow-up with recap, next steps, Loom recording</div>
                                <div>&gt; T+72hr (if no reply): Soft nudge from rep template</div>
                                <div>&gt; T+7days (if no reply): Move to "Stalled" stage automatically</div>
                            </div>
                        </div>
                        <p className="mt-6">
                            The rep didn't manually do any of that. They moved one lead to one stage. The system handled the rest. That's the model — humans make decisions, automations handle execution.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Time-Savings Math
                        </h2>
                        <p className="mb-4">
                            Every system Quickomate installs targets one of three outcomes: <strong>more revenue, less cost, or saved time</strong>. CRM automation hits time savings hard. Here's the rough math we see post-install:
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">Per-Rep Time Recovered (Weekly)</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: 'Manual Email Composition', value: '4-6 hrs' },
                                    { label: 'Follow-Up Tracking', value: '3-5 hrs' },
                                    { label: 'CRM Data Entry', value: '2-3 hrs' },
                                    { label: 'Total Recovered / Rep', value: '9-14 hrs' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-primary p-4">
                                        <span className="font-heading font-black text-2xl text-accent block">{stat.value}</span>
                                        <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mt-6">
                            On a 5-rep team, that's roughly a full extra rep's worth of selling time recovered every week — without hiring. The automation paid for itself before the end of the first month.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Common Stage Triggers We Install
                        </h2>
                        <p className="mb-4">
                            Every business has different stages, but the trigger patterns repeat. Here are the workflows we install most often:
                        </p>
                        <div className="space-y-3">
                            {[
                                { stage: 'New Lead', actions: 'Welcome email, internal alert to rep, lead enrichment via API, scoring' },
                                { stage: 'Qualified', actions: 'Discovery prep email, calendar link, slack notification, pipeline update' },
                                { stage: 'Demo Booked', actions: 'Confirmation, prep doc, reminders, post-demo recap' },
                                { stage: 'Proposal Sent', actions: 'Document delivery, view tracking, 3/7/14-day nudges' },
                                { stage: 'Closed Won', actions: 'Onboarding kickoff, contract handoff, customer-success ping, NPS scheduling' },
                                { stage: 'Closed Lost', actions: 'Loss-reason capture, 90/180-day re-engagement, win-back sequence' },
                                { stage: 'Stalled / Cold', actions: 'Re-engagement wave, rep ping, automatic deprioritization in dashboard' },
                            ].map((item) => (
                                <div key={item.stage} className="bg-surface border-2 border-primary p-4 flex flex-col sm:flex-row sm:items-start gap-2 sm:gap-6">
                                    <span className="font-mono text-xs font-bold text-accent uppercase tracking-widest sm:w-40 shrink-0">{item.stage}</span>
                                    <span className="font-sans text-sm text-primary/80 font-bold">{item.actions}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Build vs. Buy: A Real Answer
                        </h2>
                        <p className="mb-4">
                            HubSpot, Pipedrive, GoHighLevel, Close, Salesforce — they all have built-in workflow tools. So why pay for a custom build?
                        </p>
                        <p className="mb-4">
                            For most teams, you don't need to. The native workflow tools handle 70-80% of what we install. The places we get pulled in:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            {[
                                'You\'re using multiple tools that don\'t talk to each other (CRM + email + calendar + SMS + slack)',
                                'You need branching logic the native tool can\'t express',
                                'You want AI in the loop (lead scoring, reply classification, sentiment routing)',
                                'You need data flowing between CRM, billing, support, and ops cleanly',
                                'You\'ve outgrown your starter CRM and need a custom layer before re-platforming',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6">
                            If you're a 2-person team running HubSpot Free, you don't need us. If you're past that — running multiple tools, juggling 100+ active leads, hiring reps and watching them spend half their day on CRM busywork — that's where stage automation pays for itself in weeks.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What You Own After
                        </h2>
                        <p>
                            Same principle as every Quickomate build: every automation, every sequence, every integration lives on your accounts. Your CRM. Your email. Your data. We document everything, train your team, and step back. Walk away from us and the system keeps running.
                        </p>
                    </section>

                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want To See What's Possible With Your CRM?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            Free 15-30 minute audit. We'll look at your current CRM, lead stages, and team workflow, and tell you exactly which automations would buy your reps the most time back.
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

                    <section aria-label="Related reading" className="mt-16 border-t-4 border-primary pt-8">
                        <h2 className="font-mono text-xs text-accent font-bold tracking-widest uppercase mb-6 bg-accent/10 px-3 py-1 inline-block border border-accent/30">
                            RELATED_READING
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {[
                                { slug: 'follow-up-system-for-b2b', title: 'You Don\'t Have a Lead Problem. You Have a Follow-Up Problem.' },
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
