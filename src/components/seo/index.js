import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const Seo = ({ title = null, description = null, image = null }) => (
  <StaticQuery
    query={graphql`
      query SEOQuery {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description,
            defaultImage: image
            url
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { defaultTitle, defaultDescription, defaultImage },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: image || defaultImage
      }

      return (
        <>
          <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
            <meta property="og:title" content={seo.title} />
            <meta property="og:description" content={seo.description} />
            <meta property="og:image" content={seo.image} />
            <meta property="og:url" content={seo.url} />
            <meta name="twitter:card" content="summary_large_image" />
          </Helmet>
        </>
      )
    }}
  />
)

export default Seo
