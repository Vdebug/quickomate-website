import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const RotatingGearSVG = () => (
    <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow opacity-90" style={{ animationDuration: '20s' }}>
        <circle cx="50" cy="50" r="30" fill="none" stroke="#111111" strokeWidth="2" strokeDasharray="6 6" />
        <circle cx="50" cy="50" r="40" fill="none" stroke="#E63B2E" strokeWidth="1" />
        <g transform="origin-center">
            {[...Array(8)].map((_, i) => (
                <line key={i} x1="50" y1="5" x2="50" y2="15" stroke="#111111" strokeWidth="4" transform={`rotate(${i * 45} 50 50)`} />
            ))}
        </g>
        <circle cx="50" cy="50" r="10" fill="#E63B2E" />
        <circle cx="50" cy="50" r="2" fill="#E8E4DD" />
    </svg>
);

const LaserGridSVG = () => {
    return (
        <div className="relative w-full h-full overflow-hidden bg-background border-4 border-primary">
            {/* Grid */}
            <div
                className="absolute inset-0 opacity-40"
                style={{
                    backgroundImage: 'radial-gradient(#111111 2px, transparent 2px)',
                    backgroundSize: '20px 20px'
                }}
            />
            {/* Laser Line */}
            <div className="absolute top-0 bottom-0 w-2 bg-accent shadow-[0_0_20px_rgba(230,59,46,1)] animate-pulse"
                style={{ animation: 'scan 2s ease-in-out infinite alternate' }} />
            <style>{`
        @keyframes scan {
          0% { left: 5%; }
          100% { left: 95%; }
        }
      `}</style>
        </div>
    );
};

const PulsingEKGSVG = () => (
    <svg viewBox="0 0 200 100" className="w-full h-full bg-primary border-4 border-primary p-2">
        <path
            d="M 0 50 L 40 50 L 50 10 L 60 90 L 70 50 L 110 50 L 120 20 L 130 80 L 140 50 L 200 50"
            fill="none"
            stroke="#E63B2E"
            strokeWidth="4"
            className="eka-path"
            strokeLinecap="square"
            strokeLinejoin="miter"
        />
        <circle cx="100" cy="50" r="40" fill="#E63B2E" opacity="0.2" className="animate-ping" style={{ animationDuration: '2s' }} />
        <style>{`
      .eka-path {
        stroke-dasharray: 400;
        stroke-dashoffset: 400;
        animation: drawEkg 2s linear infinite;
      }
      @keyframes drawEkg {
        0% { stroke-dashoffset: 400; }
        50% { stroke-dashoffset: 0; }
        100% { stroke-dashoffset: -400; }
      }
    `}</style>
    </svg>
);

export default function Protocol() {
    const containerRef = useRef(null);
    const cardRefs = useRef([]);
    cardRefs.current = [];

    const addToRefs = (el) => {
        if (el && !cardRefs.current.includes(el)) {
            cardRefs.current.push(el);
        }
    };

    useEffect(() => {
        let ctx = gsap.context(() => {
            // Create stacking logic for cards
            const cards = gsap.utils.toArray('.protocol-card');

            cards.forEach((card, i) => {
                if (i === cards.length - 1) return; // Last card doesn't get covered

                ScrollTrigger.create({
                    trigger: card,
                    start: 'top top',
                    pin: true,
                    pinSpacing: false,
                    endTrigger: '.protocol-wrapper',
                    end: 'bottom bottom',
                });

                gsap.to(card, {
                    scale: 0.95,
                    opacity: 0.5,
                    filter: 'grayscale(100%) blur(4px)',
                    scrollTrigger: {
                        trigger: cards[i + 1],
                        start: 'top bottom',
                        end: 'top top',
                        scrub: true,
                    }
                });
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    const steps = [
        {
            num: '01',
            title: 'MAP & DIAGNOSE',
            desc: 'We analyze current operations, bottleneck constraints, and data infrastructure to locate high-leverage targets.',
            visual: <RotatingGearSVG />
        },
        {
            num: '02',
            title: 'ENGINEER & AUTOMATE',
            desc: 'Building bespoke AI agents and autonomous pipelines integrated directly into your existing stack.',
            visual: <LaserGridSVG />
        },
        {
            num: '03',
            title: 'MONITOR & SCALE',
            desc: 'Continuous telemetry ensures uptime and iterative self-learning logic that scales with revenue velocity.',
            visual: <PulsingEKGSVG />
        }
    ];

    return (
        <section id="protocol" ref={containerRef} className="protocol-wrapper relative w-full bg-background pt-32">
            <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24 mb-16 relative z-10">
                <h2 className="font-heading font-black text-6xl sm:text-8xl text-primary tracking-tighter uppercase mb-2 leading-none">Protocol</h2>
                <p className="font-mono text-primary text-sm tracking-widest uppercase font-bold bg-accent text-background inline-block px-3 py-1">SYS_INTEGRATION_PATH</p>
            </div>

            <div className="relative w-full">
                {steps.map((step, idx) => (
                    <div
                        key={idx}
                        className="protocol-card w-full min-h-[100vh] flex items-center justify-center p-6 sm:p-12 md:p-24 bg-background origin-top"
                    >
                        <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">

                            {/* Content Panel */}
                            <div className="flex flex-col gap-6 p-8 md:p-16 rounded-none bg-surface border-4 border-primary shadow-[12px_12px_0px_0px_rgba(17,17,17,1)] relative overflow-hidden">
                                <div className="absolute top-0 right-0 p-4 font-mono text-9xl text-primary/10 font-black leading-none pointer-events-none select-none">
                                    {step.num}
                                </div>
                                <h3 className="font-heading font-black text-4xl md:text-5xl text-primary tracking-tighter uppercase relative z-10">{step.title}</h3>
                                <p className="font-mono text-sm sm:text-base text-primary font-bold bg-primary/5 p-4 border-l-4 border-accent relative z-10 leading-relaxed uppercase">{step.desc}</p>
                            </div>

                            {/* Visual Panel */}
                            <div className="aspect-square relative flex items-center justify-center p-8 bg-surface rounded-none border-4 border-primary shadow-[12px_12px_0px_0px_rgba(17,17,17,1)]">
                                <div className="w-3/4 h-3/4 flex items-center justify-center relative z-10">
                                    {step.visual}
                                </div>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
