module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust the paths and file extensions as per your project structure
    './public/index.html',
  ],
  darkMode:"class",
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
};
