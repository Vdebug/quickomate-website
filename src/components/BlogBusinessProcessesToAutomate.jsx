import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogBusinessProcessesToAutomate() {
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
                        <time dateTime="2026-06-04" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">June 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['Business Process Automation', 'AI Automation', 'Operations'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        What Business Processes Should You Automate First? A 2026 Framework
                    </h1>
                </header>

                {/* Article Body */}
                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">

                    {/* Intro */}
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Automate the process that is high-volume, high-pain, rule-heavy, and stable — in that order. The best first automation is a task your team runs every day, that wastes hours or causes errors, that follows clear rules, and that won't be redesigned next quarter. Do not automate a process that is broken, rarely run, or still changing — you'll just ship the chaos faster. Everything below is the framework we use to define which business processes to automate, score them, and decide where AI adds judgment versus where plain rules win.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The 4 Questions That Decide What To Automate
                        </h2>
                        <p className="mb-4">
                            What automates business processes well comes down to four properties, not gut feel. Before you write a single workflow, score every candidate process 1-5 on each of these four questions. The process with the highest total is the one to automate first — it's the fastest path to ROI and the lowest-risk place to start.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
                            {[
                                { q: 'Volume', detail: 'How often does this run? Daily and per-deal beats once a quarter. High frequency means the time you save compounds — the same build pays back many times a week instead of once a season.' },
                                { q: 'Pain', detail: 'How much time or error does it cost? Count the hours per week and the rework from mistakes. A 10-minute task done 200 times a week, or a copy-paste step that fails 1-in-20, is real pain worth removing.' },
                                { q: 'Structure', detail: 'Is it rule-based or judgment-based? If you can write the decision as "if this, then that," it automates cleanly. If it needs taste, negotiation, or relationship context, it does not — yet.' },
                                { q: 'Stability', detail: 'Will it change next month? Automating a process that is mid-redesign or shifts every sprint means you rebuild constantly. Stable, settled workflows are the ones worth hardening into automation.' },
                            ].map((item) => (
                                <div key={item.q} className="bg-surface border-4 border-primary p-5">
                                    <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest block mb-2">Question</span>
                                    <span className="font-heading font-black text-xl text-accent block mb-3">{item.q}</span>
                                    <span className="font-sans text-xs text-primary/70 leading-relaxed">{item.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            This is how to define business processes to automate without guessing: high volume × high pain × high structure × high stability. A process that scores high on three but fails one — say, high-volume and painful but constantly changing — is a trap. You'll spend more maintaining the automation than the manual work ever cost. Score all four, then sort.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            A Simple Scoring Framework
                        </h2>
                        <p className="mb-4">
                            Here's the framework run against three real candidates most B2B teams have on the table: lead routing, invoice data entry, and custom proposals. Each is scored 1-5 on volume, pain, structure, and stability. The total tells you what to build first.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6 mb-4">
                            {[
                                {
                                    name: 'Lead Routing',
                                    scores: { Volume: 5, Pain: 4, Structure: 5, Stability: 4 },
                                    total: 18,
                                    verdict: 'Automate now. Runs on every inbound, follows clear rules (territory, size, source), and rarely changes. Highest score, lowest risk.',
                                    win: true,
                                },
                                {
                                    name: 'Invoice Data Entry',
                                    scores: { Volume: 4, Pain: 5, Structure: 3, Stability: 5 },
                                    total: 17,
                                    verdict: 'Strong second. High pain and stable, but structure dips — invoices vary, so the extraction step needs AI. Pair rules with an LLM.',
                                    win: false,
                                },
                                {
                                    name: 'Custom Proposals',
                                    scores: { Volume: 2, Pain: 4, Structure: 2, Stability: 2 },
                                    total: 10,
                                    verdict: 'Wait. Low volume, judgment-heavy, and the format keeps changing. Automating now means rebuilding constantly. Templatize first.',
                                    win: false,
                                },
                            ].map((c) => (
                                <div key={c.name} className={`border-4 border-primary p-5 ${c.win ? 'bg-accent/10' : 'bg-surface'}`}>
                                    <span className="font-heading font-black text-lg text-primary uppercase block mb-3 leading-tight">{c.name}</span>
                                    <div className="flex flex-col gap-1 mb-3">
                                        {Object.entries(c.scores).map(([k, v]) => (
                                            <div key={k} className="flex items-center justify-between font-mono text-xs text-primary/70">
                                                <span className="uppercase">{k}</span>
                                                <span className="font-black text-accent">{v}/5</span>
                                            </div>
                                        ))}
                                        <div className="flex items-center justify-between font-mono text-xs border-t-2 border-primary mt-1 pt-1">
                                            <span className="uppercase font-bold text-primary">Total</span>
                                            <span className="font-heading font-black text-xl text-accent">{c.total}</span>
                                        </div>
                                    </div>
                                    <span className="font-sans text-xs text-primary/70 leading-relaxed">{c.verdict}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            Lead routing wins not because it's the most painful — invoice entry hurts more — but because it scores high on all four, and especially on structure. It's a pure rules problem you can ship and trust this week. The scoring framework keeps you from chasing the loudest pain instead of the easiest, safest, highest-leverage win. Build the 18 first, the 17 second, and shelve the 10.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Where AI Adds Judgment vs Where Plain Rules Win
                        </h2>
                        <p className="mb-4">
                            Use plain rules for every deterministic step and reserve AI for the judgment steps — classification, extraction, and drafting. The mistake most teams make is reaching for an LLM for the whole workflow when 80% of it is just "if-this-then-that" that a rule does faster, cheaper, and with zero hallucination risk.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
                            <div className="bg-primary p-5 border-4 border-primary">
                                <span className="font-heading font-black text-lg text-surface uppercase block mb-3">Plain Rules Win</span>
                                <ul className="flex flex-col gap-2">
                                    {[
                                        'Routing by fixed fields (territory, deal size, source)',
                                        'Moving data between two systems with a known mapping',
                                        'Triggering a sequence when a stage changes',
                                        'Math, formatting, validation, and scheduled jobs',
                                    ].map((item, i) => (
                                        <li key={i} className="font-mono text-xs text-surface/80 font-bold uppercase leading-snug">— {item}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="bg-surface p-5 border-4 border-primary">
                                <span className="font-heading font-black text-lg text-primary uppercase block mb-3">AI Adds Judgment</span>
                                <ul className="flex flex-col gap-2">
                                    {[
                                        'Classifying messy inbound (intent, topic, priority)',
                                        'Extracting fields from unstructured docs and email',
                                        'Drafting replies, summaries, and first-pass proposals',
                                        'Enriching and matching records where formats vary',
                                    ].map((item, i) => (
                                        <li key={i} className="font-mono text-xs text-primary/70 font-bold uppercase leading-snug">— {item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <p>
                            The strongest automations are hybrids: deterministic rules form the skeleton, and an LLM handles the one or two steps that genuinely need to read, interpret, or write. Invoice processing is the classic example — the AI extracts line items from a PDF that never has the same layout twice, then plain rules validate the totals and post the clean data to your accounting system. Let each tool do what it's actually good at. For a fuller treatment, see our <Link to="/blog/ai-business-process-automation" className="text-accent font-bold underline hover:text-primary">practical guide to AI business process automation</Link>.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Processes Most B2B Teams Should Automate First
                        </h2>
                        <p className="mb-4">
                            For most B2B teams, the highest-scoring first automations live in the lead-to-revenue path: lead capture, routing, follow-up, enrichment, reporting, and onboarding. These are the processes that run constantly, follow clear rules, and rarely change — which is exactly why they top the framework. Start here.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 mb-4">
                            {[
                                'Lead capture → CRM: push every form, ad, and inbox lead into the CRM with no manual entry',
                                'Lead routing & scoring: assign and prioritize by rules the second a lead lands',
                                'Follow-up sequences: trigger timed, personalized outreach off pipeline stage changes',
                                'Data enrichment: fill in company size, role, and contact gaps automatically',
                                'Reporting: assemble pipeline and activity dashboards instead of weekly copy-paste',
                                'Onboarding: kick off the same checklist, accounts, and emails for every new client',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            None of these are exotic. They're the boring, repetitive, rule-heavy tasks that quietly eat 10-15 hours of your team's week and introduce errors every time a human re-keys data. Automate them first and you free your people for the work that actually needs judgment — selling, advising, and closing. For dozens of concrete builds by function, see our <Link to="/blog/ai-automation-examples" className="text-accent font-bold underline hover:text-primary">27 real AI automation examples</Link>.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What NOT To Automate (Yet)
                        </h2>
                        <p className="mb-4">
                            Don't automate a process that is broken, run once, dependent on high-trust human judgment, or about to change. Automation amplifies whatever you point it at — so if the underlying process is bad, you just produce bad outcomes faster and at scale. Fix or shelve these first.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                { what: 'Broken processes', detail: 'If a workflow is messy or undefined when a human runs it, automating it hardcodes the mess. Fix and document it manually first — then automate the working version.' },
                                { what: 'One-off tasks', detail: 'A task you run once or twice a year almost never clears the volume bar. The build and maintenance cost outweighs the time saved. Just do it by hand.' },
                                { what: 'High-trust judgment', detail: 'Pricing negotiations, sensitive client conversations, hiring calls, and anything legal or relational still needs a human. AI can assist with a draft; it should not decide.' },
                                { what: 'Processes about to change', detail: 'If a workflow is mid-redesign or you know the tooling shifts next quarter, wait. Automating a moving target means rebuilding it the moment it settles.' },
                            ].map((m) => (
                                <div key={m.what} className="bg-surface border-4 border-primary p-5">
                                    <span className="font-mono text-sm font-black text-accent block mb-2 uppercase">{m.what}</span>
                                    <span className="font-sans text-xs text-primary/70 leading-relaxed">{m.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            The discipline here is sequencing, not avoidance. Almost everything on this list becomes a good candidate later — once the broken process is fixed, once the changing one stabilizes, once you find the rule hiding inside the judgment. "Not yet" is a roadmap, not a no. The point is to spend your first automation budget on the wins that are ready today.
                        </p>
                    </section>

                    {/* Closing */}
                    <section>
                        <p className="mb-4">
                            The framework is the whole answer: score every candidate on volume, pain, structure, and stability; automate the highest total; use rules for the deterministic steps and AI only where real judgment lives; and leave the broken, rare, sensitive, and shifting processes for later. Do that and your first automation pays for itself fast and earns the trust to fund the next one.
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4 mb-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Pick one process that scores high on all four questions, ship it, and measure the hours saved. One clean win beats a sprawling automation plan that never leaves the whiteboard.
                            </p>
                        </div>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want Us To Find Your First Automation?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We'll run your processes through this exact framework, score them with you, and tell you the one to automate first — including where plain rules beat AI and where AI earns its keep. No fluff, just the highest-leverage win for your team.
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
                                { slug: 'ai-business-process-automation', title: 'AI Business Process Automation: A Practical Guide for B2B Teams' },
                                { slug: 'how-to-integrate-ai-into-your-business', title: 'How to Integrate AI Into Your Business' },
                                { slug: 'ai-automation-examples', title: '27 Real AI Automation Examples by Business Function' },
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
