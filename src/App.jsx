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
import BlogColdEmailSubjectLines from './components/BlogColdEmailSubjectLines';
import BlogFindEmails from './components/BlogFindEmails';
import BlogDeliverability from './components/BlogDeliverability';
import BlogQualification from './components/BlogQualification';
import BlogAiSalesAgents from './components/BlogAiSalesAgents';
import BlogAgencyCost from './components/BlogAgencyCost';
import BlogVetAgency from './components/BlogVetAgency';
import BlogInfraSetup from './components/BlogInfraSetup';
import BlogPromotionsTab from './components/BlogPromotionsTab';
import BlogColdEmailVsLinkedIn from './components/BlogColdEmailVsLinkedIn';
import BlogAutomationToolsCompared from './components/BlogAutomationToolsCompared';
import BlogIsColdEmailWorthIt from './components/BlogIsColdEmailWorthIt';
import BlogAutomationROI from './components/BlogAutomationROI';
import BlogColdEmailBenchmarks from './components/BlogColdEmailBenchmarks';
import BlogPersonalizationAtScale from './components/BlogPersonalizationAtScale';
import BlogBuildVsHire from './components/BlogBuildVsHire';
import BlogColdEmailRecruiting from './components/BlogColdEmailRecruiting';
import NotFound from './components/NotFound';

const SITE_URL = 'https://quickomate.com';

