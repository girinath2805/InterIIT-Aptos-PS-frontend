/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        mf: "990px",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        "slide-out": {
          "0%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
          "100%": {
            "-webkit-transform": "translateX(-120%)",
            transform: "translateX(-120%)",
          },
        },
      },
      animation: {
        "slide-in": "slide-in 0.3s ease-out",
        "slide-out": "slide-out 0.3s ease-in",
      },
    },
    
  },
  plugins: [],
}