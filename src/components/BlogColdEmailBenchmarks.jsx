import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogColdEmailBenchmarks() {
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
                        {['Benchmarks', 'Cold Email', 'Data'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        Realistic B2B Cold Email Benchmarks in 2026: Reply Rates, Meetings & Why Small Sends Win
                    </h1>
                </header>

                {/* Article Body */}
                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">

                    {/* Intro */}
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Every "benchmark report" you've read was published by a company that profits when you believe cold email is easy. So the numbers are inflated, the methodology is hidden, and the conclusion is always "send more." This is the honest version: realistic 2026 reply rates, what a meeting actually costs you in sends, why small batches beat big blasts, and which metrics to stop trusting entirely.
                        </p>
                    </div>

                    {/* Section 1 — The headline stat grid */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Honest 2026 Benchmarks
                        </h2>
                        <p className="mb-4">
                            Here are the numbers we actually see across well-run B2B campaigns in 2026 — tight ICPs, clean infrastructure, real personalization. Not vendor case studies. Not the one campaign that went viral. The honest middle of the range:
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4 mb-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">Realistic Range</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                {[
                                    { label: 'Reply rate (total)', value: '2–4%' },
                                    { label: 'Positive reply rate', value: '0.3–0.5%' },
                                    { label: 'Meetings / 100 sends', value: '0.2–0.4' },
                                    { label: 'Sends / meeting', value: '250–500' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-primary p-4">
                                        <span className="font-heading font-black text-xl sm:text-2xl text-accent block">{stat.value}</span>
                                        <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mb-4">
                            Read those numbers carefully, because the gap between them is where most people set wrong expectations. A <strong>2-4% total reply rate</strong> is a healthy, well-run campaign. But most replies aren't "yes" — after you strip out "no thanks," "wrong person," and out-of-office auto-replies, you're left with the only metric that matters: the <strong>positive reply rate</strong>. A genuinely strong campaign lands <strong>0.3-0.5% positive replies</strong>, and a clean <strong>0.5% is elite</strong> — that's a beast of a campaign, not a starting point.
                        </p>
                        <p className="mb-4">
                            That positive-reply number is the one that pays your bills. Translated: at elite performance it takes roughly <strong>250-500 well-targeted sends to book one qualified meeting</strong>; on an average campaign, closer to 500-1,000. If your math assumed a meeting per 50 emails, this is why your pipeline disappointed you. The channel works — it's just not magic, and anyone quoting a meeting per 30 sends is selling a fantasy. For the upstream question of whether cold email is even right for you, see <Link to="/blog/is-cold-email-still-worth-it-2026" className="text-accent font-bold underline hover:text-primary">our honest take on whether it's worth it in 2026</Link>.
                        </p>

                        {/* Benchmark ranges table — the linkable data asset */}
                        <div className="bg-surface border-4 border-primary p-5 sm:p-6 mt-6 overflow-x-auto">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-1">2026 B2B Cold Email Benchmark Ranges</h3>
                            <p className="font-mono text-[11px] text-primary/50 uppercase tracking-widest mb-4">Higher is better · clean infra, tight ICP, real personalization</p>
                            <table className="w-full border-collapse text-left min-w-[520px]">
                                <thead>
                                    <tr className="font-mono text-[10px] uppercase tracking-widest">
                                        <th className="border-2 border-primary bg-primary text-surface p-2">Metric</th>
                                        <th className="border-2 border-primary p-2 text-primary/70">Poor</th>
                                        <th className="border-2 border-primary p-2 text-primary/70">Average</th>
                                        <th className="border-2 border-primary p-2 text-primary">Good</th>
                                        <th className="border-2 border-primary bg-accent text-background p-2">Elite</th>
                                    </tr>
                                </thead>
                                <tbody className="font-mono text-xs sm:text-sm">
                                    {[
                                        { m: 'Reply rate (total)', poor: '< 1%', avg: '1–2%', good: '2–4%', elite: '4–6%' },
                                        { m: 'Positive reply rate', poor: '< 0.1%', avg: '0.1–0.3%', good: '0.3–0.5%', elite: '0.5%+' },
                                        { m: 'Meetings / 100 sends', poor: '< 0.1', avg: '0.1–0.2', good: '0.2–0.4', elite: '0.4–0.6' },
                                    ].map((r) => (
                                        <tr key={r.m}>
                                            <td className="border-2 border-primary bg-primary/5 p-2 font-bold text-primary">{r.m}</td>
                                            <td className="border-2 border-primary p-2 text-primary/60">{r.poor}</td>
                                            <td className="border-2 border-primary p-2 text-primary/60">{r.avg}</td>
                                            <td className="border-2 border-primary p-2 font-bold text-primary">{r.good}</td>
                                            <td className="border-2 border-primary p-2 font-black text-accent">{r.elite}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <p className="font-sans text-xs text-primary/70 mt-4 border-l-4 border-accent pl-3">
                                <strong>Guardrails (lower is better):</strong> bounce rate &lt; 3% · spam complaint rate &lt; 0.3% · inbox placement &gt; 90%. Blow any of these and the reply numbers above stop mattering — you're in spam.
                            </p>
                        </div>

                        {/* Embed / cite snippet — passive backlink magnet */}
                        <div className="bg-primary border-4 border-accent p-5 sm:p-6 mt-6">
                            <h3 className="font-mono text-sm font-black text-accent uppercase tracking-widest mb-2">Cite / embed this benchmark</h3>
                            <p className="font-sans text-xs text-surface/80 mb-3">
                                Using these numbers in a post, deck, or report? Please credit the source — copy the line below:
                            </p>
                            <pre className="bg-background/95 text-primary text-[11px] sm:text-xs p-3 border-2 border-surface/30 overflow-x-auto whitespace-pre-wrap break-words"><code>{`Realistic 2026 B2B cold email benchmarks: 2–4% total reply rate, 0.3–0.5% positive reply rate (0.5% is elite). Source: Quickomate — https://quickomate.com/blog/b2b-cold-email-benchmarks-2026`}</code></pre>
                            <p className="font-mono text-[10px] text-surface/50 uppercase tracking-widest mt-3">Free to reuse with attribution.</p>
                        </div>
                    </section>

                    {/* Section 2 — Small vs large send comparison */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Why Small Sends Beat Big Blasts
                        </h2>
                        <p className="mb-4">
                            This is the single most counterintuitive — and most important — finding in cold email today. Smaller, tightly-targeted batches don't just feel better. They convert at <strong>nearly 3x the reply rate</strong> of large blasts. Same effort, same hours, dramatically different outcome.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-4 border-l-4 border-accent pl-3">Small Batch (&lt;50)</h3>
                                <span className="font-heading font-black text-4xl text-accent block mb-2">~5.8%</span>
                                <span className="font-mono text-[10px] text-primary/60 font-bold uppercase tracking-widest block mb-4">reply rate</span>
                                <div className="flex flex-col gap-3">
                                    {[
                                        'Genuinely personalized per recipient',
                                        'Tight, specific ICP segment',
                                        'Better deliverability — looks human',
                                        'Sharper, problem-specific messaging',
                                    ].map((item, i) => (
                                        <div key={i} className="bg-primary p-3">
                                            <span className="font-mono text-xs text-surface font-bold uppercase">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-lg text-primary uppercase mb-4 border-l-4 border-accent pl-3">Large Blast (1000s)</h3>
                                <span className="font-heading font-black text-4xl text-accent block mb-2">~2.1%</span>
                                <span className="font-mono text-[10px] text-primary/60 font-bold uppercase tracking-widest block mb-4">reply rate</span>
                                <div className="flex flex-col gap-3">
                                    {[
                                        'Generic merge-tag "personalization"',
                                        'Broad list = diluted relevance',
                                        'Volume patterns trip spam filters',
                                        'One message stretched over many ICPs',
                                    ].map((item, i) => (
                                        <div key={i} className="bg-primary p-3">
                                            <span className="font-mono text-xs text-surface font-bold uppercase">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="mt-6">
                            The mechanism is simple: a batch of 40 people who share the exact same problem can receive a message written for that exact problem. A blast to 4,000 people across a dozen sub-segments gets a lowest-common-denominator message that resonates with nobody. Filters notice the volume pattern, recipients notice the generic copy, and both punish you.
                        </p>
                        <p>
                            The operator move in 2026 is to break your total volume into many small, segmented batches — each with its own angle — rather than one giant send. It's more work per email. The reply rate makes it worth it, and it's exactly how we run the program behind <Link to="/blog/cold-email-system-20-appointments-month" className="text-accent font-bold underline hover:text-primary">our 15-20 appointments per month system</Link>.
                        </p>
                    </section>

                    {/* Section 3 — Why vendor reports inflate */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Why Vendor "Benchmark Reports" Inflate
                        </h2>
                        <p className="mb-4">
                            When a platform publishes "average reply rate: 8.5%," they're not lying — they're selecting. Here's how the sausage gets made, so you can read every benchmark report with the right amount of suspicion:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                'Survivorship bias — only active, successful accounts get counted',
                                'Auto-replies and OOO bounces counted as "replies"',
                                'Cherry-picked verticals where cold email runs hot',
                                'No deliverability floor — spam-foldered sends excluded',
                                'Best campaign per account, not the average',
                                'Self-reported numbers with zero independent audit',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            The tell is the reply-rate definition. A serious benchmark separates total replies from <em>positive</em> replies and reports both. A vendor benchmark conflates them, because "8.5% reply rate" sells more software than "1.5% positive reply rate." When you can't find the methodology, assume the number is the ceiling, not the average — and halve it.
                        </p>
                    </section>

                    {/* Section 4 — MPP killed open rate */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Open Rate Is Dead — Apple MPP Killed It
                        </h2>
                        <p className="mb-4">
                            If a metric is still quoting you "open rates," close the tab. Apple's Mail Privacy Protection — now the default on the majority of iPhones — pre-fetches every tracking pixel the moment mail arrives, whether or not a human ever opens the message. The result: open rates across the board are inflated to <strong>60-80%</strong> and have no relationship to reality.
                        </p>
                        <p className="mb-4">
                            This isn't a minor caveat. It means any benchmark, any A/B test, any "our subject line gets 72% opens" claim built on open tracking is measuring noise. Worse, leaving tracking pixels on actively hurts you — they're a known spam signal that drags down inbox placement on the deliverability side.
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4 mb-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Turn tracking pixels OFF. They don't measure anything real anymore, they hurt deliverability, and they tempt you to optimize for a phantom metric. The only opens that ever mattered were the ones that led to replies — so just measure replies.
                            </p>
                        </div>
                        <p>
                            The death of open rate is actually good news. It forces you to optimize for the only thing that was ever real: did a human reply, and did it lead to a meeting? Everything upstream of that is a vanity number. Your subject line still matters enormously — you just measure it by reply rate now, not opens. We break down what actually moves replies in our piece on <Link to="/blog/cold-email-subject-lines-that-get-b2b-replies" className="text-accent font-bold underline hover:text-primary">subject lines that get B2B replies</Link>.
                        </p>
                    </section>

                    {/* Section 5 — What to actually track */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What To Actually Track In 2026
                        </h2>
                        <p className="mb-4">
                            Strip away the vanity metrics and a clean, honest dashboard has exactly five numbers on it. Track these and nothing else:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                { name: 'Positive reply rate', detail: 'Genuinely interested replies ÷ total sent. Strip out OOO, "no," and wrong-person. The real signal.' },
                                { name: 'Meetings booked', detail: 'The number that pays the bills. Track per-100-sends so you can forecast volume needs.' },
                                { name: 'Inbox placement rate', detail: 'Seed-test result. If you\'re landing in spam, every other metric is meaningless.' },
                                { name: 'Bounce rate', detail: 'Keep it under 3%. Above 5% and you\'re torching domain reputation in real time.' },
                                { name: 'Spam complaint rate', detail: 'Must stay under 0.3%. One bad batch over this can blocklist a domain for weeks.' },
                            ].map((tool) => (
                                <div key={tool.name} className="bg-surface border-4 border-primary p-4">
                                    <span className="font-mono text-sm font-black text-accent block mb-2">{tool.name}</span>
                                    <span className="font-sans text-xs text-primary/70">{tool.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            Notice what's not on the list: open rate, click rate, "email score." Two of those are now noise (MPP), and click rate barely applies to plain-text cold email (you shouldn't be sending links in email #1 anyway — they cut deliverability). A campaign reporting glowing opens and clicks while booking zero meetings is failing. The dashboard should reflect reality, not flatter it.
                        </p>
                    </section>

                    {/* Section 6 — The 4% promise */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Why We Promise ~4%, Not 15%
                        </h2>
                        <p className="mb-4">
                            Our brand number is a ~4% reply rate. We could quote 15% like the loud accounts on LinkedIn — nobody fact-checks a screenshot — but we don't, for a simple reason: the clients we want are the ones who respect honest numbers and would rather hit a real 4% than be sold an imaginary 15%.
                        </p>
                        <p className="mb-4">
                            Four percent sits at the strong end of the realistic 2-4% reply band above — and it only counts paired with a ~0.5% positive reply rate, the metric that actually forecasts meetings. It assumes a tight ICP, clean deliverability, real personalization, and a proper follow-up sequence. It's a number we can hit consistently and forecast against — which means we can tell you, before you spend a dollar, roughly how many meetings a given volume will produce.
                        </p>
                        <p>
                            That predictability is the whole point of an honest benchmark. A 15% promise can't be planned around because it isn't real. A 4% promise can be turned into a pipeline forecast: this many sends, at this reply rate, at this positive-reply ratio, equals this many meetings per month. Boring, defensible, and it actually shows up in your calendar.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want Us To Hit These Numbers For You?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            Book a discovery call and we'll forecast your pipeline off honest benchmarks — sends, reply rate, positive replies, meetings per month — and tell you exactly what volume your goal requires. Real numbers, no 15% fantasy.
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
                                { slug: 'is-cold-email-still-worth-it-2026', title: 'Is Cold Email Still Worth It in 2026?' },
                                { slug: 'cold-email-subject-lines-that-get-b2b-replies', title: 'Cold Email Subject Lines That Get B2B Replies' },
                                { slug: 'cold-email-system-20-appointments-month', title: 'How We Get 15-20 Qualified Appointments Per Month' },
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
