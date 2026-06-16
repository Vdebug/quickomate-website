// Analytics — Microsoft Clarity (behavior) + Google Analytics 4 (attribution).
//
// Both activate ONLY in production builds, so the dev server and `vite preview`
// never record. During the prerender crawl the loaders run but the external
// requests are blocked by the prerenderer (scripts/prerender.js), so no
// build-time hits are recorded; the injected <script> tags are baked into the
// static HTML and load for real visitors.
//
// To activate GA4: create a GA4 property at https://analytics.google.com, copy
// its Measurement ID (G-XXXXXXXXXX), then set
//   VITE_GA_ID=G-XXXXXXXXXX
// in the Vercel project env (Production) and redeploy. Until then the GA loader
// stays dormant. Clarity is already live (id below).

// ---------------------------------------------------------------------------
// Microsoft Clarity — heatmaps, scroll maps, session recordings.
// ---------------------------------------------------------------------------
// Public Clarity project id (safe to commit — it ships in client JS regardless).
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID || 'x1q9yo84hf';

// GA4 Measurement ID — env-gated so the loader stays dormant until it's set.
const GA_ID = import.meta.env.VITE_GA_ID || '';

function isLiveBrowser() {
    if (import.meta.env.DEV) return false;                              // never on the dev server
    if (typeof window === 'undefined' || typeof document === 'undefined') return false; // SSR/prerender
    return true;
}

export function initClarity() {
    if (!CLARITY_ID) return;
    if (!isLiveBrowser()) return;
    if (document.getElementById('clarity-tag')) return; // idempotent

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

// ---------------------------------------------------------------------------
// Google Analytics 4 — traffic attribution + conversion measurement.
// ---------------------------------------------------------------------------
export function initGA() {
    if (!GA_ID) return;                 // dormant until VITE_GA_ID is set
    if (!isLiveBrowser()) return;
    if (document.getElementById('ga4-tag')) return; // idempotent

    window.dataLayer = window.dataLayer || [];
    // Use a real function (not arrow) so `arguments` is captured for gtag's queue.
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    // send_page_view:false — this is an SPA, so we fire page_view manually on
    // each React Router navigation (see trackPageview) to avoid missing routes.
    window.gtag('config', GA_ID, { send_page_view: false });

    const s = document.createElement('script');
    s.id = 'ga4-tag';
    s.async = true;
    s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(s);
}

/** Fire a GA4 event. Safe no-op when GA isn't loaded. */
export function gaEvent(name, params = {}) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        try { window.gtag('event', name, params); } catch { /* ignore */ }
    }
}

/** Fire a GA4 page_view for SPA route changes. Safe no-op when GA isn't loaded. */
export function trackPageview(path) {
    if (!GA_ID) return;
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        try {
            window.gtag('event', 'page_view', {
                page_path: path,
                page_location: window.location.href,
                page_title: document.title,
            });
        } catch { /* ignore */ }
    }
}

// ---------------------------------------------------------------------------
// Booking-intent tracking — one delegated listener for EVERY cal.com link.
// ---------------------------------------------------------------------------
// The booking CTA appears as a plain <a href="…cal.com…"> in ~30 components.
// Rather than wire an onClick into each one, a single capture-phase document
// listener fires the conversion event for any cal.com link click site-wide.
// This is the "book a call was clicked" signal — the actual completed booking
// is tracked separately on /booking-confirmed (cal.com redirect target).
export function initBookingClickTracking() {
    if (!isLiveBrowser()) return;
    if (window.__bookingClickTracked) return; // idempotent
    window.__bookingClickTracked = true;

    document.addEventListener('click', (e) => {
        const link = e.target?.closest?.('a[href*="cal.com"]');
        if (!link) return;
        const where = link.getAttribute('data-cta') || window.location.pathname;
        clarityEvent('book_call_click');
        gaEvent('book_call_click', {
            // GA4 recommended params so this can be marked a key event/conversion.
            event_category: 'booking',
            event_label: where,
            page_path: window.location.pathname,
        });
    }, { capture: true });
}
