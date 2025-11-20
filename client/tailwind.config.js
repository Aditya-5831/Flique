/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        Primary: "#6C63FF",
        accent: "#FF6BAA",
        text_primary: "#1E1E1E",
        text_secondary: "#6E6E6E",
        custom_border: "rgba(108, 99, 255, 0.1)",
      },

      fontFamily: {
        poppinsSemi: ["PoppinsSemi"],
        poppinsBold: ["PoppinsBold"],
        inter: ["Inter"],
        interMedium: ["InterMedium"],
        interSemibold: ["InterSemibold"],
      },
    },
  },
  plugins: [],
};
