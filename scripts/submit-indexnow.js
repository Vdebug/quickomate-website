// Submit all site URLs to Bing IndexNow so pages get indexed fast.
// Run manually after deploy: node scripts/submit-indexnow.js
// Reads sitemap.xml to avoid any drift between sitemap and this script.

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const HOST = 'quickomate.com';
const KEY = '9d4c2f8a1b5e7c3d6f0a2b8e4d9c1f7b';
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

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

const sitemapPath = join(ROOT, 'public/sitemap.xml');
const xml = readFileSync(sitemapPath, 'utf8');
const urls = parseUrlsFromSitemap(xml);

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