function ogImage({ title, tag, kind = 'article' } = {}) {
  const params = new URLSearchParams();
  if (title) params.set('title', title);
  if (tag) params.set('tag', tag);
  params.set('kind', kind);
  return `${SITE_URL}/api/og?${params.toString()}`;
}

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Vasu Gupta",
  "url": `${SITE_URL}/#vasu-gupta`,
  "image": `${SITE_URL}/vasu-gupta.jpg`,
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
  const homeOg = ogImage({ title: 'AI Cold Email & Lead Gen for B2B Companies', tag: 'AI GROWTH PARTNER', kind: 'site' });
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
        <meta property="og:image" content={homeOg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={homeOg} />
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
        <meta property="og:image" content={ogImage({ title: 'Privacy Policy', tag: 'LEGAL', kind: 'site' })} />
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
  { slug: 'cold-email-personalization-at-scale', title: 'Personalization at Scale Without Sounding Like a Bot: The AI + Spintax Division of Labor', datePublished: '2026-05-20' },
  { slug: 'build-in-house-or-hire-cold-email-agency', title: 'Build It In-House or Hire an Agency? A B2B Outbound Decision Framework', datePublished: '2026-05-20' },
  { slug: 'cold-email-for-recruiting-agencies', title: "Cold Email for Recruiting Agencies: What's Different (2026 Playbook)", datePublished: '2026-05-20' },
  { slug: 'sales-automation-roi-calculator', title: 'The Real ROI of Sales Automation: How to Calculate Hours and Dollars Before You Spend', datePublished: '2026-05-19' },
  { slug: 'b2b-cold-email-benchmarks-2026', title: 'Realistic B2B Cold Email Benchmarks in 2026: Reply Rates, Meetings & Why Small Sends Win', datePublished: '2026-05-19' },
  { slug: 'is-cold-email-still-worth-it-2026', title: "Is Cold Email Still Worth It in 2026? An Honest Operator's Answer", datePublished: '2026-05-18' },
  { slug: 'n8n-vs-make-vs-zapier-sales-automation', title: 'n8n vs Make vs Zapier for Sales Automation: Which to Use at Your Volume', datePublished: '2026-05-17' },
  { slug: 'cold-email-vs-linkedin-outreach-2026', title: 'Cold Email vs LinkedIn Outreach in 2026: Why the Winners Run Both', datePublished: '2026-05-16' },
  { slug: 'cold-email-gmail-promotions-tab-fix', title: "Why Your Cold Email Lands in Gmail's Promotions Tab (and the Plain-Text Fix)", datePublished: '2026-05-15' },
  { slug: 'cold-email-infrastructure-how-many-domains-inboxes', title: 'Cold Email Infrastructure in 2026: Exactly How Many Domains and Inboxes You Need', datePublished: '2026-05-14' },
  { slug: 'how-to-vet-a-cold-email-agency-red-flags', title: 'How to Vet a Cold Email Agency: 9 Red Flags That Predict a Failed Engagement', datePublished: '2026-05-13' },
  { slug: 'cold-email-agency-cost-2026', title: 'What a B2B Cold Email Agency Actually Costs in 2026 (And What You Get at Each Tier)', datePublished: '2026-05-12' },
  { slug: 'ai-sales-agents-2026-what-works', title: "AI Sales Agents in 2026: What Actually Works (and What's Just Demos)", datePublished: '2026-05-10' },
  { slug: 'b2b-lead-qualification-bant-meddic-champ-2026', title: 'B2B Lead Qualification in 2026: BANT vs MEDDIC vs CHAMP (and What Actually Works)', datePublished: '2026-05-08' },
  { slug: 'cold-email-deliverability-spf-dkim-dmarc-guide', title: 'Cold Email Deliverability: SPF, DKIM, DMARC & Sender Reputation (B2B Guide)', datePublished: '2026-04-30' },
  { slug: 'cold-email-subject-lines-that-get-b2b-replies', title: 'Cold Email Subject Lines That Actually Get B2B Replies (2026 Playbook)', datePublished: '2026-04-30' },
  { slug: 'how-to-find-verified-emails-b2b-cold-outreach', title: 'How To Find Verified Emails for B2B Cold Outreach (Without Buying Lists)', datePublished: '2026-04-30' },
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
  const blogOg = ogImage({ title: 'B2B Growth Blog: Cold Email, AI Lead Gen, Sales Infra', tag: 'BLOG INDEX', kind: 'site' });
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
        <meta property="og:image" content={blogOg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={blogOg} />
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
  const ogImg = ogImage({ title, tag: 'COLD EMAIL', kind: 'article' });
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
        <meta property="og:image" content={ogImg} />
        <meta name="twitter:image" content={ogImg} />
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
          "image": ogImg,
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
  const ogImg = ogImage({ title, tag: 'COLD EMAIL', kind: 'article' });
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
        <meta property="og:image" content={ogImg} />
        <meta name="twitter:image" content={ogImg} />
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
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
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
  const ogImg = ogImage({ title, tag: 'AI SYSTEMS', kind: 'article' });
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
        <meta property="og:image" content={ogImg} />
        <meta name="twitter:image" content={ogImg} />
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
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
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
  const ogImg = ogImage({ title, tag: 'LEAD GEN', kind: 'article' });
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
        <meta property="og:image" content={ogImg} />
        <meta name="twitter:image" content={ogImg} />
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
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
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
  const ogImg = ogImage({ title, tag: 'B2B MARKETING', kind: 'article' });
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
        <meta property="og:image" content={ogImg} />
        <meta name="twitter:image" content={ogImg} />
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
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
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
  const ogImg = ogImage({ title, tag: 'GROWTH SYSTEMS', kind: 'article' });
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
        <meta property="og:image" content={ogImg} />
        <meta name="twitter:image" content={ogImg} />
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
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
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
  const ogImg = ogImage({ title, tag: 'CRM AUTOMATION', kind: 'article' });
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
        <meta property="og:image" content={ogImg} />
        <meta name="twitter:image" content={ogImg} />
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
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
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
  const ogImg = ogImage({ title, tag: 'GROWTH SYSTEMS', kind: 'article' });
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
        <meta property="og:image" content={ogImg} />
        <meta name="twitter:image" content={ogImg} />
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
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
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

function BlogColdEmailSubjectLinesPage() {
  const slug = 'cold-email-subject-lines-that-get-b2b-replies';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'Cold Email Subject Lines That Actually Get B2B Replies (2026 Playbook)';
  const ogImg = ogImage({ title, tag: 'COLD EMAIL', kind: 'article' });
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="Most cold emails die at the subject line. Six subject-line archetypes that hit 60-70% opens, eight patterns that kill reply rate, and A/B testing rules that produce statistically real winners on cold B2B traffic." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Six B2B subject-line archetypes that work, eight that don't, and the A/B testing rules that actually produce winners." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImg} />
        <meta property="article:published_time" content="2026-04-30T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Cold Email" />
        <meta property="article:tag" content="Cold Email" />
        <meta property="article:tag" content="Subject Lines" />
        <meta property="article:tag" content="Conversion" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "Six B2B subject-line archetypes that work, eight patterns that kill reply rate, and the A/B testing rules that produce real winners.",
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
          "datePublished": "2026-04-30",
          "dateModified": "2026-04-30",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "cold email subject lines, B2B subject lines, cold email open rate, cold email A/B testing",
          "articleSection": "Cold Email"
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogColdEmailSubjectLines /></main>
      <Footer />
    </>
  );
}

function BlogFindEmailsPage() {
  const slug = 'how-to-find-verified-emails-b2b-cold-outreach';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'How To Find Verified Emails for B2B Cold Outreach (Without Buying Lists)';
  const ogImg = ogImage({ title, tag: 'LEAD GEN', kind: 'article' });
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="A 3-layer source/enrichment/verification stack that produces clean, fresh B2B emails at >95% deliverability. Tools, workflows, catch-all domain handling, and GDPR/CAN-SPAM ground rules." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="A 3-layer source/enrichment/verification stack that gets you clean B2B emails — without buying lists or destroying your sender reputation." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImg} />
        <meta property="article:published_time" content="2026-04-30T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Lead Generation" />
        <meta property="article:tag" content="Lead Gen" />
        <meta property="article:tag" content="Prospecting" />
        <meta property="article:tag" content="Email Verification" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "A 3-layer stack to source, enrich, and verify B2B prospect emails at >95% deliverability — without buying lists.",
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
          "datePublished": "2026-04-30",
          "dateModified": "2026-04-30",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "find emails for cold outreach, B2B email finder, email verification, prospect emails, catch-all domains",
          "articleSection": "Lead Generation"
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogFindEmails /></main>
      <Footer />
    </>
  );
}

