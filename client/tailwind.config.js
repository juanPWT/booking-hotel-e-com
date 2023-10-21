/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",

  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 6s linear infinite",
        "spin-delay": "spin 6s linear infinite  -3s",
      },
    },
  },
  plugins: [require("daisyui")],
};
