/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": { width: 0 },
          "100%": { width: "100%" },
        },
        blinking: {
          "0%": { borderRightColor: "transparent" },
          "100%": { borderRightColor: "white" },
        },
        gradient: {
          "0%": {
            backgroundPosition: "0% 50%",
          },
          "50%": {
            backgroundPosition: "100% 50%",
          },
          "100%": {
            backgroundPosition: "0% 50%",
          },
        },
      },
      animation: {
        typing: "typing 1s steps(20, end) forwards, blinking .8s infinite",
        gradient: "gradient 15s ease infinite",
      },
    },
  },
  plugins: [],
};
