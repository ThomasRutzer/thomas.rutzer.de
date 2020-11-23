import React from "react"
import { graphql } from "gatsby"

import { ContentWrapper, LayoutWrapper } from "./../components/layout"
import PageHeader from "../components/pageHeader"
import Seo from "../components/seo"

export default function Template({ data }) {
  const { markdownRemark, header } = data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Seo title={frontmatter.title} />
      <LayoutWrapper>
        <PageHeader title={frontmatter.title} />
        <ContentWrapper>
          <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
        </ContentWrapper>
      </LayoutWrapper>
    </>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
