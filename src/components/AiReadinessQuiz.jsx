import React, { useMemo, useState } from 'react';
import { ClipboardCheck, ArrowRight, ArrowLeft, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import BookCallCTA from './BookCallCTA';

/**
 * AI Automation Readiness Quiz — lead magnet 03.
 * 7 questions -> 0-100 readiness score + tier + the single best place to start,
 * routed to the right Quickomate service. Email-gates the full scorecard.
 * Embedded into /blog/how-to-know-if-your-business-needs-ai-automation.
 */

const QUESTIONS = [
    {
        id: 'pipeline',
        q: 'How do you generate new pipeline today?',
        options: [
            { label: 'Almost entirely referrals & word of mouth', score: 0 },
            { label: 'Some outbound, but inconsistent', score: 2 },
            { label: 'A consistent outbound / inbound motion', score: 3 },
        ],
    },
    {
        id: 'manualhours',
        q: 'How many hours/week does your team lose to repetitive manual work?',
        options: [
            { label: 'Not much — under 5', score: 1 },
            { label: '5–10 hours', score: 2 },
            { label: '10+ hours — it’s a real drag', score: 3 },
        ],
    },
    {
        id: 'data',
        q: 'Is your customer & lead data centralized?',
        options: [
            { label: 'Scattered across tools and spreadsheets', score: 0 },
            { label: 'Partly — a CRM, but it’s messy', score: 2 },
            { label: 'One clean source of truth', score: 3 },
        ],
    },
    {
        id: 'process',
        q: 'Are your core processes documented and repeatable?',
        options: [
            { label: 'No — it lives in people’s heads', score: 0 },
            { label: 'Some are written down', score: 2 },
            { label: 'Mostly documented & followed', score: 3 },
        ],
    },
    {
        id: 'revenue',
        q: 'What’s your monthly revenue range?',
        options: [
            { label: 'Under $50k', score: 1 },
            { label: '$50k–$150k', score: 3 },
            { label: '$150k+', score: 3 },
        ],
    },
    {
        id: 'tried',
        q: 'Have you tried automation before?',
        options: [
            { label: 'Never', score: 1 },
            { label: 'Tried, it didn’t stick', score: 2 },
            { label: 'A few things run today', score: 3 },
        ],
    },
    {
        id: 'bottleneck',
        q: 'What’s your single biggest bottleneck right now?',
        options: [
            { label: 'Not enough qualified leads', score: 2, route: 'leadgen' },
            { label: 'Leads come in but go cold', score: 2, route: 'automation' },
            { label: 'Drowning in manual admin', score: 2, route: 'automation' },
            { label: 'Can’t scale outbound', score: 2, route: 'coldemail' },
        ],
    },
];

const MAX = QUESTIONS.reduce((s, q) => s + Math.max(...q.options.map((o) => o.score)), 0);

const SERVICE = {
    leadgen: { name: 'B2B Lead Generation', href: '/b2b-lead-generation-agency', why: 'Your constraint is top-of-funnel volume — a predictable, AI-assisted lead engine is where to start.' },
    coldemail: { name: 'Cold Email Infrastructure', href: '/cold-email-agency', why: 'You need outbound that scales without burning domains — owned cold email infrastructure is the move.' },
    automation: { name: 'AI Automation', href: '/ai-automation-agency', why: 'The leak is between lead and close — automating follow-up, routing and CRM admin recovers the most, fastest.' },
};

function tierFor(pct) {
    if (pct < 40) return { label: 'Foundation first', tone: 'bad', text: 'You’ll get far more from automation once data and process are tighter. Start by centralizing data and documenting one core workflow — then automate the highest-volume task.' };
    if (pct < 70) return { label: 'Ready to start', tone: 'mid', text: 'You’re in the sweet spot. Don’t buy the everything-platform — automate your single biggest bottleneck first and measure it against a baseline.' };
    return { label: 'Overdue', tone: 'good', text: 'You’re leaving money on the table by waiting. The pieces are in place — the only mistake now is another quarter of doing it by hand.' };
}

export default function AiReadinessQuiz() {
    const [step, setStep] = useState(0); // 0..QUESTIONS.length-1, then 'result'
    const [answers, setAnswers] = useState({});
    const [done, setDone] = useState(false);

    const result = useMemo(() => {
        const total = QUESTIONS.reduce((s, q) => s + (answers[q.id]?.score ?? 0), 0);
        const pct = Math.round((total / MAX) * 100);
        const route = answers.bottleneck?.route || 'automation';
        return { pct, tier: tierFor(pct), service: SERVICE[route] };
    }, [answers]);

    function choose(q, opt) {
        setAnswers((a) => ({ ...a, [q.id]: opt }));
        if (step < QUESTIONS.length - 1) setStep(step + 1);
        else setDone(true);
    }

    function reset() {
        setAnswers({});
        setStep(0);
        setDone(false);
    }

    const wrap = 'bg-surface border-4 border-primary p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(17,17,17,1)] scroll-mt-28';

    if (done) {
        const { pct, tier, service } = result;
        const toneBar = { good: 'bg-accent', mid: 'bg-accent/70', bad: 'bg-primary/40' }[tier.tone];
        return (
            <section id="readiness-quiz" aria-label="AI Automation Readiness — your result" className={wrap}>
                <span className="font-mono text-xs font-black text-accent uppercase tracking-widest">Your Result</span>
                <div className="flex items-end gap-3 mt-2 mb-1">
                    <span className="font-heading font-black text-6xl sm:text-7xl text-primary tracking-tighter leading-none">{pct}</span>
                    <span className="font-mono text-sm text-primary/50 mb-2">/ 100 readiness</span>
                </div>
                <div className="w-full h-3 bg-background border-2 border-primary mb-5">
                    <div className={`h-full ${toneBar}`} style={{ width: `${pct}%` }} />
                </div>
                <h3 className="font-heading font-black text-2xl text-primary uppercase tracking-tight mb-2">{tier.label}</h3>
                <p className="font-sans text-sm text-primary/80 leading-relaxed mb-6">{tier.text}</p>

                <div className="bg-background border-4 border-primary p-5 mb-6">
                    <span className="font-mono text-[10px] font-black text-accent uppercase tracking-widest block mb-1">Best place to start</span>
                    <p className="font-heading font-black text-lg text-primary uppercase">{service.name}</p>
                    <p className="font-sans text-sm text-primary/70 mt-1 mb-3">{service.why}</p>
                    <Link to={service.href} className="inline-flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors">
                        See how it works <ArrowRight size={14} />
                    </Link>
                </div>

                <BookCallCTA
                    title="Want a hand getting started?"
                    subtext={`Based on your score, ${service.name.toLowerCase()} is where you’d see the fastest return. Book a free 20-minute call and we’ll map out your first move — no pitch, just a plan.`}
                />

                <button onClick={reset} className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] font-bold text-primary/60 uppercase tracking-wider hover:text-accent transition-colors">
                    <RotateCcw size={13} /> Retake the quiz
                </button>
            </section>
        );
    }

    const q = QUESTIONS[step];
    return (
        <section id="readiness-quiz" aria-label="AI Automation Readiness Quiz" className={wrap}>
            <div className="flex items-center gap-3 mb-4">
                <span className="flex-none w-10 h-10 bg-accent flex items-center justify-center">
                    <ClipboardCheck size={22} className="text-textInverted" />
                </span>
                <div>
                    <span className="font-mono text-xs font-black text-accent uppercase tracking-widest block">Readiness Quiz</span>
                    <span className="font-mono text-[10px] text-primary/50 uppercase tracking-wider">Question {step + 1} of {QUESTIONS.length}</span>
                </div>
            </div>

            <div className="w-full h-2 bg-background border-2 border-primary mb-6">
                <div className="h-full bg-accent transition-all" style={{ width: `${(step / QUESTIONS.length) * 100}%` }} />
            </div>

            <h2 className="font-heading font-black text-xl sm:text-2xl text-primary uppercase tracking-tight leading-tight mb-5">{q.q}</h2>

            <div className="flex flex-col gap-3" role="group" aria-label={q.q}>
                {q.options.map((opt) => {
                    const selected = answers[q.id]?.label === opt.label;
                    return (
                        <button
                            key={opt.label}
                            onClick={() => choose(q, opt)}
                            className={`text-left font-sans text-sm sm:text-base font-bold border-4 px-5 py-4 transition-colors ${selected ? 'bg-accent border-accent text-textInverted' : 'bg-background border-primary text-primary hover:bg-primary hover:text-surface'}`}
                        >
                            {opt.label}
                        </button>
                    );
                })}
            </div>

            {step > 0 && (
                <button onClick={() => setStep(step - 1)} className="mt-5 inline-flex items-center gap-2 font-mono text-[11px] font-bold text-primary/60 uppercase tracking-wider hover:text-accent transition-colors">
                    <ArrowLeft size={13} /> Back
                </button>
            )}
        </section>
    );
}
