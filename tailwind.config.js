// eslint-disable-next-line import/no-commonjs
module.exports = {
  theme: {
    extend: {
    },
    colors: {
      white: "#fff",
      black: "#2e2d2d",
      grey: {darker: "#414142", default: "#E1E2E1", lighter: "#F5F5F6"},
      secondary: {lighter: "#ff8c86", default: "#fa5959", darker: "#c02030"},
      highlight: {lighter: '#df5bfa', default: "#ab20c8", darker: "#760094"}
    },
    fill: theme => ({
      "highlight": theme("colors.highlight"),
    }),
    fontFamily: {
      sans: 'IBM Plex Mono'
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
