/** @type {import('tailwindcss').Config} */


// const { moderateScale } = require('react-native-size-matters');




module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FE8C00",
        white: {
          DEFAULT: "#ffffff",
          100: "#fafafa",
          200: "#FE8C00",
        },
        gray: {
          100: "#878787",
          200: "#878787",
        },
        dark: {
          100: "#181C2E",
        },
        error: "#F14141",
        success: "#2F9B65",
      },
      fontFamily: {
        quicksand: ["Quicksand-Regular", "sans-serif"],
        "quicksand-bold": ["Quicksand-Bold", "sans-serif"],
        "quicksand-semibold": ["Quicksand-SemiBold", "sans-serif"],
        "quicksand-light": ["Quicksand-Light", "sans-serif"],
        "quicksand-medium": ["Quicksand-Medium", "sans-serif"],
      },
    },
  },
  plugins: [],
};



// /** @type {import('tailwindcss').Config} */

// const { moderateScale } = require('react-native-size-matters');

// // Create a scaling function for font sizes
// const scaledFontSize = (size) => ({
//   fontSize: moderateScale(size),
//   lineHeight: moderateScale(size * 1.2), // Optional: add scaled line height
// });

// module.exports = {
//   content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
//   presets: [require("nativewind/preset")],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#FE8C00",
//         white: {
//           DEFAULT: "#ffffff",
//           100: "#fafafa",
//           200: "#FE8C00",
//         },
//         gray: {
//           100: "#878787",
//           200: "#878787",
//         },
//         dark: {
//           100: "#181C2E",
//         },
//         error: "#F14141",
//         success: "#2F9B65",
//       },
//       fontFamily: {
//         quicksand: ["Quicksand-Regular", "sans-serif"],
//         "quicksand-bold": ["Quicksand-Bold", "sans-serif"],
//         "quicksand-semibold": ["Quicksand-SemiBold", "sans-serif"],
//         "quicksand-light": ["Quicksand-Light", "sans-serif"],
//         "quicksand-medium": ["Quicksand-Medium", "sans-serif"],
//       },
//       fontSize: {
//         'xs': scaledFontSize(12),
//         'sm': scaledFontSize(14),
//         'base': scaledFontSize(16),
//         'lg': scaledFontSize(18),
//         'xl': scaledFontSize(20),
//         '2xl': scaledFontSize(24),
//         '3xl': scaledFontSize(30),
//         '4xl': scaledFontSize(36),
//         '5xl': scaledFontSize(48),
//         // Add custom sizes if needed
//         '10': scaledFontSize(10),
//         '12': scaledFontSize(12),
//         '14': scaledFontSize(14),
//         '16': scaledFontSize(16),
//         '18': scaledFontSize(18),
//         '20': scaledFontSize(20),
//         '22': scaledFontSize(22),
//         '24': scaledFontSize(24),
//         '26': scaledFontSize(26),
//         '28': scaledFontSize(28),
//         '30': scaledFontSize(30),
//       },
//     },
//   },
//   plugins: [],
// };