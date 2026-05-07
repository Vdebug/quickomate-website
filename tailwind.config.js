/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F5F3EE', // Off-white main background
        surface: '#E8E4DD',    // Paper for cards/surfaces
        primary: '#111111',    // Black text/dark bg
        accent: '#E63B2E',     // Signal Red
        textMain: '#111111',   // Black text
        textInverted: '#E8E4DD', // Paper for dark backgrounds
      },
      fontFamily: {
        heading: ['"Space Grotesk"', 'sans-serif'],
        sans: ['"Space Grotesk"', 'sans-serif'], // Brutalist uses Space Grotesk everywhere for sans
        drama: ['"DM Serif Display"', 'serif'],
        mono: ['"Space Mono"', 'monospace'],
      },
      transitionTimingFunction: {
        'bounce-spring': 'cubic-bezier(0.34, 1.56, 0.64, 1)',
        'magnetic': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'expo-out': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
    },
  },
  plugins: [],
}
