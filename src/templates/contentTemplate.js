import React from "react"
import { graphql } from "gatsby"

import LayoutWrapper from "./../components/layout/layoutWrapper"
import ContentWrapper from "./../components/layout/contentWrapper"
import PageHeader from "../components/pageHeader"
import Seo from "../components/seo/seo"

export default function Template({ data }) {
  const { markdownRemark, header } = data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Seo title={frontmatter.title} />
      <LayoutWrapper>
        <PageHeader imgPath={header.childImageSharp.fluid} title={frontmatter.title} />
        <ContentWrapper>
          <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
        </ContentWrapper>
      </LayoutWrapper>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    header: file(relativePath: { eq: "page-header-bg.png" }) {
      childImageSharp {
        fluid(maxWidth: 1000, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
