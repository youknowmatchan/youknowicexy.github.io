module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // add this line
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'white': '#ffffff',
      'red': '#FF0000',
      'coffee' : '#120d08',
      'light-coffee' : '#292521',
      'fallow': '	#C19A6B',
      'black': '#000000',
      'bubblegum': '#ff48a5',
      'dark-bubblegum': '#ff0081',
      'light-bubblegum': '#ffaed7',
      'link-blue': '#0000EE',
      'light-link-blue': '#ADD8E6',
      'midnight': '#191970',

    },
    fontFamily: {
      Poppins: ["Poppins", "sans-serif"],
      mono : ["ui-monospace", "monospace"]
    },
    extend: {
      spacing: {
        '8xl': '96rem',
        '9xl': '128rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      textDecoration: ['dotted']
    }
  },
}
