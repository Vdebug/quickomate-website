import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogBuildVsHire() {
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
                            <Clock size={12} /> 9 min read
                        </span>
                        <time dateTime="2026-05-20" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">May 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['Agency vs DIY', 'Cold Email', 'B2B Growth'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        Build It In-House or Hire an Agency? A B2B Outbound Decision Framework
                    </h1>
                </header>

                {/* Article Body */}
                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">

                    {/* Intro */}
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            "Should we just build cold email in-house?" We get asked this constantly — and the honest answer is sometimes yes. Most build-vs-hire content is written by agencies who only want one answer, or by tool companies who only want the other. This is the framework we'd give a friend: the true cost of DIY, what an agency actually buys you, and the hybrid model nobody pitches because it makes us less money.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The DIY Cost Nobody Adds Up Honestly
                        </h2>
                        <p className="mb-4">
                            "We'll just do it ourselves" usually means someone priced the software and stopped there. The software is the cheapest part. The real bill has four lines, and three of them aren't on any invoice:
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4 mb-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">The Real DIY Stack (Monthly)</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: 'Sending Platform (Smartlead/Instantly)', value: '$40-100' },
                                    { label: 'Email Verification + Data', value: '$150-400' },
                                    { label: 'Domains + Inboxes (10-20)', value: '$80-250' },
                                    { label: 'Warm-up + Enrichment (Clay etc.)', value: '$200-1,200' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-primary p-4">
                                        <span className="font-heading font-black text-xl text-accent block">{stat.value}</span>
                                        <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mb-4">
                            Call it <strong>$500-2,000/month in pure tooling</strong> once you're running real volume. Tolerable. But then add the part that wrecks the math: <strong>a person's time.</strong> A functioning outbound program is 15-25 hours a week of someone competent — list building, copy iteration, deliverability monitoring, inbox management, replies. If that's a founder, it's the most expensive labor in the company. If it's a $60-80k hire, that's another $5-7k/month fully loaded.
                        </p>
                        <p>
                            And then there's the line that hurts most: the <strong>2-4 month ramp</strong> before anything works, plus the mistakes you make during it.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Learning-Curve Mistakes That Burn Domains
                        </h2>
                        <p className="mb-4">
                            The ramp isn't slow because you're lazy. It's slow because every first-timer makes the same expensive mistakes, and several of them are irreversible. You don't get the domain reputation back — you buy new domains and start the warm-up clock over.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                'Sending from the primary domain — torches business email',
                                'Skipping warm-up to "save time" — instant spam folder',
                                'Blasting 50+/mailbox/day — providers flag the pattern',
                                'No SPF/DKIM/DMARC — rejected before anyone reads',
                                'Buying junk data — 15%+ bounce rate, blocklist hit',
                                'Tracking pixels + HTML signatures — cuts placement',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            Each of these costs you weeks. Burn a batch of domains in month two and you're not just out the $100 of registration — you're out the 3 weeks of warm-up time, and you've poisoned the well while you figured it out. The "free" DIY route routinely costs $3-8k in wasted spend and 8-12 weeks of zero pipeline before the first real meeting books.
                        </p>
                        <p>
                            None of this is secret knowledge. It's all in our other posts. But reading it and operating it under pressure while your founder asks "is it working yet?" are different things.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What an Agency Retainer Actually Buys (and the Tradeoffs)
                        </h2>
                        <p className="mb-4">
                            A B2B cold email agency in 2026 runs <strong>$2,000-5,000/month</strong> for managed outbound, sometimes more with a performance component. What you're really paying for isn't "they send emails." It's: skipping the ramp, inheriting infrastructure that already works, and renting judgment that took years to build. Day-one deliverability instead of day-90 deliverability.
                        </p>
                        <p className="mb-4">
                            But it's not free of tradeoffs, and any agency that pretends otherwise is selling you:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4">
                            <div className="bg-surface border-4 border-primary p-6">
                                <span className="font-mono text-xs font-black text-accent uppercase tracking-widest block mb-3">What You Gain</span>
                                <ul className="font-sans text-sm text-primary/80 space-y-2 list-disc pl-4">
                                    <li>No 2-4 month ramp — pipeline in weeks</li>
                                    <li>Infrastructure + deliverability already solved</li>
                                    <li>Operator judgment on what to fix when</li>
                                    <li>No headcount to hire, train, or replace</li>
                                </ul>
                            </div>
                            <div className="bg-primary border-4 border-primary p-6">
                                <span className="font-mono text-xs font-black text-accent uppercase tracking-widest block mb-3">What You Risk</span>
                                <ul className="font-sans text-sm text-surface/90 space-y-2 list-disc pl-4">
                                    <li>The knowledge leaves when the contract does</li>
                                    <li>You don't own the domains or accounts (often)</li>
                                    <li>Less control over messaging cadence</li>
                                    <li>Bad agencies hide deliverability collapse</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            That last risk is the real one. The dirty default in this industry is the agency owning your infrastructure so you can't leave without starting from zero. Which is exactly why the third option exists.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Hybrid Model: Agency Builds It, You Own It
                        </h2>
                        <p className="mb-4">
                            There's a third path most agencies won't pitch because it ends the recurring revenue: <strong>have someone build the system on infrastructure you own, hand you the keys, and step back.</strong> This is the model we run at Quickomate — you own the domains, the inboxes, the sending accounts, and the playbook from day one. We're renting you the build and the judgment, not holding your program hostage.
                        </p>
                        <p className="mb-4">
                            The shape of it: a setup phase where the infrastructure gets built and warmed correctly the first time (no domain-burning ramp), then either a managed period while your team learns the controls, or a clean handoff with documentation. When you decide to run it in-house, you don't rebuild anything. You already own it.
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4 mb-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                The test of an honest agency: can you fire them on Friday and keep sending on Monday? If the answer is no — if leaving means starting your domain warm-up from scratch — they've designed the relationship around your switching cost, not your results. Own your infrastructure even when someone else operates it.
                            </p>
                        </div>
                        <p>
                            The hybrid gets you the best of both: the agency's speed and judgment on the way up, the in-house cost structure and control once you've cleared the learning curve. You pay the premium when it's worth it (the ramp) and stop paying it when it isn't (steady-state operation).
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Decision Matrix
                        </h2>
                        <p className="mb-4">
                            Strip away the sales pitch and the decision comes down to three variables: how much time you have, how much in-house skill exists, and whether outbound is a core long-term motion or a test. Here's how they map:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 mb-4">
                            {[
                                { path: 'BUILD IN-HOUSE', when: 'Outbound is core, you have a dedicated SDR/ops person with bandwidth, runway to absorb a 2-4 month ramp, and the patience to learn deliverability properly.' },
                                { path: 'HIRE AN AGENCY', when: 'You need pipeline now, nobody internal has the time or skill, and you would rather pay a premium than spend founder hours learning email infrastructure.' },
                                { path: 'HYBRID (BUILD + OWN)', when: 'You want speed now AND control later. You plan to bring it in-house eventually but refuse to start by burning 3 months of domains learning the basics.' },
                            ].map((col) => (
                                <div key={col.path} className="bg-surface border-4 border-primary p-5">
                                    <span className="font-mono text-sm font-black text-accent block mb-3">{col.path}</span>
                                    <span className="font-sans text-xs text-primary/70">{col.when}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            One filter that resolves most cases instantly: <strong>what is a founder hour worth, and how many will this eat?</strong> If you're pre-product-market-fit and your time is the binding constraint, paying someone to skip the ramp is almost always correct. If you're established with operational slack and outbound is a forever-channel, building the muscle in-house compounds.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Which Path By Company Stage
                        </h2>
                        <p className="mb-4">
                            Stage changes the answer more than budget does. The same $3k/month is a different decision for a solo founder than for a 40-person company with a sales team. A rough map:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                { stage: 'Solo / Pre-PMF', detail: 'Hire or hybrid. Your time is the scarcest resource in the building. Do not spend 3 months learning DKIM while your runway shrinks. Buy the shortcut.' },
                                { stage: 'Seed, 5-15 people', detail: 'Hybrid is the sweet spot. Get it built right and owned, run it lean. You cannot yet justify a full-time outbound hire but you need real pipeline.' },
                                { stage: 'Series A, 15-50 people', detail: 'Build in-house if outbound is core — hire a dedicated SDR/RevOps person and have an agency or consultant set up the infrastructure they inherit.' },
                                { stage: '50+ / Established', detail: 'Build, fully owned, multiple people. At your volume the agency margin is real money and you have the headcount to operate it. Agency for overflow or new segments only.' },
                            ].map((s) => (
                                <div key={s.stage} className="bg-surface border-4 border-primary p-5">
                                    <span className="font-mono text-sm font-black text-accent block mb-2">{s.stage}</span>
                                    <span className="font-sans text-xs text-primary/70">{s.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            Notice the through-line: infrastructure ownership doesn't change with stage — operation does. Even the 50-person company should have started by owning its domains. The thing that scales is who pushes the buttons, not who holds the keys.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            When DIY Is Genuinely the Right Call
                        </h2>
                        <p className="mb-4">
                            We're an agency telling you when not to hire one, because the cases are real and pretending otherwise costs us trust. Build it yourself when:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                'You have a competent ops person with genuine bandwidth',
                                'Outbound is a permanent, core revenue motion — not a test',
                                'Your sales cycle needs deep product knowledge in replies',
                                'You have runway to eat a 2-4 month ramp without panic',
                                'Volume is high enough that agency margin becomes real money',
                                'You enjoy the craft and will actually maintain it',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            The trap to avoid in all three paths: <strong>don't half-commit.</strong> The worst outcome isn't DIY or agency — it's a founder running outbound in 3 stolen hours a week, never warming properly, never iterating, burning domains slowly, and concluding "cold email doesn't work." It works. Half-effort doesn't. Pick a lane and resource it.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want Us To Help You Decide?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We'll give you the honest read on your situation — even if that read is "build it yourself." If hybrid makes sense, we set the system up on infrastructure you own and hand you the keys. No hostage retainers. Book a call and we'll map the right path for your stage.
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
                                { slug: 'why-you-should-own-your-cold-email-infrastructure', title: 'Why You Should Own Your Cold Email Infrastructure' },
                                { slug: 'cold-email-agency-cost-2026', title: 'What a B2B Cold Email Agency Actually Costs in 2026' },
                                { slug: 'cold-email-infrastructure-how-many-domains-inboxes', title: 'Cold Email Infrastructure: How Many Domains and Inboxes' },
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
