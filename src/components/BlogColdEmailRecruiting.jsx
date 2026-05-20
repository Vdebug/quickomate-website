import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogColdEmailRecruiting() {
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
                        <time dateTime="2026-05-20" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">May 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['Vertical', 'Recruiting', 'Cold Email'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        Cold Email for Recruiting Agencies: What's Different (2026 Playbook)
                    </h1>
                </header>

                {/* Article Body */}
                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">

                    {/* Intro */}
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Generic cold email advice breaks for recruiting agencies, because recruiters sell into two markets at once: hiring companies who pay the fee, and candidates who fill the role. Most outbound playbooks only address one side and quietly assume you're a SaaS company. This is the recruiting-specific version — the client-side play, the candidate nuance, the signals that actually predict a placement, and the compliance lines you do not cross.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Why Recruiting Is a Two-Sided Outbound Problem
                        </h2>
                        <p className="mb-4">
                            A SaaS company has one cold email job: book demos with buyers. A recruiting agency has two completely different jobs that use the same channel and almost nothing else in common. You are simultaneously running business development (winning hiring clients who pay 15-25% of first-year salary) and sourcing (reaching passive candidates who don't think they're looking).
                        </p>
                        <p className="mb-4">
                            These are not the same campaign with different copy. They have different goals, different lists, different success metrics, and — critically — different rules. Treating them as one is the single most common mistake we see recruiting agencies make in their outbound:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4">
                            <div className="bg-surface border-4 border-primary p-6">
                                <span className="font-mono text-xs font-black text-accent uppercase tracking-widest block mb-3">Client Side (BD)</span>
                                <ul className="font-sans text-sm text-primary/80 space-y-2 list-disc pl-4">
                                    <li>Goal: sign a hiring company to a fee agreement</li>
                                    <li>Audience: hiring managers, founders, HR/TA leads</li>
                                    <li>Success: a signed role / retained search</li>
                                    <li>Volume play — looks like classic B2B cold email</li>
                                </ul>
                            </div>
                            <div className="bg-primary border-4 border-primary p-6">
                                <span className="font-mono text-xs font-black text-accent uppercase tracking-widest block mb-3">Candidate Side (Sourcing)</span>
                                <ul className="font-sans text-sm text-surface/90 space-y-2 list-disc pl-4">
                                    <li>Goal: a specific person says "tell me more"</li>
                                    <li>Audience: employed, passive, not job-hunting</li>
                                    <li>Success: a screening conversation booked</li>
                                    <li>Precision play — closer to executive search</li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            The mistake compounds because the candidate side has stricter consent rules and far lower acceptable volume. Blast candidates like you blast clients and you'll torch your domains and your reputation in the talent market simultaneously.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Client-Side Play: "We Already Have the Candidates"
                        </h2>
                        <p className="mb-4">
                            The client side is where cold email earns its keep, because it behaves like normal B2B outbound — you can run real volume and the math works. The mistake recruiters make is leading with their service ("we're a specialist recruiting firm in fintech with 12 years..."). Nobody hiring cares about your history. They care about the open role burning a hole in their team right now.
                        </p>
                        <p className="mb-4">
                            The angle that converts is <strong>specificity about their actual open role plus implied scarcity of talent.</strong> You're not selling recruiting as a category — you're selling the three pre-vetted people you could send them this week:
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4 mb-4">
                            <span className="font-mono text-xs font-black text-accent uppercase tracking-widest block mb-3">Client-Side Opener That Works</span>
                            <p className="font-sans text-sm text-primary/90 leading-relaxed">
                                "Saw the Senior Backend Engineer role you've had open since March. We placed two Go engineers out of fintech this quarter and have a third who's quietly testing the market — 6 yrs, ex-payments, available in ~4 weeks. Worth a 10-min intro before they're off the market?"
                            </p>
                        </div>
                        <p>
                            That email does three things a generic pitch can't: it proves you saw their <em>specific stale role</em> (the "open since March" is the personalization), it demonstrates relevant placement proof, and it creates honest urgency around a real person. The "we have candidates" angle only works when it's true and specific — invent the candidate and you'll get caught on the first call.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Candidate Sourcing: Different Rules Entirely
                        </h2>
                        <p className="mb-4">
                            Cold-emailing candidates is closer to dating than to selling. The recipient is employed, wasn't asking, and a clumsy approach doesn't just fail — it damages your brand in a talent pool you'll need again. Three things change versus the client side:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                            {[
                                { name: 'Personal email risk', detail: 'Reaching candidates at their work email about leaving is a fast way to get someone in trouble. Many recruiters use LinkedIn or personal email — know the line.' },
                                { name: 'Volume is tiny', detail: 'You are not sending 400/day. A good sourcing campaign is dozens of hyper-targeted, genuinely personalized notes. This is the opposite of a blast.' },
                                { name: 'The offer is the role', detail: 'Lead with the specific opportunity (comp band, stack, why it is interesting), not your agency. Passive candidates respond to roles, not recruiters.' },
                            ].map((tool) => (
                                <div key={tool.name} className="bg-surface border-4 border-primary p-4">
                                    <span className="font-mono text-sm font-black text-accent block mb-2">{tool.name}</span>
                                    <span className="font-sans text-xs text-primary/70">{tool.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            Practically: keep candidate outreach off your high-volume cold domains entirely. The cadence, the consent posture, and the reputation stakes are different enough that you want it isolated — both for deliverability and so a candidate complaint never touches your client-acquisition infrastructure.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Recruiting-Specific ICP Signals
                        </h2>
                        <p className="mb-4">
                            This is the part recruiters underrate, and it's where cold email goes from spray-and-pray to a placement engine. The best client-side timing signal in the world is also free and public: <strong>a company is actively trying and failing to hire.</strong> Build your trigger list around hiring intent, not firmographics:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                'Job postings open 30+ days — they are stuck, you help',
                                'Multiple roles for the same function — sustained demand',
                                'Recent funding round — hiring sprint incoming',
                                'Rapid headcount growth on LinkedIn — scaling pain',
                                'A senior departure — backfill urgency',
                                'Reposted / refreshed listings — the search is failing',
                                'New office or market expansion — net-new hiring',
                                'Roles in a niche you specialize in — your edge',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            The strongest of these is the <strong>stale posting</strong> — a role open 30+ days, or one that's been reposted. It's a flashing sign that says "internal recruiting and the job boards aren't working." That company is warm. They've already admitted they need help by leaving the role open; you're just the first to call it out usefully.
                        </p>
                        <p>
                            Tools like LinkedIn Jobs, Indeed, and aggregators make this scrapeable. Pair the signal with the right contact (the hiring manager or the founder for small companies — not the generic careers@ inbox) and your reply rate on the client side will outperform almost any other B2B vertical, because the pain is acute, public, and time-sensitive.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Copy Angles That Work for Recruiters
                        </h2>
                        <p className="mb-4">
                            Recruiting has a few angles that consistently outperform on the client side. They all share a trait: they reduce the prospect's perceived risk of talking to "another recruiter."
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                { angle: 'The specific candidate', detail: '"I have a person for your open role" beats "we do recruiting." Concrete and time-sensitive.' },
                                { angle: 'The niche specialist', detail: '"We only place fractional CFOs / Rust engineers / clinical trial leads." Depth signals you will not waste their time.' },
                                { angle: 'The stale-role observation', detail: '"Noticed this role has been open since X." Proves you looked and gives a reason to reply now.' },
                                { angle: 'Performance / risk-reversal', detail: '"You only pay when we place." Removes the biggest objection to trying a new agency.' },
                            ].map((a) => (
                                <div key={a.angle} className="bg-surface border-4 border-primary p-5">
                                    <span className="font-mono text-sm font-black text-accent block mb-2">{a.angle}</span>
                                    <span className="font-sans text-xs text-primary/70">{a.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            What to avoid: the word "synergy," anything about your agency's "passion for people," and the dreaded "I'd love to learn about your hiring needs" — which translates to "I want to extract a list of roles to spam." Lead with a person, a niche, or an observation. Never lead with yourself.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Compliance Notes You Can't Ignore
                        </h2>
                        <p className="mb-4">
                            Recruiting outbound touches personal data on the candidate side, which drags you into rules SaaS cold email mostly dodges. This isn't legal advice — talk to a lawyer for your jurisdiction — but the operational lines we hold to:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                'GDPR (EU/UK candidates) — "legitimate interest" is narrow; honor opt-outs instantly',
                                'CAN-SPAM (US) — clear opt-out, real physical address, no deceptive headers',
                                'CASL (Canada) — stricter consent; document your basis for contacting',
                                'Candidate data — store it lawfully, purge on request, do not resell',
                                'Never contact a candidate at work about quietly leaving carelessly',
                                'Keep client BD and candidate data on separated systems',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            The client-side BD play is standard B2B cold email and the usual rules apply — you're emailing businesses about a business service. The candidate side is where you tighten up. When in doubt, the safe posture is: minimal volume, genuine relevance, instant opt-out compliance, and treat candidate personal data like it's radioactive.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Realistic Numbers for the Vertical
                        </h2>
                        <p className="mb-4">
                            Recruiting is one of the better verticals for cold email economics, for one reason: the deal size is enormous relative to the send cost. A single placement at a $120k salary and a 20% fee is $24,000. You don't need many replies for the math to be absurd.
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4 mb-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">Client-Side Funnel (Illustrative)</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: 'Sends / Month', value: '4,000-8,000' },
                                    { label: 'Positive Reply Rate', value: '2-5%' },
                                    { label: 'Intro Calls Booked / Mo', value: '15-25' },
                                    { label: 'New Roles Signed / Mo', value: '2-5' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-primary p-4">
                                        <span className="font-heading font-black text-2xl text-accent block">{stat.value}</span>
                                        <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mb-4">
                            These are realistic, not guaranteed — they assume tight signal-based targeting (stale roles, funding, hiring sprees) and a specific offer, not a generic blast. Reply rates run higher than typical SaaS outbound because hiring pain is acute and visible. Closing a signed role from an intro call still depends on your service, your terms, and your candidate bench.
                        </p>
                        <p>
                            The candidate side runs on different math entirely — low volume, high personalization, measured in qualified screening conversations per week, not booked demos. Don't apply client-side benchmarks to candidate sourcing or you'll conclude it's broken when it's just a different game.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want Us To Build Your Recruiting Outbound?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We build signal-driven client-side outbound for recruiting agencies — stale-role and hiring-intent targeting, the "we have candidates" angle, infrastructure you own, and a candidate-side setup kept cleanly separate. If you want a cold email engine tuned for placements, not generic demos, let's talk.
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
                                { slug: 'how-to-find-verified-emails-b2b-cold-outreach', title: 'How To Find Verified Emails for B2B Cold Outreach' },
                                { slug: 'ai-lead-generation-for-b2b-companies', title: 'AI Lead Generation for B2B Companies' },
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
