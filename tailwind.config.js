/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "delayed-tracking-in-expand": "delayed-tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000) 0.5s both"
      },
      keyframes: {
        "delayed-tracking-in-expand": {
          "0%": {
            "letter-spacing": "-.5em",
            opacity: "0"
          },
          "40%": {
            opacity: ".6"
          },
          to: {
            opacity: "1"
          }
        }
      }
    },

    
  },
  plugins: [],
}

