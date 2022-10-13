/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'light-background': '#F8F9FD',
      'white': '#ffffff',
      'black': '#000000',
      'neon-dark-blue': '#1B43C7',
      'eerie-black': '#130E25',
      'pale-blue': '#E7ECFA',
      'dark-pastel-blue': '#596BAA',
      'pastel-blue': '#B7CCF2',
      'blue-grey': '#7D829E',
      'accept': '#16CBB8',
      'warning': '#FD6120',
    },
  },
  plugins: [],
}
