/** @type {import('tailwindcss').Config} */
import tailwindcss from "@tailwindcss/vite";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      // Tablet devices
      md: "768px",

      // Desktop devices
      lg: "1024px",
    },
    extend: {},
  },
  plugins: [tailwindcss()],
};
