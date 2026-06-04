import React, { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';
import { clarityEvent } from '../analytics.js';

/**
 * Reusable brutalist email-capture form for lead magnets.
 * Posts to /api/subscribe with { email, magnet, meta }.
 *
 * Props:
 *  - magnet:        slug identifying the lead magnet (required)
 *  - buttonLabel:   CTA text (default "Send it to me")
 *  - placeholder:   input placeholder
 *  - note:          small print under the form
 *  - getMeta:       () => object — extra payload captured at submit time (e.g. calculator inputs)
 *  - onSuccess:     (data) => void
 *  - successTitle / successBody: confirmation copy
 *  - variant:       'block' (default, stacked card) | 'bare' (no card chrome, for embedding)
 */
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function EmailCapture({
    magnet,
    buttonLabel = 'Send it to me',
    placeholder = 'you@company.com',
    note = 'No spam. Unsubscribe anytime. We never share your email.',
    getMeta,
    onSuccess,
    successTitle = "You're in. Check your inbox.",
    successBody = "It's on the way — give it a minute or two, and check spam/Promotions just in case.",
    variant = 'block',
}) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle'); // idle | submitting | success | error
    const [error, setError] = useState('');
    const [delivered, setDelivered] = useState(true);

    async function handleSubmit(e) {
        e.preventDefault();
        if (status === 'submitting') return;
        const trimmed = email.trim();
        if (!EMAIL_RE.test(trimmed)) {
            setError('Enter a valid work email.');
            setStatus('error');
            return;
        }
        setStatus('submitting');
        setError('');
        try {
            const meta = typeof getMeta === 'function' ? getMeta() : undefined;
            const res = await fetch('/api/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email: trimmed, magnet, meta }),
            });
            const data = await res.json().catch(() => ({}));
            if (!res.ok || data.ok === false) {
                throw new Error(data.error || 'Something went wrong. Try again.');
            }
            setStatus('success');
            setDelivered(data.delivered !== false);
            clarityEvent('lead_magnet_submit');
            if (typeof onSuccess === 'function') onSuccess(data);
        } catch (err) {
            setError(err.message || 'Something went wrong. Try again.');
            setStatus('error');
        }
    }

    if (status === 'success') {
        const title = delivered ? successTitle : "You're on the list.";
        const body = delivered ? successBody : "Thanks — you're confirmed. We'll send this straight over shortly.";
        return (
            <div
                className={
                    variant === 'block'
                        ? 'bg-primary border-4 border-accent p-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]'
                        : 'bg-primary border-4 border-accent p-6'
                }
                role="status"
                aria-live="polite"
            >
                <div className="flex items-start gap-4">
                    <span className="flex-none w-10 h-10 bg-accent flex items-center justify-center">
                        <Check size={22} className="text-textInverted" strokeWidth={3} />
                    </span>
                    <div>
                        <p className="font-heading font-black text-xl text-textInverted uppercase tracking-tight leading-tight mb-1">
                            {title}
                        </p>
                        <p className="font-mono text-xs text-textInverted/70 leading-relaxed">{body}</p>
                    </div>
                </div>
            </div>
        );
    }

    const card =
        variant === 'block'
            ? 'bg-primary border-4 border-primary p-8 shadow-[8px_8px_0px_0px_rgba(230,59,46,1)]'
            : '';

    return (
        <div className={card}>
            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
                <div className="flex flex-col sm:flex-row gap-3">
                    <label htmlFor={`ec-${magnet}`} className="sr-only">
                        Work email
                    </label>
                    <input
                        id={`ec-${magnet}`}
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        required
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                            if (status === 'error') setStatus('idle');
                        }}
                        placeholder={placeholder}
                        aria-invalid={status === 'error'}
                        className="flex-1 h-14 bg-background border-4 border-accent px-4 font-mono text-sm text-primary placeholder:text-primary/40 focus:outline-none focus:bg-surface"
                    />
                    <button
                        type="submit"
                        disabled={status === 'submitting'}
                        className="group h-14 inline-flex items-center justify-center gap-2 bg-accent px-6 font-mono font-bold text-sm tracking-widest uppercase text-textInverted border-4 border-accent hover:bg-textInverted hover:text-primary transition-colors disabled:opacity-70 disabled:cursor-not-allowed whitespace-nowrap"
                    >
                        {status === 'submitting' ? (
                            <>
                                <Loader2 size={18} className="animate-spin" /> Sending
                            </>
                        ) : (
                            <>
                                {buttonLabel}
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </>
                        )}
                    </button>
                </div>
                {status === 'error' && (
                    <p className="font-mono text-xs font-bold text-accent" role="alert">
                        {error}
                    </p>
                )}
                {note && <p className="font-mono text-[10px] text-textInverted/50 uppercase tracking-wider">{note}</p>}
            </form>
        </div>
    );
}
