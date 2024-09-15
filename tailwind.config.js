/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#032541",
        secondary: "#01b4e4",
        light: "#fff",
        "custom-gray": "#333",
        "gray-light": "#ccc",
        red: "#a92820",
        tmdbLightBlue: "#5b8eb9",
      },
    },
  },
  plugins: [],
};
