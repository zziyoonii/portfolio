/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
	  extend: {
		fontFamily: {
		  sans: ['"Noto Sans KR"', 'sans-serif'],
		  serif: ['"Noto Serif KR"', 'serif'],
		},
		colors: {
		  navy: {
			50: '#e6e9f0',
			100: '#ccd3e1',
			200: '#99a7c3',
			300: '#667ba5',
			400: '#334f87',
			500: '#002369',
			600: '#001c54',
			700: '#00153f',
			800: '#000e2a',
			900: '#0a1a2f',
		  },
		},
	  },
	},
	plugins: [
	  function ({ addUtilities }) {
		addUtilities({
		  ".scrollbar-hide": {
			/* Firefox */
			"scrollbar-width": "none",
			/* Chrome, Safari, Edge */
			"-ms-overflow-style": "none",
		  },
		  ".scrollbar-hide::-webkit-scrollbar": {
			display: "none",
		  },
		})
	  },
	],
  }
  