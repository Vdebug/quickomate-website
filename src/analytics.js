// Microsoft Clarity — heatmaps, scroll maps, and session recordings.
//
// Activates ONLY in production builds when VITE_CLARITY_ID is set, so the dev
// server and `vite preview` never record sessions. During the prerender crawl
// the loader runs but the external clarity.ms request is blocked by the
// prerenderer (scripts/prerender.js), so no build-time sessions are recorded;
// the <script> tag it injects is baked into the static HTML and loads for real
// visitors. Clarity auto-tracks SPA route changes, so no manual pageview calls.
//
// To activate: create a free project at https://clarity.microsoft.com, then set
//   VITE_CLARITY_ID=<your 10-char project id>
// in the Vercel project env (Production) and redeploy.

const CLARITY_ID = import.meta.env.VITE_CLARITY_ID;

export function initClarity() {
    if (!CLARITY_ID) return;                 // dormant until the project id is set
    if (import.meta.env.DEV) return;         // never run on the dev server
    if (typeof window === 'undefined' || typeof document === 'undefined') return;
    if (document.getElementById('clarity-tag')) return; // idempotent (incl. prerender-baked tag)

    // Queue stub so events fired before the tag finishes loading aren't lost.
    window.clarity = window.clarity || function () {
        (window.clarity.q = window.clarity.q || []).push(arguments);
    };

    const s = document.createElement('script');
    s.id = 'clarity-tag';
    s.async = true;
    s.src = `https://www.clarity.ms/tag/${CLARITY_ID}`;
    document.head.appendChild(s);
}

/**
 * Fire a Clarity custom event so heatmaps & session recordings can be filtered
 * by conversion (e.g. "show me everyone who submitted a lead magnet"). Safe no-op
 * when Clarity isn't loaded.
 */
export function clarityEvent(name) {
    if (typeof window !== 'undefined' && typeof window.clarity === 'function') {
        try { window.clarity('event', name); } catch { /* ignore */ }
    }
}
