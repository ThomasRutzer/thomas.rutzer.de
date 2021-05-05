const path = require(`path`)

module.exports = {
  pathPrefix: "/",
  siteMetadata: {
    title: "thomas rutzer — creative javascript developer and foo/bar",
    description: "I'm a creative JavaScript developer with a focus on unique interfaces and interactions.",
    image: "/seo/seo-default.jpg",
    url: "https://thomasrutzer.dev"
  },
  plugins: [
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
    {
      resolve: 'gatsby-plugin-html-minifier',
      options: {
        removeComments: true
      }
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
        className: "no-js"
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "thomas rutzer — creative javascript developer and foo/bar",
        short_name: "thomas rutzer — creative javascript developer and foo/bar",
        start_url: "/",
        background_color: "#2e2d2d",
        theme_color: "#2e2d2d",
        display: "standalone",
        icon: "src/images/icon.png",
        shortcuts: [
          {
            "name": "Go to archive",
            "short_name": "archive",
            "description": "(Almost all) Design & Code along the road",
            "url": "/project-archive"
          }
        ]
      }
    }
  ]
}