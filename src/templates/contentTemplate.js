import React from "react"
import { graphql } from "gatsby"

import LayoutWrapper from "./../components/layout/layoutWrapper"
import PageHeader from "./../components/pageHeader/pageHeader"

export default function Template({
  data, 
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <LayoutWrapper>
        <PageHeader
          title={ frontmatter.title }
        />
        <div className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
        />
    </LayoutWrapper>
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