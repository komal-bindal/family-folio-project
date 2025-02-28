import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        paleBeige: "#f9e4d1",
        rusticBrown: "#8D4523",
        lightSand: "#ECDED1",
        lightKhaki: "#E5D6C6",
        oliveGreen: "#91877A",
        forestGreen: "#103A39",
        warmTaupe: "#C6A386",
        creamBeige: "#EEDDCD",
        softGrey: "#EEE9E3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        ephesis: ["Ephesis", "serif"],
        dmSerifText: ["DM Serif Text", "serif"],
        lexendDeca: ["Lexend Deca", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
