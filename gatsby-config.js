const path = require(`path`)

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "thomas — creative developer",
    description: "I'm thomas rutzer, leading JavaScript developer with focus on unique interfaces and interactions"
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/`,
        name: "markdown-pages",
      },
    },
    "gatsby-transformer-json",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-transformer-remark",
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"), 
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'en'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "thomas — creative developer and foo/bar",
        short_name: "thomas — creative developer and foo/bar",
        start_url: "/",
        background_color: "#2e2d2d",
        theme_color: "#2e2d2d",
        display: "standalone",
        icon: "src/images/icon.png"
      }
    },
    'gatsby-plugin-offline'
  ]
}