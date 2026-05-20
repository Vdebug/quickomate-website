import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogAutomationToolsCompared() {
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
                        <time dateTime="2026-05-17" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">May 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['Automation', 'n8n', 'Sales Ops'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        n8n vs Make vs Zapier for Sales Automation: Which to Use at Your Volume
                    </h1>
                </header>

                {/* Article Body */}
                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">

                    {/* Intro */}
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Every "Zapier vs Make vs n8n" article ranks them like there's one winner. There isn't. The right tool is entirely a function of your volume and how much complexity your stomach can handle. Zapier is the most expensive and the easiest. n8n is the cheapest at scale and the most work. Make sits in the middle. For sales automation specifically — where a single lead can trigger ten downstream actions — the billing model you pick decides whether automation pays for itself or quietly drains your budget. Here's the math.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Only Thing That Actually Differs: Billing Model
                        </h2>
                        <p className="mb-4">
                            All three tools connect apps, move data, and run workflows. The features overlap heavily. What separates them — and what determines your bill — is how each one <em>counts</em> work:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                            {[
                                { name: 'Zapier', detail: 'Bills per task. Every single action step = 1 task. A 6-step workflow run once = 6 tasks. Costs scale fastest.' },
                                { name: 'Make', detail: 'Bills per operation. Similar granularity to Zapier but cheaper per unit, with more logic per op. Mid-tier cost.' },
                                { name: 'n8n', detail: 'Bills per execution (cloud) or free self-hosted. One full workflow run = 1 execution, no matter how many steps.' },
                            ].map((tool) => (
                                <div key={tool.name} className="bg-surface border-4 border-primary p-4">
                                    <span className="font-mono text-sm font-black text-accent block mb-2">{tool.name}</span>
                                    <span className="font-sans text-xs text-primary/70">{tool.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            That difference is enormous and almost everyone underestimates it. On Zapier, a workflow that enriches a lead, scores it, routes it, syncs to CRM, posts to Slack, and sends a follow-up is <strong>6 tasks every time it fires</strong>. On n8n, the same workflow is <strong>1 execution</strong>. At 1,000 leads a month, that's 6,000 Zapier tasks versus 1,000 n8n executions for identical work.
                        </p>
                        <p>
                            Sales automation is exactly the workload where this bites hardest, because sales workflows are deep — one lead event fans out into many steps. The per-step models punish depth. The per-execution model doesn't care how deep your workflow goes.
                        </p>
                    </section>

                    {/* Section 2 — comparison grid */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Three Tools, Side by Side
                        </h2>
                        <p className="mb-4">
                            Approximate 2026 pricing and posture. Plans and limits shift, so confirm before you commit — but the relative positioning is stable:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4 mb-4">
                            {[
                                {
                                    name: 'Zapier',
                                    rows: [
                                        ['Billing', 'Per task'],
                                        ['Entry paid plan', '~$30/mo'],
                                        ['Cost at scale', 'Highest'],
                                        ['Ease of use', 'Easiest'],
                                        ['Self-host', 'No'],
                                        ['Best for', 'Low volume, non-technical'],
                                    ],
                                },
                                {
                                    name: 'Make',
                                    rows: [
                                        ['Billing', 'Per operation'],
                                        ['Entry paid plan', '~$10-20/mo'],
                                        ['Cost at scale', 'Medium'],
                                        ['Ease of use', 'Moderate'],
                                        ['Self-host', 'No'],
                                        ['Best for', 'Mid volume, visual logic'],
                                    ],
                                },
                                {
                                    name: 'n8n',
                                    rows: [
                                        ['Billing', 'Per execution / free'],
                                        ['Entry paid plan', '~$20-25/mo cloud'],
                                        ['Cost at scale', 'Lowest'],
                                        ['Ease of use', 'Steepest'],
                                        ['Self-host', 'Yes (open source)'],
                                        ['Best for', 'High volume, technical'],
                                    ],
                                },
                            ].map((tool) => (
                                <div key={tool.name} className="bg-surface border-4 border-primary p-6">
                                    <h3 className="font-heading font-black text-lg text-primary uppercase mb-4 border-l-4 border-accent pl-3">{tool.name}</h3>
                                    <ul className="flex flex-col gap-3">
                                        {tool.rows.map(([k, v]) => (
                                            <li key={k} className="flex flex-col">
                                                <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">{k}</span>
                                                <span className="font-sans text-sm font-bold text-primary">{v}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        <p>
                            The pattern is a straight line: as you move Zapier → Make → n8n, cost-at-scale drops and required technical skill rises. There is no tool that is both the cheapest and the easiest. Pick which constraint matters more to you right now.
                        </p>
                    </section>

                    {/* Section 3 — cost math at scale */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Cost Math at Real Sales Volume
                        </h2>
                        <p className="mb-4">
                            Let's make it concrete. Say you process <strong>1,500 leads/month</strong> through one enrichment-and-routing workflow that's about 6 steps deep, plus a follow-up workflow that fires a few more times per lead. Realistic monthly counts:
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4 mb-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">Same Workload, Three Bills</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {[
                                    { label: 'Zapier (tasks)', value: '25k-40k' },
                                    { label: 'Make (operations)', value: '15k-25k' },
                                    { label: 'n8n (executions)', value: '~5k' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-primary p-4">
                                        <span className="font-heading font-black text-2xl text-accent block">{stat.value}</span>
                                        <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mb-4">
                            At those counts, Zapier pushes you into plans running <strong>several hundred dollars a month</strong> just to keep the lights on. Make does the same work for a fraction of that. Self-hosted n8n runs the entire thing on a <strong>$5-20/month VPS</strong> with effectively unlimited executions — your only real cost is the server and the time to maintain it.
                        </p>
                        <p>
                            That's a swing of 10-20x on the same automation. For a small operation doing a few hundred leads a month, the difference is rounding error and Zapier's simplicity wins. At a few thousand leads a month with deep workflows, the difference is a real line item, and it's the single biggest reason teams migrate off Zapier.
                        </p>
                    </section>

                    {/* Section 4 — when self-hosting pays off */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            When Self-Hosting n8n Actually Pays Off
                        </h2>
                        <p className="mb-4">
                            Self-hosted n8n is "free" the way a free puppy is free. The software costs nothing; the maintenance does. You're responsible for the server, updates, backups, uptime, and debugging when something breaks at 2am with no support line to call. Be honest about whether that's a cost you can carry.
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4 mb-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Self-hosting pays off when your would-be Zapier/Make bill clears roughly $100-150/month, you have someone technical who can own a server, and your workflows are stable enough that you're not redeploying daily. Below that line, the managed convenience of Zapier or n8n Cloud is worth more than the savings. The cost was never the license — it was the engineering time.
                            </p>
                        </div>
                        <p>
                            A middle path that's underrated: n8n Cloud. You get the per-execution billing model and the full node library without running infrastructure yourself. It's not free, but it captures most of the cost advantage over Zapier while skipping the ops burden. For most growing sales teams, n8n Cloud is the smarter "graduate off Zapier" move than jumping straight to self-hosting.
                        </p>
                    </section>

                    {/* Section 5 — ease vs power */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Ease of Use vs Power: The Real Tradeoff
                        </h2>
                        <p className="mb-4">
                            Zapier is genuinely the easiest automation tool there is. A non-technical founder can build a working lead-to-CRM zap in an afternoon, no documentation required. That accessibility is worth real money — if it gets your automation live this week instead of next quarter, the higher per-task cost can be cheap.
                        </p>
                        <p className="mb-4">
                            n8n is the most powerful and the least forgiving. It assumes you're comfortable with data shapes, conditionals, custom code nodes, and occasionally raw JSON. In exchange you get branching logic, loops, custom code, self-hosting, and no per-step penalty for complexity. For genuinely intricate sales workflows — multi-source enrichment, conditional routing, custom scoring — n8n does things the others can't, or can only do clumsily.
                        </p>
                        <p>
                            Make sits squarely in between: a visual canvas that's more powerful than Zapier and more approachable than n8n, billed cheaper than Zapier per unit. If you want more logic than Zapier allows but don't want to touch a server or write code, Make is frequently the sweet spot — and it's the most commonly overlooked of the three.
                        </p>
                    </section>

                    {/* Section 6 — sales use cases */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Concrete Sales-Automation Use Cases
                        </h2>
                        <p className="mb-4">
                            Whichever tool you choose, these are the workflows that actually move pipeline. Each one is a chain of steps — which is precisely why the billing model matters so much:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 mb-4">
                            {[
                                'Lead routing — assign by territory, size, or round-robin',
                                'Enrichment — append firmographics + contact data on capture',
                                'CRM sync — keep deals, contacts, stages in lockstep',
                                'Follow-up triggers — fire sequences off stage changes',
                                'Lead scoring — tag and prioritize on intent signals',
                                'Form-to-CRM — instant capture, instant SDR alert',
                                'Reply detection — pause sequences when a lead responds',
                                'Slack / inbox alerts — notify reps on hot activity',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p>
                            Look at that list and count the steps in any one of them. "Enrichment" alone might be: receive lead → call enrichment API → parse response → update CRM → branch on company size → notify rep. That's 5-6 task-units on Zapier, one execution on n8n. Multiply by your monthly lead count and the tool choice has made itself.
                        </p>
                    </section>

                    {/* Section 7 — decision block by volume */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Which to Pick, by Volume
                        </h2>
                        <p className="mb-4">
                            Skip the agonizing. Find your row and start there. You can always migrate as you grow — and most teams do, in exactly this order:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                            {[
                                { phase: 'Under ~500 leads/mo', detail: 'Zapier. The cost is trivial at this volume and the speed-to-live is worth more than the savings. Don\'t over-engineer.' },
                                { phase: '~500-2,000 leads/mo', detail: 'Make, or n8n Cloud. You\'re feeling Zapier\'s task bill and want more logic. This is the migration tier.' },
                                { phase: '2,000+ leads/mo', detail: 'n8n (Cloud, then self-host). Deep workflows at volume make per-execution billing decisive. Pays for the technical lift.' },
                            ].map((step) => (
                                <div key={step.phase} className="bg-surface border-4 border-primary p-4">
                                    <span className="font-mono text-sm font-black text-accent block mb-2">{step.phase}</span>
                                    <span className="font-sans text-xs text-primary/70">{step.detail}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mb-4">
                            The biggest mistake isn't picking the "wrong" tool — it's picking the cheapest tool before you have the skill to run it, then having no automation at all because the n8n instance you stood up broke and nobody could fix it. A working Zapier beats a broken n8n every single time.
                        </p>
                        <p>
                            The second mistake is the opposite: staying on Zapier out of inertia while it quietly bills you four figures a month for work n8n would do for the price of a VPS. Re-check the math whenever your volume doubles. The right answer at 200 leads/month is rarely the right answer at 4,000.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want Us To Build Your Sales Automation?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We design and run sales automation on the right tool for your actual volume — lead routing, enrichment, CRM sync, follow-up triggers, reply detection. Usually that means n8n done properly, without the 2am server panic falling on you. If you're either overpaying Zapier or sitting on a half-broken self-hosted instance, let's fix it.
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
                                { slug: 'crm-automation-systems-for-b2b', title: 'CRM Automation: Stage-Based Triggers' },
                                { slug: 'follow-up-system-for-b2b', title: 'You Don’t Have a Lead Problem. You Have a Follow-Up Problem.' },
                                { slug: 'sales-automation-roi-calculator', title: 'The Real ROI of Sales Automation' },
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
