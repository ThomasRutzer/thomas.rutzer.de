import React from "react"
import { graphql } from "gatsby"

import LayoutWrapper from "./../components/layout/layoutWrapper"
import PageHeader from "./../components/pageHeader/pageHeader"
import Seo from "../components/seo/seo"

export default function Template({
  data, 
}) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <Seo
        title={ frontmatter.title }
      />
      <LayoutWrapper>
          <PageHeader
            title={ frontmatter.title }
          />
          <div dangerouslySetInnerHTML={{ __html: html }}
          />
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