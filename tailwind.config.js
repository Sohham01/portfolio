/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: '#08090B',
          card: '#0D0F12',
          surface: '#12151A',
          border: 'rgba(255, 255, 255, 0.07)',
          glow: 'rgba(59, 130, 246, 0.08)',
        },
        accent: {
          DEFAULT: '#3b82f6',
          dark: '#2563eb',
          light: '#60a5fa',
          cyan: '#38bdf8',
          indigo: '#6366f1',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      borderRadius: {
        'DEFAULT': '4px',
      },
    },
  },
  plugins: [],
}
