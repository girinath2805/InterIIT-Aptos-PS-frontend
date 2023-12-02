/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily:{
      'welcome':['Nunito', 'sans-serif'],
      'head':['Rubik', 'sans-serif'],
      'nav':['Quicksand', 'sans-seri'],
      'live':['Nunito', 'sans-serif'],
    },
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
            "-webkit-transform": "translateX(120%)",
            transform: "translateX(120%)",
          },
          "100%": {
            "-webkit-transform": "translateX(0%)",
            transform: "translateX(0%)",
          },
        },
        "slide-up": {
          "0%": {
            "-webkit-transform": "translateY(-120%)",
            transform: "translateY(-120%)",
          },
          "100%": {
            "-webkit-transform": "translateY(0%)",
            transform: "translateY(0%)",
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
};