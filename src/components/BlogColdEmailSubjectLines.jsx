import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';
import SwipeFilePreview from './SwipeFilePreview';

export default function BlogColdEmailSubjectLines() {
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
                        <time dateTime="2026-04-30" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">April 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['Cold Email', 'Subject Lines', 'Conversion'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        Cold Email Subject Lines That Actually Get B2B Replies (2026 Playbook)
                    </h1>
                </header>

                {/* Article Body */}
                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">

                    {/* Intro */}
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Most cold emails die at the subject line. Industry-average B2B open rates sit at 30-45%, which is another way of saying that more than half of your prospects never even see the email you spent hours writing. The campaigns we run hit 60-70%+ open rates consistently — and the subject line is doing 90% of that work. Here are the cold email subject lines B2B that actually get replies in 2026, the patterns that kill your reply rate, and how to test them without fooling yourself.
                        </p>
                    </div>

                    {/* B2B Cold Email Swipe File (lead magnet) */}
                    <SwipeFilePreview />

                    {/* Section 1 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What Makes A B2B Subject Line Work
                        </h2>
                        <p className="mb-4">
                            A B2B subject line has one job: get the email opened by a busy person who has already deleted 12 cold emails this morning. That's it. It is not a place to pitch, not a place to "establish credibility," and not a place to dump your value prop. If you remember nothing else, remember that subject lines are previews — not headlines.
                        </p>
                        <p className="mb-4">
                            Five principles separate the subject lines that work from the ones that get filtered:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            {[
                                'Curiosity gap — say enough to interest, not enough to satisfy',
                                'Specificity — vague subject lines feel like marketing',
                                'Brevity — 3-7 words, fits in mobile preview',
                                'No spam triggers — money symbols, ALL CAPS, exclamation chains',
                                'Personalization that does not scream automation',
                                'Lowercase, conversational — looks like a human sent it',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6">
                            The hardest one is brevity. Most founders cannot resist cramming the offer into the subject line. The whole point of the subject line is to earn the open — the body is where you pitch. If your subject line tells the prospect exactly what you're selling, there's no reason left to open it.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Subject Lines That DO Work
                        </h2>
                        <p className="mb-6">
                            Here are six archetypes that consistently pull open rates above 60% in B2B cold outreach, with two subject line examples for each. These are not theoretical — they're variants pulled from campaigns we've actually run.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-3">Archetype 1: The Question</h3>
                                <ul className="font-mono text-sm text-primary mb-3 space-y-1">
                                    <li>&gt; "worth a quick look?"</li>
                                    <li>&gt; "is {`{{firstName}}`} the right person for this?"</li>
                                </ul>
                                <p className="text-sm">
                                    Questions create an open loop in the reader's brain. They feel conversational — not pitched. The second one also doubles as a politeness signal, which raises reply rates from gatekeepers who would otherwise route you elsewhere.
                                </p>
                            </div>

                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-3">Archetype 2: The Pattern Interrupt</h3>
                                <ul className="font-mono text-sm text-primary mb-3 space-y-1">
                                    <li>&gt; "probably a bad idea"</li>
                                    <li>&gt; "ignore if not relevant"</li>
                                </ul>
                                <p className="text-sm">
                                    These work because they sound like the opposite of a sales pitch. The reader thinks: "wait, what's a bad idea?" Pattern interrupts are dangerous though — overuse them and the entire inbox burns out on them. Rotate aggressively.
                                </p>
                            </div>

                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-3">Archetype 3: The Mutual Connection</h3>
                                <ul className="font-mono text-sm text-primary mb-3 space-y-1">
                                    <li>&gt; "via {`{{mutualName}}`}"</li>
                                    <li>&gt; "{`{{mutualName}}`} suggested I reach out"</li>
                                </ul>
                                <p className="text-sm">
                                    Only use this when it's true. The reply rate when it's true is absurdly high — sometimes 25%+. The reply rate when you fake it and get caught is zero forever from that prospect. This is the highest-leverage subject line in cold email if you can pull it off honestly.
                                </p>
                            </div>

                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-3">Archetype 4: The Specific Observation</h3>
                                <ul className="font-mono text-sm text-primary mb-3 space-y-1">
                                    <li>&gt; "your post on Series A hiring"</li>
                                    <li>&gt; "noticed {`{{company}}`}'s new pricing page"</li>
                                </ul>
                                <p className="text-sm">
                                    This is the modern replacement for generic personalization. Instead of plugging in a company name, plug in something the prospect did publicly. Observation-based personalization signals you actually looked at the prospect — not just merged a variable.
                                </p>
                            </div>

                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-3">Archetype 5: The Resource Offer</h3>
                                <ul className="font-mono text-sm text-primary mb-3 space-y-1">
                                    <li>&gt; "playbook for {`{{industry}}`} outbound"</li>
                                    <li>&gt; "the deck we used to close [similar co]"</li>
                                </ul>
                                <p className="text-sm">
                                    Resource offers convert because they trade value before asking for time. The trick is the resource has to be specific to the prospect's world — generic ebooks don't work anymore and the inbox knows it.
                                </p>
                            </div>

                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-3">Archetype 6: The Direct Ask</h3>
                                <ul className="font-mono text-sm text-primary mb-3 space-y-1">
                                    <li>&gt; "15 min next week?"</li>
                                    <li>&gt; "intro to your head of growth"</li>
                                </ul>
                                <p className="text-sm">
                                    Counter-intuitive, but direct asks work — especially with executive-level prospects who get hundreds of vague subject lines a day. A direct, low-effort ask reads as confident, not desperate. Reserve this for warm-ish lists where you've earned the right to be blunt.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Subject Lines That Kill Your Reply Rate
                        </h2>
                        <p className="mb-4">
                            Some of these were great in 2019. The inbox has learned. If your subject line falls into one of these patterns, your reply rate is suffering even if your open rate looks fine.
                        </p>
                        <div className="flex flex-col gap-4">
                            {[
                                { bad: '"Quick question"', why: 'Used by every junior SDR on Earth. Prospects now read this as "I am about to pitch you." Burned beyond saving.' },
                                { bad: '"Re: our conversation" / "Re: follow up"', why: 'The fake-reply trick. Hits open rate short-term, destroys trust on the open. Prospects feel manipulated and mark as spam.' },
                                { bad: '"INCREASE REVENUE BY 200%"', why: 'ALL CAPS plus a number plus a promise. This is the spam filter\'s favorite combination. Even if it lands, no executive opens it.' },
                                { bad: '"🚀 Big news for {{company}} 🚀"', why: 'Emoji spam in B2B subject lines reads as consumer marketing. Triggers filters, repels decision-makers. There is no version of this that works.' },
                                { bad: '"{{firstName}}, here\'s how we doubled MRR for [BigCo]"', why: 'Over-personalization plus a brag. Feels like a templated case-study pitch. Also: nobody believes the BigCo claim.' },
                                { bad: '"Hi {{firstName|there}}"', why: 'Personalization variable that broke and exposed your template. Instant delete. Test every fallback before sending.' },
                                { bad: '"Last chance" / "Final notice"', why: 'Manufactured urgency in a first cold email is a lie and prospects know it. Reads as cheap. Save urgency for the body of a sequence, not the subject line.' },
                                { bad: '"A meeting request from [your company]"', why: 'Announces it\'s a sales pitch in 8 words. No curiosity gap, no reason to open. Subject lines should not pre-disclose intent.' },
                            ].map((item, i) => (
                                <div key={i} className="bg-accent/10 border-4 border-accent p-5">
                                    <p className="font-mono text-sm font-bold text-primary mb-2">{item.bad}</p>
                                    <p className="text-sm text-primary/80">{item.why}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Subject Line A/B Testing For B2B
                        </h2>
                        <p className="mb-4">
                            Most teams do A/B testing wrong. They send 50 emails on each variant, see one outperform by 4%, and crown a winner. That's not data — that's noise. Cold email subject line testing only works at sample sizes most senders never reach.
                        </p>
                        <p className="mb-4">
                            Our rules for testing:
                        </p>
                        <div className="bg-primary p-6 border-4 border-primary mt-4 mb-4">
                            <p className="font-mono text-sm text-surface font-bold">
                                &gt; MINIMUM SAMPLE: ~400 sends per variant for statistical significance on open rate.<br />
                                &gt; ONE VARIABLE: never test subject line + opening line + CTA at once.<br />
                                &gt; MEASURE: reply rate, not open rate. Opens are vanity.<br />
                                &gt; RETIRE WINNERS: rotate every 6-8 weeks as inbox novelty fades.
                            </p>
                        </div>
                        <p className="mb-4">
                            The "retire winners" rule is the one nobody follows. A subject line that crushed for two months will quietly decay because the same prospects are getting hit with the same patterns from a hundred other senders. By month three, your champion is your weakest variant. Treat subject lines like perishable inventory.
                        </p>
                        <p>
                            And measure reply rate — not open rate. Some of the highest-opening subject lines are the worst-performing on reply because they over-promise and the body cannot deliver. The reader feels duped, deletes, and never opens you again. Open rate is a gateway metric, not the goal.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Personalization: When It Helps, When It Hurts
                        </h2>
                        <p className="mb-4">
                            Personalization in subject lines is the most misunderstood lever in cold email. The rules have changed dramatically in the last 18 months — what worked in 2023 actively hurts you now.
                        </p>
                        <p className="mb-4">
                            <strong>First-name in the subject line:</strong> still lifts open rate by 4-7% on average — but slightly hurts deliverability because spam filters have flagged "{`{{firstName}}`}, ..." as a common cold-email pattern. Net positive on smaller, warmed-up domains. Net neutral or negative on large sends. Test it on your stack.
                        </p>
                        <p className="mb-4">
                            <strong>Company name in the subject line:</strong> dead. It was great in 2021. By 2024 every sender was doing it, and by 2026 the prospect's brain has trained itself to read "{`{{company}}`} + verb" as a cold email and skip it. Avoid.
                        </p>
                        <p className="mb-4">
                            <strong>Observation-based personalization:</strong> still works, and it's the only kind that's getting stronger over time. "your post on X," "noticed your team is hiring for Y," "the launch you ran last month" — these all signal real human attention. Hard to scale, but worth it for high-value prospects.
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                The rule we operate by: personalization that any junior SDR with a CSV could do is now a negative signal. Personalization that requires actually looking at the prospect — a recent post, a hire, a product update — is the only kind that earns opens in 2026. AI helps you scale the research, not the writing.
                            </p>
                        </div>
                        <p className="mt-6">
                            If you can't write a subject line that would be obviously stupid to send to anyone else on your list, your personalization isn't real — it's a variable swap. And every prospect alive can tell the difference now.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want Us To Write Subject Lines That Actually Convert?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We run cold email campaigns that hit 60-70% open rates and 4% reply rates — and the subject line is the single biggest lever. If you want to stop guessing and start booking, let's talk for 15-30 minutes.
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
                                { slug: 'cold-email-system-20-appointments-month', title: 'How We Get 15-20 Qualified Appointments Per Month With Cold Email' },
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
