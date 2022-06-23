const path = require("path")
const tailwindConfig = require("./tailwind.config")

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title:
      "thomas rutzer — expert in crafting unique interfaces & interactions for the browser platform",
    description:
      "I'm a experienced JavaScript developer specialized in crafting unique interfaces & interactions.",
    image: "/seo/seo-default.jpg",
    url: "https://thomasrutzer.dev",
  },
  plugins: [
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: path.join(__dirname, "src", "images"),
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/`,
        name: "markdown-pages",
      },
    },
    "gatsby-transformer-json",
    "gatsby-plugin-image",

    "gatsby-transformer-remark",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        postCssPlugins: [require("tailwindcss"), require("./tailwind.config.js")],
      },
    },
    {
      resolve: "gatsby-plugin-html-minifier",
      options: {
        removeComments: true,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
        className: "no-js",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name:
          "thomas rutzer — expert in crafting unique interfaces & interactions for the browser platform",
        short_name: "thomas rutzer — Javascript Developer",
        start_url: "/",
        background_color: tailwindConfig.theme.colors.grey["2"],
        theme_color: tailwindConfig.theme.colors.grey["2"],
        display: "standalone",
        icon: "src/images/icon.png",
        shortcuts: [
          {
            name: "Go to archive",
            short_name: "archive",
            description: "(Almost all) Design & Code along the road",
            url: "/project-archive",
          },
        ],
      },
    },
  ],
}
