import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const Seo = ({ title = null, description = null }) => (
  <StaticQuery
    query={graphql`
      query SEOQuery {
        site {
          siteMetadata {
            defaultTitle: title
            defaultDescription: description
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { defaultTitle, defaultDescription },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
      }

      return (
        <>
          <Helmet title={seo.title}>
            <meta name="description" content={seo.description} />
          </Helmet>
        </>
      )
    }}
  />
)

export default Seo
