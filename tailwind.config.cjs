/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
	darkMode: "class", // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				"bg-semi-75": "rgba(0, 0, 0, 0.75)",
				"dark-1": "rgb(14,22,33,255)",
				"dark-2": "rgba(22,33,46)",
				"dark-3": "rgba(24,37,51,255)",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};