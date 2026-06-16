import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CalendarCheck, ArrowRight } from 'lucide-react';
import { gaEvent, clarityEvent } from '../analytics.js';

/**
 * Booking confirmation / thank-you page.
 *
 * This is the redirect target for cal.com's "redirect on booking" setting:
 *   cal.com event type → Advanced → Redirect on booking →
 *   https://quickomate.com/booking-confirmed
 *
 * It fires a GA4 `book_call_confirmed` event + a Clarity event ON MOUNT, so a
 * *completed* appointment is measurable — not just the upstream click. Mark
 * `book_call_confirmed` as a Key Event (conversion) in GA4 to attribute real
 * bookings back to the source/medium/page that produced them. The page is
 * noindex so it never shows up in search.
 */
export default function BookingConfirmed() {
    useEffect(() => {
        gaEvent('book_call_confirmed', {
            event_category: 'booking',
            event_label: 'cal.com',
            value: 1,
        });
        clarityEvent('book_call_confirmed');
    }, []);

    return (
        <div className="min-h-screen bg-background text-textMain flex items-center justify-center px-6 py-32">
            <div className="max-w-xl w-full bg-primary border-4 border-primary p-8 sm:p-12 shadow-[10px_10px_0px_0px_rgba(230,59,46,1)]">
                <span className="flex-none w-14 h-14 bg-accent flex items-center justify-center mb-6">
                    <CalendarCheck size={30} className="text-textInverted" />
                </span>
                <p className="font-mono text-[11px] font-black text-accent uppercase tracking-widest mb-3">
                    Booking confirmed
                </p>
                <h1 className="font-heading font-black text-3xl sm:text-4xl text-textInverted uppercase tracking-tight leading-none mb-5">
                    You're on the calendar.
                </h1>
                <p className="font-sans text-base text-textInverted/75 mb-8 leading-relaxed">
                    Check your inbox for the calendar invite and call link. Before we talk, jot
                    down the one workflow eating the most of your team's time — that's usually the
                    fastest thing to automate. No pitch, just a working session.
                </p>
                <Link
                    to="/blog"
                    className="group inline-flex h-14 items-center justify-center gap-2 bg-accent px-7 font-mono font-bold text-sm tracking-widest uppercase text-textInverted border-4 border-accent hover:bg-textInverted hover:text-primary transition-colors"
                >
                    Read the playbooks while you wait
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    );
}
