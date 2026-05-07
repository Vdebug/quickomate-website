import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-background text-textMain pt-32 pb-20 px-6 sm:px-12 md:px-24">
            <div className="max-w-4xl mx-auto">
                <div className="mb-16 border-b-4 border-primary pb-8">
                    <div className="font-mono text-xs text-accent font-bold tracking-widest uppercase mb-4 bg-accent/10 px-3 py-1 inline-block border border-accent/30">
                        LEGAL_DOC
                    </div>
                    <h1 className="font-heading font-black text-4xl sm:text-5xl text-primary tracking-tighter uppercase">
                        Privacy Policy
                    </h1>
                    <p className="font-mono text-xs text-primary/50 font-bold mt-4 uppercase tracking-widest">
                        Last updated: March 2026
                    </p>
                </div>

                <div className="flex flex-col gap-10 font-sans text-sm text-primary/80 leading-relaxed">
                    <section>
                        <h2 className="font-heading font-black text-xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            1. Information We Collect
                        </h2>
                        <p className="mb-3">
                            We collect only the information necessary to provide our services effectively. This may include:
                        </p>
                        <ul className="list-none space-y-2 pl-4">
                            <li className="border-l-2 border-primary/20 pl-3">Name and email address when you book a discovery call or fill out a contact form.</li>
                            <li className="border-l-2 border-primary/20 pl-3">Business information relevant to the services you request.</li>
                            <li className="border-l-2 border-primary/20 pl-3">Usage data collected automatically when you visit our website (pages viewed, time on site, browser type).</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            2. How We Use Your Information
                        </h2>
                        <p className="mb-3">We use the information we collect to:</p>
                        <ul className="list-none space-y-2 pl-4">
                            <li className="border-l-2 border-primary/20 pl-3">Provide, operate, and improve our services.</li>
                            <li className="border-l-2 border-primary/20 pl-3">Communicate with you about your projects, inquiries, and service updates.</li>
                            <li className="border-l-2 border-primary/20 pl-3">Analyze website traffic patterns to improve user experience.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            3. Data Sharing
                        </h2>
                        <p>
                            We do not sell, trade, or rent your personal information to third parties. We may share data with trusted service providers (e.g., email platforms, CRM tools) solely to deliver our services. These providers are contractually obligated to protect your data.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            4. Data Security
                        </h2>
                        <p>
                            We implement industry-standard security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            5. Cookies
                        </h2>
                        <p>
                            Our website may use cookies and similar technologies to enhance your browsing experience and gather analytics data. You can control cookie preferences through your browser settings. Disabling cookies may limit certain features of the website.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            6. Your Rights
                        </h2>
                        <p className="mb-3">You have the right to:</p>
                        <ul className="list-none space-y-2 pl-4">
                            <li className="border-l-2 border-primary/20 pl-3">Request access to the personal information we hold about you.</li>
                            <li className="border-l-2 border-primary/20 pl-3">Request correction or deletion of your personal data.</li>
                            <li className="border-l-2 border-primary/20 pl-3">Opt out of marketing communications at any time.</li>
                        </ul>
                    </section>

                    <section>
                        <h2 className="font-heading font-black text-xl text-primary uppercase tracking-tight mb-4 border-l-4 border-accent pl-4">
                            7. Contact
                        </h2>
                        <p>
                            If you have any questions about this Privacy Policy or how we handle your data, please reach out through our discovery call booking page or contact us directly.
                        </p>
                    </section>
                </div>

                <div className="mt-16 pt-8 border-t-4 border-primary">
                    <a
                        href="/"
                        className="font-mono text-xs font-bold text-primary uppercase border-2 border-primary px-4 py-2 hover:bg-primary hover:text-surface transition-colors inline-block"
                    >
                        ← Back to Home
                    </a>
                </div>
            </div>
        </div>
    );
}
