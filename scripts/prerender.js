// Build-time prerenderer.
//
// Why this exists: the site is a client-rendered React SPA. Crawlers (Bing,
// social unfurlers, AI search bots) and even Googlebot's first pass receive an
// empty <div id="root">, so the article body and per-route Helmet meta never
// reach them. This script serves the freshly built dist/ with a real static
// server, drives the system Chrome over every route, waits for React +
// react-helmet-async to finish, and writes the fully-rendered HTML back to
// dist/<route>/index.html. After this runs, every URL ships real HTML.
//
// Run automatically as part of `npm run build` (see package.json).

import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { existsSync, mkdirSync, writeFileSync, readFileSync } from 'node:fs';
import { createServer } from 'node:http';
import sirv from 'sirv';
import puppeteer from 'puppeteer-core';

// On Vercel/Lambda there is no system Chrome, so we use a bundled serverless
// Chromium. Locally we use the system Chrome (faster, no extra download).
const ON_VERCEL = !!process.env.VERCEL || !!process.env.AWS_LAMBDA_FUNCTION_NAME;

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const DIST = join(ROOT, 'dist');
const PORT = 4271;

// --- 1. Resolve the route list (single source of truth = blogPosts.js + statics) ---
function getRoutes() {
  const blogPostsSrc = readFileSync(join(ROOT, 'src/components/blogPosts.js'), 'utf8');
  const slugs = [...blogPostsSrc.matchAll(/slug:\s*'([^']+)'/g)].map((m) => m[1]);
  const blogRoutes = slugs.map((s) => `/blog/${s}`);
  const serviceRoutes = ['/ai-automation-agency', '/cold-email-agency', '/b2b-lead-generation-agency'];
  return ['/', '/blog', '/about', '/privacy', ...serviceRoutes, ...blogRoutes];
}

// --- 2. Find a Chrome/Chromium executable across environments ---
function findChrome() {
  if (process.env.PUPPETEER_EXECUTABLE_PATH) return process.env.PUPPETEER_EXECUTABLE_PATH;
  const candidates = [
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/google-chrome-stable',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
  ];
  for (const p of candidates) if (existsSync(p)) return p;
  return null;
}

async function main() {
  if (!existsSync(join(DIST, 'index.html'))) {
    console.error('[prerender] dist/index.html not found — run vite build first.');
    process.exit(1);
  }

  // Serve dist/ as an SPA so every route returns index.html and the app boots.
  const serve = sirv(DIST, { single: true, dev: false });
  const server = createServer((req, res) => serve(req, res));
  await new Promise((resolve) => server.listen(PORT, resolve));
  console.log(`[prerender] Serving dist/ on http://localhost:${PORT}`);

  // Pick the right Chromium: bundled serverless build on Vercel, system Chrome locally.
  let launchOpts;
  if (ON_VERCEL) {
    const { default: chromium } = await import('@sparticuz/chromium');
    launchOpts = {
      executablePath: await chromium.executablePath(),
      args: chromium.args,
      headless: true,
    };
    console.log('[prerender] Using @sparticuz/chromium (Vercel build).');
  } else {
    const executablePath = findChrome();
    if (!executablePath) {
      console.error('[prerender] No Chrome/Chromium found. Set PUPPETEER_EXECUTABLE_PATH.');
      process.exit(1);
    }
    launchOpts = {
      executablePath,
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
    };
    console.log(`[prerender] Using system Chrome: ${executablePath}`);
  }

  const browser = await puppeteer.launch(launchOpts);

  const routes = getRoutes();
  console.log(`[prerender] Rendering ${routes.length} routes...`);

  // Render every route into memory FIRST. We must not write any file (least of
  // all dist/index.html) mid-loop: the server serves dist/ as an SPA, so
  // overwriting the shell would make sirv serve a hydrated page for the next
  // route and every render would collapse to the same content.
  const rendered = [];
  let ok = 0;
  for (const route of routes) {
    const page = await browser.newPage();
    try {
      // Block external requests (OG images, fonts, analytics) so the page
      // settles immediately — we only need the rendered DOM, not the assets.
      // Local same-origin requests (the JS bundle, CSS) are allowed through.
      await page.setRequestInterception(true);
      page.on('request', (req) => {
        const url = req.url();
        const isLocal = url.startsWith(`http://localhost:${PORT}`) || url.startsWith('data:');
        if (isLocal) return req.continue();
        return req.abort();
      });

      await page.goto(`http://localhost:${PORT}${route}`, {
        waitUntil: 'domcontentloaded',
        timeout: 30000,
      });
      // Ensure React has painted real content (not the empty shell).
      await page.waitForFunction(
        () => document.querySelector('#root') && document.querySelector('#root').children.length > 0,
        { timeout: 15000 }
      );
      // Confirm the route actually rendered (Helmet title differs from the
      // default shell title) and give Helmet a tick to flush head tags.
      await page.waitForFunction(
        () => document.title && document.title.length > 0,
        { timeout: 5000 }
      );
      await new Promise((r) => setTimeout(r, 400));

      let html = await page.content();
      html = `<!doctype html>\n${html.replace(/^<!doctype html>/i, '').trim()}`;
      rendered.push({ route, html });
      ok += 1;
      console.log(`[prerender]   ✓ ${route}`);
    } catch (err) {
      console.error(`[prerender]   ✗ ${route} — ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  server.close();

  // Now write everything to disk.
  for (const { route, html } of rendered) {
    const outDir = route === '/' ? DIST : join(DIST, route);
    mkdirSync(outDir, { recursive: true });
    writeFileSync(join(outDir, 'index.html'), html, 'utf8');
  }

  console.log(`[prerender] Done: ${ok}/${routes.length} routes written.`);
  if (ok < routes.length) process.exit(1);
}

main().catch((err) => {
  console.error('[prerender] Fatal:', err);
  process.exit(1);
});
