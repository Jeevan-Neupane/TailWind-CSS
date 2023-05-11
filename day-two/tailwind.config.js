/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      sm: '1rem',
      base: '2rem',
      xl: '3rem',
      '2xl': '4rem',
      '3xl': '5rem',
      '4xl': '6rem',
      '5xl': '7rem',
    }
  },
  plugins: [],
}