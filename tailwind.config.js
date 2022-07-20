defaultTheme = {
  primary: "#C84B31",
  secondary: "#ECDBBA",
  accent: "#2D4263"
}

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
      {
        light: {
          primary: "#112B3C",
          secondary: "#F66B0E",
          accent: "#205375",
          'base-100': "#EFEFEF"
        },
        dark: {
          ...defaultTheme,
          'base-100': '#191919',
        }
      }
    ]
  }
}