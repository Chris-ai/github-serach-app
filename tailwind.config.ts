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
        azure: "#0079FF",
        bluegray: "#697C9A",
        steelblue: "#4B6A9B",
        midnightblue: "#2B3442",
        lavender: "#F6F8FF",
        offwhite: "#FEFEFE",
        navyblue: "#141D2F",
        deepblue: "#1E2A47",
      },
    },
  },
  plugins: [],
  darkMode: ["class", '[data-mode="dark"]'],
};
export default config;
