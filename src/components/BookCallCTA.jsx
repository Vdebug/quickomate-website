import React from 'react';
import { ArrowRight, CalendarCheck } from 'lucide-react';
import { clarityEvent } from '../analytics.js';

/**
 * Booking CTA — the single conversion action across the free tools/content.
 * Replaces email capture: visitors get the value free, and the call is the ask
 * (email is collected at booking). Fires a Clarity event so the funnel is
 * measurable in heatmaps/recordings.
 */
const BOOK_URL = 'https://cal.com/vasu-gupta-wv3e0q/discovery-call-quickomate';

export default function BookCallCTA({
    title = 'Want us to build this for you?',
    subtext,
    buttonLabel = 'Book a free call',
}) {
    return (
        <div className="bg-primary border-4 border-primary p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]">
            <div className="flex items-center gap-3 mb-2">
                <span className="flex-none w-9 h-9 bg-accent flex items-center justify-center">
                    <CalendarCheck size={20} className="text-textInverted" />
                </span>
                <span className="font-mono text-[10px] font-black text-accent uppercase tracking-widest">No pitch · 20 min</span>
            </div>
            <h3 className="font-heading font-black text-xl sm:text-2xl text-textInverted uppercase tracking-tight leading-none mb-2">
                {title}
            </h3>
            {subtext && <p className="font-sans text-sm text-textInverted/70 mb-5 max-w-2xl">{subtext}</p>}
            <a
                href={BOOK_URL}
                target="_blank"
                rel="noreferrer"
                onClick={() => clarityEvent('book_call_click')}
                className="group inline-flex h-14 items-center justify-center gap-2 bg-accent px-7 font-mono font-bold text-sm tracking-widest uppercase text-textInverted border-4 border-accent hover:bg-textInverted hover:text-primary transition-colors"
            >
                {buttonLabel}
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
        </div>
    );
}
