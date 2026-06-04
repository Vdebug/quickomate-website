import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';
import ColdEmailInfraChecklist from './ColdEmailInfraChecklist';

export default function BlogInfraSetup() {
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
                            <Clock size={12} /> 10 min read
                        </span>
                        <time dateTime="2026-05-14" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">May 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['Infrastructure', 'Cold Email', 'Email Infrastructure'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        Cold Email Infrastructure in 2026: Exactly How Many Domains and Inboxes You Need
                    </h1>
                </header>

                {/* Article Body */}
                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">

                    {/* Intro */}
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Everyone tells you to "warm up your domains" and "don't send too much." Nobody gives you the actual numbers. So here it is — the real math for 2026. How many domains, how many inboxes, how many sends, and exactly how to size all of it for a target volume. Get the ratios wrong and you'll burn domains faster than you can buy them. Get them right and you've got a stable machine that prints meetings.
                        </p>
                    </div>

                    {/* Cold Email Infrastructure Checklist (lead magnet) */}
                    <ColdEmailInfraChecklist />

                    {/* Section 1 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Two Numbers Everything Hangs On
                        </h2>
                        <p className="mb-4">
                            All cold email infrastructure sizing comes down to two constraints that the inbox providers enforce, whether you like them or not:
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4 mb-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: 'Inboxes per Domain', value: '3' },
                                    { label: 'Sends / Inbox / Day', value: '30-40' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-primary p-4">
                                        <span className="font-heading font-black text-3xl text-accent block">{stat.value}</span>
                                        <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mb-4">
                            <strong>Three inboxes per domain.</strong> A single domain can host more mailboxes technically, but loading 8-10 active senders onto one domain concentrates risk — if that domain's reputation slips, you lose all of them at once, and providers are suspicious of domains with many fresh high-volume senders. Three is the stable sweet spot: enough to be efficient, few enough to isolate damage.
                        </p>
                        <p>
                            <strong>30-40 sends per inbox per day, total — including follow-ups.</strong> This is the safe ceiling in 2026. Push past it and your spam rate climbs almost linearly. Some operators run brand-new inboxes lower (20-25) and only ramp to 40 once reputation is established. You scale volume by adding inboxes and domains, never by cranking sends-per-inbox.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Warm-Up Timeline
                        </h2>
                        <p className="mb-4">
                            A brand-new inbox has zero sender reputation. Send 40 cold emails from it on day one and every major provider flags you as a spammer. Warm-up builds that reputation gradually before real outreach begins — automated tools send and reply to mail between thousands of pooled mailboxes, marking your messages important and pulling them out of spam.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 mb-4">
                            {[
                                { phase: 'Week 1', detail: 'Warm-up only. 5-10 automated sends/day per inbox. Zero cold outreach.' },
                                { phase: 'Week 2-3', detail: 'Ramp warm-up to 30-40/day. Begin light cold sends late week 2 (10-15/day) and ramp up.' },
                                { phase: 'Week 4+', detail: 'Full cold volume (30-40/day). Keep 10-20% warm-up running in parallel forever.' },
                            ].map((step) => (
                                <div key={step.phase} className="bg-surface border-4 border-primary p-4">
                                    <span className="font-mono text-sm font-black text-accent block mb-2">{step.phase}</span>
                                    <span className="font-sans text-xs text-primary/70 leading-relaxed">{step.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            <strong>Plan for a 2-3 week warm-up before a single cold email leaves an inbox.</strong> The mistake that kills programs is treating warm-up as a one-time event — keep 10-20% warm-up traffic running alongside live campaigns permanently. It's the cheapest insurance against silent reputation decay, and most agencies skip it.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Google & Yahoo Bulk-Sender Rules
                        </h2>
                        <p className="mb-4">
                            In February 2024, Google and Yahoo rolled out mandatory sender requirements that are now the baseline for everyone in 2026. They don't just apply to "bulk senders" — the safe move is to treat every rule as mandatory for all cold infrastructure:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                'SPF, DKIM, and DMARC required on every sending domain',
                                'DMARC policy of at least p=none, properly aligned',
                                'One-click List-Unsubscribe header (RFC 8058) required',
                                'Spam complaint rate must stay under 0.3% (aim for <0.1%)',
                                'Valid forward + reverse DNS (PTR) on sending IPs',
                                'No sending from mismatched / spoofed From domains',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            The <strong>complaint rate threshold is the one that bites.</strong> The hard line is 0.3%, but you want to live under 0.1% — that's roughly one complaint per 1,000 sends. Hit 0.3% and Gmail starts throttling or spam-foldering your entire domain. The fix is upstream: tight targeting, relevant copy, and an easy opt-out so annoyed recipients unsubscribe instead of hitting "report spam."
                        </p>
                        <p>
                            <strong>The List-Unsubscribe nuance for cold email:</strong> the bulk-sender rules are aimed at marketing lists, and a one-click List-Unsubscribe header is a deliverability signal Google likes. Many cold senders add the header but route it to a suppression list rather than rendering a giant "UNSUBSCRIBE" footer that screams marketing. You get the compliance signal without the visual that tanks reply rates.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Sizing Your Infrastructure for a Target Volume
                        </h2>
                        <p className="mb-4">
                            Here's the part nobody spells out. Work backwards from your monthly send target. Assume a conservative <strong>35 sends/inbox/day</strong> and ~22 business days per month — so each inbox does roughly <strong>770 sends/month</strong>. Then apply the 3-inboxes-per-domain ratio.
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4 mb-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">Volume Sizing Calculator</h3>
                            <div className="grid grid-cols-1 gap-3">
                                {[
                                    { vol: '4,000 / mo', inb: '~6 inboxes', dom: '2 domains' },
                                    { vol: '8,000 / mo', inb: '~11 inboxes', dom: '4 domains' },
                                    { vol: '12,000 / mo', inb: '~16 inboxes', dom: '6 domains' },
                                    { vol: '20,000 / mo', inb: '~26 inboxes', dom: '9 domains' },
                                    { vol: '40,000 / mo', inb: '~52 inboxes', dom: '18 domains' },
                                ].map((row) => (
                                    <div key={row.vol} className="grid grid-cols-3 gap-2 bg-primary p-3">
                                        <span className="font-heading font-black text-base text-accent">{row.vol}</span>
                                        <span className="font-mono text-xs text-surface font-bold uppercase self-center">{row.inb}</span>
                                        <span className="font-mono text-xs text-surface font-bold uppercase self-center">{row.dom}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mb-4">
                            So to send <strong>8,000 emails per month</strong>, you need roughly <strong>4 domains and 11-12 inboxes</strong> — not one domain hammering out 8,000, which would be torched inside a week. The horizontal-scaling principle is the entire game: spread the load thin across many low-volume senders.
                        </p>
                        <p>
                            One caution: more volume is not a strategy. 8,000 well-targeted sends to a sharp ICP beats 40,000 sprayed at a scraped list every time — and costs far less in burned domains. Size to your ICP's real total addressable list, not to a vanity send number.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Provider Choice: Google vs. Microsoft vs. Dedicated
                        </h2>
                        <p className="mb-4">
                            Where you host the inboxes matters more than people think. Each provider has a different reputation profile and a different cost structure:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                            {[
                                { name: 'Google Workspace', detail: 'Strongest inbox placement to Gmail recipients, which is most of B2B. ~$7/inbox/mo. The default for most cold programs. Watch for account-level sending limits on new tenants.' },
                                { name: 'Microsoft 365', detail: 'Best for outreach to Outlook/corporate recipients. ~$6/inbox/mo. Setup is fiddlier (DKIM via CNAME), but pairs well with Google for provider diversification.' },
                                { name: 'Dedicated / Reseller', detail: 'Private SMTP or specialized cold-email hosts. More control and IP isolation, but you own the reputation risk entirely. For advanced operators at high volume only.' },
                            ].map((p) => (
                                <div key={p.name} className="bg-surface border-4 border-primary p-4">
                                    <span className="font-mono text-sm font-black text-accent block mb-2">{p.name}</span>
                                    <span className="font-sans text-xs text-primary/70 leading-relaxed">{p.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            The pragmatic 2026 default: <strong>split your domains across Google Workspace and Microsoft 365.</strong> Provider diversification means a Google-side reputation hiccup doesn't take down your whole sending capacity, and you naturally match the recipient's own provider on a chunk of your list. Avoid the cheap "free trial" mailbox farms — providers fingerprint them and placement suffers.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Domain Structure & Forwarding
                        </h2>
                        <p className="mb-4">
                            Buy lookalike domains that protect your primary, never your primary itself. If your real domain is <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">acme.com</code>, register variants like <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">getacme.com</code>, <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">tryacme.com</code>, <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">acme.io</code>, or <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">acme-hq.com</code>. Each runs its own 3 inboxes and full SPF/DKIM/DMARC stack.
                        </p>
                        <p>
                            On each lookalike, set up a <strong>301 redirect to your primary domain</strong> so a prospect who pastes the URL into a browser still lands on your real site. Age domains at least 2-4 weeks before sending where you can — freshly registered domains carry a slight trust penalty. Keep a couple of spare warmed domains on the bench so you can rotate a damaged one out without pausing the program.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Deployment Checklist
                        </h2>
                        <p className="mb-4">
                            The full setup in order. This is the exact sequence we run for a new sending stack — skip a step and you'll pay for it in placement:
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4 mb-4">
                            <div className="flex flex-col gap-3">
                                {[
                                    'Calculate domains + inboxes from your target volume (3 inboxes/domain).',
                                    'Register lookalike domains; keep your primary out of it entirely.',
                                    'Set up SPF, DKIM (2048-bit), and DMARC on every domain.',
                                    'Configure a 301 redirect from each lookalike to your primary site.',
                                    'Create 3 mailboxes per domain (first.last@, firstname@, f.last@).',
                                    'Add the one-click List-Unsubscribe header (RFC 8058).',
                                    'Connect every inbox to your sending platform + warm-up tool.',
                                    'Run warm-up for 2-3 weeks before any cold send.',
                                    'Seed-test inbox placement; confirm 85%+ primary IPR per domain.',
                                    'Launch cold at low volume, ramp to 30-40/inbox/day, keep warm-up running.',
                                    'Re-seed-test every 2 weeks; pause + diagnose any domain under 80% IPR.',
                                ].map((step, i) => (
                                    <div key={i} className="flex gap-3 items-start border-l-4 border-accent pl-4">
                                        <span className="font-mono text-sm font-black text-accent">{String(i + 1).padStart(2, '0')}</span>
                                        <span className="font-sans text-sm text-primary/80">{step}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p>
                            None of this is exotic — it's just disciplined sequencing that takes about 4-6 weeks to do right from a cold start. The agencies that skip warm-up and seed-testing to "go live faster" are the ones whose clients churn at month two with a CRM full of spam-foldered sends.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Own the Whole Stack
                        </h2>
                        <p className="mb-4">
                            One closing rule that overrides everything above: <strong>whoever's name the domains and inboxes are registered under owns the program.</strong> If you build this yourself, that's you. If an agency builds it, insist it lives in your accounts.
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4 mb-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Infrastructure you don't own is leverage someone else holds over you. The domains, inboxes, DNS, and warmed reputation are the real asset — the campaigns are just what you run on top. Build it once, in your name, and it keeps producing whether you run it in-house or hand it to a partner.
                            </p>
                        </div>
                        <p>
                            Done right, this is a durable machine: 4-9 domains, a dozen-plus warmed inboxes, clean authentication, and a steady 8,000-20,000 well-targeted sends a month. It takes weeks to build and a few hours a week to maintain. That's the unglamorous foundation under every cold email program that actually books meetings.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want Us To Set This Up For You?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We size, build, and warm cold email infrastructure for B2B companies — domains, inboxes, SPF/DKIM/DMARC, List-Unsubscribe, warm-up, and seed-test monitoring — all registered in your accounts. Skip the 6-week build and start sending into the primary inbox from day one. Let's talk.
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
                                { slug: 'cold-email-gmail-promotions-tab-fix', title: "Why Your Cold Email Lands in Gmail's Promotions Tab" },
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
