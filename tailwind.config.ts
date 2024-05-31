import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/PagesLayout/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    screens: {
      "xs": "375px",
      "md": "768px",
      "lg": "1280px",
      "xl": "1536px"
    },
    colors: {
      "titleColor": "#08CAD4",
      "mainTextColor": "#FFFFF0"
    },
    extend: {
      fontFamily: {
        chakra: ['Chakra Petch', 'sans-serif'],
      },
      letterSpacing: {
        "title": "0.4rem",
      },
      backgroundSize: {
        "100": "100%, 100%"
      },
      boxShadow: {
        "inner-picture": ""
      },
      animation: {
        'pulse-slow': 'pulse 5s infinite',
      }
    },
  },
  plugins: [],
};
export default config;
