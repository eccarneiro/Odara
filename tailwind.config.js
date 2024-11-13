/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dominant': '#794f25', // Cor dominante
        'secondary': '#e3cbb3', // Cor secundária
      },
    },
  },
  plugins: [],
}
