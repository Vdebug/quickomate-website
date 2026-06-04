import React, { useMemo, useState } from 'react';
import { Calculator, Clock, DollarSign, TrendingUp, Users } from 'lucide-react';
import BookCallCTA from './BookCallCTA';

/**
 * Interactive Sales Automation ROI Calculator — the flagship lead magnet.
 * Lives inside /blog/sales-automation-roi-calculator (preserves the ranking URL).
 * Computes time / dollar / net ROI on-page (free); the conversion is a Book-a-call CTA.
 */

const usd = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const num = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

function Field({ label, hint, value, onChange, min, max, step = 1, prefix, suffix }) {
    return (
        <div className="bg-background border-4 border-primary p-5">
            <div className="flex items-baseline justify-between gap-3 mb-3">
                <label className="font-mono text-xs font-bold text-primary uppercase tracking-wider leading-tight">{label}</label>
                <div className="flex items-center gap-1 font-heading font-black text-primary text-xl whitespace-nowrap">
                    {prefix && <span className="text-accent">{prefix}</span>}
                    <input
                        type="number"
                        value={value}
                        min={min}
                        max={max}
                        step={step}
                        onChange={(e) => onChange(clamp(Number(e.target.value), min, max))}
                        aria-label={label}
                        className="w-20 bg-transparent text-right focus:outline-none focus:text-accent [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                    />
                    {suffix && <span className="text-primary/50 text-sm font-mono">{suffix}</span>}
                </div>
            </div>
            <input
                type="range"
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={(e) => onChange(Number(e.target.value))}
                aria-label={`${label} slider`}
                className="w-full accent-accent cursor-pointer"
            />
            {hint && <p className="font-mono text-[10px] text-primary/50 mt-2 leading-snug">{hint}</p>}
        </div>
    );
}

function clamp(n, min, max) {
    if (Number.isNaN(n)) return min;
    return Math.min(max, Math.max(min, n));
}

function Stat({ icon: Icon, label, value, sub, highlight }) {
    return (
        <div className={`border-4 p-5 ${highlight ? 'bg-accent border-accent' : 'bg-surface border-primary'}`}>
            <div className="flex items-center gap-2 mb-2">
                <Icon size={16} className={highlight ? 'text-textInverted' : 'text-accent'} />
                <span className={`font-mono text-[10px] font-bold uppercase tracking-widest ${highlight ? 'text-textInverted/80' : 'text-primary/60'}`}>
                    {label}
                </span>
            </div>
            <div className={`font-heading font-black text-3xl sm:text-4xl tracking-tighter leading-none ${highlight ? 'text-textInverted' : 'text-primary'}`}>
                {value}
            </div>
            {sub && <p className={`font-mono text-[10px] mt-2 ${highlight ? 'text-textInverted/80' : 'text-primary/50'}`}>{sub}</p>}
        </div>
    );
}

