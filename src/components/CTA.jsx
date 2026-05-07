import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
    return (
        <section className="py-32 px-6 sm:px-12 md:px-24 bg-primary border-t-4 border-accent relative overflow-hidden flex flex-col items-center">
            <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#E8E4DD 1px, transparent 1px), linear-gradient(90deg, #E8E4DD 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="max-w-4xl mx-auto text-center relative z-10 flex flex-col items-center">
                <div className="inline-block bg-accent px-4 py-2 mb-8 font-mono text-sm text-textInverted font-bold tracking-widest uppercase">
                    NEXT_STEP
                </div>

                <h2 className="font-heading font-black text-5xl sm:text-7xl md:text-8xl text-textInverted tracking-tighter uppercase leading-none mb-8">
                    Ready to scale <br />
                    <span className="text-accent underline decoration-4 sm:decoration-[8px] underline-offset-4 sm:underline-offset-8">with precision?</span>
                </h2>

                <p className="font-mono text-sm sm:text-base text-textInverted/80 mb-12 max-w-2xl mx-auto uppercase bg-textInverted/10 p-4 border-l-4 border-accent">
                    Stop operating with broken infrastructure. We build custom logic engines that run your operations while you sleep.
                </p>

                <a
                    href="https://cal.com/vasu-gupta-wv3e0q/discovery-call-quickomate"
                    target="_blank"
                    rel="noreferrer"
                    className="group relative inline-flex h-16 items-center justify-center bg-accent px-10 font-mono font-bold text-lg tracking-widest uppercase text-textInverted border-4 border-textInverted hover:bg-textInverted hover:text-primary transition-all duration-300 shadow-[8px_8px_0px_0px_rgba(232,228,221,1)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px]"
                >
                    <span className="relative z-10 flex items-center gap-3">
                        LET'S TALK
                        <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                    </span>
                </a>
            </div>
        </section>
    );
}
