// eslint-disable-next-line import/no-commonjs
module.exports = {
  theme: {
    extend: {
    },
    colors: {
      white: "#fff",
      black: "#1c1c1c",
      grey: { darkest: "#2e2d2d", darker: "#3a3a3a", default: "#E1E2E1", lighter: "#bebebf" },
      tertiary: "#5551FF",
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
        "md:col-start-1",
        "md:col-start-2",
        "md:col-start-3",
        "md:col-start-4",
        "md:col-start-5",
        "md:col-start-6",
        "md:col-span-1",
        "md:col-span-2",
        "md:col-span-3",
        "md:col-span-4",
        "md:col-span-5",
        "md:col-span-6",
        "md:row-start-1",
        "md:row-start-2",
        "md:row-start-3",
        "md:row-span-1",
        "md:row-span-2",
        "md:row-span-3"
      ]
    }
  }
}
