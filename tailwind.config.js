module.exports = {
  darkMode: 'class',
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 2px 4px rgba(0,0,0,0.18)",
      },
      translate: {
        up: "0.25em",
      },
      colors: {
        'primary-light': '#F7F8FC',
	'secondary-light': '#FFFFFF',
	'ternary-light': '#f6f7f8',

	'primary-dark': '#0D2438',
	'secondary-dark': '#102D44',
	'ternary-dark': '#1E3851',
      },
      transitionProperty:{
        'bg':'background-color'
      }
    },
    fontFamily: {
      body: ["Nunito"],
    },
  },
  plugins: [],
};
