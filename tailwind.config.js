const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",

        black: {
          DEFAULT: "#171710",
        },
        white: {
          DEFAULT: "#FFFFFF",
        },
        gray: {
          darkest: "#22252b",
          dark: "#383E48",
          DEFAULT: "#c0ccda",
          light: "#e0e6ed",
          lightest: "#F4F5F7",
        },
        gunmetal: {
          dark: "#364D62",
          medium: "#517192",
          light: "#9FC2DC",
        },
        green: {
          fluoro: "#D6F02F",
          lime: "#B9DF5B",
          dark: "#246C21",
        },
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
