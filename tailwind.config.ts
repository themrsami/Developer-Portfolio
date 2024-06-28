import type { Config } from "tailwindcss";
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          'custom-gradient-dark': 'linear-gradient(to right, #0E0008, #14020C, #0E0008 )',
          'custom-gradient-light': 'linear-gradient(to right, #ffcce6, #ffe6f2, #ffcce6 )'
      },
    },
  },
  plugins: [],
};
export default config;
