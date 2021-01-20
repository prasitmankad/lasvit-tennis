module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: ["./components/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "accent-1": "#333",
      },
    },
  },
  variants: {
    extend: {
      gridAutoColumns: ["responsive"],
      gridAutoFlow: ["responsive"],
      gridAutoRows: ["responsive"],
      gridColumn: ["responsive"],
      gridColumnEnd: ["responsive"],
      gridColumnStart: ["responsive"],
      gridRow: ["responsive"],
      gridRowEnd: ["responsive"],
      gridRowStart: ["responsive"],
      gridTemplateColumns: ["responsive"],
      gridTemplateRows: ["responsive"],
    },
  },
  plugins: [],
};
