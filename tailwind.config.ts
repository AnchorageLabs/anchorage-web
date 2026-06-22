import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        navy: {
          950: "#020817",
          900: "#061323",
          800: "#0a1b31",
          700: "#102845",
        },
        signal: {
          cyan: "#4b7b94",
          blue: "#6b7280",
          violet: "#8b7ba8",
          green: "#6b7280",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 80px rgba(46, 233, 255, 0.16)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)",
        sketch: "5px 5px 0 var(--shadow-ink)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
