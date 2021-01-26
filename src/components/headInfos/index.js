import React from "react"
import Helmet from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const HeadInfos = ({ title = null, description = null, image = null }) => (
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
        siteMetadata: { defaultTitle, defaultDescription, defaultImage, url },
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
            <meta property="og:image" content={`${url}${seo.image}`} />
            <meta property="og:url" content={url} />
            <meta name="twitter:card" content="summary_large_image" />
            <script>
              typeof document !== `undefined`
              ? document.documentElement.classList.remove("no-js")
              : null
            </script>
          </Helmet>
        </>
      )
    }}
  />
)

export default HeadInfos
