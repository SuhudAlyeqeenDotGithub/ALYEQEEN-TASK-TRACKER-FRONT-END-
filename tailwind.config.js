/** @type {import('tailwindcss').Config} */
import plugin from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito", "sans-serif"],
      },
    },
  },
  plugins: [
    plugin({ nocompatible: true }), // Adds scrollbar styles
  ],
};
