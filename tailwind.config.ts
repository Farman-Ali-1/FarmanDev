import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx,html}", // Target all files in src with relevant extensions
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",    // Next.js pages
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Components folder
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // App folder if used
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Background color variable
        foreground: "var(--foreground)", // Foreground color variable
      },
      keyframes: {
        progress: {
          "0%": { width: "0%", opacity: "1" },
          "100%": { opacity: "1" },
        },
        circleSlide: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
        imageDrop: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(0)" },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '20%, 60%': { transform: 'translateY(-12px)' },
          '40%, 80%': { transform: 'translateY(2px)' },
        },
      },
      animation: {
        progress: "progress 0.4s ease-in-out forwards",
        circleSlide: "circleSlide 1s ease-out forwards",
        imageDrop: "imageDrop 1s ease-out forwards",
        shake: 'shake 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
