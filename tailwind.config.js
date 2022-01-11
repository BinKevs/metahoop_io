module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "landing-image": "url('/src/static/LandingPage3.png')",
        "roadmap-image": "url('/src/static/RoadMap-Background.png')",
        "FAQ-image": "url('/src/static/Court2.jpg')",
        "half-court": "url('/src/static/halfcourt-final.png')",
      },
      fontFamily: {
        Oswald: ["Oswald", "sans-serif"],
      },
      colors: {
        "orange-primary-color": "#EE6730",

        "orange-light-color": "#FF7F4D",
        "basketball-color": "#D94C14",
      },
    },
  },
  plugins: [],
};
