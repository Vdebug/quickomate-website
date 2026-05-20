import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogPromotionsTab() {
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
                        <time dateTime="2026-05-15" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">May 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['Deliverability', 'Cold Email', 'Gmail'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        Why Your Cold Email Lands in Gmail's Promotions Tab (and the Plain-Text Fix)
                    </h1>
                </header>

                {/* Article Body */}
                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">

                    {/* Intro */}
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Your email isn't in spam. Your SPF, DKIM, and DMARC all pass. Your seed test says 90% inbox placement. And your reply rate is still garbage. Here's the part almost nobody talks about: "delivered to inbox" and "delivered to the Primary tab" are not the same thing in Gmail. The Promotions tab is where polite, well-authenticated cold email quietly goes to die — and the signals that push you there are the exact ones every email marketing best-practice guide tells you to add.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Promotions Is Not Spam — It's Worse
                        </h2>
                        <p className="mb-4">
                            When founders hear "your email isn't landing," they assume spam folder. But Gmail has a second, sneakier filter that sits <em>after</em> deliverability: tab classification. A message can pass every authentication check, clear every blocklist, and still get routed into the Promotions tab — technically "delivered," technically "in the inbox," and functionally invisible.
                        </p>
                        <p className="mb-4">
                            Why worse than spam? Because it lies to you. Your sending tool reports it as delivered. Your seed test counts it as inbox placement. Everything on your dashboard looks healthy. Meanwhile the prospect opens Gmail, sees their Primary tab full of real conversations, and never clicks into Promotions for days — if ever. By the time they do, your message is buried under six newsletters and a Groupon.
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4 mb-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Promotions tab open rates run roughly 3-5x lower than Primary for B2B cold outreach. Most seed-test tools report "inbox" without distinguishing the tab — so you can be at 90% "inbox placement" and 70% of those landing in Promotions. The number that lies to you the most is the one you trust the most.
                            </p>
                        </div>
                        <p>
                            For a 1:1 cold email pretending to be a personal note, the Promotions tab is a credibility killer on its own. Nobody types a personal message that lands next to a coupon. The tab itself tells the recipient "this is marketing" before they read a single word.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            How Gmail's Tab Classifier Actually Works
                        </h2>
                        <p className="mb-4">
                            Gmail's tabbed inbox (Primary, Promotions, Social, Updates, Forums) runs a separate classifier from spam filtering. Spam filtering asks "is this dangerous or unwanted?" Tab classification asks "what <em>kind</em> of mail is this?" The model is trained on the structure, formatting, and metadata of the message — plus aggregate behavior across millions of users — not on whether you authenticated correctly.
                        </p>
                        <p className="mb-4">
                            The two biggest inputs are <strong>message structure</strong> (does this look like a bulk marketing template?) and <strong>sender behavior at the population level</strong> (do recipients of this sender's mail tend to read, reply, and engage — or skim and ignore?). A genuine 1:1 email and a 50,000-recipient newsletter look completely different at the HTML level, and Gmail reads that difference instantly.
                        </p>
                        <p>
                            Crucially, the classifier keys off the <em>presence of marketing machinery</em>, not the content of your pitch. You can write the most personal, relevant message on earth, but if you wrap it in the structural signals of a marketing platform, Gmail files it with the marketing.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Signals That Trigger Promotions
                        </h2>
                        <p className="mb-4">
                            These are the structural tells that push cold email out of Primary. Every one of them is something a marketing guide will tell you to add. Strip them out:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                'List-Unsubscribe header — reads as bulk mail',
                                'Embedded images, logos, banners',
                                'Multiple links (2+) in the body',
                                'HTML wrappers, tables, multi-column layouts',
                                'Tracking pixel (1x1 invisible image)',
                                'Branded HTML signature with social icons',
                                'Marketing language: "exclusive", "offer", "free"',
                                'UTM parameters on your URLs',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            The counterintuitive one — and the reason this article exists — is the <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">List-Unsubscribe</code> header. Most cold email platforms inject it automatically because they think it protects deliverability. It does help you avoid the spam folder at high volume. But it's also one of the loudest "I am a bulk sender" flags Gmail's tab classifier reads, and it's a major reason well-meaning senders get parked in Promotions.
                    </p>
                        <p>
                            Same story with tracking pixels. A 1x1 invisible image loaded from a third-party domain is a marketing-platform fingerprint. It does nothing useful for cold outreach anyway — Apple Mail Privacy Protection has inflated open rates to fiction since 2021 — and it actively votes your message into Promotions. Turn it off.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Plain-Text 3-Sentence Fix
                        </h2>
                        <p className="mb-4">
                            The fix is to make your email structurally indistinguishable from something a human typed in their own Gmail window. No HTML wrapper. No images. No tracking. Two to four short sentences, one plain-text signature line. That's it.
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4 mb-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">What Primary-Tab Email Looks Like</h3>
                            <p className="font-mono text-sm text-primary/80 leading-relaxed">
                                Hi Sarah,<br /><br />
                                Noticed your team just opened a second SDR role — usually means outbound is growing faster than the pipeline can keep up.<br /><br />
                                We build the deliverability + sequencing layer so reps spend time on replies, not setup. Worth a 15-min look?<br /><br />
                                Vasu<br />
                                quickomate.com
                            </p>
                        </div>
                        <p className="mb-4">
                            Three sentences. One link, no UTM. Zero images. No <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">List-Unsubscribe</code> header at this volume. To Gmail's classifier, this is structurally identical to a note a colleague sent — because it is. That's the entire trick. You're not gaming the algorithm; you're matching the format the algorithm associates with Primary.
                        </p>
                        <p>
                            In our own sends, moving from a templated HTML send (logo, two CTAs, tracking, unsubscribe footer) to raw plain text moved the bulk of placement from Promotions back into Primary and lifted reply rates measurably — same list, same offer, same subject. The only variable that changed was the wrapper.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The List-Unsubscribe Tradeoff (Feb 2024 Rules)
                        </h2>
                        <p className="mb-4">
                            Here's where it gets nuanced, because there's a real tension. In February 2024, Google and Yahoo rolled out bulk-sender requirements: anyone sending more than <strong>5,000 messages per day to Gmail addresses</strong> must support one-click unsubscribe via the <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">List-Unsubscribe</code> and <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">List-Unsubscribe-Post</code> headers, keep spam complaint rates under 0.3%, and authenticate with SPF, DKIM, and DMARC.
                        </p>
                        <p className="mb-4">
                            So when do you need the header you were just told to remove? It comes down to whether you cross the bulk-sender line <em>from a single sending identity</em>:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                            {[
                                { phase: 'Under 5k/day to Gmail', detail: 'You are not a "bulk sender" by Google\'s definition. Skip List-Unsubscribe. Use a plain-text "let me know and I\'ll stop" line. Optimize for Primary.' },
                                { phase: 'Over 5k/day to Gmail', detail: 'You must include List-Unsubscribe to avoid being throttled or rejected. Accept that more of your mail may sit in Promotions. Volume play, not personalization play.' },
                            ].map((step) => (
                                <div key={step.phase} className="bg-surface border-4 border-primary p-4">
                                    <span className="font-mono text-sm font-black text-accent block mb-2">{step.phase}</span>
                                    <span className="font-sans text-xs text-primary/70">{step.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            For a typical B2B cold program — distributed across multiple lookalike domains and mailboxes, each sending 30-40 emails a day — no single sending identity comes anywhere near 5,000 Gmail messages daily. You are structurally a low-volume, 1:1 sender, and you should look like one. The horizontal-scaling architecture that protects your deliverability also keeps you under the bulk-sender threshold, which means you legitimately don't need the header.
                        </p>
                        <p>
                            The mistake is letting a platform inject <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">List-Unsubscribe</code> by default "to be safe" when you're sending 300 emails a day across eight mailboxes. You're not getting bulk-sender protection — you're paying the Promotions-tab tax for nothing.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Engagement: The Signal You Can't Fake With Formatting
                        </h2>
                        <p className="mb-4">
                            Formatting gets you into Primary the first time. Engagement keeps you there. Gmail's classifier learns per-sender: if recipients reply to your mail, star it, move it from Promotions to Primary, or add you to contacts, the model increasingly trusts your domain with Primary placement. If they ignore, archive without opening, or "report as spam," it does the reverse.
                        </p>
                        <p className="mb-4">
                            This is why the plain-text format compounds. A personal-looking message gets more replies; more replies teach Gmail your domain belongs in Primary; better placement gets more replies. A templated marketing blast gets fewer replies, confirms the "Promotions" verdict, and entrenches it. The format isn't just cosmetic — it kicks off a feedback loop that runs for or against you.
                        </p>
                        <p>
                            The single highest-value action: get a few real replies early on a fresh domain, even if they're "not interested." A reply is the strongest possible Primary-tab signal. It tells Gmail this is a conversation, not a campaign.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            How to Test Which Tab You Actually Land In
                        </h2>
                        <p className="mb-4">
                            You can't optimize what you can't observe — and standard seed tests usually report "inbox" without telling you the tab. To see the truth, you need real Gmail accounts with tabs enabled, not just an aggregate placement score.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                            {[
                                { name: 'Manual seed accounts', detail: 'Set up 3-5 fresh Gmail accounts with Primary/Promotions tabs on. Send your real sequence and look with your own eyes where it lands.' },
                                { name: 'Glockapps / Inbox tools', detail: 'Some seed-test tools now report Gmail tab placement specifically. Confirm yours does — many only report inbox vs. spam.' },
                                { name: 'Reply-to-confirm test', detail: 'Send to a colleague on Gmail and ask which tab it hit. Low-tech, but it is ground truth and costs nothing.' },
                            ].map((tool) => (
                                <div key={tool.name} className="bg-surface border-4 border-primary p-4">
                                    <span className="font-mono text-sm font-black text-accent block mb-2">{tool.name}</span>
                                    <span className="font-sans text-xs text-primary/70">{tool.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            Test the <strong>exact email you'll send</strong> — same HTML (or lack of it), same links, same headers, same signature. A common failure: people seed-test a clean plain-text version, then let their platform re-wrap the production send in HTML and a tracking pixel. The test passes; the real campaign lands in Promotions.
                        </p>
                        <p>
                            Re-test after any change to your template, signature, or sending platform settings. Tab placement is sensitive to structure, and "we just added a logo to the signature" is exactly the kind of change that silently moves you out of Primary.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Five-Line Checklist
                        </h2>
                        <p className="mb-4">
                            If you do nothing else, do these five things. They cost nothing and move the needle more than any subject-line tweak:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                'Send plain text — no HTML wrapper, no images',
                                'Kill the tracking pixel completely',
                                'Drop List-Unsubscribe if under 5k/day to Gmail',
                                'One link max, no UTM parameters',
                                'Plain-text signature: name + bare URL only',
                                'Test placement with real Gmail tabs, not just "inbox"',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            None of this is a hack. It's the opposite of a hack — it's removing the marketing machinery so your email is, structurally, what it claims to be: a short note from one person to another. Gmail's classifier rewards that because that's exactly what Primary is for.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want Us To Get You Into the Primary Tab?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We build cold email systems engineered for Primary-tab placement from the first send — plain-text sequencing, clean infrastructure, proper volume distribution, and placement testing that reports the tab, not just "inbox." If you're authenticated, not in spam, and still getting silence, the tab is probably your problem. Let's find out.
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
                                { slug: 'cold-email-deliverability-spf-dkim-dmarc-guide', title: 'Cold Email Deliverability: SPF, DKIM, DMARC Guide' },
                                { slug: 'cold-email-infrastructure-how-many-domains-inboxes', title: 'Cold Email Infrastructure: How Many Domains and Inboxes' },
                                { slug: 'cold-email-subject-lines-that-get-b2b-replies', title: 'Cold Email Subject Lines That Get B2B Replies' },
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
