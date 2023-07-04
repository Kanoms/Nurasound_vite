/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },

      colors: {
        nBlue: "#3333F5",
      },
    },
  },
  plugins: [],
};
