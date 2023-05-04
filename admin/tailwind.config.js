/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4FD1C5",
        textPrimary: "#14B8A6",
        highlight: "#CCFBF1",
        bgGray: "#FBFAFD",
      },
    },
  },
  plugins: [],
};
