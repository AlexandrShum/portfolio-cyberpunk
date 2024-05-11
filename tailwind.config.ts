import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/PagesLayout/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        chakra: ['Chakra Petch', 'sans-serif'],
      },
      letterSpacing: {
        "20": "0.7rem"
      },
      backgroundSize: {
        "100": "100%, 100%"
      },
      boxShadow: {
        "inner-picture": ""
      }
    },
  },
  plugins: [],
};
export default config;
