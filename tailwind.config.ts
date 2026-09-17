import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#F0F7F5",
          100: "#D8EBE5",
          200: "#B2D8CD",
          300: "#85BFAF",
          400: "#4D9D88",
          500: "#1A7461",
          600: "#13584E",
          700: "#0F4C42",
          800: "#0B3B36",
          900: "#072B24",
          950: "#041B17",
        },
        gold: {
          50: "#FDFBF5",
          100: "#FAF5E7",
          200: "#F4E8C9",
          300: "#ECD8A2",
          400: "#E2C374",
          500: "#D4AF37",
          600: "#C5A059",
          700: "#9C7938",
          800: "#755928",
          900: "#523D1C",
        },
        cream: {
          50: "#FDFAF5",
          100: "#FAF6EE",
          200: "#F5EFE0",
          300: "#ECE3CE",
          400: "#DDD1B6",
          500: "#CBBDA0",
        },
        sand: {
          50: "#F9F9F8",
          100: "#F4F2EE",
          200: "#E7E4DC",
          300: "#D5D1C6",
          400: "#B5AFA2",
          500: "#918B7E",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Playfair Display", "Cinzel", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Plus Jakarta Sans", "Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        luxury: "0 20px 40px -15px rgba(7, 43, 36, 0.08)",
        "luxury-hover": "0 30px 60px -15px rgba(7, 43, 36, 0.16)",
        "gold-glow": "0 0 25px rgba(212, 175, 55, 0.25)",
      },
      letterSpacing: {
        luxury: "0.2em",
        editorial: "0.08em",
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
    },
  },
  plugins: [],
};

export default config;
