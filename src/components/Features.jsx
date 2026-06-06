import React, { useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MousePointer2, Activity, ShieldCheck, Zap } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ShufflerCard = () => {
    const [cards, setCards] = useState([
        { id: 1, label: 'SYS_COLD_EMAIL' },
        { id: 2, label: 'CONTENT_GRID' },
        { id: 3, label: 'LEAD_INFRA' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards((prev) => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-48 w-full mt-8 flex flex-col items-center justify-center">
            {cards.map((card, index) => {
                const isFirst = index === 0;
                const isSecond = index === 1;
                const isThird = index === 2;

                return (
                    <div
                        key={card.id}
                        className={`absolute w-full max-w-[280px] p-4 border-2 border-primary shadow-[4px_4px_0px_0px_rgba(17,17,17,1)] transition-all duration-700 ease-bounce-spring flex items-center gap-3
              ${isFirst ? 'z-30 y-0 scale-100 opacity-100 bg-surface' : ''}
              ${isSecond ? 'z-20 translate-y-4 scale-[0.95] opacity-80 bg-surface/80' : ''}
              ${isThird ? 'z-10 translate-y-8 scale-[0.9] opacity-40 bg-surface/50' : ''}
            `}
                        style={{
                            transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }}
                    >
                        <div className="w-8 h-8 bg-primary flex items-center justify-center shrink-0">
                            <Zap size={16} className="text-surface" />
                        </div>
                        <span className="font-mono font-bold text-sm text-primary uppercase">{card.label}</span>
                    </div>
                );
            })}
        </div>
    );
};

const TypewriterCard = () => {
    const [text, setText] = useState('');
    const [messageIndex, setMessageIndex] = useState(0);
    const messages = [
        '> INIT: PM_SYSTEM...',
        '> DEPLOY: AI_FULFILLMENT...',
        '> CONFIG: ONBOARDING...',
        '> SYNC: OPS_HUB...'
    ];

    useEffect(() => {
        let currentText = '';
        let charIndex = 0;
        let isTyping = true;
        let timeout;

        const type = () => {
            if (charIndex < messages[messageIndex].length) {
                currentText += messages[messageIndex].charAt(charIndex);
                setText(currentText);
                charIndex++;
                timeout = setTimeout(type, 50 + Math.random() * 30);
            } else {
                timeout = setTimeout(() => {
                    setMessageIndex((prev) => (prev + 1) % messages.length);
                }, 2000);
            }
        };

        timeout = setTimeout(type, 500);

        return () => clearTimeout(timeout);
    }, [messageIndex]);

    return (
        <div className="w-full mt-8 bg-primary border-4 border-accent p-5">
            <div className="flex items-center justify-between mb-4 border-b border-surface/20 pb-2">
                <span className="font-mono text-xs text-accent font-bold tracking-widest uppercase">Telemetry</span>
                <span className="w-3 h-3 bg-accent animate-pulse"></span>
            </div>
            <div className="font-mono text-sm text-surface min-h-[40px] break-all">
                {text}
                <span className="inline-block w-2 h-4 bg-accent ml-1 animate-pulse align-middle"></span>
            </div>
            <div className="mt-6 flex flex-col gap-1">
                <div className="h-1 w-full bg-surface/20"></div>
                <div className="h-1 w-2/3 bg-accent"></div>
            </div>
        </div>
    );
};

const SchedulerCard = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

            tl.set('.cursor', { x: 0, y: 150, opacity: 0, scale: 1 })
                .to('.cursor', { opacity: 1, duration: 0.3 })
                .to('.cursor', { x: 120, y: 30, duration: 1, ease: 'power2.inOut' }) // Move to Wednesday
                .to('.cursor', { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 }) // Click
                .set('.cell-wed', { backgroundColor: '#E63B2E', color: '#F5F3EE', borderColor: '#E63B2E' }, '+=0.1') // Highlight Signal Red
                .to('.cursor', { x: 180, y: 110, duration: 0.8, ease: 'power2.inOut', delay: 0.3 }) // Move to Save
                .to('.cursor', { scale: 0.8, duration: 0.1, yoyo: true, repeat: 1 }) // Click Save
                .to('.btn-save', { backgroundColor: '#E63B2E', color: '#F5F3EE', duration: 0.2 }) // Highlight Save
                .to('.cursor', { opacity: 0, duration: 0.3, delay: 0.5 })
                .set('.cell-wed', { backgroundColor: 'transparent', color: 'inherit', borderColor: '#111111' })
                .set('.btn-save', { backgroundColor: 'transparent', color: 'inherit' });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full mt-8 bg-surface p-4 border-2 border-primary">
            <div className="grid grid-cols-7 gap-1 text-center font-mono text-xs mb-4">
                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                    <div
                        key={i}
                        className={`py-2 border border-primary text-primary font-bold transition-colors ${i === 3 ? 'cell-wed' : ''
                            }`}
                    >
                        {day}
                    </div>
                ))}
            </div>

            <div className="space-y-2 mb-4">
                {['INTAKE', 'SCORING', 'CRM_SYNC'].map((sys, i) => (
                    <div key={i} className="flex items-center justify-between text-xs px-3 py-2 border-b border-primary/20">
                        <span className="text-primary font-mono font-bold">{sys}</span>
                        <ShieldCheck size={14} className="text-primary" />
                    </div>
                ))}
            </div>

            <div className="flex justify-end mt-2">
                <button className="btn-save px-4 py-2 border-2 border-primary text-xs font-mono font-bold text-primary transition-colors hover:bg-primary hover:text-surface">
                    SAVE_CONF
                </button>
            </div>

            <MousePointer2
                size={24}
                className="cursor absolute z-50 text-textMain"
                fill="#E8E4DD"
                style={{ pointerEvents: 'none' }}
            />
        </div>
    );
};

