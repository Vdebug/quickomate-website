import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Clock, ArrowRight } from 'lucide-react';

const blogPosts = [
    {
        slug: 'how-to-know-if-your-business-needs-ai-automation',
        title: 'How To Know If Your Business Is Ready For AI Automation',
        excerpt: 'Not every business needs AI automation right now. A 5-question framework to find out if you\'re ready, what to build first, and how to calculate ROI before spending a dollar.',
        date: 'April 2026',
        dateIso: '2026-04-29',
        readTime: '6 min read',
        tags: ['AI Automation', 'ROI', 'Growth Systems'],
    },
    {
        slug: 'crm-automation-systems-for-b2b',
        title: 'CRM Automation: How Stage-Based Triggers Free Up Your Sales Team',
        excerpt: 'Move a lead from one CRM stage to another and the right email fires automatically. Here\'s how stage-based automation gives each rep 9-14 hours back every week.',
        date: 'April 2026',
        dateIso: '2026-04-29',
        readTime: '7 min read',
        tags: ['CRM', 'Sales Automation', 'Sales Ops'],
    },
    {
        slug: 'follow-up-system-for-b2b',
        title: "You Don't Have a Lead Problem. You Have a Follow-Up Problem.",
        excerpt: 'Most B2B companies have enough leads — they just stop following up after 2-3 touches. Here\'s how an automated follow-up system recovers that revenue, with ROI from day one.',
        date: 'April 2026',
        dateIso: '2026-04-29',
        readTime: '7 min read',
        tags: ['Follow-Up', 'Conversion', 'Revenue Recovery'],
    },
    {
        slug: 'ai-lead-generation-for-b2b-companies',
        title: 'AI Lead Generation for B2B Companies: A 2026 Playbook',
        excerpt: 'The 2026 guide to AI lead generation for B2B: which AI does what, where humans still win, realistic conversion benchmarks, and the exact stack we deploy.',
        date: 'April 2026',
        dateIso: '2026-04-28',
        readTime: '9 min read',
        tags: ['AI Lead Gen', 'B2B Sales', 'Sales Automation'],
    },
    {
        slug: 'cold-email-vs-paid-ads-b2b',
        title: 'Cold Email vs Paid Ads: Which Actually Works for B2B in 2026?',
        excerpt: 'Capped cost vs uncapped bidding, B2B-only reach, and why ICP fit decides the channel before strategy does. A founder-level breakdown.',
        date: 'April 2026',
        dateIso: '2026-04-25',
        readTime: '8 min read',
        tags: ['Cold Email', 'Paid Ads', 'B2B Marketing'],
    },
    {
        slug: 'ai-vs-human-cold-email-copy',
        title: 'AI vs Human Cold Email Copy: Why Full Automation Kills Your Reply Rate',
        excerpt: 'Fully AI-generated cold email copy looks personalized but reads like a template — and prospects can tell. Here\'s the hybrid that actually books meetings.',
        date: 'April 2026',
        dateIso: '2026-04-22',
        readTime: '7 min read',
        tags: ['Cold Email', 'AI Copy', 'Personalization'],
    },
    {
        slug: 'why-you-should-own-your-cold-email-infrastructure',
        title: 'Why You Should Own Your Cold Email Infrastructure (Not Rent It From An Agency)',
        excerpt: 'Most B2B agencies walk off with your leads when you stop paying. Here\'s why owning the infrastructure — domains, mailboxes, CRM — is the only sustainable path.',
        date: 'April 2026',
        dateIso: '2026-04-15',
        readTime: '6 min read',
        tags: ['Cold Email', 'Agency vs In-House', 'B2B Growth'],
    },
    {
        slug: 'cold-email-system-20-appointments-month',
        title: 'How We Get 15-20 Qualified Appointments Per Month With Cold Email',
        excerpt: 'The average business relies on referrals and struggles to get 2-3 meetings a month. Here\'s the exact system we deploy at a realistic 4% reply rate.',
        date: 'March 2026',
        dateIso: '2026-03-06',
        readTime: '8 min read',
        tags: ['Cold Email', 'Lead Gen', 'AI Systems'],
    },
];

export default function BlogIndex() {
    return (
        <div className="min-h-screen bg-background text-textMain pt-32 pb-20 px-6 sm:px-12 md:px-24">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-20 border-b-4 border-primary pb-8">
                    <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase mb-4 bg-accent/10 px-3 py-1 inline-block border border-accent/30">
                        BLOG_INDEX
                    </div>
                    <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl text-primary tracking-tighter uppercase leading-none">
                        Dispatches
                        <br />
                        <span className="text-accent">from the engine room.</span>
                    </h1>
                    <p className="font-mono text-sm text-primary/60 font-bold mt-6 uppercase border-l-2 border-accent pl-4">
                        Systems thinking, AI automation breakdowns, and growth infrastructure playbooks.
                    </p>
                </div>

                {/* Blog Post Cards */}
                <div className="flex flex-col gap-8">
                    {blogPosts.map((post) => (
                        <Link
                            key={post.slug}
                            to={`/blog/${post.slug}`}
                            className="group bg-surface border-4 border-primary p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:shadow-[12px_12px_0px_0px_rgba(230,59,46,1)] transition-all duration-300 block"
                            aria-label={`Read article: ${post.title}`}
                        >
                            <article className="flex flex-col gap-6">
                                {/* Meta */}
                                <div className="flex items-center gap-4 flex-wrap">
                                    <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest flex items-center gap-1">
                                        <Clock size={12} />
                                        {post.readTime}
                                    </span>
                                    <time
                                        dateTime={post.dateIso}
                                        className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest"
                                    >
                                        {post.date}
                                    </time>
                                    {post.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="font-mono text-[10px] font-bold text-accent uppercase bg-accent/10 border border-accent/30 px-2 py-0.5 tracking-wider"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Title */}
                                <h2 className="font-heading font-black text-2xl sm:text-3xl md:text-4xl text-primary tracking-tight uppercase group-hover:text-accent transition-colors">
                                    {post.title}
                                </h2>

                                {/* Excerpt */}
                                <p className="font-sans text-sm text-primary/70 font-bold border-l-2 border-primary/20 pl-4 max-w-3xl leading-relaxed">
                                    {post.excerpt}
                                </p>

                                {/* Read More */}
                                <div className="flex items-center gap-2 font-mono text-xs font-bold text-accent uppercase mt-2">
                                    <span>Read Full Breakdown</span>
                                    <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