function BlogDeliverabilityPage() {
  const slug = 'cold-email-deliverability-spf-dkim-dmarc-guide';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'Cold Email Deliverability: SPF, DKIM, DMARC & Sender Reputation (B2B Guide)';
  const ogImg = ogImage({ title, tag: 'DELIVERABILITY', kind: 'article' });
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="If your email lands in spam, copy doesn't matter. The full B2B deliverability stack: SPF/DKIM/DMARC setup, dedicated cold-email domains, mailbox warm-up timelines, send volume thresholds, reputation killers, and blocklist recovery." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="SPF/DKIM/DMARC, dedicated sending domains, warm-up timelines, reputation killers, and blocklist recovery — the full technical deliverability guide." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImg} />
        <meta property="article:published_time" content="2026-04-30T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Email Infrastructure" />
        <meta property="article:tag" content="Cold Email" />
        <meta property="article:tag" content="Deliverability" />
        <meta property="article:tag" content="SPF" />
        <meta property="article:tag" content="DKIM" />
        <meta property="article:tag" content="DMARC" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "The full B2B cold email deliverability stack: SPF, DKIM, DMARC, dedicated domains, mailbox warm-up, send volume, reputation killers, blocklist recovery.",
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
          "datePublished": "2026-04-30",
          "dateModified": "2026-04-30",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "cold email deliverability, SPF DKIM DMARC, sender reputation, inbox placement, email warm-up, mailbox infrastructure",
          "articleSection": "Email Infrastructure"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What does email deliverability actually mean?", "acceptedAnswer": { "@type": "Answer", "text": "Deliverability is your inbox placement rate (IPR) — the percentage of emails that land in the primary inbox rather than Promotions, Spam, or being bounced/deferred. Open rate is a vanity metric if your IPR is below 80%; you're only seeing the top of a leaky funnel." } },
            { "@type": "Question", "name": "What are SPF, DKIM, and DMARC?", "acceptedAnswer": { "@type": "Answer", "text": "SPF is a DNS TXT record listing which servers are allowed to send on your domain's behalf. DKIM cryptographically signs each outgoing message so receivers can verify it wasn't tampered with. DMARC ties the two together with a policy (none, quarantine, reject) and forwards reports so you can see who's spoofing your domain." } },
            { "@type": "Question", "name": "Why use a separate domain for cold email?", "acceptedAnswer": { "@type": "Answer", "text": "Because one bad campaign can tank your sending reputation, and you don't want that to take your transactional and internal email with it. Buy 3-5 lookalike domains (e.g. get-yourbrand.com, try-yourbrand.com), set up 2-3 mailboxes per domain, rotate sends, and isolate the blast radius from your primary domain." } },
            { "@type": "Question", "name": "How long should mailbox warm-up take?", "acceptedAnswer": { "@type": "Answer", "text": "2-3 weeks of pure warm-up traffic before sending real campaigns, and you should keep 10-20% of all volume as ongoing warm-up traffic indefinitely. Skipping warm-up tanks your IPR within the first few hundred sends — there's no shortcut." } },
            { "@type": "Question", "name": "How many cold emails can one mailbox send per day?", "acceptedAnswer": { "@type": "Answer", "text": "30-40 emails per mailbox per day is the safe upper limit on Google Workspace or Microsoft 365 for cold sending. Scale by adding mailboxes, not by raising per-mailbox volume. 6-12 mailboxes gives you 200-400 sends/day across the fleet, which is enough to generate 15-20 qualified appointments per month at realistic reply rates." } }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogDeliverability /></main>
      <Footer />
    </>
  );
}

function BlogQualificationPage() {
  const slug = 'b2b-lead-qualification-bant-meddic-champ-2026';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'B2B Lead Qualification in 2026: BANT vs MEDDIC vs CHAMP (and What Actually Works)';
  const ogImg = ogImage({ title, tag: 'SALES PROCESS', kind: 'article' });
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="A decision matrix for B2B sales qualification frameworks: BANT, MEDDIC, MEDDPICC, CHAMP, GPCT, ANUM, FAINT. Which one fits your motion by ACV — plus a leaner four-question framework that works across deal sizes." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Comparing BANT, MEDDIC, MEDDPICC, CHAMP and the rest — which framework fits your B2B motion, plus the leaner four-question alternative." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImg} />
        <meta property="article:published_time" content="2026-05-08T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Sales Process" />
        <meta property="article:tag" content="Sales" />
        <meta property="article:tag" content="Qualification" />
        <meta property="article:tag" content="BANT" />
        <meta property="article:tag" content="MEDDIC" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "Comparison of B2B sales qualification frameworks (BANT, MEDDIC, MEDDPICC, CHAMP, GPCT, ANUM, FAINT) with a deal-size decision matrix.",
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
          "datePublished": "2026-05-08",
          "dateModified": "2026-05-08",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "B2B lead qualification, BANT vs MEDDIC, CHAMP qualification, sales qualification framework, MEDDPICC",
          "articleSection": "Sales Process"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is the BANT framework?", "acceptedAnswer": { "@type": "Answer", "text": "BANT stands for Budget, Authority, Need, Timeline — a four-criterion qualification framework invented at IBM in the 1960s. It's still useful for fast disqualification of small-to-mid deals but breaks down in modern buyer-controlled B2B where there's rarely one decision-maker and budget conversations early in the cycle kill warm leads." } },
            { "@type": "Question", "name": "What is the difference between BANT, MEDDIC, and CHAMP?", "acceptedAnswer": { "@type": "Answer", "text": "BANT is the lightest (4 criteria, budget-first), best for transactional B2B. MEDDIC is the heaviest (6 criteria including Metrics, Economic Buyer, Champion) and is built for enterprise complex sales with multiple stakeholders. CHAMP reorders BANT to put Challenges first instead of Budget, which fits modern buyer behavior better at mid-market ACVs." } },
            { "@type": "Question", "name": "Which qualification framework should I use?", "acceptedAnswer": { "@type": "Answer", "text": "Match the framework to your average contract value. Under $10k ACV: BANT or CHAMP (fast, lightweight). $10k-$100k ACV: CHAMP or MEDDPICC-Lite. Over $100k ACV with multi-stakeholder buying committees: full MEDDIC or MEDDPICC. The heavier the framework, the longer the qualification cycle — match it to your deal velocity." } },
            { "@type": "Question", "name": "Can AI handle B2B lead qualification?", "acceptedAnswer": { "@type": "Answer", "text": "AI augments qualification but doesn't replace it. Pre-call AI handles enrichment (job changes, funding events, hiring signals) and ICP scoring. Mid-call AI tools like Gong and Chorus extract MEDDIC signals from call recordings automatically. Post-call AI scores recordings against the framework. But final judgment on champion strength, urgency, and competitive risk still requires a human rep." } }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogQualification /></main>
      <Footer />
    </>
  );
}

