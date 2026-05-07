import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const isHome = location.pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // On non-home pages, always show the solid navbar
    const showSolid = scrolled || !isHome;

    return (
        <nav
            className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-between gap-8 sm:gap-16 px-6 sm:px-8 py-3 rounded-none transition-all duration-700 ease-[cubic-bezier(0.19,1,0.22,1)] ${showSolid
                    ? 'bg-background border border-primary w-[90%] max-w-5xl shadow-[8px_8px_0px_0px_rgba(17,17,17,1)]'
                    : 'bg-transparent border border-transparent w-[95%] max-w-6xl'
                }`}
        >
            <a href="/" className={`font-sans font-bold text-xl tracking-tighter uppercase transition-colors duration-500 ${showSolid ? 'text-textMain' : 'text-textInverted'}`}>
                Quickomate<span className="text-accent">_</span>
            </a>

            <div className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-widest">
                {[
                    { label: 'Services', href: isHome ? '#services' : '/#services' },
                    { label: 'Case Studies', href: isHome ? '#case-studies' : '/#case-studies' },
                    { label: 'Protocol', href: isHome ? '#protocol' : '/#protocol' },
                    { label: 'Blog', href: '/blog' },
                ].map((item) => (
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
                className={`font-mono text-xs tracking-widest uppercase font-bold px-6 py-3 rounded-none magnetic-btn transition-all duration-400 border-2 ${showSolid
                        ? 'bg-accent text-background border-accent hover:bg-primary hover:border-primary shadow-[4px_4px_0px_0px_rgba(17,17,17,1)]'
                        : 'bg-textInverted text-primary border-textInverted hover:bg-accent hover:text-textInverted hover:border-accent'
                    }`}
            >
                <span className="relative z-10">Let's Talk</span>
            </a>
        </nav>
    );
}
