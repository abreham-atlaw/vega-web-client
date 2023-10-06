/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
		colors: {
			primary: '#0062BD',
			primaryDark: '#1C1C1C',
			dark: '#000000',
			light: '#FFFFFF',
			danger: '#E30000',
			warning: '#F97700',
			info: '#00A3FF',
			success: '#00BC62',
			grey: '#C6C6C6',
		},
		},
	},
	variants: {},
	plugins: [],
	content: [
		'./src/**/*.vue',
	],
}
	