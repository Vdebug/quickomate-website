import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogVetAgency() {
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
                        <time dateTime="2026-05-13" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">May 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['Agency Vetting', 'Cold Email', 'B2B Growth'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        How to Vet a Cold Email Agency: 9 Red Flags That Predict a Failed Engagement
                    </h1>
                </header>

                {/* Article Body */}
                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">

                    {/* Intro */}
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Most cold email engagements fail in the first 60 days, and you can usually see it coming on the sales call — if you know what to listen for. The failure isn't bad luck. It's the same handful of structural mistakes: torched domains, vanity metrics, copy nobody read, and a contract built to protect the agency from accountability. Here are the 9 red flags that predict a dead engagement, plus the exact questions to ask before you sign. We wrote this knowing it's the test we want to be held to ourselves.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Red Flag #1 — They Send From Your Main Domain
                        </h2>
                        <p className="mb-4">
                            This is the fastest disqualifier. If an agency plans to send cold outreach from <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">you@yourcompany.com</code>, they are betting your entire business communication stack on a campaign going perfectly. It won't.
                        </p>
                        <p>
                            One spam-complaint spike or a bounce rate over 5% and your invoices, password resets, calendar invites, and support replies start landing in spam too. Any competent operator buys 3-5 separate lookalike domains for outreach so a torched sender never touches your primary. If they skip this, nothing else they say matters.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Red Flag #2 — No Deliverability or Warm-Up Talk
                        </h2>
                        <p className="mb-4">
                            Listen to how much of the pitch is about copy and "messaging" versus how the email actually reaches the inbox. If they never mention SPF, DKIM, DMARC, mailbox warm-up, or inbox placement, they're selling you words that will land in spam.
                        </p>
                        <p>
                            A real agency talks about a 2-3 week warm-up timeline, the Google/Yahoo bulk-sender rules, and how they monitor placement with seed tests. If "deliverability" is a word you have to introduce into the conversation, walk.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Red Flag #3 — Vanity Metrics Instead of Meetings
                        </h2>
                        <p className="mb-4">
                            "We got you a 62% open rate!" means nothing. Apple Mail Privacy Protection pre-fetches images and inflates open rates across the board — the number is fiction. Worse, an agency leaning on open rates is usually hiding that the campaign produced no actual conversations.
                        </p>
                        <p className="mb-4">
                            The same trick applies to "leads." A "lead" can be defined as anyone who opened, clicked, or replied "remove me." Those aren't pipeline. The only outputs that count are <strong>positive replies and qualified meetings booked.</strong>
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4 mb-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                If an agency reports in open rates and "leads" instead of positive replies and booked qualified meetings, they're managing your perception, not your pipeline. Insist that success is defined in meetings before you sign — and that "qualified" has a written definition.
                            </p>
                        </div>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Red Flag #4 — They Keep the Infrastructure and Data
                        </h2>
                        <p className="mb-4">
                            Ask one question: "If we part ways, what do I walk away with?" If the answer is "nothing" — the domains, inboxes, sending platform, and lead lists all stay with them — you're not building an asset, you're renting one that vanishes the day you stop paying.
                        </p>
                        <p>
                            This is the leverage trap. An agency that holds the infrastructure has no incentive to make you self-sufficient and every incentive to keep your program "good enough" to retain you. Insist that domains and inboxes are registered in your accounts and that you keep the lead data. Ownership is the difference between an investment and a hostage situation.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Red Flag #5 — Long Lock-In Contracts
                        </h2>
                        <p className="mb-4">
                            A 12-month lock-in with no performance off-ramp is an admission. A confident operator knows cold email needs about 90 days to ramp — warm-up, testing, iteration — and then expects the results to keep you. They'll offer a short initial term because they back their own work.
                        </p>
                        <p>
                            Agencies that need to handcuff you for a year before you see any outcome are protecting themselves from their own failure rate. A fair structure is a 90-day initial commitment, then month-to-month. If they won't go near that, ask yourself what they're afraid you'll learn in month four.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Red Flag #6 — Guaranteed Reply Rates Above ~5%
                        </h2>
                        <p className="mb-4">
                            Healthy cold B2B campaigns into a sharp ICP land a <strong>positive reply rate of 1-3%</strong>, with total reply rate (including "not interested") maybe touching 5-8%. Anyone guaranteeing a positive reply rate of 10%+ is either lying, redefining "reply" to include autoresponders and opt-outs, or planning to spray a low-quality list at unsafe volume that torches your domains.
                        </p>
                        <p>
                            Be just as skeptical of "guaranteed X meetings per month" with no shared definition of qualified and no acknowledgment that list quality and offer drive the outcome. Confident operators give you honest ranges and explain the variables. Guarantees that defy the math are a sales tactic, not a capability.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Red Flag #7 — Fully AI-Generated Copy, No Human Review
                        </h2>
                        <p className="mb-4">
                            AI is a genuinely useful tool for cold email in 2026 — for research, personalization at scale, and first drafts. But an agency running fully automated, zero-review AI copy is producing the exact generic "I came across your company and was impressed" sludge that prospects now pattern-match and delete on sight.
                        </p>
                        <p>
                            The right answer is AI-assisted, human-edited: a person who knows your offer reviews the angle, the personalization, and the ask. If the agency can't explain where the human judgment enters the loop, you're paying retainer rates for output a free tool could generate — and that everyone's inbox is already drowning in.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Red Flag #8 — No Clear ICP or List-Building Process
                        </h2>
                        <p className="mb-4">
                            The list is 50-60% of cold email outcomes. If the agency can't walk you through how they define your Ideal Customer Profile, where they source contacts, and how they verify them, the campaign is dead before the first send — great copy to the wrong people produces nothing.
                        </p>
                        <p>
                            You want to hear specifics: how they translate your best customers into firmographic and signal-based filters, which data sources they layer (Apollo, Clay, LinkedIn Sales Navigator, intent signals), and how they verify deliverability of each address to keep bounce rates under 3%. "We have a big database" is not a process. A vague answer here predicts a list full of stale, unverified contacts.
                        </p>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Red Flag #9 — They Can't Show You Real Campaign Data
                        </h2>
                        <p className="mb-4">
                            Ask to see an anonymized dashboard from a real, recent campaign — sends, deliverability, positive reply rate, meetings booked. A capable agency has this ready and will redact client names while showing you the actual numbers. A weak one shows you a polished case-study PDF with no operational data behind it.
                        </p>
                        <p>
                            Glossy testimonials and logo walls are easy to manufacture. Live campaign metrics are not. If they can't or won't show you the real performance of a recent account in a comparable space, assume the numbers don't support the pitch.
                        </p>
                    </section>

                    {/* The 9 Red Flags Grid */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The 9 Red Flags at a Glance
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 mb-4">
                            {[
                                { n: '01', flag: 'Sends from your main domain' },
                                { n: '02', flag: 'No deliverability or warm-up talk' },
                                { n: '03', flag: 'Vanity metrics, not meetings' },
                                { n: '04', flag: 'They keep the infrastructure & data' },
                                { n: '05', flag: 'Long lock-in contracts' },
                                { n: '06', flag: 'Guaranteed reply rates above ~5%' },
                                { n: '07', flag: 'Fully AI copy, no human review' },
                                { n: '08', flag: 'No clear ICP or list process' },
                                { n: '09', flag: "Can't show real campaign data" },
                            ].map((item) => (
                                <div key={item.n} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-heading font-black text-2xl text-accent block mb-1">{item.n}</span>
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item.flag}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Questions to Ask Checklist */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Questions to Ask on the Sales Call
                        </h2>
                        <p className="mb-4">
                            Copy these straight into your notes. The answers — and how confidently they're given — tell you everything before any money changes hands:
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4 mb-4">
                            <div className="flex flex-col gap-3">
                                {[
                                    'What domains and inboxes will we send from, and whose accounts are they in?',
                                    'Walk me through your warm-up timeline and how you monitor inbox placement.',
                                    'How do you define a "qualified meeting," in writing?',
                                    'What is your honest blended cost per meeting on recent accounts in our space?',
                                    'If we leave, what exactly do we walk away with?',
                                    'What is the initial term, and is there a performance off-ramp?',
                                    'Where does a human review the copy before it sends?',
                                    'How do you build and verify the list for our ICP?',
                                    'Can you show me anonymized data from a real recent campaign?',
                                ].map((q, i) => (
                                    <div key={i} className="flex gap-3 items-start border-l-4 border-accent pl-4">
                                        <span className="font-mono text-sm font-black text-accent">{String(i + 1).padStart(2, '0')}</span>
                                        <span className="font-sans text-sm text-primary/80">{q}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p>
                            The agency that passes its own test answers all nine without flinching — short terms, infrastructure in your name, meetings as the metric, real data on screen, and a human in the loop. That's the bar. We hold ourselves to it, and you should hold us to it too.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want Us To Set This Up For You?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            Run us through every question on this list. We'll show you real campaign data, explain exactly what you'd own, define "qualified" in writing, and give you honest cost-per-meeting math — short terms, infrastructure in your name, a human in the loop. If we pass our own test, let's talk.
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
                                { slug: 'cold-email-agency-cost-2026', title: 'What a B2B Cold Email Agency Actually Costs in 2026' },
                                { slug: 'why-you-should-own-your-cold-email-infrastructure', title: 'Why You Should Own Your Cold Email Infrastructure' },
                                { slug: 'ai-vs-human-cold-email-copy', title: 'AI vs Human Cold Email Copy' },
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
