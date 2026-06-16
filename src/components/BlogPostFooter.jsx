import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import FAQSection from './FAQSection';
import BookCallCTA from './BookCallCTA';
import { getRelatedPosts } from './blogPosts';

/**
 * Rendered at the end of every blog post's <main> (injected into the App.jsx
 * post wrappers). Adds: relevant internal "Related guides" links (SEO — spreads
 * link equity + anchor text across the cluster), a visible FAQ (read from the
 * page's FAQ schema), and a booking CTA — inside the article flow, before the
 * footer.
 */
export default function BlogPostFooter() {
    const { pathname } = useLocation();
    const slug = pathname.replace(/^\/blog\//, '').replace(/\/$/, '');
    const related = getRelatedPosts(slug, 3);

    return (
        <div className="px-6 sm:px-12 md:px-24 pb-12 bg-background">
            <div className="max-w-4xl mx-auto">
                <FAQSection />

                {related.length > 0 && (
                    <nav aria-label="Related guides" className="mt-12">
                        <h2 className="font-mono text-[11px] font-black text-accent uppercase tracking-widest mb-4">
                            Related guides
                        </h2>
                        <ul className="grid gap-3 sm:grid-cols-3">
                            {related.map((post) => (
                                <li key={post.slug}>
                                    <Link
                                        to={`/blog/${post.slug}`}
                                        className="group flex h-full flex-col justify-between gap-3 border-2 border-primary/15 bg-surface p-4 hover:border-accent transition-colors"
                                    >
                                        <span className="font-sans text-sm font-bold text-primary leading-snug">
                                            {post.title}
                                        </span>
                                        <span className="inline-flex items-center gap-1 font-mono text-[10px] font-bold text-accent uppercase tracking-widest">
                                            Read
                                            <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                )}

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
