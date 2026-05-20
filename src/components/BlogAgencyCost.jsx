import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogAgencyCost() {
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
                        <time dateTime="2026-05-12" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">May 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['Pricing', 'Agency vs In-House', 'B2B Growth'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        What a B2B Cold Email Agency Actually Costs in 2026 (And What You Get at Each Tier)
                    </h1>
                </header>

                {/* Article Body */}
                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">

                    {/* Intro */}
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Nobody publishes cold email agency pricing. You book a call, sit through a pitch, and get a number anchored to whatever they think your budget is. So here's the honest version — real 2026 tiers, what's actually included at each, the cost-per-meeting math that determines whether any of it works, and the pricing structures that quietly transfer all the leverage to the agency. If a vendor won't show you this breakdown, you already have your answer.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Three Real Price Tiers
                        </h2>
                        <p className="mb-4">
                            Strip away the packaging and almost every B2B cold email agency in 2026 sells one of three things. The price isn't random — it tracks how much of the system the agency runs for you and how much sending volume they can support without your deliverability falling apart.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mb-4">
                            {[
                                { tier: 'Entry', price: '$2.5k-$5k/mo', detail: 'Lead lists + copy + sending on a shared platform. Light infrastructure (a few domains). You manage replies. Best for testing one ICP at low volume — 3,000-6,000 sends/mo.' },
                                { tier: 'Mid', price: '$5k-$10k/mo', detail: 'Multiple ICPs, dedicated infrastructure, deliverability monitoring, A/B testing, and a strategist on calls. Some do reply-handling and meeting booking. 8,000-20,000 sends/mo.' },
                                { tier: 'Full-Service', price: '$10k-$15k+/mo', detail: 'Full pipeline ops — infrastructure, list-building, copy, multi-channel (email + LinkedIn), live inbox management, CRM integration, and booked-meeting handoff to your team.' },
                            ].map((t) => (
                                <div key={t.tier} className="bg-surface border-4 border-primary p-5">
                                    <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest block mb-2">{t.tier}</span>
                                    <span className="font-heading font-black text-xl text-accent block mb-3">{t.price}</span>
                                    <span className="font-sans text-xs text-primary/70 leading-relaxed">{t.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            Below $2.5k/mo you're not buying an agency — you're buying a freelancer with a Smartlead seat, or a tool dressed up as a service. Above $15k/mo you're usually paying for a name, a slower process, or both. The vast majority of B2B companies that win with cold email sit squarely in the $5k-$10k band.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What's Actually Included (And What Gets Hidden)
                        </h2>
                        <p className="mb-4">
                            The retainer is the headline, but the line items underneath it are where the truth lives. Some costs are baked in; others get billed as "pass-through" or quietly omitted until month two. Here's the real breakdown of what the work costs to run:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
                            {[
                                'Domains: $10-$15/yr each — usually pass-through to you',
                                'Mailboxes: $6-$8/inbox/mo (Google Workspace / M365)',
                                'Sending platform: $97-$297/mo (Smartlead, Instantly)',
                                'Lead data: $0.03-$0.20/verified contact (Apollo, Clay, ZoomInfo)',
                                'Warm-up tooling: bundled into platform or $30-$50/mo',
                                'Copy + strategy: the actual labor you pay the retainer for',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            Add it up and the hard infrastructure cost to run a serious program — say 12 inboxes plus platform, data, and warm-up — lands around <strong>$300-$600/mo</strong>. Everything above that in your retainer is paying for human judgment: ICP definition, list research, copy, deliverability management, and reply handling. That's fine. That's the value. But you should know the ratio, because a $5k retainer where $600 is tooling means you're paying $4,400/mo for people and process.
                        </p>
                        <p>
                            The red flag is the agency that won't itemize. If they bundle "infrastructure" into a vague $5k number and won't tell you how many domains and inboxes you're actually getting, you can't size whether the program can hit your target volume — and you can't take any of it with you when you leave.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Only Number That Matters: Cost Per Meeting
                        </h2>
                        <p className="mb-4">
                            Retainer size is a vanity input. The metric that decides whether cold email is a profit center or a money pit is <strong>cost per qualified meeting</strong> — your total monthly spend divided by the number of real, sales-qualified conversations that hit your calendar.
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4 mb-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">Cost-Per-Meeting Math</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: 'Good Program', value: '$150-$400' },
                                    { label: 'Typical / Average', value: '$400-$800' },
                                    { label: 'Underperforming', value: '$800-$1,500' },
                                    { label: 'Burning Money', value: '$1,500+' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-primary p-4">
                                        <span className="font-heading font-black text-2xl text-accent block">{stat.value}</span>
                                        <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mb-4">
                            Here's the math on a healthy mid-tier program. A $6k/mo retainer sending ~12,000 emails into a sharp ICP at a 1.5-2.5% positive reply rate yields roughly 25-40 conversations, of which 15-20 become real booked meetings. That's a cost per meeting of <strong>$300-$400</strong>. If your average deal is $15k+ and you close even one in eight of those meetings, the unit economics are obvious.
                        </p>
                        <p>
                            Run this calculation before you sign anything. Ask the agency for their honest blended cost-per-meeting across recent accounts in your space. If they answer in "open rates" or "leads delivered," they're hiding the number that matters — because it doesn't look good.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Agency vs. In-House SDR: The Loaded Cost
                        </h2>
                        <p className="mb-4">
                            "We'll just hire an SDR" sounds cheaper than a $6k retainer. It rarely is. The base salary is the smallest part of the bill. Once you load in the real cost of putting a human seat in your pipeline, the comparison flips hard.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
                            {[
                                'Base salary: $55k-$70k for a competent B2B SDR',
                                'OTE with commission: $75k-$95k on target',
                                'Payroll tax, benefits, equipment: +20-30%',
                                'The same tooling stack you would have paid for anyway',
                                'Management time + 3-6 month ramp before productivity',
                                'Fully loaded reality: $95k-$140k/yr ($8k-$11.6k/mo)',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            A single fully loaded SDR runs <strong>$95k-$140k/year</strong> — and they ramp for months, take vacation, get poached, and can only run one playbook at a time. A mid-tier agency at $6k-$8k/mo costs the same or less, deploys a tested system on day one, and doesn't quit. The honest catch: an in-house rep builds institutional knowledge and is yours forever. An agency rents you the outcome.
                        </p>
                        <p>
                            The sharpest move for most companies under ~50 people is to use an agency to <em>prove the channel works and build the playbook</em>, then hire in-house once you have a validated system to hand a new rep. Pay for the learning curve once, not twice.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Retainer vs. Build-and-Own
                        </h2>
                        <p className="mb-4">
                            There are two fundamentally different commercial models hiding under the word "agency," and they have opposite incentives.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                { model: 'Pure Retainer', detail: 'You pay monthly forever. The agency owns the domains, inboxes, data, and platform. Stop paying and the entire system goes dark the same day. Their incentive is to keep you dependent.' },
                                { model: 'Build-and-Own', detail: 'The infrastructure is registered in your name, in your accounts. You pay for setup + management, but if you leave, you walk away with a working system. Their incentive is to make it good enough that you stay by choice.' },
                            ].map((m) => (
                                <div key={m.model} className="bg-surface border-4 border-primary p-5">
                                    <span className="font-mono text-sm font-black text-accent block mb-2">{m.model}</span>
                                    <span className="font-sans text-xs text-primary/70 leading-relaxed">{m.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            Neither is inherently evil, but you should know which one you're buying. A pure-retainer shop that holds the assets has every reason to keep your program working "well enough" and no reason to make you self-sufficient. The model determines who has leverage in month 13.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Pricing Red Flags
                        </h2>
                        <p className="mb-4">
                            Some pricing structures aren't just expensive — they're structurally designed to misalign with your results. Watch for these on the sales call:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                'Per-lead pricing — rewards volume of garbage, not quality',
                                'Pay-per-"lead" where a lead is an open or a click, not a meeting',
                                '6-12 month lock-ins with no performance off-ramp',
                                '"We keep the infrastructure" — you own nothing you paid for',
                                'Setup fees over $2.5k with no itemized breakdown',
                                'Pricing that scales with their effort, not your outcomes',
                                'No clause for what happens to domains when you leave',
                                'Guaranteed meetings with no definition of "qualified"',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            <strong>Per-lead pricing is the worst of them.</strong> It sounds performance-based, but it incentivizes the agency to flood you with low-intent "leads" — anyone who replied "not now" or clicked once — because every one of them is billable. You end up paying for a CRM full of noise and a sales team that learns to ignore the channel.
                        </p>
                        <p>
                            Long lock-ins are the second trap. A confident agency will offer a short initial term — 90 days is enough to prove the channel — because they expect the results to keep you. A 12-month lock-in is an admission that they need to handcuff you before you see whether it works.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            How Quickomate Prices It Differently
                        </h2>
                        <p className="mb-4">
                            We run the build-and-own model on purpose. Every domain we register goes in your account. Every inbox, every DNS record, every list — yours. You pay us to build and operate the system, not to hold it hostage.
                        </p>
                        <p className="mb-4">
                            That changes the whole relationship. We can't coast on a retainer while your infrastructure quietly rots, because the moment our work stops being worth more than running it yourself, you can take it in-house — and we've built it so you cleanly could. The only reason to stay is that we keep cost-per-meeting low and your calendar full. That's the alignment we want.
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4 mb-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Our pricing is itemized, the infrastructure is yours, terms are short, and we'll show you real cost-per-meeting math before you sign — not after. If a number anywhere in your current agency relationship is a mystery, that's the thing to fix first.
                            </p>
                        </div>
                        <p>
                            Cold email isn't expensive when it works. A $6k/mo program that books 15-20 qualified meetings at a $15k+ average deal value pays for itself many times over. It only feels expensive when you're paying retainer dollars for vanity metrics and own nothing at the end. Price it on cost-per-meeting and ownership, and the math gets clear fast.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want Us To Set This Up For You?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We'll walk you through real cost-per-meeting math for your ICP, show you exactly what you'd own, and price it transparently — infrastructure in your name, short terms, no per-lead games. If you want to see whether the numbers work before you commit a dollar, let's talk.
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
                                { slug: 'cold-email-system-20-appointments-month', title: 'How We Get 15-20 Qualified Appointments Per Month With Cold Email' },
                                { slug: 'how-to-vet-a-cold-email-agency-red-flags', title: 'How to Vet a Cold Email Agency: 9 Red Flags' },
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
