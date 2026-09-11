import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#061426",
          secondary: "#081A2D",
        },
        card: {
          DEFAULT: "#0B2036",
          hover: "#102A43",
        },
        text: {
          primary: "#F5F7FA",
          secondary: "#A8B6C8",
          muted: "#71839A",
        },
        accent: {
          DEFAULT: "#19E6D0",
          bright: "#27F2DF",
          dark: "#0B9F98",
        },
        cyan: "#20D9FF",
        success: "#4ADE80",
        warning: "#FBBF24",
        border: {
          DEFAULT: "rgba(120, 190, 220, 0.16)",
          hover: "rgba(25, 230, 208, 0.55)",
        },
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        container: "1320px",
      },
      borderRadius: {
        card: "18px",
      },
      boxShadow: {
        card: "0 20px 50px -25px rgba(2, 12, 24, 0.7)",
        glow: "0 0 40px -8px rgba(25, 230, 208, 0.35)",
      },
      spacing: {
        "section-desktop": "150px",
        "section-tablet": "120px",
        "section-mobile": "90px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
