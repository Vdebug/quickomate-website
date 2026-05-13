import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import CaseStudies from './components/CaseStudies';
import AboutUs from './components/AboutUs';
import Protocol from './components/Protocol';
import CTA from './components/CTA';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import BlogIndex from './components/BlogIndex';
import BlogColdEmail from './components/BlogColdEmail';
import BlogOwnInfra from './components/BlogOwnInfra';
import BlogAiVsHuman from './components/BlogAiVsHuman';
import BlogAiLeadGen from './components/BlogAiLeadGen';
import BlogColdEmailVsPaidAds from './components/BlogColdEmailVsPaidAds';
import BlogFollowUpSystem from './components/BlogFollowUpSystem';
import BlogCrmAutomation from './components/BlogCrmAutomation';
import BlogReadinessCheck from './components/BlogReadinessCheck';
import NotFound from './components/NotFound';

const SITE_URL = 'https://quickomate.com';
const OG_IMAGE = `${SITE_URL}/vasu-gupta.jpg`;

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vasu Gupta",
  "url": `${SITE_URL}/#vasu-gupta`,
  "image": OG_IMAGE,
  "jobTitle": "CEO & Founder, Quickomate",
  "worksFor": {
    "@type": "Organization",
    "name": "Quickomate",
    "url": SITE_URL
  },
  "knowsAbout": [
    "AI Automation",
    "B2B Lead Generation",
    "Cold Email Systems",
    "Sales Pipeline Engineering",
    "CRM Automation",
    "Growth Infrastructure"
  ],
  "sameAs": [
    "https://x.com/vaaasug",
    "https://www.linkedin.com/in/refer-vasu/"
  ]
};

