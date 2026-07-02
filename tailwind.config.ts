import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0a1f33",
          700: "#13314f",
          600: "#1b3a5b",
        },
        paper: "#f4f1ea",
        accent: {
          // Orange text on the dark navy background (meets AA 4.5:1 on #0a1f33).
          light: "#ff7a4d",
          // Brand orange: icons, borders, the signage stripe, and large display text.
          DEFAULT: "#e2562a",
          // Button fills (white text) and small orange text on light backgrounds
          // — darkened so both clear WCAG AA 4.5:1.
          dark: "#b8431b",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        sans: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
