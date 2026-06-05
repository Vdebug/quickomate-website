// Submit site URLs to Bing IndexNow so pages get indexed fast.
// Run manually after deploy:
//   npm run indexnow           -> all canonical URLs from sitemap.xml
//   npm run indexnow:priority  -> homepage, service pages, and pages already earning impressions
// Reads sitemap.xml to avoid any drift between sitemap and this script.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const HOST = 'quickomate.com';
const KEY = '9d4c2f8a1b5e7c3d6f0a2b8e4d9c1f7b';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;
const PRIORITY_PATHS = [
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

function parseUrlsFromSitemap(xml) {
  const matches = xml.matchAll(/<loc>(.*?)<\/loc>/g);
  return [...matches].map((m) => m[1].trim());
}

async function submitToIndexNow(endpoint, urls) {
  const body = JSON.stringify({
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  });

  const res = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body,
  });

  return res.status;
}

async function submitSingleUrl(url) {
  const params = new URLSearchParams({
    url,
    key: KEY,
    keyLocation: KEY_LOCATION,
  });
  const res = await fetch(`https://www.bing.com/indexnow?${params.toString()}`);
  return res.status;
}

const sitemapPath = join(ROOT, 'public/sitemap.xml');
const xml = readFileSync(sitemapPath, 'utf8');
const sitemapUrls = parseUrlsFromSitemap(xml);
const priorityUrls = PRIORITY_PATHS.map((path) => `https://${HOST}${path === '/' ? '/' : path}`);
const priorityMode = process.argv.includes('--priority');
const urls = priorityMode
  ? priorityUrls.filter((u) => sitemapUrls.includes(u))
  : sitemapUrls;

console.log(`[indexnow] Mode: ${priorityMode ? 'priority' : 'all'}`);
console.log(`[indexnow] Submitting ${urls.length} URLs...`);
urls.forEach((u) => console.log(`  ${u}`));

// IndexNow accepts up to 10,000 URLs per batch; all major engines share the protocol.
// Bing is the primary target; submitting once reaches Bing, Yandex, and others.
const ENDPOINTS = [
  'https://www.bing.com/indexnow',
  'https://api.indexnow.org/indexnow',
];

for (const endpoint of ENDPOINTS) {
  try {
    const status = await submitToIndexNow(endpoint, urls);
    console.log(`[indexnow] ${endpoint} → HTTP ${status}`);
    if (status === 200 || status === 202) {
      console.log(`[indexnow] ✓ Accepted`);
    } else if (status === 422) {
      console.warn(`[indexnow] ✗ Invalid URLs in list — check sitemap for non-canonical entries`);
    } else {
      console.warn(`[indexnow] Unexpected status ${status}`);
    }
  } catch (err) {
    console.error(`[indexnow] Error hitting ${endpoint}: ${err.message}`);
  }
}

if (urls.length && process.argv.includes('--single-fallback')) {
  const url = urls[0];
  const status = await submitSingleUrl(url);
  console.log(`[indexnow] single URL fallback ${url} → HTTP ${status}`);
}
