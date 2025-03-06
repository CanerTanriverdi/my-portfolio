/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        slate: {
          700: "#2d3748",
        },
        primary: {
          100: "#f0f4ff",
          200: "#d9e4ff",
          300: "#a9c6ff",
          400: "#7ba7ff",
          500: "#508bff",
          600: "#2a69ff",
          700: "#1e4fff",
          800: "#1435e0",
          900: "#0e2cc0",
        },
        secondary: {
          100: "#f0f4ff",
          200: "#d9e4ff",
          300: "#a9c6ff",
          400: "#7ba7ff",
          500: "#508bff",
          600: "#2a69ff",
          700: "#1e4fff",
          800: "#1435e0",
          900: "#0e2cc0",
        },
      },
    },
    plugins: [],
  },
};
