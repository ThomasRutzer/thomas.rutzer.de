import React from "react"
import { graphql } from "gatsby"

import * as ContentWrapper from "../components/contentWrapper"
import HeadInfos from "../components/headInfos"
import * as LayoutWrapper from "../components/layoutWrapper"
import * as PageHeader from "../components/pageHeader"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <>
      <HeadInfos title={frontmatter.title} />
      <LayoutWrapper.Root>
        <PageHeader.Root title={frontmatter.title} />
        <ContentWrapper.Root>
          <div className="markdown" dangerouslySetInnerHTML={{ __html: html }} />
        </ContentWrapper.Root>
      </LayoutWrapper.Root>
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