function BlogAiSalesAgentsPage() {
  const slug = 'ai-sales-agents-2026-what-works';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = "AI Sales Agents in 2026: What Actually Works (and What's Just Demos)";
  const ogImg = ogImage({ title, tag: 'AI AGENTS', kind: 'article' });
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="An honest 2026 read on AI sales agents: where they reliably work (research, enrichment, CRM hygiene, inbound triage), where they still fail (cold copy, multi-stakeholder navigation, objection handling), and how to evaluate AI SDR products before buying." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="What AI sales agents actually do in 2026: the landscape, what works, what fails, the 11x-style pitch deconstructed, and a buying checklist." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImg} />
        <meta property="article:published_time" content="2026-05-10T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="AI Systems" />
        <meta property="article:tag" content="AI Agents" />
        <meta property="article:tag" content="Sales Automation" />
        <meta property="article:tag" content="AI SDR" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "An honest 2026 read on AI sales agents: what works, what fails, and how to evaluate AI SDR products before buying.",
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
          "datePublished": "2026-05-10",
          "dateModified": "2026-05-10",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "AI sales agents, AI SDR, AI sales automation, autonomous sales agents, 11x AI, AiSDR",
          "articleSection": "AI Systems"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Can AI sales agents replace human SDRs in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "Not entirely. AI agents reliably handle prospect enrichment, trigger event monitoring, initial draft cold email copy, inbound triage and meeting booking, CRM hygiene, and call-recording analysis. They still fail at authentic-sounding cold outreach at scale, multi-stakeholder navigation, real-time objection handling, pricing negotiations, and reading enterprise call dynamics. The realistic 2026 setup is 1 rep + AI stack producing the output of 1.7-2.2 reps — not the '10x AI SDR' marketing pitch." } },
            { "@type": "Question", "name": "What's the difference between AI sales agent products like 11x, AiSDR, and Artisan?", "acceptedAnswer": { "@type": "Answer", "text": "Most of these are similar stacks underneath: a research agent (Clay-style enrichment) plus an LLM email writer plus a sending platform (Smartlead/Instantly). The differences are mostly UX, brand, and whether they hide the human-in-loop. You can build the same functionality yourself for roughly $300/month vs $1,500-3,000/month for packaged products — the trade-off is build time vs polish." } },
            { "@type": "Question", "name": "How do you evaluate an AI sales agent before buying?", "acceptedAnswer": { "@type": "Answer", "text": "Five questions: (1) Exactly where in your funnel does it sit? (2) What's the human-in-loop rate in real customer setups? (3) Show me 30-day output from a similar ICP. (4) Can I export the data, prompts, and infrastructure if I leave? (5) What's the LLM context window per prospect? Small windows produce generic outputs." } }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogAiSalesAgents /></main>
      <Footer />
    </>
  );
}

function BlogAgencyCostPage() {
  const slug = 'cold-email-agency-cost-2026';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'What a B2B Cold Email Agency Actually Costs in 2026 (And What You Get at Each Tier)';
  const ogImg = ogImage({ title, tag: 'PRICING', kind: 'article' });
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="What does a B2B cold email agency cost in 2026? The three real price tiers ($2.5k–$15k+/mo), cost per meeting, how it compares to a loaded in-house SDR, and the pricing red flags that signal overpaying." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="The three real B2B cold email agency price tiers, cost per meeting, agency vs in-house SDR math, and pricing red flags." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImg} />
        <meta property="article:published_time" content="2026-05-12T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Agency & Buying" />
        <meta property="article:tag" content="Pricing" />
        <meta property="article:tag" content="Agency vs In-House" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "What a B2B cold email agency costs in 2026: the three price tiers, cost per meeting, agency vs in-house SDR comparison, and pricing red flags.",
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
          "datePublished": "2026-05-12",
          "dateModified": "2026-05-12",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "cold email agency cost, B2B lead generation agency pricing, cost per meeting, agency vs in-house SDR, cold email pricing",
          "articleSection": "Agency & Buying"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How much does a B2B cold email agency cost in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "B2B cold email agencies fall into three tiers: entry ($2,500–$5,000/month, often shared infrastructure and lighter copy), mid ($5,000–$10,000/month, dedicated infrastructure and managed campaigns), and full-service ($10,000–$15,000+/month, multi-channel with strategy). Build-and-own engagements front-load a one-time setup and hand you the infrastructure instead of charging an indefinite retainer." } },
            { "@type": "Question", "name": "What is a realistic cost per meeting from cold email?", "acceptedAnswer": { "@type": "Answer", "text": "Cost per qualified meeting from agency-run cold email typically runs $150–$1,500 depending on ICP difficulty, ACV, and how qualified the meeting is. Cheap per-lead pricing usually means low-quality, unvetted meetings; the meaningful number is cost per meeting that actually shows up and fits your ICP." } },
            { "@type": "Question", "name": "Is a cold email agency cheaper than hiring an SDR?", "acceptedAnswer": { "@type": "Answer", "text": "A fully loaded in-house SDR costs roughly $95,000–$140,000/year once you include salary, tools, management, and ramp time. A mid-tier agency at $5,000–$10,000/month is comparable in cash but faster to deploy and doesn't carry hiring/ramp risk. The build-and-own model is cheapest over a 12-month horizon because the retainer stops." } }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogAgencyCost /></main>
      <Footer />
    </>
  );
}

