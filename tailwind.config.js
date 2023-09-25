/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/preline/dist/*.js",
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        title: ["Sedgwick Ave Display", "cursive"],
      },
    },
  },
  plugins: [require("preline/plugin")],
};
