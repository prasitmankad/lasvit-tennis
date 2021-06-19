const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: 'jit',
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  // These paths are just examples, customize them to match your project structure

  purge: ['./public/**/*.html','./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  // purge: false,
  theme: {
    
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        // lasvit orange
        orange: {
          //light: "#85d7ff",
          DEFAULT: "#CB5223",
          //dark: "#009eeb",
        },
        // lasvit teal
        teal: {
          light: "#31E2E8",
          DEFAULT: "#20C0D9",
          dark: "#01ADCA",
        },
        pink: {
          //light: "#ff7ce5",
          DEFAULT: "#FF6A64",
          //dark: "#ff16d1",
        },
        yellow: {
          //light: "#ff7ce5",
          DEFAULT: "#FFDE4E",
          //dark: "#ff16d1",
        },
        gray: {
          darkest: "#1f2d3d",
          dark: "#3c4858",
          DEFAULT: "#c0ccda",
          light: "#e0e6ed",
          lightest: "#f9fafc",
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

