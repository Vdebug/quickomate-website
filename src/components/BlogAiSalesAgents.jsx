import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogAiSalesAgents() {
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
                        <time dateTime="2026-05-10" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">May 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['AI Agents', 'Sales Automation', 'AI Systems'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        AI Sales Agents in 2026: What Actually Works (and What's Just Demos)
                    </h1>
                </header>

                {/* Article Body */}
                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">

                    {/* Intro */}
                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Every SaaS founder asks: "Can I replace my SDR team with an AI agent yet?" Honest answer: parts of it, not all of it — and the demos don't show you where it breaks.
                        </p>
                    </div>

                    {/* Section 1 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The AI Sales Agent Landscape
                        </h2>
                        <p className="mb-4">
                            "AI sales agent" is now a meaningless category. It covers everything from a glorified Zapier flow to a conversational LLM pretending to be a human SDR. Before you evaluate anything, map the layer. There are four:
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                            {[
                                'RESEARCH AGENTS — Clay, Bardeen, n8n flows. Enrich, score, trigger-monitor.',
                                'SEQUENCE AGENTS — Smartlead, Instantly, Reply.io. Send, warm, A/B, route replies.',
                                'CONVERSATIONAL AGENTS — AiSDR, 11x Alice, Artisan Ava, Conversica. LLM-driven reply handlers.',
                                'FULL-STACK AGENTS — Replicant and similar. Voice + inbound + qualification end-to-end.',
                            ].map((item, i) => (
                                <div key={i} className="bg-primary p-4 border-4 border-primary">
                                    <span className="font-mono text-sm text-surface font-bold uppercase">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-6">
                            Most products that pitch themselves as a "full AI SDR" are actually layer 1 + 2 with a chat UI bolted on. They're not autonomous sales agents. They're orchestration with marketing. Once you know which layer you're buying, the pricing stops making sense.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What AI Agents Reliably Handle
                        </h2>
                        <p className="mb-4">
                            Let's give credit where it's earned. In 2026 there are real workflows where AI agents outperform humans on cost and speed. These are the six we trust in production:
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">The Reliable Six</h3>
                            <ol className="flex flex-col gap-3 list-decimal list-inside font-mono text-sm text-primary">
                                <li><strong>Prospect enrichment + ICP matching.</strong> ~95% accuracy now. Clay + waterfall enrichment puts manual list-building out of business.</li>
                                <li><strong>Trigger event monitoring.</strong> Job changes, funding rounds, hiring spikes, tech stack shifts. Agents catch these within hours, not weeks.</li>
                                <li><strong>Initial draft of personalized email.</strong> When fed strong context (site scrape + LinkedIn + recent post), the first draft is usable. Not sendable. Usable.</li>
                                <li><strong>Inbound triage + meeting booking.</strong> Calendar logic, lead scoring, routing rules — agents do this better than humans because they don't forget.</li>
                                <li><strong>CRM hygiene.</strong> Auto-stage moves, contact dedup, missing-field backfill. The unsexy work nobody wants.</li>
                                <li><strong>Call recording → CRM field extraction.</strong> Gong, Fathom, and similar tools now extract budget, timeline, decision-maker, and next-step into structured CRM fields with high reliability.</li>
                            </ol>
                        </div>
                        <p className="mt-6">
                            Notice what's missing from that list: writing the actual cold email, replying to objections, closing. The reliable work is upstream of conversation. The moment a human prospect needs to feel something, agent quality drops.
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What AI Agents Still Fail At
                        </h2>
                        <p className="mb-4">
                            This is the part the vendor demos skip. The failure modes are predictable and they're not getting fixed by a bigger model alone.
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4 mb-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                Full-automation cold outreach copy carries a template smell. Even with personalized hooks scraped from LinkedIn, fully automated copy lands at 1-2% reply rate. The same campaign with a human editor on the final draft consistently hits 4%+. That gap is the entire economics of cold email.
                            </p>
                        </div>
                        <p className="mb-4">
                            Beyond copy, here's where current agents reliably break:
                        </p>
                        <ul className="flex flex-col gap-3 list-disc list-inside mb-4">
                            <li><strong>Multi-stakeholder navigation.</strong> An agent can email a champion. It cannot read the org chart and know when to escalate to the economic buyer. That transition still needs a human.</li>
                            <li><strong>Objection handling in conversation.</strong> LLMs hallucinate commitments. We've seen "Alice"-style agents promise pricing, custom integrations, and SLAs the company doesn't offer. Every one of those is a legal exposure.</li>
                            <li><strong>Pricing negotiation.</strong> Anchoring, package framing, discount logic — no current agent handles this without a human-defined script that just becomes a worse chatbot.</li>
                            <li><strong>Reading the room.</strong> On enterprise calls, half the signal is silence, hesitation, and who's looking at whom. Voice agents miss it. Sometimes a CFO going quiet means yes. Sometimes it means the deal is dead.</li>
                        </ul>
                        <p>
                            These aren't edge cases. They're the middle of the funnel — exactly where money is made or lost.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The "AI SDR" Pitch, Deconstructed
                        </h2>
                        <p className="mb-4">
                            Open the hood on most $1,500–$3,000/month "AI SDR" products and you find the same three components: a research agent (Clay or equivalent), an LLM email writer (GPT-4-class with a prompt template), and a sender (Smartlead or Instantly under the hood). That's it.
                        </p>
                        <p className="mb-4">
                            You can build the same stack for roughly $300/month:
                        </p>
                        <div className="bg-primary p-6 border-4 border-primary mt-4 mb-4">
                            <p className="font-mono text-sm text-surface font-bold">
                                &gt; Clay or Apollo: ~$150/mo<br />
                                &gt; Smartlead or Instantly: ~$97/mo<br />
                                &gt; OpenAI / Anthropic API: ~$30-50/mo<br />
                                &gt; Custom prompts + a human reviewer (you or a VA): free to $200/mo<br />
                                &gt; TOTAL: ~$300-500/mo vs $1,500-3,000/mo packaged.
                            </p>
                        </div>
                        <p className="mb-4">
                            So how do the packaged products charge 5-10x? Two ways. First, they hide humans in the loop — most "AI SDR" companies have offshore teams reviewing and editing campaigns before send. The marketing says autonomous; the ops are managed services. Second, they bet on buyers not knowing the underlying stack exists.
                        </p>
                        <p>
                            If you're paying $2,400/month for an AI SDR and getting 5 meetings, you're paying $480/meeting for a product that's mostly a thin wrapper. The maths only works while the buyer hasn't priced the components.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Realistic Productivity Gains in 2026
                        </h2>
                        <p className="mb-4">
                            We run a Quickomate-style hybrid stack across our clients. AI handles the upstream and structural work. Humans handle copy and judgment. Here's the actual time math, not the keynote slide:
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">Hours Saved Per Rep / Week</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: 'Research + Enrichment', value: '6-8 hr' },
                                    { label: 'First-Draft Copy', value: '2-3 hr' },
                                    { label: 'CRM Hygiene', value: '2-3 hr' },
                                    { label: 'Net Output Multiplier', value: '1.7-2.2x' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-primary p-4">
                                        <span className="font-heading font-black text-2xl text-accent block">{stat.value}</span>
                                        <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mt-6 mb-4">
                            One rep + a properly-built AI stack puts out the work of 1.7 to 2.2 reps. That's the honest number. It's not the "10x your team" narrative the vendors push. But it is real, repeatable, and it shows up in pipeline within 60 days.
                        </p>
                        <p>
                            The catch: that multiplier requires a human reviewer. We've measured the failure rate of fully automated campaigns versus human-edited ones across dozens of accounts. AI is wrong about tone or context in roughly 30% of generated emails. That 30% — sent unedited — is what tanks domain reputation and reply rates.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The 12-Month Outlook
                        </h2>
                        <p className="mb-4">
                            Where we expect AI agents to improve fastest between now and mid-2027:
                        </p>
                        <ul className="flex flex-col gap-3 list-disc list-inside mb-6">
                            <li><strong>Multi-channel orchestration.</strong> The same agent running email + LinkedIn + ad retargeting + warm-call cues, with a unified context window per prospect. Already shipping in early form.</li>
                            <li><strong>Objection handling.</strong> Smaller, fine-tuned models on specific ICPs will outperform GPT-4-class on canned-response quality. Less hallucination, more script discipline.</li>
                            <li><strong>Voice agents for inbound qualification.</strong> The 30-second "are you a fit?" call is going to disappear. Voice models are already crossing the threshold where prospects don't notice.</li>
                        </ul>
                        <p className="mb-4">
                            Where we expect them to <em>not</em> improve much:
                        </p>
                        <ul className="flex flex-col gap-3 list-disc list-inside">
                            <li><strong>Top-of-funnel cold copy on competitive ICPs.</strong> If you're selling to VPs of Engineering at Series B SaaS companies, every AI agency on earth is hitting the same inboxes with the same template structure. The only way to stand out is a human voice. That's not a model problem; it's a market saturation problem.</li>
                            <li><strong>Complex enterprise sales.</strong> Six-figure deals with 5+ stakeholders, procurement, security review, MSAs. Agents won't close these. They'll assist the human who does.</li>
                        </ul>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            How To Evaluate An AI Sales Agent Before Buying
                        </h2>
                        <p className="mb-4">
                            Before you sign a contract, run the vendor through this 5-question checklist. If they dodge any of them, walk.
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4">
                            <ol className="flex flex-col gap-3 list-decimal list-inside font-mono text-sm text-primary">
                                <li><strong>Where exactly does it sit in your funnel?</strong> Research? Send? Reply? All three? Make them point at a layer.</li>
                                <li><strong>What's the human-in-loop rate?</strong> If they say zero, they're lying or the output is bad. Acceptable answer: "humans review X% of sends."</li>
                                <li><strong>Show me a real 30-day pilot output from a similar ICP.</strong> Not a case study slide. Raw campaign data. Reply rates, positive replies, booked meetings.</li>
                                <li><strong>Can I export the data and infrastructure?</strong> If the answer is no, you're renting your own pipeline. When you cancel, your leads vanish.</li>
                                <li><strong>What's the LLM context window per prospect?</strong> Small context = generic outputs. Ask how many tokens of prospect-specific data feed each generation. If they don't know, the agent is a template.</li>
                            </ol>
                        </div>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Build vs Buy
                        </h2>
                        <p className="mb-4">
                            The decision is simpler than the vendors want you to think.
                        </p>
                        <p className="mb-4">
                            <strong>Buy a packaged agent product when:</strong> you're a non-technical founder, your ICP is generic enough that template-grade output is fine, you have less than $5K/mo to spend on outbound, and you don't care about owning the infrastructure long-term.
                        </p>
                        <p className="mb-4">
                            <strong>Compose your own stack when:</strong> you have a defensible ICP, you care about reply quality, you want to keep your domains and data, and you're prepared to put a human reviewer (yourself, a VA, or an agency) on the final-draft step. This is what we build for Quickomate clients — Clay + Smartlead + custom prompts + a human editor — and it consistently outperforms packaged AI SDRs at a third of the price.
                        </p>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-4">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                The agents are good enough to use. They are not good enough to leave unattended. The companies winning in 2026 treat AI as the bottom 70% of the stack and put humans on the top 30% — the parts that actually move pipeline.
                            </p>
                        </div>
                    </section>

                    {/* Section 9 — Tool Comparison */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            AI SDR Tool Comparison (2026): What You're Actually Buying
                        </h2>
                        <p className="mb-4">
                            Every "AI SDR" product pitches differently but the underlying stacks are more similar than the marketing suggests. Here's a straight comparison of the five most-discussed options, mapped to the four-layer framework from Section 1.
                        </p>
                        <div className="overflow-x-auto mt-4 mb-4">
                            <table className="w-full border-4 border-primary font-mono text-xs text-primary">
                                <thead>
                                    <tr className="bg-primary text-surface">
                                        <th className="p-3 text-left uppercase tracking-widest">Product</th>
                                        <th className="p-3 text-left uppercase tracking-widest">Layer</th>
                                        <th className="p-3 text-left uppercase tracking-widest">Price/mo</th>
                                        <th className="p-3 text-left uppercase tracking-widest">Human-in-Loop</th>
                                        <th className="p-3 text-left uppercase tracking-widest">Best For</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {[
                                        { product: '11x (Alice)', layer: 'Research + Conversational', price: '$1,500–$3,500', hil: 'Hidden (offshore review)', best: 'Non-technical founders who want managed outbound' },
                                        { product: 'AiSDR', layer: 'Research + Sequence + Conversational', price: '$750–$2,500', hil: 'Partial (AI flags for review)', best: 'Teams with existing HubSpot/Salesforce workflows' },
                                        { product: 'Artisan (Ava)', layer: 'Research + Sequence', price: '$1,500–$2,500', hil: 'Low — high automation rate', best: 'High-volume, less-competitive ICPs where template quality is fine' },
                                        { product: 'Replicant', layer: 'Full-Stack (Voice + Inbound)', price: 'Custom (enterprise)', hil: 'Supervised escalation', best: 'High-volume inbound triage where voice replaces a call center' },
                                        { product: 'Clay + Smartlead (custom)', layer: 'Research + Sequence (composable)', price: '$300–$500', hil: 'Human reviewer on every send', best: 'Defensible ICP, quality-sensitive outreach, teams that can invest 20 hrs upfront' },
                                    ].map((row, i) => (
                                        <tr key={i} className={i % 2 === 0 ? 'bg-background' : 'bg-surface'}>
                                            <td className="p-3 font-bold border-t-2 border-primary">{row.product}</td>
                                            <td className="p-3 border-t-2 border-primary">{row.layer}</td>
                                            <td className="p-3 border-t-2 border-primary">{row.price}</td>
                                            <td className="p-3 border-t-2 border-primary">{row.hil}</td>
                                            <td className="p-3 border-t-2 border-primary">{row.best}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <p className="mt-4">
                            The custom Clay + Smartlead stack is consistently cheaper and more controllable than any packaged product. The trade-off is setup time (20–40 hours) and the need for a human reviewer. If you have neither the time nor the reviewer, the packaged products make sense despite the price premium. What doesn't make sense: paying $2,500/month for a packaged product and then not using it because the output quality is too low to send — which happens more often than vendors report.
                        </p>
                    </section>

                    {/* Section 10 — 90-Day Roadmap */}
                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Your First 90 Days With an AI Sales System
                        </h2>
                        <p className="mb-4">
                            Most AI SDR deployments fail not because the tools are bad, but because teams try to go live too fast. Here's the timeline that actually works in practice:
                        </p>
                        <div className="flex flex-col gap-6 mt-4">
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-base text-primary uppercase mb-3 border-l-4 border-accent pl-3">Month 1: Data First</h3>
                                <p className="font-mono text-xs text-primary/70 mb-2">Don't touch sending yet. Build your foundation: Clay waterfall enrichment on your ICP list (aim for 90%+ valid emails), define your 3 ICP tiers (perfect fit / acceptable / wrong-fit), set up your Smartlead or Instantly sending infrastructure (2–4 cold domains, 2 inboxes per domain, warm for 21 days before first send). Draft 3 sequence variants and get them reviewed by a human before anything goes live.</p>
                                <div className="flex gap-4 mt-3">
                                    <span className="font-mono text-[10px] text-accent font-bold uppercase bg-accent/10 border border-accent/30 px-2 py-0.5">Output: enriched list + warmed domains</span>
                                </div>
                            </div>
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-base text-primary uppercase mb-3 border-l-4 border-accent pl-3">Month 2: Activate and Measure</h3>
                                <p className="font-mono text-xs text-primary/70 mb-2">Send your first 200–400 emails (not 2,000). You're buying data, not scale. Track reply rate by sequence variant, positive reply rate separately (interested vs unsubscribe), and email health metrics (open rate, spam complaints, bounce rate). Identify which hook generates the most positive replies and double down. Fix the sequences that get flagged as spam before scaling.</p>
                                <div className="flex gap-4 mt-3">
                                    <span className="font-mono text-[10px] text-accent font-bold uppercase bg-accent/10 border border-accent/30 px-2 py-0.5">Target: 4%+ reply rate on initial batches</span>
                                </div>
                            </div>
                            <div className="bg-surface border-4 border-primary p-6">
                                <h3 className="font-heading font-black text-base text-primary uppercase mb-3 border-l-4 border-accent pl-3">Month 3: Scale What Works</h3>
                                <p className="font-mono text-xs text-primary/70 mb-2">With a winning sequence and clean infrastructure, scale to 800–1,200 sends/week across 3–4 cold domains. Add a trigger-event layer (monitor job changes, funding announcements for your ICP) to create a high-priority send queue alongside your regular cadence. Set up a CRM routing rule so positive replies land in the right rep's queue within 5 minutes — that response speed is worth more than any copy optimization.</p>
                                <div className="flex gap-4 mt-3">
                                    <span className="font-mono text-[10px] text-accent font-bold uppercase bg-accent/10 border border-accent/30 px-2 py-0.5">Target: 2–5 booked meetings/week at steady state</span>
                                </div>
                            </div>
                        </div>
                        <p className="mt-6">
                            The teams that get the best ROI from AI sales systems treat month 1 as pure setup and don't measure results until month 2. The teams that fail go live in week 1, burn their domain reputation chasing volume, and attribute the failure to the tools instead of the process.
                        </p>
                    </section>

                    {/* CTA */}
                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want The Hybrid Stack Built For You?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We architect AI sales systems where the agents do what they're good at, humans do what they're good at, and you own every piece of the infrastructure when we're done. 15-30 minutes, no pitch deck.
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
                                { slug: 'ai-lead-generation-for-b2b-companies', title: 'AI Lead Generation for B2B Companies: A 2026 Playbook' },
                                { slug: 'ai-vs-human-cold-email-copy', title: 'AI vs Human Cold Email Copy: Why Full Automation Kills Your Reply Rate' },
                                { slug: 'crm-automation-systems-for-b2b', title: 'CRM Automation Systems for B2B: What To Build and What To Skip' },
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
