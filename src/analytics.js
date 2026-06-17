// Analytics — Microsoft Clarity (behavior) + Google Analytics 4 (attribution).
//
// Both activate ONLY in production builds, so the dev server and `vite preview`
// never record. During the prerender crawl the loaders run but the external
// requests are blocked by the prerenderer (scripts/prerender.js), so no
// build-time hits are recorded; the injected <script> tags are baked into the
// static HTML and load for real visitors.
//
// GA4 property "Quickomate" → stream "Quickomate Web" (quickomate.com), created
// 2026-06-17. The Measurement ID below is public (it ships in client JS on every
// GA site, exactly like the Clarity id), so it's safe to commit as the default;
// override with VITE_GA_ID if the property is ever rotated.
//
// Page views: GA4 Enhanced Measurement (enabled on the stream) owns page_view
// — including SPA route changes via browser-history events — so we do NOT send
// page_view from code (that would double-count). Code only adds the custom
// conversion events Enhanced Measurement can't infer: book_call_click and
// book_call_confirmed.

// ---------------------------------------------------------------------------
// Microsoft Clarity — heatmaps, scroll maps, session recordings.
// ---------------------------------------------------------------------------
// Public Clarity project id (safe to commit — it ships in client JS regardless).
const CLARITY_ID = import.meta.env.VITE_CLARITY_ID || 'x1q9yo84hf';

// GA4 Measurement ID (public — ships in client JS). Overridable via env.
const GA_ID = import.meta.env.VITE_GA_ID || 'G-50HX9YWEYH';

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
    // IMPORTANT: guard on a RUNTIME flag, not on the #ga4-tag DOM node. The
    // prerenderer bakes the gtag.js <script> into the static HTML, so on a real
    // load the node already exists — guarding on it would make this return early
    // and skip the gtag('config') call below, leaving gtag.js loaded but never
    // configured (no measurement, no page_view). The config push is what actually
    // activates GA4 and MUST run on every real page load.
    if (window.__qkmGAInit) return;
    window.__qkmGAInit = true;

    window.dataLayer = window.dataLayer || [];
    // Use a real function (not arrow) so `arguments` is captured for gtag's queue.
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag('js', new Date());
    // Default config: Enhanced Measurement handles the initial page_view AND SPA
    // route-change page_views (browser-history events), so we don't send them here.
    window.gtag('config', GA_ID);

    // Only inject the loader if it isn't already in the HTML (prerender bakes it).
    if (!document.getElementById('ga4-tag')) {
        const s = document.createElement('script');
        s.id = 'ga4-tag';
        s.async = true;
        s.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
        document.head.appendChild(s);
    }
}

/** Fire a GA4 event. Safe no-op when GA isn't loaded. */
export function gaEvent(name, params = {}) {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
        try { window.gtag('event', name, params); } catch { /* ignore */ }
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
