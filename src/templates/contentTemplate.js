import React from "react"
import { graphql } from "gatsby"

import { ContentWrapper, LayoutWrapper } from "./../components/layout"
import PageHeader from "../components/pageHeader"
import HeadInfos from "../components/headInfos"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <>
      <HeadInfos title={frontmatter.title} />
      <LayoutWrapper>
        <PageHeader title={frontmatter.title} />
        <ContentWrapper>
          <div
            className="markdown"
            dangerouslySetInnerHTML={{ __html: html }}
          />
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
