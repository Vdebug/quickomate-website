import React from 'react';
import { Mail } from 'lucide-react';
import BookCallCTA from './BookCallCTA';

/**
 * B2B Cold Email Swipe File — lead magnet 04.
 * On-page teaser (real subject lines + one template) for immediate value + SEO,
 * gating the full pack behind email. Embedded into
 * /blog/cold-email-subject-lines-that-get-b2b-replies.
 */

const TEASERS = [
    { tag: 'Curiosity', line: '{{firstName}}, quick one about {{company}}' },
    { tag: 'Observation', line: 'noticed {{company}} is hiring SDRs' },
    { tag: 'Outcome', line: '15–20 meetings/mo for {{company}}?' },
    { tag: 'Pattern-interrupt', line: 'bad idea?' },
    { tag: 'Referral-style', line: 'who owns outbound at {{company}}?' },
];

export default function SwipeFilePreview() {
    return (
        <section id="swipe-file" aria-label="B2B Cold Email Swipe File"
            className="bg-surface border-4 border-primary p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] scroll-mt-28">
            <div className="flex items-center gap-3 mb-2">
                <span className="flex-none w-10 h-10 bg-accent flex items-center justify-center">
                    <Mail size={22} className="text-textInverted" />
                </span>
                <span className="font-mono text-xs font-black text-accent uppercase tracking-widest">Free Swipe File</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-primary uppercase tracking-tight leading-none mb-2">
                The B2B Cold Email Swipe File
            </h2>
            <p className="font-sans text-sm text-primary/70 mb-6 max-w-2xl">
                Steal the subject lines and templates that actually get replies in 2026. Here’s a taste — the full pack has 30+ subject lines across 6 archetypes and 5 complete sequences.
            </p>

            <div className="flex flex-col gap-2 mb-6">
                {TEASERS.map((t) => (
                    <div key={t.line} className="flex items-center gap-3 bg-background border-4 border-primary px-4 py-3">
                        <span className="font-mono text-[10px] font-black text-accent uppercase tracking-wider w-32 flex-none">{t.tag}</span>
                        <span className="font-mono text-sm text-primary">{t.line}</span>
                    </div>
                ))}
                <div className="flex items-center gap-3 bg-background/60 border-4 border-dashed border-primary/40 px-4 py-3">
                    <span className="font-mono text-sm text-primary/40">+ 25 more in the full playbook — we walk clients through the rest on a call.</span>
                </div>
            </div>

            <BookCallCTA
                title="Want the whole outbound system, not just the lines?"
                subtext="These open the door — the replies come from the full system behind them. Book a free 20-minute call and we'll show you how it'd work in your market."
            />
        </section>
    );
}