const breadcrumbSchema = (postTitle, postSlug) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${SITE_URL}/blog` },
    { "@type": "ListItem", "position": 3, "name": postTitle, "item": `${SITE_URL}/blog/${postSlug}` }
  ]
});

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Quickomate – AI Cold Email & Lead Gen for B2B Companies</title>
        <meta name="description" content="Get 15-20 qualified B2B appointments per month with AI-powered cold email infrastructure you actually own. Real 4% reply rates. No retainers. Built by Vasu Gupta." />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:title" content="Quickomate – AI Cold Email & Lead Gen for B2B Companies" />
        <meta property="og:description" content="15-20 qualified B2B appointments per month with AI-powered cold email infrastructure you own. Real 4% reply rates. No retainers." />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify(PERSON_SCHEMA)}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "What does an AI Growth Partner actually do?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "An AI Growth Partner builds custom AI-driven infrastructure to handle lead generation, project management, and sales automation. We don't just run ads; we engineer logic engines that let fast-moving B2B companies scale without adding headcount."
              }
            },
            {
              "@type": "Question",
              "name": "How many B2B appointments can you generate per month with cold email?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Using our cold email infrastructure combined with AI-assisted research and manually crafted copy, we consistently deliver 15-20 qualified appointments per month. Our campaigns hit a realistic 4% overall reply rate with a 1-2% positive reply rate — numbers that are achievable on cold traffic without burning sender reputation."
              }
            },
            {
              "@type": "Question",
              "name": "What is a realistic cold email reply rate in B2B?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "A realistic overall reply rate on cold B2B email is around 4%, with 1-2% of those being positive replies. Anyone promising 8-10%+ reply rates on cold traffic is either cherry-picking warm leads or burning sending domains. We optimize for sustainable inbox placement and long-term sender reputation."
              }
            },
            {
              "@type": "Question",
              "name": "Do I own the cold email system once it's built?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Unlike traditional marketing agencies that rely on monthly retainers and take their leads with them when you leave, we build everything on your infrastructure. You own every lead, every campaign, and every piece of the pipeline from day one."
              }
            },
            {
              "@type": "Question",
              "name": "How long does it take to set up a Quickomate cold email system?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Mailbox warm-up and infrastructure setup typically takes 2-3 weeks before you can send at scale. End-to-end (lead sourcing, infrastructure, copy, launch), most clients see their first qualified meetings within 30-45 days of kickoff."
              }
            }
          ]
        })}</script>
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <CaseStudies />
        <AboutUs />
        <Protocol />
        <CTA />
      </main>
      <Footer />
    </>
  );
}

function PrivacyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – Quickomate</title>
        <meta name="description" content="Quickomate's Privacy Policy. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href={`${SITE_URL}/privacy`} />
        <meta property="og:title" content="Privacy Policy – Quickomate" />
        <meta property="og:url" content={`${SITE_URL}/privacy`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Navbar />
      <main>
        <PrivacyPolicy />
      </main>
      <Footer />
    </>
  );
}

const BLOG_POSTS_META = [
  { slug: 'how-to-know-if-your-business-needs-ai-automation', title: 'How To Know If Your Business Is Ready For AI Automation', datePublished: '2026-04-29' },
  { slug: 'crm-automation-systems-for-b2b', title: 'CRM Automation: How Stage-Based Triggers Free Up Your Sales Team', datePublished: '2026-04-29' },
  { slug: 'follow-up-system-for-b2b', title: "You Don't Have a Lead Problem. You Have a Follow-Up Problem.", datePublished: '2026-04-29' },
  { slug: 'ai-lead-generation-for-b2b-companies', title: 'AI Lead Generation for B2B Companies: A 2026 Playbook', datePublished: '2026-04-28' },
  { slug: 'cold-email-vs-paid-ads-b2b', title: 'Cold Email vs Paid Ads: Which Actually Works for B2B in 2026?', datePublished: '2026-04-25' },
  { slug: 'ai-vs-human-cold-email-copy', title: 'AI vs Human Cold Email Copy: Why Full Automation Kills Your Reply Rate', datePublished: '2026-04-22' },
  { slug: 'why-you-should-own-your-cold-email-infrastructure', title: 'Why You Should Own Your Cold Email Infrastructure (Not Rent It From An Agency)', datePublished: '2026-04-15' },
  { slug: 'cold-email-system-20-appointments-month', title: 'How We Get 15-20 Qualified Appointments Per Month With Cold Email', datePublished: '2026-03-06' }
];

function BlogPage() {
  return (
    <>
      <Helmet>
        <title>B2B Growth Blog – Cold Email, AI Lead Gen & Sales Infra | Quickomate</title>
        <meta name="description" content="Practical playbooks for B2B founders: AI cold email, lead generation, sales infrastructure, and how to book 15-20 qualified meetings a month without retainers." />
        <link rel="canonical" href={`${SITE_URL}/blog`} />
        <meta property="og:title" content="B2B Growth Blog – Cold Email, AI Lead Gen & Sales Infra | Quickomate" />
        <meta property="og:description" content="Practical playbooks for B2B founders: AI cold email, lead generation, sales infrastructure, and how to book 15-20 qualified meetings a month." />
        <meta property="og:url" content={`${SITE_URL}/blog`} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={OG_IMAGE} />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          "name": "Quickomate Blog",
          "url": `${SITE_URL}/blog`,
          "description": "Practical playbooks for B2B founders on AI cold email, lead generation, and sales infrastructure.",
          "publisher": {
            "@type": "Organization",
            "name": "Quickomate",
            "url": SITE_URL
          },
          "blogPost": BLOG_POSTS_META.map((p) => ({
            "@type": "BlogPosting",
            "headline": p.title,
            "url": `${SITE_URL}/blog/${p.slug}`,
            "datePublished": p.datePublished,
            "author": { "@type": "Person", "name": "Vasu Gupta" }
          }))
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ItemList",
          "itemListElement": BLOG_POSTS_META.map((p, i) => ({
            "@type": "ListItem",
            "position": i + 1,
            "url": `${SITE_URL}/blog/${p.slug}`,
            "name": p.title
          }))
        })}</script>
      </Helmet>
      <Navbar />
      <main>
        <BlogIndex />
      </main>
      <Footer />
    </>
  );
}

function BlogColdEmailPage() {
  const slug = 'cold-email-system-20-appointments-month';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'How We Get 15-20 Qualified Appointments Per Month With Cold Email';
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="The average B2B company gets 2-3 meetings per month from referrals. Learn how Quickomate's cold email system consistently delivers 15-20 qualified appointments at a realistic 4% reply rate using AI-assisted research and expert-crafted messaging." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Learn how Quickomate's cold email system consistently delivers 15-20 qualified appointments per month at a realistic 4% reply rate." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2026-03-06T00:00:00Z" />
        <meta property="article:modified_time" content="2026-04-29T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Growth Infrastructure" />
        <meta property="article:tag" content="Cold Email" />
        <meta property="article:tag" content="Lead Generation" />
        <meta property="article:tag" content="AI Systems" />
        <meta property="article:tag" content="B2B Growth" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "The average B2B company gets 2-3 meetings per month from referrals. Learn how Quickomate's cold email system consistently delivers 15-20 qualified appointments at a realistic 4% reply rate.",
          "image": OG_IMAGE,
          "author": {
            "@type": "Person",
            "name": "Vasu Gupta",
            "url": "https://www.linkedin.com/in/refer-vasu/"
          },
          "publisher": {
            "@type": "Organization",
            "name": "Quickomate",
            "url": SITE_URL,
            "logo": {
              "@type": "ImageObject",
              "url": `${SITE_URL}/logo.svg`
            }
          },
          "datePublished": "2026-03-06",
          "dateModified": "2026-04-29",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": url
          },
          "inLanguage": "en-US",
          "keywords": "cold email, lead generation, B2B appointments, AI automation, cold email system, Quickomate, reply rate",
          "articleSection": "Growth Infrastructure",
          "wordCount": 1400
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HowTo",
          "name": "How to build a cold email system that books 15-20 B2B appointments per month",
          "description": "A 5-step playbook for building a cold email system that consistently delivers 15-20 qualified B2B appointments per month at a realistic 4% reply rate.",
          "totalTime": "P21D",
          "step": [
            { "@type": "HowToStep", "position": 1, "name": "Build the lead engine", "text": "Use automated lead sourcing to pull fresh prospects matching your ICP. Filter out companies that are too large or too small and identify the actual decision maker." },
            { "@type": "HowToStep", "position": 2, "name": "Set up dedicated mailbox infrastructure", "text": "Use multiple warmed-up mailboxes with proper SPF, DKIM, and DMARC authentication. Never send cold email from your main business domain." },
            { "@type": "HowToStep", "position": 3, "name": "Craft hyper-personalized copy by hand", "text": "Use AI for research (scraping sites, LinkedIn, public data) but write the actual copy manually. Every subject line, hook, and CTA reviewed by a human." },
            { "@type": "HowToStep", "position": 4, "name": "Launch, monitor, and scale winners", "text": "Send 5,000-15,000 emails per month. Monitor open, reply, and bounce rates daily. Cut losing campaigns aggressively, scale winners. Expect ~4% reply rate, 1-2% positive." },
            { "@type": "HowToStep", "position": 5, "name": "Hand over the system", "text": "All infrastructure lives on the client's domains, mailboxes, and CRM. Train the team, then step back. No retainers, no lock-in." }
          ]
        })}</script>
      </Helmet>
      <Navbar />
      <main>
        <BlogColdEmail />
      </main>
      <Footer />
    </>
  );
}

function BlogOwnInfraPage() {
  const slug = 'why-you-should-own-your-cold-email-infrastructure';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'Why You Should Own Your Cold Email Infrastructure (Not Rent It From An Agency)';
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="Most B2B agencies trap you in a monthly retainer and walk off with your leads when you leave. Here's why owning your cold email infrastructure — domains, mailboxes, lead lists, CRM — is the only sustainable path to scale." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Why you should own your cold email infrastructure end-to-end instead of renting it from an agency on retainer." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2026-04-15T00:00:00Z" />
        <meta property="article:modified_time" content="2026-04-29T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Growth Infrastructure" />
        <meta property="article:tag" content="Cold Email" />
        <meta property="article:tag" content="Agency vs In-House" />
        <meta property="article:tag" content="B2B Growth" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "Most B2B agencies trap you in a monthly retainer and walk off with your leads when you leave. Here's why owning your cold email infrastructure is the only sustainable path to scale.",
          "image": OG_IMAGE,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.svg` } },
          "datePublished": "2026-04-15",
          "dateModified": "2026-04-29",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "cold email infrastructure, agency retainer, own your data, B2B lead ownership, sender reputation",
          "articleSection": "Growth Infrastructure"
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main>
        <BlogOwnInfra />
      </main>
      <Footer />
    </>
  );
}

