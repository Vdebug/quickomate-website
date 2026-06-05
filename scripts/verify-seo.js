// Fast local SEO integrity check for the implementation plan.
// It verifies the canonical sitemap list, AI crawler access hints, and IndexNow key.

import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = process.cwd();
const HOST = 'https://quickomate.com';
const requiredPaths = [
  '/',
  '/blog',
  '/ai-automation-agency',
  '/cold-email-agency',
  '/b2b-lead-generation-agency',
  '/blog/sales-automation-roi-calculator',
  '/blog/marketing-automation-roi-2026',
  '/blog/ai-automation-examples',
  '/blog/cold-email-subject-lines-that-get-b2b-replies',
  '/blog/how-to-find-verified-emails-b2b-cold-outreach',
  '/blog/ai-automation-services-explained',
  '/blog/what-is-an-ai-automation-agency',
  '/blog/llm-agents-for-business',
  '/blog/ai-agent-workflow-automation',
];

function fail(message) {
  console.error(`[seo:verify] ${message}`);
  process.exitCode = 1;
}

const sitemapPath = join(ROOT, 'public/sitemap.xml');
const robotsPath = join(ROOT, 'public/robots.txt');
const llmsPath = join(ROOT, 'public/llms.txt');
const keyPath = join(ROOT, 'public/9d4c2f8a1b5e7c3d6f0a2b8e4d9c1f7b.txt');

for (const path of [sitemapPath, robotsPath, llmsPath, keyPath]) {
  if (!existsSync(path)) fail(`Missing ${path}`);
}

const sitemap = readFileSync(sitemapPath, 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);
const unique = new Set(urls);

if (urls.length !== unique.size) fail('Sitemap contains duplicate URLs');
if (urls.length < 48) fail(`Expected at least 48 sitemap URLs, found ${urls.length}`);

for (const path of requiredPaths) {
  const loc = `${HOST}${path === '/' ? '/' : path}`;
  if (!unique.has(loc)) fail(`Missing priority URL in sitemap: ${loc}`);
}

const robots = readFileSync(robotsPath, 'utf8');
for (const bot of ['OAI-SearchBot', 'GPTBot', 'ChatGPT-User', 'PerplexityBot', 'ClaudeBot']) {
  if (!robots.includes(`User-agent: ${bot}`)) fail(`robots.txt missing ${bot}`);
}
if (!robots.includes('Sitemap: https://quickomate.com/sitemap.xml')) {
  fail('robots.txt missing sitemap directive');
}

const llms = readFileSync(llmsPath, 'utf8');
for (const phrase of ['AI automation agency', 'AI Automation Agency', 'Cold Email Agency', 'B2B Lead Generation Agency']) {
  if (!llms.includes(phrase)) fail(`llms.txt missing phrase: ${phrase}`);
}

if (!process.exitCode) {
  console.log(`[seo:verify] OK: ${urls.length} sitemap URLs, crawler access hints, llms.txt, and IndexNow key present.`);
}
