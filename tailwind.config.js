// TODO: Get colors from Sanity CMS and set here


const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "accent-1": "#333",
      },
    }, 
  },
  variants: {
    extend: {
      // gridAutoColumns: ["responsive"],
      // gridAutoFlow: ["responsive"],
      // gridAutoRows: ["responsive"],
      // gridColumn: ["responsive"],
      // gridColumnEnd: ["responsive"],
      // gridColumnStart: ["responsive"],
      // gridRow: ["responsive"],
      // gridRowEnd: ["responsive"],
      // gridRowStart: ["responsive"],
      // gridTemplateColumns: ["responsive"],
      // gridTemplateRows: ["responsive"],
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
