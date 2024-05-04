import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'main-page': "url('/main_page_picture.png')",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      fontFamily: {
        chakra: ['Chakra Petch', 'sans-serif'],
      },
      
    },
  },
  plugins: [],
};
export default config;
