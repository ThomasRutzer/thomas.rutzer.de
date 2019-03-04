module.exports = {
    pathPrefix: "/contact",
    siteMetadata: {
        title: "contact card of creative developer Thomas Rutzer",
        description: "Hay! I am thomas — a creative developer and foo/bar"
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
            path: `${__dirname}/content/`,
            name: "markdown-pages",
            },
        },
        `gatsby-transformer-remark`,
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                `IBM Plex Mono\:400,700`
                ]
            }
        },
        {
            resolve: 'gatsby-plugin-html-attributes',
            options: {
                lang: 'en'
            }
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: "contact card of creative developer Thomas Rutzer",
                short_name: "contact card of creative developer Thomas Rutzer",
                start_url: "/contact",
                background_color: "#ad57ff",
                theme_color: "#ad57ff",
                display: "standalone",
                icon: "src/images/icon.png"
            }
        },
        'gatsby-plugin-offline'
    ]
}