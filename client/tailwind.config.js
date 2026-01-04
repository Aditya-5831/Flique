/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily: {
        nunito_regular: ["Nunito_400Regular"],
        nunito_bold: ["Nunito_700Bold"],
        nunito_black: ["Nunito_900Black"],
      },
    },
  },
  plugins: [],
};
