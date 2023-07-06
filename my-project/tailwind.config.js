/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        baiJamjuree: ["Bai Jamjuree", "sans-serif"],
      },

      colors: {
        nBlue: "#3333F5",
        nGrey: "#171717",
        nGreen: "#7DFB5D",
      },

      gridTemplateColumns: {
        4: "repeat(4, 313px)",
        2: "repeat(2, 313px)",
        1: "repeat(1, 313px)",
      },
    },
  },
  plugins: [],
};
