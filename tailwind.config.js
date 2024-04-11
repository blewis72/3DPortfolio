/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'light-pink' : '#D3C0CD',
        'light-purple': '#E3DFFF',
        'gold': '#776A3C',
        'blue': '#4B575D'
       
       
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
       lineargradient: "linear-gradient(180deg, light-pink 70%, light-purple 50%)",
      },
    },
  },
  plugins: [],
};