function BlogAiVsHumanPage() {
  const slug = 'ai-vs-human-cold-email-copy';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'AI vs Human Cold Email Copy: Why Full Automation Kills Your Reply Rate';
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="Fully AI-generated cold email copy looks personalized but reads like a template — and prospects can tell. Here's the AI-assisted, human-written hybrid that actually books meetings on cold traffic." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Why fully AI-generated cold email copy kills your reply rate, and the AI-assisted hybrid approach that actually works." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2026-04-22T00:00:00Z" />
        <meta property="article:modified_time" content="2026-04-29T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="AI Systems" />
        <meta property="article:tag" content="Cold Email" />
        <meta property="article:tag" content="AI Copy" />
        <meta property="article:tag" content="Personalization" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "Fully AI-generated cold email copy looks personalized but reads like a template. Here's the AI-assisted, human-written hybrid that actually books meetings on cold traffic.",
          "image": OG_IMAGE,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.svg` } },
          "datePublished": "2026-04-22",
          "dateModified": "2026-04-29",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "AI cold email, AI copywriting, personalization, cold email reply rate, cold outreach copy",
          "articleSection": "AI Systems"
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main>
        <BlogAiVsHuman />
      </main>
      <Footer />
    </>
  );
}

function BlogAiLeadGenPage() {
  const slug = 'ai-lead-generation-for-b2b-companies';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'AI Lead Generation for B2B Companies: A 2026 Playbook';
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="The 2026 guide to AI lead generation for B2B: which AI does what, where humans still win, realistic conversion benchmarks, and the exact stack we deploy to book 15-20 qualified meetings per month." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="The 2026 guide to AI lead generation for B2B: which AI does what, where humans still win, realistic benchmarks, and the exact stack we deploy." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2026-04-28T00:00:00Z" />
        <meta property="article:modified_time" content="2026-04-29T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Lead Generation" />
        <meta property="article:tag" content="AI Lead Generation" />
        <meta property="article:tag" content="B2B Sales" />
        <meta property="article:tag" content="Sales Automation" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "The 2026 guide to AI lead generation for B2B: which AI does what, where humans still win, realistic benchmarks, and the exact stack we deploy to book 15-20 qualified meetings per month.",
          "image": OG_IMAGE,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.svg` } },
          "datePublished": "2026-04-28",
          "dateModified": "2026-04-29",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "AI lead generation, B2B lead generation, AI sales automation, B2B prospecting, sales AI",
          "articleSection": "Lead Generation"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is AI lead generation for B2B?", "acceptedAnswer": { "@type": "Answer", "text": "AI lead generation for B2B uses machine learning and large language models to identify ideal customer profiles, enrich prospect data, score intent, and personalize outreach at scale. It's not about replacing humans — it's about giving a small sales team the leverage of a much larger one by automating the research and routing layer." } },
            { "@type": "Question", "name": "Does AI lead generation actually work in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, but only when it's used for the parts AI is genuinely good at: research, enrichment, signal detection, and prioritization. Fully AI-generated outreach copy still underperforms human-written copy by 2-3x on cold reply rates. The winning stack is AI for research plus humans for messaging." } },
            { "@type": "Question", "name": "How much does AI lead generation cost for a B2B company?", "acceptedAnswer": { "@type": "Answer", "text": "Costs vary by stack. A typical owned-infrastructure setup runs $500-$2,000/month in tools (data sources, sending infra, CRM) plus a one-time build investment. Retainer agencies charge $4,000-$8,000/month indefinitely. The owned model breaks even in 6-9 months." } },
            { "@type": "Question", "name": "What conversion rate should I expect from AI lead generation?", "acceptedAnswer": { "@type": "Answer", "text": "Realistic benchmarks for cold B2B outreach: 4% overall reply rate, 1-2% positive replies, 0.15-0.25% meetings booked per email sent. Anyone promising substantially higher is likely warm-prospecting or burning sender reputation." } }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main>
        <BlogAiLeadGen />
      </main>
      <Footer />
    </>
  );
}

