import React from 'react';

export default function Footer() {
    return (
        <footer className="w-full bg-surface pt-24 pb-12 px-6 sm:px-12 md:px-24 rounded-none border-t-8 border-primary relative overflow-hidden mt-12 z-20">
            <div
                className="absolute inset-0 opacity-10 pointer-events-none mix-blend-overlay"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1542382103332-6bb04abfae7f?q=60&w=1200&auto=format&fit=crop")',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    filter: 'grayscale(100%)',
                }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 mb-20 border-b-4 border-primary pb-16">
                    <div className="md:col-span-6 flex flex-col items-start gap-6">
                        <a href="/" className="font-heading font-black text-4xl tracking-tighter uppercase text-primary border-4 border-primary bg-background px-4 py-2">
                            Quickomate<span className="text-accent">_</span>
                        </a>
                        <p className="font-mono text-primary font-bold max-w-sm leading-relaxed uppercase bg-primary/10 p-4 border-l-4 border-accent">
                            The definitive AI growth partner for fast-moving B2B companies.
                        </p>
                        <div className="flex items-center gap-3 mt-4 px-4 py-2 bg-primary border-4 border-primary">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full bg-accent opacity-75"></span>
                                <span className="relative inline-flex h-3 w-3 bg-accent"></span>
                            </span>
                            <span className="font-mono text-xs text-background font-bold uppercase tracking-widest">
                                SYSTEM_OP
                            </span>
                        </div>
                    </div>

                    <div className="md:col-span-3 md:col-start-8 flex flex-col gap-4">
                        <h4 className="font-mono text-xs text-primary font-black tracking-widest uppercase mb-2 bg-primary/10 px-2 py-1 inline-block">
                            PLATFORM
                        </h4>
                        {[
                            { label: 'AI Automation', href: '/ai-automation-agency' },
                            { label: 'Cold Email Agency', href: '/cold-email-agency' },
                            { label: 'B2B Lead Gen', href: '/b2b-lead-generation-agency' },
                            { label: 'Case Studies', href: '/#case-studies' },
                            { label: 'About', href: '/about' },
                            { label: 'Blog', href: '/blog' },
                        ].map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className="font-heading font-bold text-lg text-primary hover:text-background hover:bg-primary transition-colors px-2 py-1 w-fit uppercase border border-transparent hover:border-primary"
                            >
                                [{link.label}]
                            </a>
                        ))}
                    </div>

                    <div className="md:col-span-2 flex flex-col gap-4">
                        <h4 className="font-mono text-xs text-primary font-black tracking-widest uppercase mb-2 bg-primary/10 px-2 py-1 inline-block">
                            DB_LEGAL
                        </h4>
                        <a
                            href="/privacy"
                            className="font-heading font-bold text-lg text-primary hover:text-background hover:bg-primary transition-colors px-2 py-1 w-fit uppercase border border-transparent hover:border-primary"
                        >
                            [Privacy Policy]
                        </a>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-4">
                    <p className="font-mono text-xs text-primary font-bold uppercase">
                        © {new Date().getFullYear()} QUICKOMATE. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-6">
                        <a
                            href="https://x.com/vaaasug"
                            target="_blank"
                            rel="noreferrer"
                            className="font-mono text-xs text-primary font-bold uppercase hover:bg-primary hover:text-background px-2 py-1 transition-colors"
                        >
                            X (Twitter)
                        </a>
                        <a
                            href="https://www.linkedin.com/in/refer-vasu/"
                            target="_blank"
                            rel="noreferrer"
                            className="font-mono text-xs text-primary font-bold uppercase hover:bg-primary hover:text-background px-2 py-1 transition-colors"
                        >
                            LinkedIn
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
