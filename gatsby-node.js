const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "WorksJson") {
    createNodeField({
      node,
      name: `workImageAssets`, 
      value: node.images.map(image => `./../src/images/works/${node.id}/${image.src}`)
    })

    createNodeField({
      node,
      name: `teaserImageAsset`, 
      value: `./../src/images/works/${node.id}/${node.teaserImage.src}`
    })
  }
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === "build-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /splitting/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  const contentTemplate = path.resolve(`src/templates/contentTemplate.js`)

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors)
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: contentTemplate,
        context: {}, 
      })
    })
  })
}