export default function SalesAutomationCalculator() {
    const [reps, setReps] = useState(3);
    const [hoursPerWeek, setHoursPerWeek] = useState(8);
    const [hourlyCost, setHourlyCost] = useState(45);
    const [automatablePct, setAutomatablePct] = useState(65);
    const [monthlyCost, setMonthlyCost] = useState(1500);

    const r = useMemo(() => {
        const weeklyHoursSaved = reps * hoursPerWeek * (automatablePct / 100);
        const annualHours = weeklyHoursSaved * 52;
        const annualValue = annualHours * hourlyCost;
        const annualCost = monthlyCost * 12;
        const net = annualValue - annualCost;
        const roi = annualCost > 0 ? (net / annualCost) * 100 : null;
        const paybackMonths = annualValue > 0 ? annualCost / (annualValue / 12) : null;
        const fte = annualHours / 2080;

        let verdict, tone;
        if (annualCost === 0) {
            verdict = 'Add your monthly automation cost above to see net ROI and payback.';
            tone = 'neutral';
        } else if (net <= 0) {
            verdict = 'Genuinely close — or negative. Scope tighter and automate the single highest-volume task first instead of buying the everything-platform.';
            tone = 'bad';
        } else if (roi < 100) {
            verdict = 'Positive but modest. Worth it only if the freed hours actually get redeployed into revenue work — not absorbed into longer breaks.';
            tone = 'mid';
        } else if (roi <= 300) {
            verdict = 'Strong. This pays for itself comfortably. The main risk now is execution, not the business case.';
            tone = 'good';
        } else {
            verdict = 'Obvious win. The math says automate — the only mistake here would be waiting another quarter to start.';
            tone = 'good';
        }
        return { weeklyHoursSaved, annualHours, annualValue, annualCost, net, roi, paybackMonths, fte, verdict, tone };
    }, [reps, hoursPerWeek, hourlyCost, automatablePct, monthlyCost]);

    const toneClass = {
        good: 'border-l-accent bg-accent/10 text-primary',
        mid: 'border-l-accent bg-surface text-primary',
        bad: 'border-l-primary bg-surface text-primary',
        neutral: 'border-l-primary/40 bg-surface text-primary/70',
    }[r.tone];

    return (
        <section
            id="roi-calculator"
            aria-label="Sales Automation ROI Calculator"
            className="bg-surface border-4 border-primary p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] scroll-mt-28"
        >
            <div className="flex items-center gap-3 mb-2">
                <span className="flex-none w-10 h-10 bg-accent flex items-center justify-center">
                    <Calculator size={22} className="text-textInverted" />
                </span>
                <span className="font-mono text-xs font-black text-accent uppercase tracking-widest">Interactive Tool</span>
            </div>
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-primary uppercase tracking-tight leading-none mb-2">
                Sales Automation ROI Calculator
            </h2>
            <p className="font-sans text-sm text-primary/70 mb-8 max-w-2xl">
                Run your own numbers before you spend a dollar. Adjust the inputs — the math updates live.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
                <Field label="People doing the manual work" value={reps} onChange={setReps} min={1} max={50} suffix="ppl"
                    hint="Reps, SDRs, ops — anyone losing hours to manual admin." />
                <Field label="Hours/week each loses to automatable admin" value={hoursPerWeek} onChange={setHoursPerWeek} min={1} max={40} suffix="hrs"
                    hint="Data entry, list building, follow-ups, CRM updates." />
                <Field label="Loaded hourly cost" value={hourlyCost} onChange={setHourlyCost} min={15} max={200} prefix="$" suffix="/hr"
                    hint="Salary + overhead ÷ ~2,080 hrs. $45/hr ≈ $94k loaded." />
                <Field label="Share of that work that's automatable" value={automatablePct} onChange={setAutomatablePct} min={10} max={95} suffix="%"
                    hint="Be honest — 60–70% is realistic for most admin." />
                <Field label="Your monthly automation cost" value={monthlyCost} onChange={setMonthlyCost} min={0} max={10000} step={50} prefix="$" suffix="/mo"
                    hint="Tools + build/retainer. Set 0 to see gross value only." />
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                <Stat icon={Clock} label="Hours saved / year" value={num.format(Math.round(r.annualHours))}
                    sub={`${num.format(Math.round(r.weeklyHoursSaved))} hrs/week · ${r.fte.toFixed(1)} FTE freed`} />
                <Stat icon={DollarSign} label="Value of time / year" value={usd.format(r.annualValue)}
                    sub="Recovered capacity at your loaded cost" />
                <Stat icon={TrendingUp} label="Net savings / year" value={usd.format(r.net)}
                    sub={r.annualCost > 0 ? `After ${usd.format(r.annualCost)} automation cost` : 'No automation cost entered'} />
                <Stat icon={Users} label={r.roi != null ? 'First-year ROI' : 'Payback'}
                    value={r.roi != null ? `${num.format(Math.round(r.roi))}%` : '—'}
                    sub={r.paybackMonths != null && r.paybackMonths > 0 ? `Payback in ~${r.paybackMonths.toFixed(1)} months` : 'Enter a cost above'}
                    highlight />
            </div>

            <div className={`border-l-4 p-5 mb-8 ${toneClass}`}>
                <span className="font-mono text-[10px] font-black uppercase tracking-widest text-accent block mb-1">The verdict</span>
                <p className="font-sans text-sm font-bold leading-snug">{r.verdict}</p>
            </div>

            <BookCallCTA
                title="Want us to build this for you?"
                subtext="That's your projected return. If you'd like a second set of eyes on the numbers — and a straight read on exactly what to automate first — grab a free 20-minute call."
            />
        </section>
    );
}