function BlogColdEmailVsPaidAdsPage() {
  const slug = 'cold-email-vs-paid-ads-b2b';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'Cold Email vs Paid Ads: Which Actually Works for B2B in 2026?';
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="Cold email vs paid ads for B2B: real CAC numbers, intent quality, scaling ceilings, and which channel wins for your stage. A founder-level breakdown with no agency spin." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Cold email vs paid ads for B2B: real CAC numbers, intent quality, scaling ceilings, and which channel wins for your stage." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2026-04-25T00:00:00Z" />
        <meta property="article:modified_time" content="2026-04-29T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="B2B Marketing" />
        <meta property="article:tag" content="Cold Email" />
        <meta property="article:tag" content="Paid Ads" />
        <meta property="article:tag" content="B2B Marketing" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "Cold email vs paid ads for B2B: real CAC numbers, intent quality, scaling ceilings, and which channel wins for your stage.",
          "image": OG_IMAGE,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.svg` } },
          "datePublished": "2026-04-25",
          "dateModified": "2026-04-29",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "cold email vs paid ads, B2B marketing channels, B2B CAC, lead generation comparison, outbound vs inbound",
          "articleSection": "B2B Marketing"
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main>
        <BlogColdEmailVsPaidAds />
      </main>
      <Footer />
    </>
  );
}

function BlogFollowUpSystemPage() {
  const slug = 'follow-up-system-for-b2b';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = "You Don't Have a Lead Problem. You Have a Follow-Up Problem.";
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="Most B2B companies have enough leads — they just stop following up after 2-3 touches. Here's how an automated follow-up system recovers that revenue with ROI from day one." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Most B2B companies have enough leads — they just stop following up after 2-3 touches. Here's the automated follow-up system that recovers that revenue." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2026-04-29T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Growth Systems" />
        <meta property="article:tag" content="Follow-Up" />
        <meta property="article:tag" content="Conversion" />
        <meta property="article:tag" content="Revenue Recovery" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "Most B2B companies have enough leads — they just stop following up after 2-3 touches. Here's how an automated follow-up system recovers that revenue with ROI from day one.",
          "image": OG_IMAGE,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.svg` } },
          "datePublished": "2026-04-29",
          "dateModified": "2026-04-29",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "B2B follow-up system, sales automation, conversion rate, lead nurture, revenue recovery",
          "articleSection": "Growth Systems"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How many follow-up touches does it take to close a B2B deal?", "acceptedAnswer": { "@type": "Answer", "text": "Research consistently shows most B2B deals close after 5-12 touches. Most sales reps stop after 2-3. An automated follow-up system fills that gap without adding to the rep's manual workload." } },
            { "@type": "Question", "name": "What is a B2B follow-up automation system?", "acceptedAnswer": { "@type": "Answer", "text": "A follow-up automation system sits on top of your CRM and fires multi-channel sequences (email, SMS, LinkedIn) based on lead behavior and stage. When a lead enters a stage or takes an action, the right message goes out automatically — without the rep having to remember." } },
            { "@type": "Question", "name": "How quickly does a follow-up system show ROI?", "acceptedAnswer": { "@type": "Answer", "text": "Usually within 30-60 days of install. Because it's converting leads you already paid for, the incremental revenue is pure margin. Most clients see a 20-40% lift in inbound conversion rate in the first two months." } }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogFollowUpSystem /></main>
      <Footer />
    </>
  );
}

