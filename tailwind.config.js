// eslint-disable-next-line import/no-commonjs
module.exports = {
  theme: {
    extend: {
    },
    colors: {
      white: "#fff",
      black: "#2e2d2d",
      highlight: {
        default: "#6CEEAA",
        secondary: "#ad57ff"
      }
    },
    fill: theme => ({
      "highlight": theme("colors.highlight"),
    }),
    fontFamily: {
      serif: 'IBM Plex Mono'
    },
    spacing: {
      0: "0px",
      1: "8px",
      2: "12px",
      3: "16px",
      4: "24px",
      5: "32px",
      6: "48px",
      7: "64px"
    }
  },
  variants: {
  },
  plugins: [],
  corePlugins: {
    float: false,
  },
  purge: [
    "./src/**/*.html",
    "./src/**/*.js",
  ]
}
