/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				placeholderSecondaryColor: '#9F9F9F',
				accentPrimaryColor: '#0098EB',
				foregroundPrimaryColor: '#2E2E2E',
			},
			fontFamily: {
				sfPro: ['SF-Pro'],
				sfProSemibold: ['SF-Pro-Semibold'],
				sfProDisplayBold: ['SF-Pro-Display-Bold'],
				sfProDisplaySemibold: ['SF-Pro-Display-Semibold'],
			},
		},
	},
	plugins: [],
};
