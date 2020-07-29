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

export default ({ data }) => {
  return (
    <>
      <Seo title="all works" />
      <LayoutWrapper>
        <PageHeader
          imgPath={data.header.childImageSharp.fluid}
          title="(Almost) everything I design & code down the road" />
        <ContentWrapper>
          <Tabs defaultIndex={data.allWorksJson.group.length - 1}>
            {data.allWorksJson.group.map((group, key) =>
              <section key={key} label={`${group.edges[0].node.year}`}>
                <Accordion>
                  {group.edges.map((work, key) =>
                    <AccordionItem
                      key={key}
                      imgSrc={work.node.fields.teaserImageAsset.childImageSharp.fixed}
                      imgAlt={work.node.teaserImage.alt}
                      subTitle={work.node.subTitle}
                      title={work.node.title}>
                      <div className="grid grid-cols-1 md:grid-cols-project-archive-descr gap-2 md:gap-4">
                        <div className="col-start-1 col-span-1">
                          <span className="text-tertiary-lighter block text-sm">
                            key facts
                          </span>
                          <FeatureList items={work.node.features} />
                        </div>
                        <div className="md:col-start-2 md:col-span-2">
                          {work.node.teaserDescription}
                        </div>
                        <div className="md:col-start-4 md:col-span-1">
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
              </section>
            )}
          </Tabs>
        </ContentWrapper>
        <section className="bg-grey-darkest-pattern">
          <ContentWrapper>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-start-1 col-span-1">
                <SectionTitle appearance="primary">credits</SectionTitle>
              </div>
              <div className="col-start-1 md:col-start-2 col-span-2">
                <p className="mb-2 font-bold">teaser images</p>
                {data.allWorksJson.group.map((group, groupKey) =>
                  <ul key={groupKey} className="text-sm">
                    <li className="text-tertiary-lighter mb-1">
                      {group.edges[0].node.year}
                    </li>
                    {group.edges.map((work, key) =>
                      <li key={key + groupKey} className="mb-2 block">
                        {work.node.teaserImage.reference.link &&
                          <ExternalLink
                            link={work.node.teaserImage.reference.link}
                            size="small">
                            {work.node.title + " " + work.node.subTitle} by {work.node.teaserImage.reference.author}
                          </ExternalLink>
                        }
                        {!work.node.teaserImage.reference.link &&
                          work.node.title + " " + work.node.subTitle + " " + work.node.teaserImage.reference.link + "by" + work.node.teaserImage.reference.author
                        }
                      </li>
                    )}
                  </ul>
                )}
              </div>
            </div>
          </ContentWrapper>
        </section>
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