/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#002f34",
        secondary: "#eff1f3",
      },
      textColor: {
        DEFAULT: "#002f34",
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};
