module.exports = {
    siteMetadata: {
        title: "Frontend Masters Gatsby Workshop",
        description: "a site we built together in a day!"
    },
    plugins: ['gatsby-plugin-emotion',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-mdx',
            options: {
                defaultLayouts: {
                    default: require.resolve("./src/components/layout.js")
                }
            }
        }],
}