function BlogCrmAutomationPage() {
  const slug = 'crm-automation-systems-for-b2b';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'CRM Automation: How Stage-Based Triggers Free Up Your Sales Team';
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="Move a lead from one CRM stage to another and the right email fires automatically. Here's how stage-based CRM automation gives each rep 9-14 hours back every week." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Stage-based CRM automation: every time a lead moves in your pipeline, the right action fires automatically. Here's what that system looks like and what it recovers." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2026-04-29T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Growth Systems" />
        <meta property="article:tag" content="CRM" />
        <meta property="article:tag" content="Sales Automation" />
        <meta property="article:tag" content="Sales Ops" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "Stage-based CRM automation: every time a lead moves in your pipeline, the right action fires automatically. 9-14 hours recovered per rep per week.",
          "image": OG_IMAGE,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.svg` } },
          "datePublished": "2026-04-29",
          "dateModified": "2026-04-29",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "CRM automation, stage-based triggers, sales ops, HubSpot automation, Pipedrive automation, sales efficiency",
          "articleSection": "Growth Systems"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is stage-based CRM automation?", "acceptedAnswer": { "@type": "Answer", "text": "Stage-based CRM automation means that every time a lead moves from one pipeline stage to another, a pre-built workflow fires automatically — sending emails, creating tasks, notifying reps, or routing the lead. The rep moves the lead; the system handles the execution." } },
            { "@type": "Question", "name": "How much time does CRM automation save per sales rep?", "acceptedAnswer": { "@type": "Answer", "text": "Based on installs across B2B sales teams, stage-based CRM automation typically recovers 9-14 hours per rep per week — covering manual email composition, follow-up tracking, and CRM data entry. On a 5-rep team that's roughly a full extra rep's selling time recovered without hiring." } },
            { "@type": "Question", "name": "Does CRM automation work with HubSpot, Pipedrive, and GoHighLevel?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Stage-based automation can be built on native workflow tools in HubSpot, Pipedrive, Close, GoHighLevel, and Salesforce. For more complex cases — multi-tool integrations, AI scoring, or advanced branching — a custom automation layer is built on top of existing CRM infrastructure." } }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogCrmAutomation /></main>
      <Footer />
    </>
  );
}

function BlogReadinessCheckPage() {
  const slug = 'how-to-know-if-your-business-needs-ai-automation';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'How To Know If Your Business Is Ready For AI Automation';
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="Not every business needs AI automation right now. A 5-question framework to find out if you're ready, what to build first, and how to calculate ROI before spending a dollar." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="5-question readiness framework: is your business ready for AI automation? What to build first, and how to calculate ROI before spending a dollar." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={OG_IMAGE} />
        <meta name="twitter:image" content={OG_IMAGE} />
        <meta property="article:published_time" content="2026-04-29T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Growth Systems" />
        <meta property="article:tag" content="AI Automation" />
        <meta property="article:tag" content="ROI" />
        <meta property="article:tag" content="Growth Systems" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "A 5-question framework to know if your business is ready for AI automation, what to build first, and how to calculate ROI before spending a dollar.",
          "image": OG_IMAGE,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.svg` } },
          "datePublished": "2026-04-29",
          "dateModified": "2026-04-29",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "AI automation readiness, business automation ROI, when to automate, AI systems for business",
          "articleSection": "Growth Systems"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "When should a B2B company invest in AI automation?", "acceptedAnswer": { "@type": "Answer", "text": "A B2B company is ready for AI automation when three things are true: there's a documented, recurring process eating real hours from the team; the process can be clearly described; and the ROI math (revenue lifted, cost saved, or time recovered) shows at least 3-5x return on system cost within 12 months." } },
            { "@type": "Question", "name": "What are the three reasons to install a business automation?", "acceptedAnswer": { "@type": "Answer", "text": "Every automation should hit one of three outcomes: make more money (lead gen, follow-up, conversion lift), save money (reduce CAC, cut tools, eliminate retainers), or save team time (remove repetitive tasks from people doing higher-value work). If the proposed automation doesn't clearly land in one of these, it's not worth building yet." } },
            { "@type": "Question", "name": "How do you calculate ROI on a business automation system?", "acceptedAnswer": { "@type": "Answer", "text": "Three equations: (1) Revenue lift: extra deals per year × avg deal size, minus annual system cost. (2) Cost savings: tools or headcount eliminated × cost, minus system cost. (3) Time savings: hours saved per week × 50 × loaded hourly cost, minus system cost. If any one of those shows 3-5x return, build it." } }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogReadinessCheck /></main>
      <Footer />
    </>
  );
}

function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>404 – Page Not Found | Quickomate</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <Navbar />
      <main>
        <NotFound />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="w-full min-h-screen bg-background text-textMain antialiased selection:bg-accent selection:text-background">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/cold-email-system-20-appointments-month" element={<BlogColdEmailPage />} />
            <Route path="/blog/why-you-should-own-your-cold-email-infrastructure" element={<BlogOwnInfraPage />} />
            <Route path="/blog/ai-vs-human-cold-email-copy" element={<BlogAiVsHumanPage />} />
            <Route path="/blog/ai-lead-generation-for-b2b-companies" element={<BlogAiLeadGenPage />} />
            <Route path="/blog/cold-email-vs-paid-ads-b2b" element={<BlogColdEmailVsPaidAdsPage />} />
            <Route path="/blog/follow-up-system-for-b2b" element={<BlogFollowUpSystemPage />} />
            <Route path="/blog/crm-automation-systems-for-b2b" element={<BlogCrmAutomationPage />} />
            <Route path="/blog/how-to-know-if-your-business-needs-ai-automation" element={<BlogReadinessCheckPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
