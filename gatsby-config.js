module.exports = {
    pathPrefix: "/",
    siteMetadata: {
        title: "Hay! I am thomas — a creative developer and foo/bar",
        description: "default github.io user page of Thomas Rutzer"
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
                name: "Hay! I am thomas — a creative developer and foo/bar",
                short_name: "Hay! I am thomas — a creative developer and foo/bar",
                start_url: "/",
                background_color: "#ad57ff",
                theme_color: "#ad57ff",
                display: "standalone",
                icon: "src/images/icon.png"
            }
        },
        'gatsby-plugin-offline'
    ]
}