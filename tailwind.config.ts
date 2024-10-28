import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1200px",
    },

    fontFamily: {},

    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#10151f",
        secondary: "#475467",
        accent: {
          DEFAULT: "#7edad2",
          hover: "#79d3cc",
        },
      },
    },
  },
  plugins: [],
};
export default config;
