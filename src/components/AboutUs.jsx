import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function AboutUs() {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                '.about-el',
                { y: 40, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.12,
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
            id="about"
            className="py-32 px-6 sm:px-12 md:px-24 bg-primary border-t-4 border-accent relative overflow-hidden"
        >
            <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                    backgroundImage:
                        'linear-gradient(#E8E4DD 1px, transparent 1px), linear-gradient(90deg, #E8E4DD 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="about-el mb-16">
                    <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase mb-4 bg-accent/10 px-3 py-1 inline-block border border-accent/30">
                        ABOUT_US
                    </div>
                    <h2 className="font-heading font-black text-[2.5rem] sm:text-6xl md:text-7xl text-textInverted tracking-tighter uppercase leading-[1.05] sm:leading-none">
                        AI-native since
                        <br />
                        <span className="font-drama italic text-accent lowercase tracking-normal">day one.</span>
                    </h2>
                </div>

                <p className="about-el font-sans text-lg sm:text-xl text-textInverted/70 font-bold max-w-3xl mb-20 border-l-4 border-accent pl-6 leading-relaxed uppercase">
                    Vasu was early to spot the business utility of generative AI. He used cutting-edge AI models to build proprietary automation systems for B2B companies before most agencies even knew what a prompt was.
                </p>

                <div className="about-el grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
                    <div className="md:col-span-3">
                        <div className="w-full aspect-square max-w-[280px] border-4 border-textInverted/20 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)] overflow-hidden bg-surface">
                            <img
                                src="/vasu-gupta.jpg"
                                alt="Vasu Gupta - CEO & Founder of Quickomate"
                                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                    </div>

                    <div className="md:col-span-9 flex flex-col gap-6">
                        <div>
                            <h3 className="font-heading font-black text-3xl text-textInverted uppercase tracking-tight">
                                Vasu Gupta
                            </h3>
                            <span className="font-mono text-xs text-accent font-bold tracking-widest uppercase">
                                CEO / Founder
                            </span>
                        </div>

                        <div className="flex flex-col gap-4">
                            <p className="font-sans text-sm text-textInverted/80 font-bold border-l-2 border-textInverted/20 pl-4 leading-relaxed">
                                A strategic consultant and AI systems architect, Vasu helps B2B companies deploy proprietary AI-driven growth infrastructure. From cold email systems that generate 15-20 qualified leads per month to fully automated onboarding pipelines, he builds the logic engines that let fast-moving companies scale without adding headcount.
                            </p>
                            <p className="font-sans text-sm text-textInverted/80 font-bold border-l-2 border-textInverted/20 pl-4 leading-relaxed">
                                Vasu has helped generate significant revenue across SMB and enterprise clients using custom AI systems. His hands-on approach to content strategy, lead generation infrastructure, and sales automation means every system he builds is battle-tested in production, not just a demo.
                            </p>
                        </div>

                        <div className="flex gap-4 mt-4">
                            <a
                                href="https://x.com/vaaasug"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 font-mono text-xs font-bold text-textInverted uppercase border-2 border-textInverted/30 px-4 py-2 hover:bg-accent hover:border-accent hover:text-textInverted transition-colors group/btn"
                            >
                                <span>X (Twitter)</span>
                                <ArrowUpRight
                                    size={14}
                                    className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                                />
                            </a>
                            <a
                                href="https://www.linkedin.com/in/refer-vasu/"
                                target="_blank"
                                rel="noreferrer"
                                className="flex items-center gap-2 font-mono text-xs font-bold text-textInverted uppercase border-2 border-textInverted/30 px-4 py-2 hover:bg-accent hover:border-accent hover:text-textInverted transition-colors group/btn"
                            >
                                <span>LinkedIn</span>
                                <ArrowUpRight
                                    size={14}
                                    className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
