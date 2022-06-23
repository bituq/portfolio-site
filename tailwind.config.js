defaultTheme = {
  primary: "#2A71FF",
  secondary: "#FFC55A",
  accent: "#DA5EE0"
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
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          ...defaultTheme
        },
        dark: {
          ...require("daisyui/src/colors/themes")["[data-theme=dark]"],
          ...defaultTheme
        }
      }
    ]
  }
}