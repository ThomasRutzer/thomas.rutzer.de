import React from "react"
import { graphql } from "gatsby"

import Seo from "../components/seo/seo"
import LayoutWrapper from "../components/layout/layoutWrapper"
import ContentWrapper from "../components/layout/contentWrapper"
import PageHeader from "../components/pageHeader"
import { Accordion, AccordionItem } from "./../components/accordion"
import ExternalLink from "./../components/links/externalLink"
import FeatureList from "./../components/featureList"

export default ({ data }) => {
  return (
    <>
      <Seo title="all works" />
      <LayoutWrapper>
        <PageHeader
          imgPath={data.header.childImageSharp.fluid}
          title="(Almost) everything I design & code down the road" />
        <ContentWrapper>
          <Accordion>
            {data.allWorksJson.group[1].edges.map((work, key) =>
              <AccordionItem
                key={key}
                imgSrc={work.node.fields.workImageAssets[0].childImageSharp.fixed}
                subTitle={work.node.subTitle}
                title={work.node.title}>
                <div className="grid grid-cols-4 gap-5">
                  <div className="col-start-1 col-span-1">
                    <span className="text-tertiary-lighter block text-sm">
                      key facts
                      </span>
                    <FeatureList items={work.node.features} />
                  </div>
                  <div className="col-start-2 col-span-2">Lorem ipsum dolor sit amet no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
                  <div className="col-start-4 col-span-1">
                    {work.node.links.map(({ link, label }, key) =>
                      <div className="whitespace-no-wrap" key={key}>
                        <ExternalLink
                          appearance="primary"
                          link={link}>
                          {label}
                        </ExternalLink>
                      </div>
                    )}
                  </div>
                </div>
              </AccordionItem>
            )}
          </Accordion>
        </ContentWrapper>
      </LayoutWrapper>
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
  allWorksJson(sort: { order: DESC, fields: year }) {
    group(field: year) {
      edges {
        node {
          selectedAppearance,
          title,
          subTitle,
          leadingDescription,
          description,
          links {
            link,
            label
          },
          year,
          features,
          images {
            alt,
            grid {
              tiles,
              fit
            },
            reference {
              author,
              link
            }
          },
          fields {
            workImageAssets {
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