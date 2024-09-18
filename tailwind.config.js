/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',                // Main HTML file
    './src/**/*.{js,jsx,ts,tsx}',  // All JS, JSX, TS, and TSX files in src folder
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#0f0f0f',
      },
    },
  },
  plugins: [],
  keyframes: {
    fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
    slideDown: {
      '0%': { transform: 'translateY(-100%)' },
      '100%': { transform: 'translateY(0)' },
    }
  },
  animation: {
    'fade-in': 'fadeIn 1s ease-in-out',
    'slide-down': 'slideDown 1s ease-in-out',
  },
};
