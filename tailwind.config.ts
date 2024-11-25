import { DM_Serif_Text, Lexend_Deca } from "next/font/google";
import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin"; // Import the plugin type helper

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
        lightBrownText: "#f9e4d1",
        darkBrown: "#8D4523",
        lightBrown: "#ECDED1",
        primary: "#1DA1F2",
        secondary: "#14171A",
        accent: "#FFAD1F",
        imageBg: "#E5D6C6",
        lightGreen: "#91877A",
        darkGreen: "#103A39",
        lightishBrown: "#C6A386",
        lightestBrown: "#EEDDCD",
        grey: "#EEE9E3",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        Ephesis: ["Ephesis"],
        DM_Serif_Text: ["DM Serif Text"],
        Lexend_Deca: ["Lexend Deca"],
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".clip-torn": {
          clipPath: `polygon(
            0% 100%, 10% 90%, 20% 100%, 30% 90%, 40% 100%, 
            50% 90%, 60% 100%, 70% 90%, 80% 100%, 90% 90%, 100% 100%
          )`,
        },
      });
    }),
  ],
};

export default config;
