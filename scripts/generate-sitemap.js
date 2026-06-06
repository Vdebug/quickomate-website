// Generate public/sitemap.xml from the canonical post list in blogPosts.js so
// it never drifts out of sync. Each post's lastmod is the latest meaningful
// content update date when available, otherwise its publish date.
// Runs at the start of the build (see scripts/build.js).

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { writeFileSync } from 'node:fs';
import { blogPosts } from '../src/components/blogPosts.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const SITE_URL = 'https://quickomate.com';

function url(loc, lastmod, changefreq, priority) {
  return `  <url>\n    <loc>${loc}</loc>\n    <lastmod>${lastmod}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;
}

// Newest post date drives the "freshness" of the home + blog index.
const newest = blogPosts
  .map((p) => p.updatedIso || p.dateIso)
  .sort()
  .reverse()[0];

const entries = [
  url(`${SITE_URL}/`, newest, 'weekly', '1.0'),
  url(`${SITE_URL}/ai-automation-agency`, newest, 'monthly', '0.9'),
  url(`${SITE_URL}/cold-email-agency`, newest, 'monthly', '0.9'),
  url(`${SITE_URL}/b2b-lead-generation-agency`, newest, 'monthly', '0.9'),
  url(`${SITE_URL}/about`, newest, 'monthly', '0.7'),
  url(`${SITE_URL}/tools`, newest, 'monthly', '0.8'),
  url(`${SITE_URL}/blog`, newest, 'weekly', '0.8'),
  ...blogPosts.map((p) =>
    url(`${SITE_URL}/blog/${p.slug}`, p.updatedIso || p.dateIso, 'monthly', '0.9')
  ),
  url(`${SITE_URL}/privacy`, '2026-04-29', 'yearly', '0.3'),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries.join('\n')}\n</urlset>\n`;

writeFileSync(join(ROOT, 'public/sitemap.xml'), xml, 'utf8');
console.log(`[sitemap] Wrote ${entries.length} URLs to public/sitemap.xml`);
