import React, { useMemo, useState } from 'react';
import { ListChecks, Check } from 'lucide-react';
import EmailCapture from './EmailCapture';

/**
 * Cold Email Infrastructure Checklist — lead magnet 02.
 * Interactive pre-flight checklist (check items -> readiness %) that gates the
 * full printable version + copy-paste DNS records. Embedded into
 * /blog/cold-email-infrastructure-how-many-domains-inboxes.
 */

const SECTIONS = [
    {
        title: 'Domains & DNS',
        items: [
            'Dedicated sending domains bought (never your main domain)',
            'SPF record published for each sending domain',
            'DKIM keys generated and published',
            'DMARC record live (start at p=none, monitor, then tighten)',
            'Custom tracking domain set up (or open-tracking off)',
        ],
    },
    {
        title: 'Inboxes & warm-up',
        items: [
            'Max 3 mailboxes per domain',
            'Every mailbox warmed 2–3 weeks before real sends',
            'Daily cap of 30–40 cold sends per mailbox',
            'Auto-warmup running continuously in the background',
        ],
    },
    {
        title: 'Data & list hygiene',
        items: [
            'Every address verified (waterfall) — bounce rate under 3%',
            'Catch-all / risky addresses removed or segmented',
            'List matched tightly to your ICP (no spray-and-pray)',
        ],
    },
    {
        title: 'Sending & compliance',
        items: [
            'Plain-text style — minimal links/images (stay out of Promotions)',
            'Clear one-line opt-out in every email',
            'List-Unsubscribe header considered for higher volume',
            'Feb-2024 bulk-sender rules, CAN-SPAM & GDPR handled',
            'Volume ramped gradually, not switched on at full blast',
        ],
    },
];

const ALL = SECTIONS.flatMap((s) => s.items);

export default function ColdEmailInfraChecklist() {
    const [checked, setChecked] = useState(() => new Set());

    const pct = useMemo(() => Math.round((checked.size / ALL.length) * 100), [checked]);

    function toggle(item) {
        setChecked((prev) => {
            const next = new Set(prev);
            next.has(item) ? next.delete(item) : next.add(item);
            return next;
        });
    }

    const verdict =
        pct === 100 ? 'Locked in. Your infrastructure is ready to send.'
        : pct >= 70 ? 'Close — clear the rest before you scale volume.'
        : pct >= 40 ? 'Half-built. Sending now risks your domain reputation.'
        : 'Don’t send yet. The gaps here are exactly what burns domains.';

    return (
        <section id="infra-checklist" aria-label="Cold Email Infrastructure Checklist"
            className="bg-surface border-4 border-primary p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] scroll-mt-28">
            <div className="flex items-center gap-3 mb-2">
                <span className="flex-none w-10 h-10 bg-accent flex items-center justify-center">
                    <ListChecks size={22} className="text-textInverted" />
                </span>
                <span className="font-mono text-xs font-black text-accent uppercase tracking-widest">Interactive Checklist</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-primary uppercase tracking-tight leading-none mb-2">
                Cold Email Infrastructure Checklist
            </h2>
            <p className="font-sans text-sm text-primary/70 mb-5 max-w-2xl">
                Tick what you’ve done. The gaps are exactly what lands you in spam or burns a sending domain.
            </p>

            <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-3 bg-background border-2 border-primary">
                    <div className="h-full bg-accent transition-all" style={{ width: `${pct}%` }} />
                </div>
                <span className="font-heading font-black text-xl text-primary whitespace-nowrap">{pct}% ready</span>
            </div>

            <div className="flex flex-col gap-6 mb-6">
                {SECTIONS.map((sec) => (
                    <div key={sec.title}>
                        <h3 className="font-mono text-xs font-black text-primary uppercase tracking-widest border-l-4 border-accent pl-3 mb-3">{sec.title}</h3>
                        <div className="flex flex-col gap-2">
                            {sec.items.map((item) => {
                                const on = checked.has(item);
                                return (
                                    <button key={item} onClick={() => toggle(item)} aria-pressed={on}
                                        className="flex items-start gap-3 text-left group">
                                        <span className={`flex-none w-6 h-6 mt-0.5 border-2 border-primary flex items-center justify-center transition-colors ${on ? 'bg-accent border-accent' : 'bg-background group-hover:bg-surface'}`}>
                                            {on && <Check size={15} className="text-textInverted" strokeWidth={3} />}
                                        </span>
                                        <span className={`font-sans text-sm leading-snug ${on ? 'text-primary/40 line-through' : 'text-primary/85'}`}>{item}</span>
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>

            <div className={`border-l-4 border-l-accent bg-background p-4 mb-8`}>
                <span className="font-mono text-[10px] font-black uppercase tracking-widest text-accent block mb-1">Status</span>
                <p className="font-sans text-sm font-bold text-primary">{verdict}</p>
            </div>

            <div className="bg-primary border-4 border-primary p-6 sm:p-8">
                <h3 className="font-heading font-black text-xl sm:text-2xl text-textInverted uppercase tracking-tight leading-none mb-2">
                    Get the printable version
                </h3>
                <p className="font-sans text-sm text-textInverted/70 mb-5 max-w-2xl">
                    We’ll email the full checklist as a printable one-pager — plus the exact SPF/DKIM/DMARC records to copy and the warm-up schedule.
                </p>
                <EmailCapture
                    magnet="cold-email-infrastructure-checklist"
                    buttonLabel="Email me the checklist"
                    variant="bare"
                    successTitle="On its way."
                    successBody="The printable checklist + DNS records are heading to your inbox. Check Promotions/spam if it’s not there shortly."
                    getMeta={() => ({ completed: checked.size, total: ALL.length, readinessPct: pct })}
                />
            </div>
        </section>
    );
}
