import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo"
import { ContentWrapper, LayoutWrapper } from "../components/layout"
import PageHeader from "../components/pageHeader"
import { Accordion, AccordionItem } from "../components/accordion"
import { ExternalLink } from "../components/links"
import FeatureList from "../components/featureList"
import Tabs from "../components/tabs"
import SectionTitle from "../components/sections/sectionTitle"
import ParallaxCircles from "./../components/parallaxCircles"

export default ({ data }) => {
  return (
    <>
      <Seo title="all works" />
      <ParallaxCircles />
    </>
  )
}

export const pageQuery = graphql`
query {
  header: file(relativePath: { eq: "page-header-bg.png" }) {
    childImageSharp {
      fluid(maxWidth: 1920, quality: 100) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
  allWorksJson(sort: { fields: year, order: ASC }) {
    group(field: year) {
      edges {
        node {
          title,
          subTitle,
          teaserDescription,
          links {
            link,
            label
          },
          year,
          features,
          teaserImage {
            alt,
            reference {
              author,
              link
            }
          },
          fields {
            teaserImageAsset {
              childImageSharp {
                fixed(width: 120, height: 160, quality: 90) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
}
`