import React from 'react';
import { Outlet } from 'react-router-dom';
import BookCallCTA from './BookCallCTA';

/**
 * Shared layout for blog POST routes. Renders the post (via <Outlet/>) then a
 * booking CTA, so every article has a path to a call — added once here instead
 * of editing ~40 post files. Wrapped around the post routes in App.jsx.
 */
export default function BlogPostLayout() {
    return (
        <>
            <Outlet />
            <section className="px-6 sm:px-12 md:px-24 pb-24 bg-background">
                <div className="max-w-4xl mx-auto">
                    <BookCallCTA
                        title="Want this done for you?"
                        subtext="Quickomate builds the systems behind these posts — AI automation, cold email infrastructure, and B2B lead gen you own outright. Book a free 20-minute call and we'll map out your first move. No pitch."
                    />
                </div>
            </section>
        </>
    );
}
