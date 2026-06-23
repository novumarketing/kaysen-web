import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: { DEFAULT: "#16A6CE", d: "#0E8AB0", dd: "#0A7290", 50: "#E8F7FC", 100: "#CDEFF8" },
        ink: { DEFAULT: "#0C2733", 800: "#143341", 700: "#26474F", 600: "#3C5763", 500: "#5E7480", 300: "#B4C2C8" },
        bd: "#DCE5E9",
        bd2: "#E9EEF1",
        bg: "#F6FAFB",
        bg2: "#EEF4F6",
        surface: "#FFFFFF",
        gold: "#E0A93B",
        wa: "#1FA855",
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        serif: ["var(--font-spectral)", "Georgia", "serif"],
        sans: ["var(--font-hanken)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
