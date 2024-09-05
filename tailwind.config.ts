import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero-img': "url('/kalo-hero.svg')",
        'dark-logo': "url('/kalo-dark.svg')",
      },
      colors: {
        light: {
          text: '#232222',
          background: '#e7e7e7',
        },
        dark: {
          text: '#B4B1B1',
          background: '#202221',
        },
        'nav-light-bg': '#DADADA',
        'nav-dark-bg': '#222425',
        'icon-light': '#FFFBF8',
        'icon-dark': '#2A2C2D',
        "btn-light": "#153a45",
        "btn-dark": "#194472",
        "btn-text-light": "#ffffff",
        "btn-text-dark": "#ffffff",
        "btn-hover-light": "#1f4f5f",
        "btn-hover-dark": "#2561a1",
        "bet-light-bg": "#fffbf8",
        "bet-dark-bg": "#1b1d1c",
      },

    },
  },
  plugins: []
};
export default config;
