import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: "#0f2a4a",
        "navy-2": "#16365c",
        blue: "#2563c9",
        "blue-soft": "#e8f0fd",
        gold: "#e8a93b",
        "gold-soft": "#fcf3e1",
        ink: "#16263b",
        muted: "#5b6b7e",
        bg: "#ffffff",
        "bg-2": "#f6f9fd",
        line: "#e4ecf5",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-poppins)", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 50px rgba(15,42,74,.10)",
      },
      borderRadius: {
        xl2: "18px",
      },
    },
  },
  plugins: [],
};

export default config;
