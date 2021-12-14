// const { defaultPreset } = require('tailwindcss-miniprogram-preset')

// module.exports = {
//   purge: defaultPreset.purge.content,
//   presets: [defaultPreset]
//   // darkMode: false, // or 'media' or 'class'
//   // theme: {
//   //   extend: {},
//   // },
//   // variants: {
//   //   extend: {},
//   // },
//   // plugins: [],
// }

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}