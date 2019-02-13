module.exports = {
    siteMetadata: {
        title: 'Gatsby Default Starter'
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
        }
    ]
}