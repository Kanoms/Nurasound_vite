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
        offWhite: "#E5E5E5",
        lGreen: "#ACACAC",
        lGrey: "#E0E0E0",
        kGrey: "#272727",
      },

      gridTemplateColumns: {
        n4: "repeat(4, 313px)",
        n2: "repeat(2, 313px)",
        n1: "repeat(1, 313px)",
        ft1: "30% 70%",
      },
    },
  },
  plugins: [],
};