function BlogVetAgencyPage() {
  const slug = 'how-to-vet-a-cold-email-agency-red-flags';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'How to Vet a Cold Email Agency: 9 Red Flags That Predict a Failed Engagement';
  const ogImg = ogImage({ title, tag: 'AGENCY VETTING', kind: 'article' });
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="Most cold email agency horror stories were predictable on the sales call. Nine red flags — main-domain sending, vanity metrics, who keeps the infrastructure, long lock-ins — and the exact questions to ask before you sign." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Nine red flags that predict a failed cold email agency engagement, plus the questions to ask on the sales call." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImg} />
        <meta property="article:published_time" content="2026-05-13T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Agency & Buying" />
        <meta property="article:tag" content="Agency Vetting" />
        <meta property="article:tag" content="Cold Email" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "Nine red flags that predict a failed cold email agency engagement, and the exact questions to ask before you sign.",
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
          "datePublished": "2026-05-13",
          "dateModified": "2026-05-13",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "how to choose a cold email agency, cold email agency red flags, vet lead gen agency, B2B agency due diligence",
          "articleSection": "Agency & Buying"
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogVetAgency /></main>
      <Footer />
    </>
  );
}

function BlogInfraSetupPage() {
  const slug = 'cold-email-infrastructure-how-many-domains-inboxes';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'Cold Email Infrastructure in 2026: Exactly How Many Domains and Inboxes You Need';
  const ogImg = ogImage({ title, tag: 'INFRASTRUCTURE', kind: 'article' });
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="The tactical math, not vague advice: 3 inboxes per domain, 30-40 sends per inbox per day, the warm-up timeline, the Feb-2024 bulk-sender rules, and how to size cold email infrastructure for a target monthly volume." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="How many domains and inboxes you actually need for cold email in 2026, with the volume-sizing math and a deployment checklist." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImg} />
        <meta property="article:published_time" content="2026-05-14T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Email Infrastructure" />
        <meta property="article:tag" content="Infrastructure" />
        <meta property="article:tag" content="Cold Email" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "How many domains and inboxes you need for cold email in 2026, the per-inbox send caps, warm-up timeline, bulk-sender rules, and a deployment checklist.",
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
          "datePublished": "2026-05-14",
          "dateModified": "2026-05-14",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "cold email infrastructure, how many domains inboxes, sending volume, mailbox warm-up, bulk sender rules, cold email setup",
          "articleSection": "Email Infrastructure"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "How many inboxes per domain should I use for cold email?", "acceptedAnswer": { "@type": "Answer", "text": "Run 2-3 inboxes per sending domain. More than three mailboxes on one domain concentrates risk — if the domain's reputation slips, every mailbox on it goes down together. Spreading inboxes across multiple lookalike domains isolates the blast radius." } },
            { "@type": "Question", "name": "How many cold emails can one inbox send per day?", "acceptedAnswer": { "@type": "Answer", "text": "Keep each mailbox to 30-40 cold sends per day, including follow-ups, on Google Workspace or Microsoft 365. Scale total volume by adding mailboxes, not by raising per-mailbox volume — that's what keeps inbox placement high." } },
            { "@type": "Question", "name": "How many domains and inboxes do I need to send 8,000 cold emails a month?", "acceptedAnswer": { "@type": "Answer", "text": "At 30-40 sends per inbox per day across ~22 working days, each inbox does roughly 700-880 sends/month. To hit 8,000/month you need about 10-12 inboxes, which means 4-5 dedicated lookalike domains at 2-3 inboxes each, all fully warmed and authenticated." } }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogInfraSetup /></main>
      <Footer />
    </>
  );
}

