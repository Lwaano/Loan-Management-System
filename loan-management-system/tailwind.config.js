/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#007a37', // Zambian green
          secondary: '#ef7d00', // Zambian orange
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif']
        }
      },
    },
    plugins: [require('@tailwindcss/forms'],
  }