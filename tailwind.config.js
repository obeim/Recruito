/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F67E7",
        secondary: "#1AD7BE",
        neutralGray: "#848EA0",
        lightBlueGray: "#CFD8E3",
        darkGray: "#3E4757",
        darkBlue: "#004CD3",
        aquaGreen: "#1BD1C2",
        darkSky: "#152232",
        lightGray: "#E6E8EC",
        darkBlueGray: "#0B1928",
      },
    },
  },
  plugins: [],
};
