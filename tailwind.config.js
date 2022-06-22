module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    // For the best performance and to avoid false positives,
    // be as specific as possible with your content configuration.
    ,
  ],
  theme: {
    extend: {},
    fontSize: {
      base: ['16px']
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
};