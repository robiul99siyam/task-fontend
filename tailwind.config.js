/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        sway: "sway 5s ease-in-out infinite",
      },
      keyframes: {
        sway: {
          "0%, 100%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(10px)" },
        },
      },
    },
  },
  plugins: [],
};
