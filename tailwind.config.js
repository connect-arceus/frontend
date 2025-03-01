/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.tsx"],
  theme: {
  	extend: {
		backgroundImage: {
			"home-map": "url('/home-map-bg.jpg')"
		},
		backgroundColor: {
			primary: "#FD2E17"
		},
		fontFamily: {
			display: ["balboa", 'serif']
		},
		textColor: {
			primary: "#FD2E17",
			secondary: "#102694"
		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

