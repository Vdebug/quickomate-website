import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
    return (
        <div className="min-h-[80vh] bg-background text-textMain pt-32 pb-20 px-6 sm:px-12 md:px-24 flex items-center">
            <div className="max-w-3xl mx-auto w-full">
                <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase mb-4 bg-accent/10 px-3 py-1 inline-block border border-accent/30">
                    ERR_404 // ROUTE_NOT_FOUND
                </div>
                <h1 className="font-heading font-black text-5xl sm:text-6xl md:text-7xl text-primary tracking-tighter uppercase leading-none mb-6">
                    404
                    <br />
                    <span className="text-accent">No signal here.</span>
                </h1>
                <p className="font-mono text-sm text-primary/60 font-bold mt-6 uppercase border-l-2 border-accent pl-4 mb-12">
                    The page you tried to reach doesn't exist or has been moved.
                </p>
                <div className="flex gap-4 flex-wrap">
                    <Link to="/" className="inline-flex items-center gap-2 font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors">
                        <ArrowLeft size={14} />
                        Home
                    </Link>
                    <Link to="/blog" className="font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors">
                        Read the Blog
                    </Link>
                </div>
            </div>
        </div>
    );
}