function BlogPromotionsTabPage() {
  const slug = 'cold-email-gmail-promotions-tab-fix';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = "Why Your Cold Email Lands in Gmail's Promotions Tab (and the Plain-Text Fix)";
  const ogImg = ogImage({ title, tag: 'DELIVERABILITY', kind: 'article' });
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="Promotions isn't spam — but it's where cold outreach goes to die. The exact signals that trigger Gmail's tab classifier (including the counterintuitive List-Unsubscribe header and tracking pixels), and the plain-text fix that gets you to Primary." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Why cold email lands in Gmail's Promotions tab, the signals that trigger it, and the plain-text fix that gets you to Primary." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImg} />
        <meta property="article:published_time" content="2026-05-15T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Email Infrastructure" />
        <meta property="article:tag" content="Deliverability" />
        <meta property="article:tag" content="Gmail" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "Why cold email lands in Gmail's Promotions tab, the signals that trigger the classifier, and the plain-text fix that gets you into the Primary inbox.",
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
          "datePublished": "2026-05-15",
          "dateModified": "2026-05-15",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "cold email promotions tab, gmail primary inbox, plain text cold email, list-unsubscribe header, email tabs",
          "articleSection": "Email Infrastructure"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Why does my cold email go to the Promotions tab instead of Primary?", "acceptedAnswer": { "@type": "Answer", "text": "Gmail's tab classifier reads marketing signals: embedded images, multiple links, HTML wrappers, tracking pixels, a List-Unsubscribe header, and bulk-sender categorization. Any of these can route a one-to-one-looking cold email into Promotions, where reply rates collapse. Plain-text, link-light emails read as personal mail and land in Primary." } },
            { "@type": "Question", "name": "Does the List-Unsubscribe header send cold email to Promotions?", "acceptedAnswer": { "@type": "Answer", "text": "It can. Gmail treats a List-Unsubscribe header as a bulk/marketing signal, which nudges messages toward Promotions. For true one-to-one cold outreach under Google's bulk-sender thresholds you generally don't need it; if you send at bulk volumes (5,000+/day to Gmail) Google requires it, so it's a real tradeoff to manage by volume." } },
            { "@type": "Question", "name": "How do I get cold email out of the Promotions tab?", "acceptedAnswer": { "@type": "Answer", "text": "Send plain text (no HTML wrapper), keep it to three or four short sentences, remove tracking pixels, limit to a single plain-text link or none, drop image signatures, and write like a human one-off. Then seed-test a few accounts to confirm the message lands in Primary before scaling." } }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogPromotionsTab /></main>
      <Footer />
    </>
  );
}

function BlogColdEmailVsLinkedInPage() {
  const slug = 'cold-email-vs-linkedin-outreach-2026';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'Cold Email vs LinkedIn Outreach in 2026: Why the Winners Run Both';
  const ogImg = ogImage({ title, tag: 'MULTICHANNEL', kind: 'article' });
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="Email scales, LinkedIn warms. The realistic reply rates for each channel, LinkedIn's limits and ban risk, and an exact day-by-day multichannel cadence that lifts reply rates above either channel alone." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Cold email vs LinkedIn in 2026: realistic reply rates, the limits of each, and the exact multichannel cadence that wins." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImg} />
        <meta property="article:published_time" content="2026-05-16T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="B2B Marketing" />
        <meta property="article:tag" content="Cold Email" />
        <meta property="article:tag" content="LinkedIn" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "Cold email vs LinkedIn outreach in 2026: realistic reply rates, channel limits, and the day-by-day multichannel cadence that lifts results.",
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
          "datePublished": "2026-05-16",
          "dateModified": "2026-05-16",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "cold email vs linkedin, linkedin outreach, multichannel outreach, B2B cadence, sales sequence",
          "articleSection": "B2B Marketing"
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogColdEmailVsLinkedIn /></main>
      <Footer />
    </>
  );
}

function BlogAutomationToolsComparedPage() {
  const slug = 'n8n-vs-make-vs-zapier-sales-automation';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'n8n vs Make vs Zapier for Sales Automation: Which to Use at Your Volume';
  const ogImg = ogImage({ title, tag: 'AUTOMATION', kind: 'article' });
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="Per-task, per-operation, or per-execution billing changes everything at scale. A volume-first comparison of n8n, Make, and Zapier for lead routing, enrichment, CRM sync, and follow-up automation — with the cost math." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="n8n vs Make vs Zapier for sales automation, compared by volume and cost — and which to pick at your lead volume." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImg} />
        <meta property="article:published_time" content="2026-05-17T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Growth Systems" />
        <meta property="article:tag" content="Automation" />
        <meta property="article:tag" content="n8n" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "n8n vs Make vs Zapier for sales automation, compared by billing model, cost at scale, and which fits which lead volume.",
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
          "datePublished": "2026-05-17",
          "dateModified": "2026-05-17",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "n8n vs make vs zapier, sales automation tools, workflow automation, self-hosted n8n, automation cost",
          "articleSection": "Growth Systems"
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogAutomationToolsCompared /></main>
      <Footer />
    </>
  );
}

function BlogIsColdEmailWorthItPage() {
  const slug = 'is-cold-email-still-worth-it-2026';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = "Is Cold Email Still Worth It in 2026? An Honest Operator's Answer";
  const ogImg = ogImage({ title, tag: 'STRATEGY', kind: 'article' });
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="Yes — but only under specific conditions. Where cold email still beats paid ads 3-8x on cost per opportunity, where it quietly fails, and an honest list of when it's simply not right for your business." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="An honest operator's answer on whether cold email is still worth it in 2026 — where it works, where it fails, and when not to bother." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImg} />
        <meta property="article:published_time" content="2026-05-18T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="B2B Marketing" />
        <meta property="article:tag" content="Strategy" />
        <meta property="article:tag" content="Cold Email" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "An honest operator's answer on whether cold email is still worth it in 2026: where it works, where it fails, and when it's not right for you.",
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
          "datePublished": "2026-05-18",
          "dateModified": "2026-05-18",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "is cold email still worth it, does cold email work 2026, cold email roi, cold email vs paid ads",
          "articleSection": "B2B Marketing"
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogIsColdEmailWorthIt /></main>
      <Footer />
    </>
  );
}

