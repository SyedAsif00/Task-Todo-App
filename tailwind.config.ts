import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  extend: {
    fontFamily: { display: "Urbanist", "sans-serif": ["sans-serif"] },
    colors: require("./src/utils/colors.ts"),
    fontSize: {
      normal: "18px",
      small: "14px",
      lg: "20px",
      xl: "24px",
      "2xl": "32px",
      "3xl": "38px",
      "4xl": "48px",
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      bold: 700,
    },
  },
  plugins: [],
} satisfies Config;
