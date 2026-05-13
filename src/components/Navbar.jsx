import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [location.pathname]);

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : '';
        return () => { document.body.style.overflow = ''; };
    }, [mobileOpen]);

    const showSolid = scrolled || !isHome || mobileOpen;

    const navItems = [
        { label: 'Services', href: isHome ? '#services' : '/#services' },
        { label: 'Case Studies', href: isHome ? '#case-studies' : '/#case-studies' },
        { label: 'Protocol', href: isHome ? '#protocol' : '/#protocol' },
        { label: 'Blog', href: '/blog' },
    ];

    return (
        <>
            <nav
                aria-label="Primary"
                className={`fixed top-4 sm:top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-4 sm:gap-16 px-4 sm:px-8 py-3 rounded-none transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${showSolid
                        ? 'bg-background border border-primary w-[92%] max-w-5xl shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] sm:shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]'
                        : 'bg-transparent border border-transparent w-[95%] max-w-6xl'
                    }`}
            >
                <a href="/" aria-label="Quickomate home" className={`font-sans font-bold text-lg sm:text-xl tracking-tighter uppercase transition-colors duration-500 ${showSolid ? 'text-textMain' : 'text-textInverted'}`}>
                    Quickomate<span className="text-accent">_</span>
                </a>

                <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
                    {navItems.map((item) => (
                        <a
                            key={item.label}
                            href={item.href}
                            className={`font-bold transition-colors duration-500 magnetic-link ${showSolid ? 'text-textMain hover:text-accent' : 'text-textInverted/80 hover:text-textInverted'
                                }`}
                        >
                            [{item.label}]
                        </a>
                    ))}
                </div>

                <a
                    href="https://cal.com/vasu-gupta-wv3e0q/discovery-call-quickomate"
                    target="_blank"
                    rel="noreferrer"
                    className={`hidden sm:inline-flex font-mono text-xs tracking-widest uppercase font-bold px-4 sm:px-6 py-3 rounded-none magnetic-btn transition-all duration-400 border-2 items-center ${showSolid
                            ? 'bg-accent text-background border-accent hover:bg-primary hover:border-primary shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]'
                            : 'bg-textInverted text-primary border-textInverted hover:bg-accent hover:text-textInverted hover:border-accent'
                        }`}
                >
                    <span className="relative z-10">Let's Talk</span>
                </a>

                <button
                    type="button"
                    aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
                    aria-expanded={mobileOpen}
                    aria-controls="mobile-menu"
                    onClick={() => setMobileOpen((o) => !o)}
                    className={`md:hidden inline-flex items-center justify-center w-11 h-11 border-2 transition-colors duration-300 ${showSolid
                            ? 'border-primary text-primary bg-background'
                            : 'border-textInverted text-textInverted bg-transparent'
                        }`}
                >
                    {mobileOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
                </button>
            </nav>

            <div
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-hidden={!mobileOpen}
                className={`md:hidden fixed inset-0 z-40 bg-background transition-opacity duration-300 ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
            >
                <div className="flex flex-col h-full pt-28 pb-12 px-6 overflow-y-auto">
                    <nav aria-label="Mobile" className="flex flex-col gap-2">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="font-heading font-black text-3xl text-primary uppercase tracking-tight border-b-2 border-primary/10 py-4 hover:text-accent transition-colors"
                            >
                                [{item.label}]
                            </a>
                        ))}
                    </nav>
                    <div className="mt-auto pt-8">
                        <a
                            href="https://cal.com/vasu-gupta-wv3e0q/discovery-call-quickomate"
                            target="_blank"
                            rel="noreferrer"
                            className="block w-full text-center bg-accent text-background font-mono font-bold text-sm tracking-widest uppercase px-6 py-5 border-4 border-primary shadow-[6px_6px_0px_0px_rgba(17,17,17,1)] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none transition-all"
                        >
                            Let's Talk
                        </a>
                        <p className="font-mono text-[10px] text-primary/50 tracking-widest uppercase mt-6 text-center">
                            SYS.ONLINE // QUICKOMATE
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
