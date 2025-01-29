import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Urbanist", "sans-serif"], // ✅ Corrected font family
      },
      colors: {
        lightBlue: "#5DADE2",
        lightPurple: "#A569BD",
        black: "#000000",
      },
      fontSize: {
        normal: ["18px", "1.125rem"],
        small: ["14px", "0.875rem"],
        lg: ["20px", "1.25rem"],
        xl: ["24px", "1.5rem"],
        "2xl": ["32px", "2rem"],
        "3xl": ["38px", "2.375rem"],
        "4xl": ["48px", "3rem"],
      },
      fontWeight: {
        normal: "400",
        medium: "500",
        bold: "700",
      },
    },
  },
  plugins: [],
};

export default config;
