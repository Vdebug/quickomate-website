// Single-entry build: run Vite's production build via its JS API, then
// prerender every route. Done in one Node process so nothing (e.g. a Vite
// reporter plugin calling process.exit) can sever a shell `&&` chain and skip
// the prerender step.

import { build } from 'vite';

console.log('[build] Generating sitemap...');
await import('./generate-sitemap.js');

console.log('[build] Running vite build...');
await build();
console.log('[build] Vite build complete. Starting prerender...');

// Import the prerender entry; it runs its main() on import.
await import('./prerender.js');
