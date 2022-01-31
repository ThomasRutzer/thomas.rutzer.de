const path = require("path")

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === "WorksJson") {
    const pathPrefix = "./../src/images/works"

    createNodeField({
      node,
      name: `workImageAssets`,
      value: node.images.map(image => ({
        default: `${pathPrefix}/${node.workId}/${image.src}`,
        ...(!!image.smallVariantSrc && {
          smallVariant: `${pathPrefix}/${node.workId}/${image.smallVariantSrc}`,
        }),
      })),
    })

    createNodeField({
      node,
      name: `teaserImageAsset`,
      value: `${pathPrefix}/${node.workId}/${node.teaserImage.src}`,
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

exports.createResolvers = ({ createResolvers }) => {
  const resolvers = {
    CollectionsJson: {
      includedWorks: {
        type: ["WorksJson"],
        resolve: async (source, args, context) => {
          const { entries } = await context.nodeModel.findAll({
            query: {
              filter: { workId: { in: source.includes } },
            },
            type: "WorksJson",
            firstOnly: false,
          })

          return entries
        },
      },
    },
  }
  createResolvers(resolvers)
}
