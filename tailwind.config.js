module.exports = {
	content: ["./src/**/*.{js,jsx}"],
	theme: {
		extend: {
			backgroundImage: {
				"landing-image":
					"url('/src/static/Landing-Background.png')",
				"roadmap-image":
					"url('/src/static/RoadMap-Background.png')",
				"FAQ-image":
					"url('/src/static/FAQ-Background.png')",
			},
			fontFamily: {
				Oswald: ["Oswald", "sans-serif"],
			},
			colors: {
				"orange-primary-color": "#EE6730",
			},
		},
	},
	plugins: [],
};
