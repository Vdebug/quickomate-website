import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';
import SalesAutomationCalculator from './SalesAutomationCalculator';

export default function BlogAutomationROI() {
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
                        <time dateTime="2026-05-19" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">May 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['ROI', 'Sales Automation', 'Growth Systems'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        The Real ROI of Sales Automation: How to Calculate Hours and Dollars Before You Spend
                    </h1>
                </header>

                {/* Article Body */}
                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">

                    {/* Intro */}
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Most automation "ROI" you'll read is vendor math — a single inflated multiple designed to close you. The truth is you can calculate your own number on the back of a napkin before you spend a dollar, and you should. This is the operator's version: the three equations that actually matter, realistic 2026 figures, a worked example, and an honest look at where automation ROI gets overstated.
                        </p>
                    </div>

                    <section className="bg-accent/10 border-4 border-accent p-6">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Short answer: sales automation is worth it when a repeated workflow saves 8+ hours per week, improves response speed, or prevents qualified leads from slipping through the CRM. For most B2B teams, the first automation should be lead qualification, CRM routing, follow-up, or enrichment — not a giant all-in-one platform.
                        </p>
                        <p className="mt-4 text-sm font-bold">
                            If the calculator shows a conservative 2x+ return, the next step is mapping the workflow. See our <Link to="/ai-automation-agency" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">AI automation agency service</Link> or the <Link to="/blog/ai-automation-services-explained" className="text-accent font-bold underline decoration-2 underline-offset-4 hover:text-primary">AI automation services breakdown</Link>.
                        </p>
                    </section>

                    {/* Interactive ROI Calculator (lead magnet) */}
                    <SalesAutomationCalculator />

                    {/* Section 1 — Why a number first */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Calculate The Number Before You Buy
                        </h2>
                        <p className="mb-4">
                            Almost nobody does this. They feel the pain — reps drowning in admin, leads going cold, data scattered across six tools — and they buy a platform on vibes. Six months later they can't tell you whether it paid for itself, so it quietly becomes shelfware that renews on autopilot.
                        </p>
                        <p className="mb-4">
                            Automation ROI isn't mystical. It comes from three sources, and only three: it makes you <strong>more money</strong> (revenue lift), it <strong>cuts costs</strong> (cost savings), or it <strong>gives time back</strong> (time savings). Every honest ROI claim decomposes into one of those buckets. If a vendor can't tell you which bucket their pitch lives in, that's your answer.
                        </p>
                        <p>
                            The point of doing the math first isn't precision — your inputs are estimates, and that's fine. The point is to expose whether the case is obviously good, obviously bad, or genuinely close. Obviously good: buy it. Obviously bad: walk. Genuinely close: that's where most automation projects actually live, and where you need the discipline to scope tightly instead of buying the everything-platform.
                        </p>
                    </section>

                    {/* Section 2 — The three equations */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Three ROI Equations
                        </h2>
                        <p className="mb-4">
                            Write these down. Every automation decision you make can be run through them in under ten minutes.
                        </p>
                        <div className="flex flex-col gap-4 mt-6">
                            <div className="bg-surface border-4 border-primary p-6">
                                <span className="font-mono text-sm font-black text-accent block mb-2">01 / TIME SAVINGS</span>
                                <p className="font-mono text-sm text-primary font-bold mb-2">
                                    &gt; (hours saved per week × loaded hourly cost × 52) − annual tool + setup cost
                                </p>
                                <p className="font-sans text-xs text-primary/70">
                                    The most common and most reliable bucket. Real, but only counts if the freed hours get redeployed into revenue work — not absorbed into longer coffee breaks.
                                </p>
                            </div>
                            <div className="bg-surface border-4 border-primary p-6">
                                <span className="font-mono text-sm font-black text-accent block mb-2">02 / COST SAVINGS</span>
                                <p className="font-mono text-sm text-primary font-bold mb-2">
                                    &gt; (headcount avoided + tools consolidated + error/rework reduced) − automation cost
                                </p>
                                <p className="font-sans text-xs text-primary/70">
                                    Hard-dollar savings: the hire you don't make, the four SaaS subscriptions you collapse into one, the manual data-entry mistakes that stop costing you deals.
                                </p>
                            </div>
                            <div className="bg-surface border-4 border-primary p-6">
                                <span className="font-mono text-sm font-black text-accent block mb-2">03 / REVENUE LIFT</span>
                                <p className="font-mono text-sm text-primary font-bold mb-2">
                                    &gt; (extra opportunities/yr × win rate × ACV) + (faster speed-to-lead × conversion gain)
                                </p>
                                <p className="font-sans text-xs text-primary/70">
                                    The biggest upside and the easiest to fake. Only count it if you can trace a causal mechanism — more meetings booked, faster lead response, fewer deals lost to follow-up gaps.
                                </p>
                            </div>
                        </div>
                        <p className="mt-6">
                            Your total ROI is the sum of the buckets that genuinely apply, divided by your all-in cost. The discipline is in being ruthless about which buckets actually apply to <em>your</em> situation — not stacking all three with optimistic inputs because the spreadsheet lets you.
                        </p>
                    </section>

                    {/* Section 3 — Realistic numbers */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Realistic 2026 Benchmarks
                        </h2>
                        <p className="mb-4">
                            Use these as sanity checks on your own estimates. They're drawn from the honest middle of the range — not the headline figures vendors quote, not the worst-case horror stories.
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4 mb-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">Sane Defaults</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: 'Hours saved / rep / week', value: '10–14' },
                                    { label: 'Typical return per $1 spent', value: '~$8' },
                                    { label: 'Payback period', value: '3–8 mo' },
                                    { label: 'Time-to-value (first wins)', value: '4–8 wks' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-primary p-4">
                                        <span className="font-heading font-black text-2xl text-accent block">{stat.value}</span>
                                        <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mb-4">
                            The "$8 per $1" figure floats around industry reports and is roughly accurate <em>for well-scoped projects that get adopted</em>. It is not a guarantee — it's the outcome of doing the unglamorous work: picking a real bottleneck, building for it, and making the team actually use the result. The same number for a poorly-scoped project that nobody adopts is negative.
                        </p>
                        <p>
                            The 10–14 hours/week figure is the most bankable. Across SDR and sales-ops roles, automating CRM data entry, lead enrichment, meeting scheduling, and follow-up reminders reliably claws back about a day and a half per person per week. That's the floor you can usually count on. Everything above it — the revenue lift — is upside you have to earn.
                        </p>
                    </section>

                    {/* Section 4 — The calculator */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The ROI Calculator (Plug In Your Numbers)
                        </h2>
                        <p className="mb-4">
                            Here's the framework laid out as a fill-in-the-blanks worksheet. Grab the inputs on the left, run them through the formula blocks, and you'll have a defensible number in minutes. The example column shows a 5-person sales team.
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4 mb-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">Inputs</h3>
                            <div className="flex flex-col gap-3">
                                {[
                                    { label: 'Number of people affected', example: '5 reps' },
                                    { label: 'Hours saved / person / week', example: '12 hrs' },
                                    { label: 'Loaded hourly cost', example: '$45 / hr' },
                                    { label: 'Extra qualified opportunities / yr', example: '24' },
                                    { label: 'Win rate', example: '20%' },
                                    { label: 'Average contract value (ACV)', example: '$18,000' },
                                    { label: 'Annual automation cost (all-in)', example: '$48,000' },
                                ].map((row) => (
                                    <div key={row.label} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 bg-primary p-3">
                                        <span className="font-mono text-xs text-surface font-bold uppercase">{row.label}</span>
                                        <span className="font-mono text-xs text-accent font-black">{row.example}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                            <div className="bg-primary p-6 border-4 border-primary">
                                <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest block mb-2">Time Savings</span>
                                <p className="font-mono text-xs text-surface font-bold mb-3">5 × 12 × $45 × 52</p>
                                <span className="font-heading font-black text-2xl text-accent block">$140,400</span>
                                <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">per year</span>
                            </div>
                            <div className="bg-primary p-6 border-4 border-primary">
                                <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest block mb-2">Revenue Lift</span>
                                <p className="font-mono text-xs text-surface font-bold mb-3">24 × 20% × $18,000</p>
                                <span className="font-heading font-black text-2xl text-accent block">$86,400</span>
                                <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">per year</span>
                            </div>
                            <div className="bg-primary p-6 border-4 border-primary">
                                <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest block mb-2">Annual Cost</span>
                                <p className="font-mono text-xs text-surface font-bold mb-3">tooling + setup + labor</p>
                                <span className="font-heading font-black text-2xl text-accent block">$48,000</span>
                                <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">per year</span>
                            </div>
                        </div>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4 mb-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Net gain = ($140,400 + $86,400) − $48,000 = $178,800/yr. Return = $4.72 per $1 spent. Payback ≈ 2.5 months. Even if you discount the time-savings number by half (because not all freed hours convert to value), you still clear $108,600 net — a 2.3x return. That margin of safety is the signal you're looking for.
                            </p>
                        </div>
                    </section>

                    {/* Section 5 — Worked example narrative */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            A Worked Example, Honestly Discounted
                        </h2>
                        <p className="mb-4">
                            Take that 5-rep team above. The headline says $4.72 per dollar — but a serious operator never books the headline. Here's how we'd actually pressure-test it before recommending the build:
                        </p>
                        <p className="mb-4">
                            <strong>Discount the time savings.</strong> Twelve hours saved doesn't mean twelve hours of new revenue work. Some of it evaporates. We routinely apply a 50% "redeployment haircut" — assume only half the freed time becomes productive. That drops time savings from $140,400 to $70,200.
                        </p>
                        <p className="mb-4">
                            <strong>Stress the revenue lift.</strong> The 24 extra opportunities assume the automation actually drives more pipeline — faster lead response, no dropped follow-ups. If you can't draw that causal line confidently, cut it in half or zero it out. Conservatively, call it $43,200.
                        </p>
                        <p>
                            <strong>The conservative case:</strong> ($70,200 + $43,200) − $48,000 = <strong>$65,400 net, a 2.4x return, payback around 5 months.</strong> That's the number we'd actually put in front of a client — discounted, defensible, and still clearly worth doing. The discipline isn't pessimism for its own sake. It's that a project which only works on best-case inputs isn't a project, it's a bet.
                        </p>
                    </section>

                    {/* Section 6 — Where ROI is overstated */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Where Automation ROI Gets Overstated
                        </h2>
                        <p className="mb-4">
                            We'll cost ourselves a few deals saying this, but you need to know the failure modes. These are the places ROI claims fall apart in the real world:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                'Time savings that never convert to revenue work',
                                'Ignoring maintenance — workflows break and need babysitting',
                                'Counting revenue lift with no causal mechanism',
                                'Hidden costs: integration, data cleanup, change management',
                                'Adoption tax — a tool nobody uses returns exactly $0',
                                'Stacking all three buckets at best-case inputs',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            The biggest one is maintenance. Automation isn't set-and-forget — APIs change, a CRM field gets renamed, a workflow silently stops firing. Budget 10–20% of build cost annually just to keep things running. Vendors never put this line in their ROI deck, and it's the single most common reason real-world returns undershoot the pitch.
                        </p>
                        <p>
                            The second biggest is adoption. The most beautiful automation in the world returns nothing if your team routes around it. Whatever your ROI math says, multiply it by your honest estimate of adoption. A 2x projected return at 50% adoption is a 1x real return — break-even, not a win.
                        </p>
                    </section>

                    {/* Section 7 — How to use this */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            How To Actually Use This
                        </h2>
                        <p className="mb-4">
                            Before you sign anything: run the three equations, discount time savings by half, demand a causal story for any revenue lift, and add 15% for maintenance. If the conservative case still clears 2x, you have a real project. If it only works at full optimism, you have a sales deck.
                        </p>
                        <p>
                            And start narrow. The fastest, most reliable ROI comes from automating one painful, repetitive, high-frequency bottleneck — not from buying a platform that promises to automate everything. One sharp workflow that pays back in three months earns you the right to build the next one. That's how compounding automation actually happens. If you're not sure you're even ready to start, our <Link to="/blog/how-to-know-if-your-business-needs-ai-automation" className="text-accent font-bold underline hover:text-primary">readiness checklist</Link> is the right first read.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want Us To Run Your Numbers?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            Book a discovery call and we'll build a discounted, defensible ROI model for your specific bottleneck — time, dollars, payback, and the honest risks. If the conservative case doesn't clear 2x, we'll tell you not to build it.
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
                                { slug: 'how-to-know-if-your-business-needs-ai-automation', title: 'How To Know If Your Business Is Ready For AI Automation' },
                                { slug: 'ai-automation-services-explained', title: "AI Automation Services: What's Included and What to Pay" },
                                { slug: 'ai-sales-prospecting', title: 'AI Sales Prospecting: How to Book More Meetings' },
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
