/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#4f46e5",
          primary_dark: "#3730a3",
          primary_lite: "#e0e7ff",
          primary_medium: "#2563eb",
          dark: "#111827",
          light: "#475569",
        },
      },
    },
  },
  plugins: [],
};
