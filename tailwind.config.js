module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['"Arial Nova"', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        'mugshot': "url('src/assets/img/mugshot.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "dark", "light"
    ]
  }
}