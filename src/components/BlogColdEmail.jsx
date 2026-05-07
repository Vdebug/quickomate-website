import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogColdEmail() {
    return (
        <div className="min-h-screen bg-background text-textMain pt-32 pb-20 px-6 sm:px-12 md:px-24">
            <div className="max-w-4xl mx-auto">
                {/* Back Link */}
                <Link to="/blog" className="inline-flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors mb-12">
                    <ArrowLeft size={14} />
                    All Posts
                </Link>

                {/* Header */}
                <header className="mb-16 border-b-4 border-primary pb-8">
                    <div className="flex items-center gap-4 flex-wrap mb-6">
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest flex items-center gap-1">
                            <Clock size={12} /> 8 min read
                        </span>
                        <time dateTime="2026-03-06" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">March 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['Cold Email', 'Lead Gen', 'AI Systems'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        How We Get 15-20 Qualified Appointments Per Month With Cold Email
                    </h1>
                </header>

                {/* Article Body */}
                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">

                    {/* Intro */}
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            The average B2B company struggles to get 2-3 meetings per month and relies almost entirely on referrals and word of mouth. We consistently deliver 15-20 qualified appointments per month for our clients with a realistic 4% reply rate (1-2% positive) — using a cold email system that combines smart automation with expert manual oversight. Here's exactly how we do it.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Problem With Referrals
                        </h2>
                        <p className="mb-4">
                            Let's be honest — referrals are great when they come, but they're unpredictable. You can't scale a business on hope. Most B2B companies we talk to are stuck in the same cycle: waiting for introductions, posting on LinkedIn hoping someone notices, or burning cash on paid ads that generate low-intent leads.
                        </p>
                        <p>
                            We're not going to ask you to do any of that. No chasing referrals. No waiting on word of mouth. No paying for ads, leads, or appointments. Instead, we build the infrastructure that does four critical things for you:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            {[
                                'Find high-intent prospects who are ready to buy',
                                'Reach out to them at scale with enough volume to get results',
                                'Send hyper-personalized messaging that actually gets opened',
                                'Spark qualified conversations between you and decision makers',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6">
                            Because if you're any good at what you do, we know that the more conversations we can spark between you and potential buyers, the more likely you are to grow your business. Our job is to fill your calendar. Your job is to close.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Step 1: Building The Lead Engine
                        </h2>
                        <p className="mb-4">
                            Everything starts with finding the right people. We don't buy garbage lead lists. We build a custom lead sourcing automation that consistently pulls in fresh, high-quality prospects who match your ideal client profile.
                        </p>
                        <p className="mb-4">
                            This system runs on automation. It scrapes relevant data sources, filters out companies that are too large (they already have internal teams) or too small (they can't afford your services), and finds the decision maker — the person who can actually pull the trigger on hiring you.
                        </p>
                        <p>
                            The result: a continuously flowing pipeline of qualified leads that gets fed directly into your cold email campaigns without you lifting a finger.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Step 2: Setting Up The Mailbox Infrastructure
                        </h2>
                        <p className="mb-4">
                            You can't send 10,000 emails from your main business email. That's a one-way ticket to the spam folder. We set up dedicated sending infrastructure — multiple warmed-up mailboxes, proper DNS authentication (SPF, DKIM, DMARC), and reputation management.
                        </p>
                        <p>
                            Our entire focus at this stage is <strong>deliverability</strong>. If your emails don't land in the primary inbox, nothing else matters. We obsess over inbox placement rates, sender scores, and domain health before a single outreach email goes out.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Step 3: Crafting Hyper-Personalized Copy — By Hand
                        </h2>
                        <p className="mb-4">
                            This is where most agencies get it wrong. They plug everything into an AI, press a button, and hope for the best. We don't do that.
                        </p>
                        <p className="mb-4">
                            We use AI to assist with research — scraping each prospect's company website, LinkedIn profile, and relevant public data to build context. But the actual email copy? That's crafted and refined manually by our team. Every subject line, every opening hook, every CTA is reviewed and optimized by a human before it goes out.
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4 mb-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Why not fully automate the copy? Because your mailbox health is on the line. Your domain reputation is on the line. Your money is on the line. You can't just set a campaign on full autopilot and walk away — that's how you end up in spam folders and burn your sending domains. The manual review step is what separates campaigns that hit a steady 4% reply rate (with 1-2% positive replies) from ones that get flagged and burn out.
                            </p>
                        </div>
                        <p className="mb-4">
                            We leverage automation where it makes sense — lead sourcing, data enrichment, personalization research, campaign scheduling — but the critical decision points (copy approval, send timing, campaign optimization) always have human oversight.
                        </p>
                        <div className="bg-primary p-6 border-4 border-primary mt-4 mb-4">
                            <p className="font-mono text-sm text-surface font-bold">
                                &gt; RESULT: 4% overall reply rate, 1-2% positive replies.<br />
                                &gt; BENCHMARK: Industry average sits at 1-2% overall.<br />
                                &gt; METHOD: AI-assisted research + human-crafted copy.
                            </p>
                        </div>
                        <p>
                            The combination of AI-powered research with expert-written messaging is what gets emails opened. It sounds personal because it IS personal — we just use automation to scale the research part, not the writing.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Step 4: Launch, Monitor, Scale The Winners
                        </h2>
                        <p className="mb-4">
                            Once the infrastructure, leads, and copy are locked in, we launch the campaigns. We send anywhere from 5,000 to 15,000+ personalized messages per month depending on your capacity and market size.
                        </p>
                        <p className="mb-4">
                            We don't set it and forget it. We monitor everything — open rates, reply rates, bounce rates, positive vs negative sentiment — and ruthlessly cut what isn't working. The campaigns that perform? We scale them aggressively.
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">The Math</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: 'Emails Sent / Month', value: '10,000+' },
                                    { label: 'Reply Rate', value: '~4%' },
                                    { label: 'Positive Reply Rate', value: '1-2%' },
                                    { label: 'Booked Meetings / Month', value: '15-20' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-primary p-4">
                                        <span className="font-heading font-black text-2xl text-accent block">{stat.value}</span>
                                        <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Step 5: We Hand Over Everything To You
                        </h2>
                        <p className="mb-4">
                            Here's what makes us fundamentally different from every other agency: <strong>we build everything on your infrastructure from day one.</strong>
                        </p>
                        <p className="mb-4">
                            Your mailboxes. Your lead databases. Your automations. Your campaigns. Everything lives on your systems, not ours. When we're done, you own it all — every lead, every campaign, every piece of infrastructure, top to bottom.
                        </p>
                        <p className="mb-4">
                            We train you and your team on exactly how to run the system — which parts are automated and which parts need manual oversight. We don't just hand you a dashboard and disappear. We work alongside you until your team is producing the same results independently.
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Our goal isn't to work with you for years. Our goal is to prove the system works, establish everything in your infrastructure, and make sure you and your team can use it to get clients regularly — without us. We stay until you're confident, then we step back.
                            </p>
                        </div>
                        <p className="mt-6">
                            Most agencies charge you a setup fee and then trap you in a monthly retainer. If you cut them loose, all the leads disappear, all the meetings stop, and you're back to square one. With us, that never happens. The system is yours. Period.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want Us To Build This For You?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            If creating a consistent, reliable client acquisition pipeline without relying on referrals, word of mouth, or paid ads sounds interesting — let's talk for 15-30 minutes and see if it's a fit.
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
                                { slug: 'ai-lead-generation-for-b2b-companies', title: 'AI Lead Generation for B2B Companies: A 2026 Playbook' },
                                { slug: 'ai-vs-human-cold-email-copy', title: 'AI vs Human Cold Email Copy: Why Full Automation Kills Your Reply Rate' },
                                { slug: 'why-you-should-own-your-cold-email-infrastructure', title: 'Why You Should Own Your Cold Email Infrastructure' },
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

                {/* Back to Blog */}
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
