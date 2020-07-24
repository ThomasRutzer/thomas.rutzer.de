// eslint-disable-next-line import/no-commonjs
module.exports = {
  theme: {
    extend: {
    },
    colors: {
      white: "#fff",
      black: "#1c1c1c",
      grey: { darkest: "#2e2d2d", darker: "#3a3a3a", default: "#E1E2E1", lighter: "#bebebf" },
      tertiary: { default: "#5551FF", lighter: "#9693ff" },
      secondary: "#FFC700",
      primary: "#FE8477"
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
      7: "84px"
    }
  },
  variants: {
  },
  plugins: [],
  corePlugins: {
    float: false,
  },
  purge: {
    content: [
      "./src/**/*.html",
      "./src/**/*.js",
    ],
    options: {
      whitelist: [
        "col-start-1",
        "col-start-2",
        "lg:col-start-1",
        "lg:col-start-2",
        "lg:col-start-3",
        "lg:col-start-4",
        "lg:col-start-5",
        "lg:col-start-6",
        "lg:col-span-1",
        "lg:col-span-2",
        "lg:col-span-3",
        "lg:col-span-4",
        "lg:col-span-5",
        "lg:col-span-6",
        "lg:row-start-1",
        "lg:row-start-2",
        "lg:row-start-3",
        "lg:row-span-1",
        "lg:row-span-2",
        "lg:row-span-3"
      ]
    }
  }
}
