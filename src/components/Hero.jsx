import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const sectionRef = useRef(null);

    const buildUrl = (id, w) => `https://images.unsplash.com/${id}?q=70&w=${w}&auto=format&fit=crop`;
    const backgrounds = [
        { id: 1, name: 'Concrete Matrix', photo: 'photo-1498084393753-b411b2d26b34' },
        { id: 2, name: 'Server Rack Grid', photo: 'photo-1558494949-ef010cbdcc31' },
        { id: 3, name: 'Fiber Optics', photo: 'photo-1620712943543-bcc4688e7485' },
        { id: 4, name: 'Hardware Circuit', photo: 'photo-1518770660439-4636190af475' }
    ].map((b) => ({
        ...b,
        url: buildUrl(b.photo, 1600),
        srcSet: `${buildUrl(b.photo, 640)} 640w, ${buildUrl(b.photo, 1024)} 1024w, ${buildUrl(b.photo, 1600)} 1600w, ${buildUrl(b.photo, 2200)} 2200w`
    }));

    const [bgIndex, setBgIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setBgIndex((prev) => (prev + 1) % backgrounds.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                '.hero-el',
                { y: 60, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 1.4,
                    stagger: 0.1,
                    ease: 'power3.out',
                    delay: 0.2,
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative w-full h-[100dvh] flex flex-col justify-end pb-24 px-6 sm:px-12 md:px-24 overflow-hidden bg-primary"
        >
            <div className="absolute inset-0 z-0 bg-primary">
                {backgrounds.map((bg, index) => (
                    <img
                        key={bg.id}
                        src={bg.url}
                        srcSet={bg.srcSet}
                        sizes="100vw"
                        alt=""
                        aria-hidden="true"
                        loading={index === 0 ? 'eager' : 'lazy'}
                        fetchpriority={index === 0 ? 'high' : 'low'}
                        decoding="async"
                        width="1600"
                        height="900"
                        className={`absolute inset-0 w-full h-full object-cover origin-center scale-105 filter grayscale invert transition-opacity duration-1000 ${index === bgIndex ? 'opacity-100' : 'opacity-0'
                            }`}
                    />
                ))}
                <div className="absolute inset-0 bg-primary mix-blend-color"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-primary/40"></div>
            </div>

            <div className="relative z-10 max-w-6xl flex flex-col items-start gap-6">
                <div className="hero-el flex items-center gap-3 border border-textInverted/20 px-3 py-1 bg-primary/50 backdrop-blur-sm shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]">
                    <span className="w-3 h-3 bg-accent animate-pulse rounded-none"></span>
                    <span className="font-mono text-xs tracking-wider uppercase text-textInverted font-bold">
                        SYS.ONLINE // QUICKOMATE
                    </span>
                </div>

                <h1 className="flex flex-col gap-0 sm:gap-2 tracking-tighter max-w-5xl relative z-20">
                    <span className="hero-el font-heading font-black text-[2.25rem] sm:text-5xl md:text-[4.5rem] leading-[0.9] text-textInverted uppercase">
                        The definitive
                    </span>
                    <span className="hero-el font-drama italic text-[2.75rem] sm:text-7xl md:text-[6.5rem] leading-[0.85] text-accent lowercase -ml-1 tracking-normal py-2 underline decoration-4 underline-offset-[10px] sm:underline-offset-[16px]">
                        ai growth partner
                    </span>
                    <span className="hero-el font-heading font-black text-[2rem] sm:text-5xl md:text-[4.5rem] leading-[0.9] text-textInverted uppercase">
                        for fast-moving B2B companies.
                    </span>
                </h1>

                <div className="hero-el mt-8">
                    <a
                        href="https://cal.com/vasu-gupta-wv3e0q/discovery-call-quickomate"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative inline-flex h-16 items-center justify-center bg-accent px-10 font-mono font-bold text-sm tracking-widest uppercase text-background magnetic-btn border-4 border-accent hover:bg-transparent hover:text-accent transition-colors shadow-[8px_8px_0px_0px_rgba(232,228,221,1)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px]"
                    >
                        <span className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-12deg)_translateX(-150%)] group-hover:duration-1000 group-hover:[transform:skew(-12deg)_translateX(150%)]">
                            <div className="relative h-full w-8 bg-white/30" />
                        </span>
                        <span className="relative z-10">Let's Talk</span>
                    </a>
                </div>
            </div>

            <div className="absolute bottom-6 right-6 sm:bottom-12 sm:right-12 z-50 flex flex-col items-end gap-3 hero-el">
                <span className="font-mono text-[10px] text-textInverted/40 tracking-widest uppercase font-bold bg-primary px-2">
                    BG_OVERRIDE [{bgIndex + 1}/{backgrounds.length}]
                </span>
                <div className="flex gap-2">
                    {backgrounds.map((bg, idx) => (
                        <button
                            key={bg.id}
                            onClick={() => setBgIndex(idx)}
                            title={bg.name}
                            aria-label={`Switch background to ${bg.name}`}
                            aria-pressed={idx === bgIndex}
                            className={`w-12 h-3 transition-all duration-500 cursor-pointer hover:scale-110 ${idx === bgIndex ? 'bg-accent shadow-[2px_2px_0px_0px_rgba(232,228,221,1)]' : 'bg-surface/20 hover:bg-surface/50'
                                }`}
                        />
                    ))}
                </div>
                <div className="w-full h-[2px] bg-textInverted/10 overflow-hidden">
                    <div
                        key={bgIndex}
                        className="h-full bg-accent"
                        style={{ animation: 'fillBar 3s linear forwards' }}
                    />
                </div>
                <style>{`
          @keyframes fillBar {
            0% { width: 0%; }
            100% { width: 100%; }
          }
        `}</style>
            </div>
        </section>
    );
}