export default function Features() {
    const sectionRef = useRef(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                '.feature-card',
                { y: 50, opacity: 0 },
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
        <section ref={sectionRef} id="services" className="py-32 px-6 sm:px-12 md:px-24 bg-background z-20 relative border-t-4 border-primary">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b-4 border-primary pb-8">
                    <div>
                        <h2 className="font-heading font-black text-4xl sm:text-5xl md:text-6xl text-primary tracking-tighter uppercase leading-none">
                            Interactive
                            <br />
                            <span className="text-accent">Artifacts.</span>
                        </h2>
                    </div>
                    <p className="font-mono font-bold text-sm text-primary max-w-sm border-l-2 border-accent pl-4">
                        SYSTEMS THAT ACT.
                        <br />
                        NOT JUST ADVISE.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <article className="feature-card bg-surface border-4 border-primary p-8 hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <div className="flex justify-between items-start mb-6">
                            <Activity className="text-accent" size={32} />
                            <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-2 py-1">INFRA_01</span>
                        </div>
                        <h3 className="font-heading font-black text-2xl text-primary mb-2 uppercase tracking-tight">AI Lead Gen</h3>
                        <p className="font-sans text-sm text-primary/70 font-bold border-l-2 border-primary/20 pl-3">
                            Autonomous engines that prospect, hyper-personalize, and convert cold traffic.
                        </p>
                        <div className="flex-1 min-h-[220px]">
                            <ShufflerCard />
                        </div>
                    </article>

                    {/* Card 2 */}
                    <article className="feature-card bg-surface border-4 border-primary p-8 hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <div className="flex justify-between items-start mb-6">
                            <Zap className="text-accent" size={32} />
                            <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-2 py-1">INFRA_02</span>
                        </div>
                        <h3 className="font-heading font-black text-2xl text-primary mb-2 uppercase tracking-tight">LLM Agents</h3>
                        <p className="font-sans text-sm text-primary/70 font-bold border-l-2 border-primary/20 pl-3">
                            Zero-touch fulfillment and onboarding pipelines driven by intelligent agents.
                        </p>
                        <div className="flex-1 min-h-[220px] flex items-center">
                            <TypewriterCard />
                        </div>
                    </article>

                    {/* Card 3 */}
                    <article className="feature-card bg-surface border-4 border-primary p-8 hover:-translate-y-2 transition-transform duration-500 flex flex-col h-full shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]">
                        <div className="flex justify-between items-start mb-6">
                            <ShieldCheck className="text-accent" size={32} />
                            <span className="font-mono text-xs font-bold text-primary bg-primary/10 px-2 py-1">INFRA_03</span>
                        </div>
                        <h3 className="font-heading font-black text-2xl text-primary mb-2 uppercase tracking-tight">Sales Automation</h3>
                        <p className="font-sans text-sm text-primary/70 font-bold border-l-2 border-primary/20 pl-3">
                            Automated intake, scoring, and algorithmic CRM nurture for elite conversion.
                        </p>
                        <div className="flex-1 min-h-[220px] flex items-center">
                            <SchedulerCard />
                        </div>
                    </article>
                </div>

                {/* Internal-link equity: descriptive, crawlable links from the homepage
                    into the three service money pages (was footer-only — this concentrates
                    authority on the pages that should rank). Varied anchor text. */}
                <div className="mt-14 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 border-t-4 border-primary pt-8">
                    <span className="font-mono text-xs font-bold text-primary uppercase tracking-widest shrink-0">
                        Explore the systems <span className="text-accent">→</span>
                    </span>
                    <div className="flex flex-wrap gap-x-6 gap-y-3 font-mono text-sm font-bold">
                        <a href="/ai-automation-agency" className="text-primary underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors">
                            AI automation agency
                        </a>
                        <a href="/cold-email-agency" className="text-primary underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors">
                            Cold email infrastructure
                        </a>
                        <a href="/b2b-lead-generation-agency" className="text-primary underline decoration-accent decoration-2 underline-offset-4 hover:text-accent transition-colors">
                            B2B lead generation systems
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
