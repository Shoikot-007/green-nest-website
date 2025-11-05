// tailwind.config.js
import { defineConfig } from "tailwindcss";

export default defineConfig({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#3A7D44",
      secondary: "#6FBF73",
      accent: "#DDEEDF",
      brown: "#8B5E3C",
      cream: "#F9F8F4",
      charcoal: "#2B2B2B",
      terracotta: "#C47E5A",
      mutedYellow: "#F3EAC2",
      dustyBlue: "#A3C6C4",
      white: "#FFFFFF",
      black: "#000000",
    },
    fontFamily: {
      heading: ["Poppins", "sans-serif"],
      body: ["Inter", "sans-serif"],
    },
    boxShadow: {
      soft: "0 4px 12px rgba(0,0,0,0.05)",
    },
    borderRadius: {
      card: "1rem",
    },
  },
});