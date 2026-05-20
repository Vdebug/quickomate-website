import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogColdEmailVsLinkedIn() {
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
                        <time dateTime="2026-05-16" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">May 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['Multichannel', 'Cold Email', 'LinkedIn'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        Cold Email vs LinkedIn Outreach in 2026: Why the Winners Run Both
                    </h1>
                </header>

                {/* Article Body */}
                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">

                    {/* Intro */}
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            "Cold email vs LinkedIn" is the wrong question. It's like asking whether a sales team should make calls or send emails — the answer is yes. The teams hitting real pipeline numbers in 2026 aren't picking a side; they're running both channels in a single coordinated sequence, where each one does the job it's actually good at. Here's where each wins, the real numbers, and the exact day-by-day cadence we run.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What Each Channel Is Actually Good At
                        </h2>
                        <p className="mb-4">
                            These channels aren't competing — they have different physics. Email is a volume-and-cost machine: practically unlimited reach, near-zero marginal cost, fully automatable. LinkedIn is a trust-and-visibility machine: lower volume, hard daily limits, but warmer, with a face, a profile, and a sense of a real human on the other end.
                        </p>
                        <p className="mb-4">
                            The mistake is treating them as substitutes. Email alone feels anonymous — a name and a domain. LinkedIn alone can't scale and burns your personal account if you push it. Used together, the LinkedIn profile gives the email a face, and the email gives the LinkedIn touch a reason and a CTA. They cover each other's weaknesses.
                        </p>
                        <p>
                            One more thing 2026 changed: senior buyers — VPs, founders, C-level — increasingly screen unknown email hard but will glance at a relevant LinkedIn message, especially from someone whose profile signals credibility. For down-market and operational buyers, email still does the heavy lifting. Knowing which buyer you're chasing tells you which channel to weight.
                        </p>
                    </section>

                    {/* Section 2 — Side-by-side comparison */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Channel Comparison, Side by Side
                        </h2>
                        <p className="mb-4">
                            Realistic 2026 B2B numbers — not the inflated figures vendors quote. Your mileage varies with list quality and ICP fit, but these are honest midpoints:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4">
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-4 border-l-4 border-accent pl-3">Cold Email</h3>
                                <ul className="flex flex-col gap-3">
                                    {[
                                        ['Reply rate', '1-5% (good list, plain text)'],
                                        ['Positive reply rate', '0.5-2%'],
                                        ['Daily volume / identity', '30-40 sends'],
                                        ['Scalable volume', 'Yes — add mailboxes'],
                                        ['Cost per touch', 'Cents'],
                                        ['Best for', 'Scale, mid-market, ops buyers'],
                                    ].map(([k, v]) => (
                                        <li key={k} className="flex flex-col">
                                            <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">{k}</span>
                                            <span className="font-sans text-sm font-bold text-primary">{v}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-4 border-l-4 border-accent pl-3">LinkedIn</h3>
                                <ul className="flex flex-col gap-3">
                                    {[
                                        ['Connection accept rate', '20-35%'],
                                        ['Reply rate (of accepts)', '10-25%'],
                                        ['Daily volume / account', '15-25 invites'],
                                        ['Scalable volume', 'No — per-account limits'],
                                        ['Cost per touch', 'High (time + seat)'],
                                        ['Best for', 'Warmth, senior buyers, trust'],
                                    ].map(([k, v]) => (
                                        <li key={k} className="flex flex-col">
                                            <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">{k}</span>
                                            <span className="font-sans text-sm font-bold text-primary">{v}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <p>
                            Read those numbers honestly: email wins on raw scale and cost-per-touch by an order of magnitude. LinkedIn wins on per-touch quality — a higher fraction of the people you reach actually engage. Neither is "better." They're optimized for different things.
                        </p>
                    </section>

                    {/* Section 3 — Email economics */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Where Email Wins: Scale and Cost
                        </h2>
                        <p className="mb-4">
                            Email's superpower is that the marginal cost of one more prospect is essentially zero. Once your infrastructure is built — domains, mailboxes, warm-up, sequences — reaching 4,000 people a month costs roughly the same as reaching 400. You scale horizontally by adding mailboxes, not by adding hours.
                        </p>
                        <p className="mb-4">
                            That makes email the only channel that can fill a pipeline predictably at volume. A 2% positive reply rate sounds tiny until you run it against 4,000 sends a month — that's 80 interested conversations from a system that runs while you sleep. No human-driven channel touches that math.
                        </p>
                        <p>
                            The catch is the anonymity tax. A cold email from a name you don't recognize, at a domain you've never heard of, starts from zero trust. That's exactly the gap LinkedIn fills.
                        </p>
                    </section>

                    {/* Section 4 — LinkedIn warmth + limits/ban risk */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Where LinkedIn Wins: Warmth — and Its Hard Ceiling
                        </h2>
                        <p className="mb-4">
                            On LinkedIn, the prospect can see your face, your title, your mutual connections, your posts. That context does work no email subject line can. A profile view notification alone puts you on their radar before you've said a word. For senior buyers who delete cold email reflexively, a credible LinkedIn touch often gets the first real look.
                        </p>
                        <p className="mb-4">
                            But LinkedIn has a hard ceiling, and it's not negotiable. The platform enforces a weekly invitation cap — roughly <strong>100-200 connection requests per week</strong> per account — and watches behavior aggressively. Push past it, automate carelessly, or run an aggressive third-party tool, and you risk a warning, a temporary restriction, or a permanent ban on an account you can't easily replace.
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4 mb-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Treat each LinkedIn account as a scarce, non-renewable asset. Stay under ~20-25 invites/day and ~100-150/week, use cloud-based automation that mimics human pacing, warm new accounts before automating, and never run a brand-new account through a tool. A banned LinkedIn account is far more expensive to replace than a torched email domain.
                            </p>
                        </div>
                        <p>
                            This is the core reason LinkedIn can't be your only channel: you physically cannot reach enough people through it to fill a pipeline, and the harder you try, the faster you lose the account. Its value is quality per touch, not quantity of touches.
                        </p>
                    </section>

                    {/* Section 5 — Why both lifts reply rates */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Why Running Both Lifts Your Numbers
                        </h2>
                        <p className="mb-4">
                            Multichannel isn't just "two channels' worth of touches." The channels compound. A prospect who saw your profile view, got your connection request, <em>then</em> received an email recognizes the name. The email stops being cold. Recognition is the single biggest lever on reply rate, and only the second channel can create it.
                        </p>
                        <p className="mb-4">
                            In practice, coordinated multichannel sequences consistently outperform single-channel ones — teams typically see meaningfully higher positive reply rates when email and LinkedIn touches reinforce each other versus email alone. The mechanism is simple: more relevant surface area, plus familiarity. By the third touch across two channels, you've moved from "who is this" to "oh, them again."
                        </p>
                        <p>
                            The key word is <strong>coordinated</strong>. Blasting both channels independently just doubles your annoyance. The lift comes from sequencing them so each touch references and builds on the last — which is exactly what the cadence below does.
                        </p>
                    </section>

                    {/* Section 6 — The cadence table */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Exact Multichannel Cadence
                        </h2>
                        <p className="mb-4">
                            This is the day-by-day sequence we run — a ~14-day window blending light LinkedIn touches with plain-text email. LinkedIn opens the relationship and provides recognition; email carries the actual ask and CTA. Each row is one touch:
                        </p>
                        <div className="bg-surface border-4 border-primary p-2 sm:p-4 mt-4 mb-4 overflow-x-auto">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest text-left p-3 border-b-4 border-primary">Day</th>
                                        <th className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest text-left p-3 border-b-4 border-primary">Channel</th>
                                        <th className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest text-left p-3 border-b-4 border-primary">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        ['1', 'LinkedIn', 'Profile view + connection request, no note'],
                                        ['2', 'Email', 'Email 1 — short, relevant trigger, soft CTA'],
                                        ['4', 'LinkedIn', 'If accepted: light value message (no pitch)'],
                                        ['5', 'Email', 'Email 2 — reframe the angle, one new proof point'],
                                        ['8', 'LinkedIn', 'Engage with a recent post / leave a real comment'],
                                        ['9', 'Email', 'Email 3 — bump, reply to thread, restate the ask'],
                                        ['12', 'LinkedIn', 'Direct but brief message referencing the email'],
                                        ['14', 'Email', 'Email 4 — breakup email, leave the door open'],
                                    ].map(([day, channel, action], i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-background' : ''}>
                                            <td className="font-heading font-black text-lg text-accent p-3 border-b border-primary/20 align-top">{day}</td>
                                            <td className="p-3 border-b border-primary/20 align-top">
                                                <span className="font-mono text-xs font-bold uppercase text-primary bg-primary/5 border border-primary/20 px-2 py-0.5">{channel}</span>
                                            </td>
                                            <td className="font-sans text-sm text-primary/80 p-3 border-b border-primary/20 align-top">{action}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mb-4">
                            Notice what's <em>not</em> here: no pitch in the first LinkedIn touch, no connection-request note (no-note requests accept at higher rates), and the email does the real selling. LinkedIn earns recognition and warmth; email asks for the meeting. By day 9, when you bump the email thread, the name is already familiar from three LinkedIn touches.
                        </p>
                        <p>
                            Stop the entire sequence the moment they reply or book — across both channels. Nothing kills a multichannel program faster than someone getting "just checking in" email #4 the day after they accepted a meeting on LinkedIn. Sync the two so a reply anywhere pauses everywhere.
                        </p>
                    </section>

                    {/* Section 7 — Tooling / how to run it */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            How to Actually Run It Without Burning Either Channel
                        </h2>
                        <p className="mb-4">
                            The operational risk in multichannel is that the two systems don't talk to each other. Your email tool doesn't know the prospect replied on LinkedIn; your LinkedIn tool keeps sending while they're already in an email conversation. That's how you become the person who annoyed someone into a "no."
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                            {[
                                { name: 'Unified sequencer', detail: 'Use a tool (or automation layer) that treats email + LinkedIn as one sequence with a shared stop trigger, not two silos.' },
                                { name: 'Respect both limits', detail: '30-40 emails/mailbox/day; under 20-25 LinkedIn invites/account/day. Scale email with mailboxes, never by overloading one LinkedIn seat.' },
                                { name: 'Single source of truth', detail: 'Pipe replies from both channels into one CRM/inbox so a human sees the full thread and the sequence pauses on any response.' },
                            ].map((tool) => (
                                <div key={tool.name} className="bg-surface border-4 border-primary p-4">
                                    <span className="font-mono text-sm font-black text-accent block mb-2">{tool.name}</span>
                                    <span className="font-sans text-xs text-primary/70">{tool.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            The honest tradeoff: multichannel is more work to set up and more work to keep clean than single-channel email. But it's the difference between cold outreach and warm-ish outreach — and warm-ish converts. If you only have the bandwidth to do one channel <em>well</em>, do email well. If you can run both coordinated, you will out-book anyone running either alone.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want Us To Run a Coordinated Multichannel System?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We build and operate combined cold email + LinkedIn sequences — shared stop triggers, safe sending limits on both channels, and every reply landing in one inbox. No torched domains, no banned LinkedIn accounts, just booked calls. If you're running one channel and wondering where the other half of your pipeline is, let's talk.
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
                                { slug: 'cold-email-vs-paid-ads-b2b', title: 'Cold Email vs Paid Ads: Which Actually Works for B2B' },
                                { slug: 'cold-email-system-20-appointments-month', title: 'How We Get 15-20 Qualified Appointments Per Month' },
                                { slug: 'b2b-cold-email-benchmarks-2026', title: 'Realistic B2B Cold Email Benchmarks in 2026' },
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
