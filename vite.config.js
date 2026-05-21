import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    // Split heavy dependencies out of the main app bundle so the initial
    // payload (and LCP) shrinks. gsap is large and used on only a few routes;
    // react core and router are stable vendor code that can be cached separately.
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          if (id.includes('gsap')) return 'gsap';
          if (id.includes('react-router') || id.includes('react-helmet')) return 'react-router';
          if (id.includes('/react/') || id.includes('/react-dom/') || id.includes('/scheduler/')) return 'react-vendor';
          return 'vendor';
        },
      },
    },
  },
});
