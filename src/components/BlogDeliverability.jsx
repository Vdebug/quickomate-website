import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogDeliverability() {
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
                        <time dateTime="2026-04-30" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">April 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['Cold Email', 'Deliverability', 'Email Infrastructure'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        Cold Email Deliverability: SPF, DKIM, DMARC & Sender Reputation (B2B Guide)
                    </h1>
                </header>

                {/* Article Body */}
                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">

                    {/* Intro */}
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            If your email lands in spam, copy doesn't matter. Deliverability is the foundation everything else rests on. Most agencies fake reply rates by ignoring deliverability collapse — they report "open rates" off tracking pixels that never fire and quietly burn through your domains. Here's the real B2B playbook for SPF, DKIM, DMARC, sender reputation, and inbox placement.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What "Deliverability" Really Means
                        </h2>
                        <p className="mb-4">
                            Most founders think deliverability is a binary — "did it send or not?" It isn't. Every email you send lands in one of five buckets, and four of them are bad:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            {[
                                'Primary inbox — where conversations happen',
                                'Promotions tab — where outreach goes to die',
                                'Spam folder — invisible, kills reputation',
                                'Deferred / greylisted — provider stalling',
                                'Hard bounce — your domain just took damage',
                                'Soft bounce — temporary, but trending bad',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6 mb-4">
                            The only metric that matters is <strong>Inbox Placement Rate (IPR)</strong> — the percentage of your sends that land in the primary inbox of a real human. Not open rate. Not delivery rate (which counts spam folder deliveries as "delivered"). IPR.
                        </p>
                        <p>
                            A healthy cold email program runs at <strong>85-95% primary IPR</strong>. Below 80%, you have a problem. Below 60%, you're being filtered before the recipient ever sees you — and no amount of clever subject lines will save you.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The 3 Authentication Pillars: SPF, DKIM, DMARC
                        </h2>
                        <p className="mb-4">
                            Google and Microsoft made authentication mandatory in February 2024. If you don't have SPF, DKIM, and DMARC configured correctly, your mail is either rejected outright or dumped into spam — full stop. Here's what each one does in plain language:
                        </p>
                        <p className="mb-4">
                            <strong>SPF (Sender Policy Framework)</strong> is a TXT record in your DNS that lists which servers are allowed to send mail on behalf of your domain. When Gmail receives an email claiming to be from <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">you@yourdomain.com</code>, it checks the SPF record and confirms the sending IP is approved.
                        </p>
                        <p className="mb-4">
                            <strong>DKIM (DomainKeys Identified Mail)</strong> is a cryptographic signature attached to every outgoing message. The receiving server fetches your public key from DNS and verifies the signature matches — proving the message wasn't tampered with in transit and genuinely came from your infrastructure.
                        </p>
                        <p className="mb-4">
                            <strong>DMARC (Domain-based Message Authentication, Reporting & Conformance)</strong> is the policy layer that ties SPF and DKIM together. It tells receiving servers what to do when authentication fails (nothing, quarantine, or reject) and sends you reports about who is trying to send mail as you.
                        </p>
                        <div className="bg-primary p-6 border-4 border-primary mt-4 mb-4">
                            <p className="font-mono text-sm text-surface font-bold">
                                &gt; SPF:   v=spf1 include:_spf.google.com ~all<br />
                                &gt; DKIM:  google._domainkey TXT "v=DKIM1; k=rsa; p=MIIBIjAN..."<br />
                                &gt; DMARC: _dmarc TXT "v=DMARC1; p=none; rua=mailto:dmarc@yourdomain.com"
                            </p>
                        </div>
                        <p>
                            All three live as TXT records on your domain. Missing any one of them — or having them misconfigured — and you're invisible to every modern inbox.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            How to Set Them Up Correctly
                        </h2>
                        <p className="mb-4">
                            <strong>SPF:</strong> Create one TXT record at the root of your domain. The syntax is <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">v=spf1 include:_spf.google.com -all</code> for Google Workspace, or <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">v=spf1 include:spf.protection.outlook.com -all</code> for Microsoft 365. The <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">-all</code> at the end means "reject anything not on this list" — use <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">~all</code> (soft fail) while you're still testing, then tighten to <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">-all</code>.
                        </p>
                        <p className="mb-4">
                            <strong>DKIM:</strong> In Google Workspace, go to Apps → Google Workspace → Gmail → Authenticate email. Click "Generate New Record" (use 2048-bit keys, not 1024), copy the TXT record value into DNS at <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">google._domainkey</code>, wait for propagation, then come back and click "Start Authentication." For Microsoft 365, enable DKIM in the Defender portal — Security → Policies → Email authentication settings → DKIM, select your domain, and toggle it on. M365 generates two CNAME records you point at Microsoft's selectors.
                        </p>
                        <p className="mb-4">
                            <strong>DMARC:</strong> Never skip to <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">p=reject</code> on day one. The progression is:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                            {[
                                { phase: 'p=none', detail: '2-4 weeks. Reporting only. Nothing gets blocked. You learn what is sending as you.' },
                                { phase: 'p=quarantine', detail: '2-4 weeks. Failures go to spam. You verify legitimate senders still pass.' },
                                { phase: 'p=reject', detail: 'Permanent. Failures are bounced. Maximum reputation protection.' },
                            ].map((step) => (
                                <div key={step.phase} className="bg-surface border-4 border-primary p-4">
                                    <span className="font-mono text-sm font-black text-accent block mb-2">{step.phase}</span>
                                    <span className="font-sans text-xs text-primary/70">{step.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            Always include <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">rua=mailto:dmarc@yourdomain.com</code> in your DMARC record. The aggregate reports show you exactly which IPs are sending as your domain — including the shadow SaaS tools your sales team signed up for without telling you, and the spoofers pretending to be you. Run reports through a free parser like Postmark's DMARC tool or pay for Valimail / dmarcian if you want a dashboard.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Dedicated Cold-Email Domain Strategy
                        </h2>
                        <p className="mb-4">
                            <strong>Never send cold email from your primary domain.</strong> This is non-negotiable. One bad campaign — one spam complaint spike, one bounce rate over 5%, one blocklist hit — and your transactional mail (invoices, support, calendar invites, password resets) collapses overnight. Your business email becomes unusable for weeks.
                        </p>
                        <p className="mb-4">
                            The fix is dirt simple: buy 3-5 lookalike domains specifically for cold outreach. If your primary is <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">quickomate.com</code>, register variants like:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                'getquickomate.com',
                                'try-quickomate.com',
                                'quickomate.io',
                                'hellquickomate.com',
                                'quickomate-hq.com',
                            ].map((domain, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold">{domain}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            On each cold domain, set up 2-3 mailboxes (<code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">first.last@</code>, <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">firstname@</code>, <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">f.last@</code>). Set up the full auth stack — SPF, DKIM, DMARC — on every single one. Configure a 301 redirect from each lookalike to your primary domain so the URL still works if a prospect pastes it into a browser.
                        </p>
                        <p>
                            This isolation is the entire point. If <code className="bg-primary text-surface px-1 py-0.5 font-mono text-xs">try-quickomate.com</code> gets torched, your primary domain — and the 6 other lookalikes — keep sending. You rotate the dead one out, spin up a replacement, and the program keeps running.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Mailbox Warm-Up: The 2-3 Week Timeline
                        </h2>
                        <p className="mb-4">
                            A brand-new mailbox has zero sender reputation. The moment you send 50 cold emails from it on day one, every major inbox provider flags you as a spammer and your IPR craters to near zero. Warm-up is the process of building that reputation gradually before you do real outreach.
                        </p>
                        <p className="mb-4">
                            Warm-up tools (Mailreach, Warmbox, Lemwarm, Smartlead's built-in warmer, Instantly's warmer) work by automatically sending and replying to emails between thousands of pooled mailboxes. The receiving mailbox marks your messages as "important," moves them from spam to inbox if they land there, stars them, and replies. Every one of those signals tells Google and Microsoft that real humans want your emails.
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4 mb-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Run new mailboxes in warm-up for at least 2-3 weeks before sending a single cold email. Start at 5-10 warm-up sends per day and ramp to 30-40. Then — and this is the part most agencies skip — keep 10-20% warm-up traffic running forever, in parallel with live campaigns. It is the cheapest insurance you can buy against silent reputation decay.
                            </p>
                        </div>
                        <p>
                            If you skip warm-up, you are not running cold email — you are running a domain incinerator. The 2-3 weeks of patience saves you 2-3 months of reputation rebuild later.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Sending Volume Thresholds
                        </h2>
                        <p className="mb-4">
                            Inbox providers cap how much mail a single mailbox can send before they flag it. The safe ceiling is <strong>30-40 cold emails per mailbox per day</strong> — total, including follow-ups. Go above that and your spam rate spikes almost linearly.
                        </p>
                        <p className="mb-4">
                            To hit meaningful volume, you scale horizontally — more mailboxes, not more sends per mailbox. The math:
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4 mb-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">Volume Math</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: 'Mailboxes', value: '6-12' },
                                    { label: 'Sends / Mailbox / Day', value: '30-40' },
                                    { label: 'Daily Total', value: '200-400' },
                                    { label: 'Monthly Total', value: '4,000-8,000' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-primary p-4">
                                        <span className="font-heading font-black text-2xl text-accent block">{stat.value}</span>
                                        <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p>
                            Always send during business hours <strong>in the recipient's local timezone</strong> — 8am-11am Tuesday through Thursday is the sweet spot. Sending at 3am their time looks robotic and gets flagged. Spread sends across the window with 60-120 second random gaps between emails per mailbox.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Reputation Killers (What NOT to Do)
                        </h2>
                        <p className="mb-4">
                            Inbox providers don't read your copy — they read signal patterns. Some patterns scream "automated cold blast" so loudly that even perfect authentication can't save you:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                'Links in the first email — cuts IPR by 15-30%',
                                'Embedded images or logos — visual = marketing',
                                'HTML formatting, fancy fonts, brand colors',
                                'Attachments of any kind (PDFs, decks, calendars)',
                                'Tracking pixels (yes, really — turn them off)',
                                '"Click here to unsubscribe" CAN-SPAM theater',
                                'ALL CAPS subject lines or excessive punctuation',
                                'Spam-trigger words: free, guarantee, limited time',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            The winning format is unglamorous and works: <strong>plain text, two to four short paragraphs, one signature line with your name and a single URL (your site, no UTM params).</strong> No images. No HTML wrapper. No "unsubscribe here" footer — for cold B2B under 50,000 contacts/year, a polite "let me know and I'll stop" line at the end is enough.
                        </p>
                        <p>
                            Branded HTML signatures with social icons and disclaimers underperform plain text by 30-50% in our tests. They scream "marketing automation." The email that gets a reply looks like a one-off note a human typed in two minutes.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Monitoring Inbox Placement
                        </h2>
                        <p className="mb-4">
                            You cannot fix what you can't see. Open rates lie — Apple Mail Privacy Protection pre-fetches images and inflates them to 60-80% across the board. The only reliable measure of deliverability is a seed test: send a campaign to a basket of dummy inboxes across Google, Outlook, Yahoo, and corporate domains, then check where each one landed.
                        </p>
                        <p className="mb-4">
                            The tools we use:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                            {[
                                { name: 'Glockapps', detail: 'Most accurate seed test. Detailed per-provider IPR breakdown.' },
                                { name: 'MXToolbox', detail: 'DNS, SPF, DKIM, DMARC, and blocklist lookups. Free tier is enough.' },
                                { name: 'Mailtrap / Postmark', detail: 'For checking DMARC reports and authentication failures.' },
                            ].map((tool) => (
                                <div key={tool.name} className="bg-surface border-4 border-primary p-4">
                                    <span className="font-mono text-sm font-black text-accent block mb-2">{tool.name}</span>
                                    <span className="font-sans text-xs text-primary/70">{tool.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            Run a seed test <strong>every two weeks</strong> per sending domain. Log primary IPR as a single number. If it drops below 80%, pause that domain's campaigns immediately and diagnose before you keep burning reputation. Catching a slide at 78% is a one-day fix. Catching it at 40% is a domain rebuild.
                        </p>
                    </section>

                    {/* Section 9 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What to Do When You Get Blocklisted
                        </h2>
                        <p className="mb-4">
                            Eventually, a domain or IP will hit a blocklist. It happens to everyone — the goal isn't to never get listed, it's to detect it fast and recover cleanly. The major lists to monitor:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                'Spamhaus (SBL, XBL, PBL, DBL) — most influential',
                                'SORBS — used by many corporate filters',
                                'Barracuda Reputation Block List',
                                'SpamCop — complaint-based, fast trigger',
                                'UCEPROTECT — aggressive, often false-positive',
                                'Invaluement — paid, used by enterprise filters',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            Run your sending domains and IPs through MXToolbox's blocklist checker weekly. When you get listed, the delisting process is usually free and self-serve — visit the blocklist's site, submit your domain/IP, and confirm you've fixed the underlying issue. Most lists clear within 24-48 hours.
                        </p>
                        <p>
                            The diagnosis step is more important than the delisting. A blocklist hit almost always traces to <strong>one specific mailbox</strong> behaving badly — high bounce rate, complaint spike, or sending to a spam-trap address. Pull mailbox-level metrics from your sending platform, isolate the offender, pause it, and rotate in a fresh warmed mailbox. Don't just delist and restart — you'll be back on the list within a week.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want Us To Set This Up For You?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We've built deliverability infrastructure for dozens of B2B companies — domains, mailboxes, SPF/DKIM/DMARC, warm-up, monitoring, the works. If you'd rather skip the 6-week setup and start sending into the primary inbox from day one, let's talk.
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
                                { slug: 'why-you-should-own-your-cold-email-infrastructure', title: 'Why You Should Own Your Cold Email Infrastructure' },
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