function BlogAutomationROIPage() {
  const slug = 'sales-automation-roi-calculator';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'The Real ROI of Sales Automation: How to Calculate Hours and Dollars Before You Spend';
  const ogImg = ogImage({ title, tag: 'ROI', kind: 'article' });
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="Before you buy automation, run the math. The three ROI equations (time, cost, revenue), realistic 2026 benchmarks, a worked example, and an honest look at where automation ROI gets overstated." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="How to calculate the real ROI of sales automation before you spend — the three equations, realistic numbers, and a worked example." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImg} />
        <meta property="article:published_time" content="2026-05-19T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Growth Systems" />
        <meta property="article:tag" content="ROI" />
        <meta property="article:tag" content="Sales Automation" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "How to calculate the real ROI of sales automation before you spend: the three equations (time, cost, revenue), realistic benchmarks, and a worked example.",
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
          "datePublished": "2026-05-19",
          "dateModified": "2026-05-19",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "sales automation roi, automation roi calculator, hours saved automation, automation payback period",
          "articleSection": "Growth Systems"
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogAutomationROI /></main>
      <Footer />
    </>
  );
}

function BlogColdEmailBenchmarksPage() {
  const slug = 'b2b-cold-email-benchmarks-2026';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'Realistic B2B Cold Email Benchmarks in 2026: Reply Rates, Meetings & Why Small Sends Win';
  const ogImg = ogImage({ title, tag: 'BENCHMARKS', kind: 'article' });
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="Vendor benchmark reports inflate every number. Here are the realistic 2026 figures — reply rates, positive replies, meetings per hundred sends — and why small, targeted sends beat big blasts." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Realistic 2026 B2B cold email benchmarks — reply rates, positive replies, meetings per send — and why small targeted sends win." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImg} />
        <meta property="article:published_time" content="2026-05-19T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Cold Email" />
        <meta property="article:tag" content="Benchmarks" />
        <meta property="article:tag" content="Cold Email" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "Realistic 2026 B2B cold email benchmarks — reply rates, positive replies, meetings per hundred sends — and why small targeted sends beat big blasts.",
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
          "datePublished": "2026-05-19",
          "dateModified": "2026-05-19",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "cold email benchmarks 2026, cold email reply rate, b2b cold email statistics, meetings per send, cold email open rate",
          "articleSection": "Cold Email"
        })}</script>
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "What is a realistic cold email reply rate in 2026?", "acceptedAnswer": { "@type": "Answer", "text": "A realistic overall reply rate on cold B2B email in 2026 is roughly 3.4–5.8%, of which 1-2% are positive replies. Vendor case studies showing 8-12%+ are almost always cherry-picked warm audiences or tiny sends. Above ~5% sustained on genuinely cold traffic is the exception, not the benchmark." } },
            { "@type": "Question", "name": "How many meetings should 100 cold emails produce?", "acceptedAnswer": { "@type": "Answer", "text": "Expect roughly 1-2 booked meetings per 100 well-targeted cold emails, or about 0.15-0.25% meetings per email sent across a campaign. Tighter targeting and a relevant offer push toward the top of that range; broad lists and generic copy fall below it." } },
            { "@type": "Question", "name": "Do smaller cold email sends really get higher reply rates?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Highly targeted batches under ~50 recipients commonly see reply rates around 5.8% versus roughly 2.1% for large untargeted blasts. Smaller sends let you research the recipient and write a relevant line, which is the single biggest driver of replies." } }
          ]
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogColdEmailBenchmarks /></main>
      <Footer />
    </>
  );
}

function BlogPersonalizationAtScalePage() {
  const slug = 'cold-email-personalization-at-scale';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'Personalization at Scale Without Sounding Like a Bot: The AI + Spintax Division of Labor';
  const ogImg = ogImage({ title, tag: 'PERSONALIZATION', kind: 'article' });
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="Fully AI-generated personalization reads generic and prospects can smell it. The division of labor — spintax for structure, AI for the one line that matters, humans for the angle — that keeps reply rates high at volume." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="How to personalize cold email at scale without sounding like a bot — the spintax + AI + human division of labor." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImg} />
        <meta property="article:published_time" content="2026-05-20T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="AI Systems" />
        <meta property="article:tag" content="Personalization" />
        <meta property="article:tag" content="AI Copy" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "How to personalize cold email at scale without sounding like a bot — the spintax + AI + human division of labor, with a research-to-line pipeline.",
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
          "datePublished": "2026-05-20",
          "dateModified": "2026-05-20",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "cold email personalization at scale, spintax, AI cold email copy, personalization pipeline, cold email reply rate",
          "articleSection": "AI Systems"
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogPersonalizationAtScale /></main>
      <Footer />
    </>
  );
}

