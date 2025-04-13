/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        blink: 'blink 1s step-end infinite',
        'loading-bar': 'loading-bar 2s linear infinite',
      },
      keyframes: {
        blink: {
          'from, to': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
};