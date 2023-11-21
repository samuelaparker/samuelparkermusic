import { Koulen } from "next/font/google";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      koulen: ["var(--font-koulen)"],
      dawning: ["var(--font-dawning)"], // display (script) font
      rubik: ["var(--font-rubik)"], // secondary display font
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-koulen)"], // default font
      },
      backgroundImage: {
        mobile: "url('../public/bg-mobile.png')",
        desktop: "url('../public/bg-desktop.png')",
      },
    },
    plugins: [],
  },
};
export default config;
