module.exports = {
    pathPrefix: "/thomas.rutzer.de",
    siteMetadata: {
        title: 'E-Card of creative developer Thomas Rutzer'
    },
    plugins: [
        `gatsby-plugin-sass`,
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
                name: "E-Card of creative developer Thomas Rutzer",
                short_name: "E-Card of creative developer Thomas Rutzer",
                start_url: "/",
                background_color: "#ad57ff",
                theme_color: "#ad57ff",
                display: "standalone",
                icon: "src/images/icon.png", // This path is relative to the root of the site.
            }
        },
        'gatsby-plugin-offline'
    ]
}