function BlogBuildVsHirePage() {
  const slug = 'build-in-house-or-hire-cold-email-agency';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = 'Build It In-House or Hire an Agency? A B2B Outbound Decision Framework';
  const ogImg = ogImage({ title, tag: 'AGENCY VS DIY', kind: 'article' });
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="The true cost of DIY cold email isn't the tools — it's the ramp time and the domains you'll burn learning. A decision framework for building in-house, hiring an agency, or running the hybrid build-and-own model." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="Build cold email in-house or hire an agency? A decision framework by stage, team, and budget — plus the hybrid model." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImg} />
        <meta property="article:published_time" content="2026-05-20T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Agency & Buying" />
        <meta property="article:tag" content="Agency vs DIY" />
        <meta property="article:tag" content="Cold Email" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "Build cold email in-house or hire an agency? A decision framework by company stage, team size, and budget, plus the hybrid build-and-own model.",
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
          "datePublished": "2026-05-20",
          "dateModified": "2026-05-20",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "build vs buy cold email, in-house vs agency outbound, diy cold email cost, hybrid outbound model",
          "articleSection": "Agency & Buying"
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogBuildVsHire /></main>
      <Footer />
    </>
  );
}

function BlogColdEmailRecruitingPage() {
  const slug = 'cold-email-for-recruiting-agencies';
  const url = `${SITE_URL}/blog/${slug}`;
  const title = "Cold Email for Recruiting Agencies: What's Different (2026 Playbook)";
  const ogImg = ogImage({ title, tag: 'RECRUITING', kind: 'article' });
  return (
    <>
      <Helmet>
        <title>{`${title} – Quickomate`}</title>
        <meta name="description" content="Recruiting is a two-sided market — you're selling to clients and sourcing candidates at once. The ICP signals, copy angles, and compliance rules that make cold email work for recruiting agencies specifically." />
        <link rel="canonical" href={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content="A 2026 cold email playbook built specifically for recruiting agencies — the client-side and candidate-side plays, signals, and compliance." />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImg} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image" content={ogImg} />
        <meta property="article:published_time" content="2026-05-20T00:00:00Z" />
        <meta property="article:author" content="Vasu Gupta" />
        <meta property="article:section" content="Lead Generation" />
        <meta property="article:tag" content="Recruiting" />
        <meta property="article:tag" content="Cold Email" />
        <script type="application/ld+json">{JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          "headline": title,
          "description": "A 2026 cold email playbook for recruiting agencies: the two-sided client/candidate model, recruiting-specific ICP signals, copy angles, and compliance.",
          "image": ogImg,
          "author": { "@type": "Person", "name": "Vasu Gupta", "url": "https://www.linkedin.com/in/refer-vasu/" },
          "publisher": { "@type": "Organization", "name": "Quickomate", "url": SITE_URL, "logo": { "@type": "ImageObject", "url": `${SITE_URL}/logo.png` } },
          "datePublished": "2026-05-20",
          "dateModified": "2026-05-20",
          "mainEntityOfPage": { "@type": "WebPage", "@id": url },
          "inLanguage": "en-US",
          "keywords": "cold email for recruiting agencies, recruitment outreach, recruiter cold email, staffing agency lead generation",
          "articleSection": "Lead Generation"
        })}</script>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema(title, slug))}</script>
      </Helmet>
      <Navbar />
      <main><BlogColdEmailRecruiting /></main>
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
            <Route path="/blog/cold-email-subject-lines-that-get-b2b-replies" element={<BlogColdEmailSubjectLinesPage />} />
            <Route path="/blog/how-to-find-verified-emails-b2b-cold-outreach" element={<BlogFindEmailsPage />} />
            <Route path="/blog/cold-email-deliverability-spf-dkim-dmarc-guide" element={<BlogDeliverabilityPage />} />
            <Route path="/blog/b2b-lead-qualification-bant-meddic-champ-2026" element={<BlogQualificationPage />} />
            <Route path="/blog/ai-sales-agents-2026-what-works" element={<BlogAiSalesAgentsPage />} />
            <Route path="/blog/cold-email-agency-cost-2026" element={<BlogAgencyCostPage />} />
            <Route path="/blog/how-to-vet-a-cold-email-agency-red-flags" element={<BlogVetAgencyPage />} />
            <Route path="/blog/cold-email-infrastructure-how-many-domains-inboxes" element={<BlogInfraSetupPage />} />
            <Route path="/blog/cold-email-gmail-promotions-tab-fix" element={<BlogPromotionsTabPage />} />
            <Route path="/blog/cold-email-vs-linkedin-outreach-2026" element={<BlogColdEmailVsLinkedInPage />} />
            <Route path="/blog/n8n-vs-make-vs-zapier-sales-automation" element={<BlogAutomationToolsComparedPage />} />
            <Route path="/blog/is-cold-email-still-worth-it-2026" element={<BlogIsColdEmailWorthItPage />} />
            <Route path="/blog/sales-automation-roi-calculator" element={<BlogAutomationROIPage />} />
            <Route path="/blog/b2b-cold-email-benchmarks-2026" element={<BlogColdEmailBenchmarksPage />} />
            <Route path="/blog/cold-email-personalization-at-scale" element={<BlogPersonalizationAtScalePage />} />
            <Route path="/blog/build-in-house-or-hire-cold-email-agency" element={<BlogBuildVsHirePage />} />
            <Route path="/blog/cold-email-for-recruiting-agencies" element={<BlogColdEmailRecruitingPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
