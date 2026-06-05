/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        yatra: ["'Yatra One'", "system-ui"],
         inter: ['Inter', 'sans-serif'],
         poppins: ['Poppins', 'sans-serif'],
        marathi: [
          "'Tiro Devanagari Marathi'",
          "'Devanagari MT'",
          "serif",
        ],
      },
    },
  },
  plugins: [],
};
