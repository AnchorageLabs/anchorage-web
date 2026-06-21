import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        "bg-primary": "var(--bg-primary)",
        "bg-secondary": "var(--bg-secondary)",
        "bg-tertiary": "var(--bg-tertiary)",
        "text-primary": "var(--text-primary)",
        "text-secondary": "var(--text-secondary)",
        "text-tertiary": "var(--text-tertiary)",
        "border-color": "var(--border)",
        "accent-primary": "var(--accent-primary)",
        "accent-secondary": "var(--accent-secondary)",
        "accent-success": "var(--accent-success)",
        "accent-warning": "var(--accent-warning)",
        "accent-error": "var(--accent-error)",
        navy: {
          950: "#020817",
          900: "#061323",
          800: "#0a1b31",
          700: "#102845",
        },
        signal: {
          cyan: "#2ee9ff",
          blue: "#4d8dff",
          violet: "#8d5cff",
          green: "#5cffb1",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        sm: "0 1px 2px var(--shadow-ink)",
        md: "0 4px 12px var(--shadow-ink)",
        lg: "0 8px 24px var(--shadow-ink)",
        glow: "0 0 80px rgba(46, 233, 255, 0.16)",
        card: "0 24px 80px rgba(0, 0, 0, 0.35)",
        sketch: "0 1px 3px var(--shadow-ink)",
      },
      fontSize: {
        xs: ["12px", { lineHeight: "1.5" }],
        sm: ["14px", { lineHeight: "1.5" }],
        base: ["16px", { lineHeight: "1.6" }],
        lg: ["18px", { lineHeight: "1.6" }],
        xl: ["20px", { lineHeight: "1.6" }],
        "2xl": ["24px", { lineHeight: "1.4" }],
        "3xl": ["30px", { lineHeight: "1.2" }],
        "4xl": ["36px", { lineHeight: "1.1" }],
        "5xl": ["48px", { lineHeight: "1" }],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        heavy: "800",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
