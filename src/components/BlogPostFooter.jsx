import React from 'react';
import FAQSection from './FAQSection';
import BookCallCTA from './BookCallCTA';

/**
 * Rendered at the end of every blog post's <main> (injected into the App.jsx
 * post wrappers). Adds a visible FAQ (read from the page's FAQ schema) + a
 * booking CTA — inside the article flow, before the footer.
 */
export default function BlogPostFooter() {
    return (
        <div className="px-6 sm:px-12 md:px-24 pb-12 bg-background">
            <div className="max-w-4xl mx-auto">
                <FAQSection />
                <div className="mt-12">
                    <BookCallCTA
                        title="Want this done for you?"
                        subtext="Quickomate builds the systems behind these posts — AI automation, cold email infrastructure, and B2B lead gen you own outright. Book a free 20-minute call and we'll map out your first move. No pitch."
                    />
                </div>
            </div>
        </div>
    );
}
