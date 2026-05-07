import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, BarChart3, Cpu, Wifi } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const caseStudies = [
    {
        id: 1,
        company: 'Solaris Wireless',
        icon: <Wifi size={28} className="text-accent" />,
        industry: 'Telecommunications Hardware',
        headline: 'AI-powered lead generation system delivering 15-20 qualified leads per month through cold email infrastructure.',
        stats: [
            { label: 'Monthly Leads', value: '15-20' },
            { label: 'Reply Rate', value: '~4%' },
            { label: 'Positive Replies', value: '1-2%' },
        ],
        tags: ['AI Cold Email', 'Lead Gen System', 'Custom CRM', 'AI Nurture'],
        description:
            'Deployed an end-to-end AI cold email system that autonomously prospects, qualifies, and delivers 20+ warm leads every month. Combined with a customized CRM featuring intelligent scoring and automated nurture sequences, the system prioritizes high-intent enterprise buyers and triggers personalized follow-up cadences at scale.',
    },
    {
        id: 2,
        company: 'EcomOS',
        icon: <BarChart3 size={28} className="text-accent" />,
        industry: 'E-Commerce Infrastructure',
        headline: 'Automated ad analysis and content engine deployment across 12 product verticals.',
        stats: [
            { label: 'Ad Relevance', value: '+340%' },
            { label: 'CPA Reduction', value: '-62%' },
            { label: 'Time to Deploy', value: '< 72h' },
        ],
        tags: ['Ad Analysis', 'Content Engine', 'Meta Ads Automation'],
        description:
            'Deployed an automated ad analysis system and intelligent content engine. The infrastructure continuously evaluates campaign performance and generates optimized creative assets, self-optimizing targeting parameters in real time.',
    },
    {
        id: 3,
        company: 'Aikon',
        icon: <Cpu size={28} className="text-accent" />,
        industry: 'B2B Marketing Automation',
        headline: 'WhatsApp Business API integration and branded outreach automation.',
        stats: [
            { label: 'Response Rate', value: '+340%' },
            { label: 'Engagement', value: '+185%' },
            { label: 'Manual Touchpoints', value: 'Near-Zero' },
        ],
        tags: ['WhatsApp API', 'B2B Outreach', 'Brand Verification'],
        description:
            'Enabled the official WhatsApp Business API for systematic B2B outreach and customer engagement. The infrastructure replaced fragmented personal profiles with a verified branded presence, unlocking complex marketing automations and new communication channels that were previously inaccessible.',
    },
];

export default function CaseStudies() {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                '.case-card',
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: 'power3.out',
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: 'top 75%',
                    },
                }
            );
        }, sectionRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="case-studies"
            className="py-32 px-6 sm:px-12 md:px-24 bg-background z-20 relative border-t-4 border-primary"
        >
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-primary pb-8">
                    <div>
                        <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase mb-4 bg-accent/10 px-3 py-1 inline-block border border-accent/30">
                            CASE_STUDIES
                        </div>
                        <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-primary tracking-tighter uppercase leading-none">
                            Deployed
                            <br />
                            <span className="text-accent">Systems.</span>
                        </h2>
                    </div>
                    <p className="font-mono font-bold text-sm text-primary max-w-sm border-l-2 border-accent pl-4 uppercase">
                        Real infrastructure.
                        <br />
                        Measurable velocity.
                    </p>
                </div>

                {/* Case Study Cards */}
                <div className="flex flex-col gap-8">
                    {caseStudies.map((study, idx) => (
                        <div
                            key={study.id}
                            className="case-card bg-surface border-4 border-primary p-5 sm:p-8 md:p-12 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] hover:shadow-[12px_12px_0px_0px_rgba(230,59,46,1)] transition-shadow duration-300 group"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                                {/* Left Column: Company Info */}
                                <div className="md:col-span-4 flex flex-col gap-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary flex items-center justify-center shrink-0">
                                            {study.icon}
                                        </div>
                                        <div>
                                            <h3 className="font-heading font-black text-2xl text-primary uppercase tracking-tight">
                                                {study.company}
                                            </h3>
                                            <span className="font-mono text-[10px] text-primary/50 font-bold uppercase tracking-widest">
                                                {study.industry}
                                            </span>
                                        </div>
                                    </div>

                                    <p className="font-sans text-sm text-primary/70 font-bold border-l-2 border-primary/20 pl-3 leading-relaxed">
                                        {study.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mt-auto">
                                        {study.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="font-mono text-[10px] font-bold text-primary uppercase bg-primary/5 border border-primary/20 px-2 py-1 tracking-wider"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Column: Stats + Headline */}
                                <div className="md:col-span-8 flex flex-col gap-8 min-w-0">
                                    <h4 className="font-heading font-black text-xl md:text-2xl text-primary tracking-tight uppercase">
                                        {study.headline}
                                    </h4>

                                    {/* Stats Grid */}
                                    <div className="grid grid-cols-3 gap-2 sm:gap-4">
                                        {study.stats.map((stat) => (
                                            <div
                                                key={stat.label}
                                                className="bg-primary p-3 sm:p-4 md:p-6 border-4 border-primary flex flex-col gap-2 group-hover:bg-accent transition-colors duration-300 min-w-0"
                                            >
                                                <span className="font-heading font-black text-xl sm:text-2xl md:text-4xl text-surface leading-none break-words">
                                                    {stat.value}
                                                </span>
                                                <span className="font-mono text-[9px] sm:text-[10px] text-surface/60 font-bold uppercase tracking-widest break-words">
                                                    {stat.label}
                                                </span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Read More */}
                                    <div className="flex justify-end">
                                        <a
                                            href="https://cal.com/vasu-gupta-wv3e0q/discovery-call-quickomate"
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors group/btn"
                                        >
                                            <span>Explore System</span>
                                            <ArrowUpRight
                                                size={14}
                                                className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                                            />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
