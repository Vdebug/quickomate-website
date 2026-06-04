import React, { useEffect, useState } from 'react';

/**
 * Renders the page's EXISTING FAQPage JSON-LD as a visible FAQ section, so the
 * structured data matches real on-page content (what Google + AI answer engines
 * want — schema-only FAQ is weak/ignored). Reads the schema from the document
 * instead of duplicating it, so there's one source of truth. Rendered once via
 * BlogPostLayout, so every post with FAQ schema gets a visible, AI-citable FAQ.
 */
export default function FAQSection() {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        try {
            const scripts = document.querySelectorAll('script[type="application/ld+json"]');
            for (const s of scripts) {
                let data;
                try { data = JSON.parse(s.textContent || '{}'); } catch { continue; }
                const node = Array.isArray(data) ? data.find((d) => d && d['@type'] === 'FAQPage') : data;
                if (node && node['@type'] === 'FAQPage' && Array.isArray(node.mainEntity)) {
                    const items = node.mainEntity
                        .map((q) => ({ q: q.name, a: q.acceptedAnswer && q.acceptedAnswer.text }))
                        .filter((x) => x.q && x.a);
                    if (items.length) { setFaqs(items); break; }
                }
            }
        } catch { /* noop */ }
    }, []);

    if (!faqs.length) return null;

    return (
        <section aria-label="Frequently asked questions" className="mt-4 border-t-4 border-primary pt-10">
            <h2 className="font-heading font-black text-2xl sm:text-3xl text-primary uppercase tracking-tight mb-6 border-l-4 border-accent pl-4">
                Frequently Asked Questions
            </h2>
            <div className="flex flex-col gap-3">
                {faqs.map((f, i) => (
                    <details key={i} className="bg-surface border-4 border-primary p-5">
                        <summary className="font-heading font-black text-base sm:text-lg text-primary uppercase tracking-tight cursor-pointer list-none flex justify-between items-start gap-4">
                            <span>{f.q}</span>
                            <span className="text-accent font-mono flex-none select-none">[+]</span>
                        </summary>
                        <p className="font-sans text-sm text-primary/80 leading-relaxed mt-3">{f.a}</p>
                    </details>
                ))}
            </div>
        </section>
    );
}
