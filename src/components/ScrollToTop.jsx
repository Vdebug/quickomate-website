import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { trackPageview } from '../analytics.js';

export default function ScrollToTop() {
    const { pathname, hash } = useLocation();

    useEffect(() => {
        if (hash) return;
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    }, [pathname, hash]);

    // Fire a GA4 page_view on every SPA navigation (GA is configured with
    // send_page_view:false). No-op until VITE_GA_ID is set.
    useEffect(() => {
        trackPageview(pathname);
    }, [pathname]);

    return null;
}
