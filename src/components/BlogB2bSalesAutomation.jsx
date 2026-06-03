import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowUpRight, Clock } from 'lucide-react';

export default function BlogB2bSalesAutomation() {
    return (
        <div className="min-h-screen bg-background text-textMain pt-32 pb-20 px-6 sm:px-12 md:px-24">
            <div className="max-w-4xl mx-auto">
                <Link to="/blog" className="inline-flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors mb-12">
                    <ArrowLeft size={14} />
                    All Posts
                </Link>

                <header className="mb-16 border-b-4 border-primary pb-8">
                    <div className="flex items-center gap-4 flex-wrap mb-6">
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest flex items-center gap-1">
                            <Clock size={12} /> 11 min read
                        </span>
                        <time dateTime="2026-06-04" className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">June 2026</time>
                        <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                            By <a href="https://www.linkedin.com/in/refer-vasu/" rel="author" target="_blank" className="text-primary hover:text-accent">Vasu Gupta</a>
                        </span>
                        {['B2B Sales', 'Sales Automation', 'Growth Systems'].map((tag) => (
                            <span key={tag} className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider">
                                {tag}
                            </span>
                        ))}
                    </div>
                    <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl text-primary tracking-tighter uppercase leading-tight">
                        B2B Sales Automation in 2026: The Stack, the ROI, and What to Build First
                    </h1>
                </header>

                <article className="flex flex-col gap-10 font-sans text-base text-primary/80 leading-relaxed">

                    <div className="bg-surface border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <p className="font-mono text-sm font-bold uppercase border-l-4 border-accent pl-4 text-primary">
                            Most B2B companies automate the wrong thing first — and wonder why pipeline doesn't improve. B2B sales automation works when it targets the specific bottlenecks eating rep time. Here's what to automate, in what order, with realistic numbers on what it actually returns.
                        </p>
                    </div>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            What B2B Sales Automation Actually Covers
                        </h2>
                        <p className="mb-4">
                            "Sales automation" gets used to describe everything from a Zapier zap to a full AI outbound engine. Before you evaluate tools or build anything, map the five layers of the B2B sales workflow and identify which one you're actually trying to fix.
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4">
                            <div className="flex flex-col gap-4">
                                {[
                                    { num: '01', label: 'PROSPECTING', desc: 'Identifying accounts that match your ICP and sourcing contact data. Automated by: Clay, Apollo, LinkedIn Sales Navigator exports, Clearbit.' },
                                    { num: '02', label: 'ENRICHMENT', desc: 'Filling in missing data fields, validating emails, scoring fit. Automated by: Clay waterfall, Hunter.io, ZoomInfo, Clearbit, Datagma.' },
                                    { num: '03', label: 'OUTREACH', desc: 'Sequenced cold email, LinkedIn, and call touchpoints. Automated by: Smartlead, Instantly, Outreach, Salesloft, Apollo Sequences.' },
                                    { num: '04', label: 'FOLLOW-UP & NURTURE', desc: 'Re-engaging stalled leads, warm sequences for hand-raisers, trigger-based drips. Automated by: HubSpot workflows, n8n, Make, Active Campaign.' },
                                    { num: '05', label: 'CRM ADMIN', desc: 'Data entry, stage updates, task creation, meeting logging. Automated by: HubSpot, Salesforce flows, Gong, Fathom, custom integrations.' },
                                ].map((item) => (
                                    <div key={item.num} className="flex gap-4 items-start">
                                        <span className="font-mono text-xs font-bold text-accent bg-accent/10 border border-accent/30 px-2 py-1 shrink-0">{item.num}</span>
                                        <div>
                                            <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest block mb-1">{item.label}</span>
                                            <p className="text-sm text-primary/70">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mt-6">
                            Most companies stall at Layer 3 (outreach) and wonder why automation isn't working. The real leverage is in Layer 2 (enrichment quality) and Layer 5 (CRM hygiene) — because those unlock better targeting and faster follow-up on every layer above them.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Highest-ROI Things to Automate First
                        </h2>
                        <p className="mb-4">
                            Not all automation is equal. These five workflows consistently produce the fastest payback:
                        </p>
                        <div className="flex flex-col gap-4 mt-4">
                            {[
                                {
                                    rank: '1',
                                    title: 'Inbound Lead Routing',
                                    body: 'Every minute a qualified inbound lead sits unrouted costs pipeline. Automating routing logic (by territory, ICP score, rep availability, deal size) gets leads to the right rep in under 5 minutes instead of hours. Payback: immediate. Setup: 1–2 days in HubSpot or a simple n8n flow.',
                                    stat: '< 5 min response time',
                                },
                                {
                                    rank: '2',
                                    title: 'Prospect Enrichment Waterfall',
                                    body: 'Manual research burns 6–8 hours per rep per week. A Clay waterfall — Apollo → Hunter → Datagma → Clearbit — auto-enriches every new prospect with job title, company size, tech stack, and a verified email. Reps touch only leads that are already scored and enriched.',
                                    stat: '6–8 hrs/rep/week saved',
                                },
                                {
                                    rank: '3',
                                    title: 'Trigger-Based Outreach',
                                    body: 'Job changes, funding rounds, hiring spikes, and tech stack switches are buying signals. Automated trigger monitoring (via Clay, HubSpot, or a custom n8n flow watching LinkedIn and Crunchbase) puts these accounts in a high-priority send queue within hours of the event — not weeks later when a rep notices.',
                                    stat: '3–5× higher reply rate vs cold',
                                },
                                {
                                    rank: '4',
                                    title: 'CRM Stage-Based Email Sequences',
                                    body: 'When a deal moves from Qualified to Proposal, the right email should fire automatically — a case study, a pricing guide, a social proof sequence. Stage-based automation means follow-up never falls through a crack because a rep is busy. Most HubSpot or Salesforce setups can do this with zero custom code.',
                                    stat: '9–14 hrs/rep/week recovered',
                                },
                                {
                                    rank: '5',
                                    title: 'Meeting-to-CRM Data Extraction',
                                    body: 'Gong, Fathom, and Fireflies now extract BANT fields, next steps, objections, and decision-maker names from call recordings with 80–90% accuracy. Auto-populating these into CRM fields means reps stop spending 15 minutes per call on admin and start spending it on the next call.',
                                    stat: '15 min saved per meeting',
                                },
                            ].map((item) => (
                                <div key={item.rank} className="bg-surface border-4 border-primary p-6">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="font-mono text-xs font-bold text-accent bg-accent/10 border border-accent/30 px-2 py-1">#{item.rank}</span>
                                        <h3 className="font-heading font-black text-lg text-primary uppercase tracking-tight">{item.title}</h3>
                                        <span className="ml-auto font-mono text-[10px] font-bold text-primary/50 uppercase tracking-widest hidden sm:block">{item.stat}</span>
                                    </div>
                                    <p className="font-mono text-xs text-primary/70">{item.body}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The B2B Sales Automation Stack (2026 Edition)
                        </h2>
                        <p className="mb-4">
                            There is no universal stack — it depends on your ICP, volume, and whether you're running outbound-heavy or inbound-heavy motion. Here are the three most common configurations:
                        </p>
                        <div className="flex flex-col gap-6 mt-4">
                            <div className="bg-primary p-6 border-4 border-primary">
                                <h3 className="font-heading font-black text-lg text-accent uppercase mb-3">Stack A: Outbound-Heavy (Under $5K/mo Budget)</h3>
                                <div className="font-mono text-xs text-surface/80 flex flex-col gap-2">
                                    <p>› Prospecting: Apollo.io ($99/mo)</p>
                                    <p>› Enrichment: Clay Starter ($149/mo) + waterfall credits</p>
                                    <p>› Sending: Smartlead or Instantly ($97/mo) — 3 domains, 6 inboxes</p>
                                    <p>› CRM: HubSpot Free or Starter</p>
                                    <p>› Automation glue: n8n self-hosted (free) or Make Starter ($9/mo)</p>
                                    <p className="text-accent font-bold mt-2">Total: ~$380–500/mo. Target: 15–20 booked meetings/month at steady state.</p>
                                </div>
                            </div>
                            <div className="bg-primary p-6 border-4 border-primary">
                                <h3 className="font-heading font-black text-lg text-accent uppercase mb-3">Stack B: Inbound + Outbound (Mid-Market)</h3>
                                <div className="font-mono text-xs text-surface/80 flex flex-col gap-2">
                                    <p>› Prospecting + Enrichment: Clay Pro ($400/mo) + Apollo ($299/mo)</p>
                                    <p>› Sending: Smartlead Growth ($94/mo) + Outreach or Salesloft for inbound sequences</p>
                                    <p>› CRM: HubSpot Professional ($800/mo)</p>
                                    <p>› Meeting intelligence: Gong or Fathom ($300–500/mo)</p>
                                    <p>› Glue: n8n Cloud or Make Business ($16–29/mo)</p>
                                    <p className="text-accent font-bold mt-2">Total: ~$1,900–2,200/mo. Serves teams of 3–8 reps doing high-volume outbound.</p>
                                </div>
                            </div>
                            <div className="bg-primary p-6 border-4 border-primary">
                                <h3 className="font-heading font-black text-lg text-accent uppercase mb-3">Stack C: AI-Augmented (Scale)</h3>
                                <div className="font-mono text-xs text-surface/80 flex flex-col gap-2">
                                    <p>› Prospecting: Clay Pro + LinkedIn Sales Navigator ($900/mo)</p>
                                    <p>› Enrichment: Clay waterfall + custom LLM research (Claude/GPT API, ~$50–100/mo)</p>
                                    <p>› Sending: Smartlead + Outreach ($300–500/mo)</p>
                                    <p>› CRM: Salesforce or HubSpot Enterprise</p>
                                    <p>› AI layer: Custom n8n agents for lead scoring, content personalization, trigger monitoring</p>
                                    <p>› Intelligence: Gong + Clari for forecasting</p>
                                    <p className="text-accent font-bold mt-2">Total: $3,500–5,000/mo. Built for teams doing 50+ new qualified conversations/month.</p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Realistic ROI Numbers for B2B Sales Automation
                        </h2>
                        <p className="mb-4">
                            The vendor claims ("10x your pipeline") are useless. Here are the numbers we actually see across operator-run stacks:
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4">
                            <h3 className="font-heading font-black text-lg text-primary uppercase mb-4">What Good Looks Like at 90 Days</h3>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {[
                                    { label: 'Rep Hours Saved / Week', value: '10–14 hrs' },
                                    { label: 'Increase in Outreach Volume', value: '2–3×' },
                                    { label: 'Reply Rate (vs 0.5% fully automated)', value: '3–5%' },
                                    { label: 'Meetings from Trigger-Based Sends', value: '2–4× cold rate' },
                                    { label: 'CRM Data Completeness', value: '75% → 92%' },
                                    { label: 'Typical Payback Period', value: '6–10 weeks' },
                                ].map((stat) => (
                                    <div key={stat.label} className="bg-primary p-4">
                                        <span className="font-heading font-black text-xl text-accent block">{stat.value}</span>
                                        <span className="font-mono text-[10px] text-surface/60 font-bold uppercase tracking-widest">{stat.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="mt-6">
                            The caveat on reply rates: fully automated outreach (AI writes and sends without human review) consistently underperforms human-edited campaigns. The benchmark above assumes a human editor reviews sequences before send. Remove that step and reply rate drops to 1–2%.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            The Most Common Automation Mistakes in B2B Sales
                        </h2>
                        <p className="mb-4">
                            These four mistakes account for the majority of failed automation projects:
                        </p>
                        <ul className="flex flex-col gap-4 list-disc list-inside mb-4">
                            <li>
                                <strong>Automating before the process is documented.</strong> If your reps each run their own follow-up system, automating it creates five automated versions of a broken process. Document the ideal workflow first, then automate the documented version.
                            </li>
                            <li>
                                <strong>Starting with CRM complexity instead of outreach.</strong> Most companies spend three months configuring Salesforce pipelines before sending a single automated email. The fastest wins come from outreach and enrichment — CRM admin is a year-two project.
                            </li>
                            <li>
                                <strong>Scaling volume before verifying quality.</strong> Sending 1,000 automated emails before testing 200 and checking reply rates is how you burn three domains. Test small, verify quality, then scale.
                            </li>
                            <li>
                                <strong>No human in the loop on final copy.</strong> AI-written copy at scale has a "template smell" prospects recognize. Human editing the final draft — even just the opening line — consistently lifts reply rates by 2–3 percentage points. That gap is the entire economics of outbound.
                            </li>
                        </ul>
                        <div className="bg-accent/10 border-4 border-accent p-6 mt-2">
                            <p className="font-mono text-sm font-bold text-primary uppercase border-l-4 border-accent pl-4">
                                The companies winning at B2B sales automation in 2026 aren't the ones with the most tools. They're the ones who automated three workflows well, kept humans on the decisions that actually matter, and built infrastructure they own — not a subscription they rent.
                            </p>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            How to Evaluate a B2B Sales Automation Tool
                        </h2>
                        <p className="mb-4">
                            Before you sign up for anything, run the tool through this five-question framework:
                        </p>
                        <div className="bg-surface border-4 border-primary p-6 mt-4">
                            <ol className="flex flex-col gap-4 list-decimal list-inside font-mono text-sm text-primary">
                                <li><strong>Which specific layer of the sales workflow does this solve?</strong> If the answer is "everything," it probably does none of them well. Find the one thing it's best at and verify that's your actual bottleneck.</li>
                                <li><strong>Do I own the data when I cancel?</strong> Lead lists, contact data, email templates, domain reputation — if these disappear when you stop paying, you're renting infrastructure. Own everything critical.</li>
                                <li><strong>What does the billing look like at 3× my current volume?</strong> Per-contact pricing looks cheap at 500 leads/month and expensive at 5,000. Model the cost at scale before you commit.</li>
                                <li><strong>What integration does this require?</strong> Most tools need at minimum a CRM connection and a sending infrastructure. Tools that claim to be standalone usually become data silos within 60 days.</li>
                                <li><strong>Can I see a real 30-day output from a company in my ICP?</strong> Not a case study slide — actual campaign data, reply rates, and meeting counts from a comparable account.</li>
                            </ol>
                        </div>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            Build vs Buy: The Decision for 2026
                        </h2>
                        <p className="mb-4">
                            For most B2B companies, the honest answer is hybrid: buy commoditized infrastructure (a sending platform, a CRM, an enrichment tool) and build the automation logic on top of it yourself — or hire someone to build it once and hand it to you.
                        </p>
                        <p className="mb-4">
                            <strong>Buy packaged automation products when:</strong> you're a small team without technical bandwidth, your ICP is broad enough that generic copy works, and you'd rather pay a premium for speed over customization.
                        </p>
                        <p className="mb-4">
                            <strong>Build a composed stack when:</strong> you have a specific, defensible ICP where quality matters more than volume, you want to own the infrastructure long-term, and you're prepared to invest 40–60 hours upfront in setup and testing.
                        </p>
                        <p>
                            The composed stack costs 3–5× less per month than packaged products at equivalent output quality. The tradeoff is setup time and the need for occasional maintenance. For most B2B companies doing $1M–$20M ARR, the composed stack wins on economics within six months.
                        </p>
                    </section>

                    <section className="bg-primary border-4 border-primary p-8 md:p-12 mt-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
                        <h2 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight mb-4">
                            Want Your B2B Sales Stack Built and Handed Over?
                        </h2>
                        <p className="font-sans text-sm text-textInverted/80 font-bold mb-8 max-w-2xl">
                            We architect B2B sales automation systems — enrichment, outreach, CRM automation, trigger-based sending — built on infrastructure you own outright. 15–30 minutes, no pitch deck.
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
                                { slug: 'sales-automation-roi-calculator', title: 'The Real ROI of Sales Automation: How to Calculate Hours and Dollars Before You Spend' },
                                { slug: 'ai-sales-agents-2026-what-works', title: "AI Sales Agents in 2026: What Actually Works (and What's Just Demos)" },
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
