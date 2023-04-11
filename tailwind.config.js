/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'theme-light': 'rgba(31, 41, 55, 1)',
        'theme-dark': 'rgba(243, 244, 246, 1)',
        'theme-blue': 'rgba(255, 255, 255, 1)',
      },
      animation: {
        'spin-slow': 'spin 5s linear infinite',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

