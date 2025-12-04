import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f3f6ff",
          100: "#e1e9ff",
          200: "#bed0ff",
          300: "#94b3ff",
          400: "#648cff",
          500: "#3a60ff",
          600: "#2a48db",
          700: "#1f36aa",
          800: "#162777",
          900: "#0e1a4d"
        }
      }
    }
  },
  plugins: [typography]
};

export default config;
