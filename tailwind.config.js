module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'mugshot': "url('src/assets/img/mugshot.jpg')",
      },
      colors: {
        olive: {
          100: "#eff3e4",
          200: "#dee6c9",
          300: "#cedaae",
          400: "#bdcd93",
          500: "#adc178",
          600: "#8a9a60",
          700: "#687448",
          800: "#454d30",
          900: "#232718"
        },
        mono: {
          100: "#fcfbf6",
          200: "#f9f7ed",
          300: "#f6f2e4",
          400: "#f3eedb",
          500: "#f0ead2",
          600: "#c0bba8",
          700: "#908c7e",
          800: "#605e54",
          900: "#302f2a"
        },
        indigo: {
          100: "#e2dedb",
          200: "#c4bcb7",
          300: "#a79b94",
          400: "#897970",
          500: "#6c584c",
          600: "#56463d",
          700: "#41352e",
          800: "#2b231e",
          900: "#16120f"
},
      }
    },
  },
  plugins: [],
}