/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    './pages/**/*.{vue,js,ts}',
    './components/**/*.{vue,js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', 'sans-serif'],
      },
      fontSize: {
        'h1': '3rem', // Customize h1 size
        'h2': '2.5rem', // Customize h2 size
        'h3': '2rem', // Customize h3 size
      },
    },
  },
  plugins: [],
};
