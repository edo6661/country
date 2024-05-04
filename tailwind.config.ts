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
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      backgroundColor: {
        primaryGreen: "var(--primary-green-color)",
        primarySlate: "var(--primary-slate-color)",
      },
      colors: {
        secondaryWhite: "var(--secondary-white-color)",
        tertiaryWhite: "var(--tertiary-white-color)",
        primaryWhite: "var(--primary-white-color)",
        primaryPurple: "var(--primary-purple-color)",
        primaryBlack: "var(--primary-black-color)",
        primaryRed: "var(--primary-red-color)",
      },
    },
  },
  plugins: [],
};
export default config;
