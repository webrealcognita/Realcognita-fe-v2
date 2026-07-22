/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['selector', '[data-theme="dark"]'],
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: '#ffffff',
        surface: '#f3f4f6',
        surface2: '#e5e7eb',
        accent: '#12b981',
        'accent-dim': 'rgba(18,185,129,0.12)',
        'accent-hover': '#10d079',
        'bg-master': '#FDFBF7',
        'bg-master-end': '#F4F2EE',
        text: '#111827',
        'text-muted': '#4b5563',
        'text-dim': '#6b7280',
        res: '#60a5fa',
        comm: '#f59e0b',
      },
      fontFamily: {
        komet: ['Komet', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: { sm: '6px', md: '10px', lg: '16px' },
    },
  },
  plugins: [],
};
