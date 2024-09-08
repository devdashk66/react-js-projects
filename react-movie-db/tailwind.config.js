import keepPreset from "keep-react/preset";
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/keep-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['"Montserrat", sans-serif'],
      },
      colors: {
        primary: "#8a82f4",
        // primary: "#82bd69",
      },
    },
  },
  presets: [keepPreset],
  plugins: [],
};
