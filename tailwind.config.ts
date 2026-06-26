import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#18231f",
        moss: "#5e6f5c",
        sage: "#9aac8f",
        clay: "#b48364",
        sand: "#efe7dc",
        linen: "#f8f4ee",
        stone: "#d9d1c4",
        slateleaf: "#344842"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-lora)", "Lora", "Georgia", "serif"]
      },
      boxShadow: {
        soft: "0 22px 60px rgba(24, 35, 31, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
