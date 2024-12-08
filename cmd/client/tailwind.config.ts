import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        "moving-gradient": "moving-gradient linear 5s infinite"
      },
      keyframe: {
        "moving-gradient": {
          "0%": {backgroundPosition: "0% 50%"},
          "50%": {backgroundPosition: "100% 50%"},
          "100%": {backgroundPosition: "0% 50%"},
        }
      },
    },
  },
  plugins: [],
} satisfies Config;
