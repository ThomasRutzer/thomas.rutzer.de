import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import HeadInfos from "../components/headInfos"
import { ContentWrapper, LayoutWrapper } from "../components/layout"
import { ExternalLink } from "../components/links"
import FeatureList from "../components/featureList"
import Tabs from "../components/tabs"
import SectionTitle from "../components/sections/sectionTitle"
import ProjectArchiveIntro from "../components/sections/projectArchiveIntro"

const PageProjectArchive = ({ data }) =>
  <>
    <HeadInfos title="thomas rutzer – project archive" />
    <LayoutWrapper>
      <ProjectArchiveIntro />
      <ContentWrapper>
        <Tabs>
          {data.allWorksJson.group.map((group, key) =>
            <section key={key} label={`${group.edges[0].node.year}`}>
              <ul>
                {group.edges.map((work, groupKey) =>
                  <li
                    key={groupKey}
                    className={
                      `project-archive-item__grid-item grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 pb-6 ${groupKey !== 0 ? "pt-6 border-t-2 border-grey-darker" : ""}`
                    }>
                    <div className="col-start-1 col-span-1 row-start-1 row-span-2">
                      <GatsbyImage
                        className="h-full"
                        alt={work.node.teaserImage.alt}
                        image={work.node.fields.teaserImageAsset.childImageSharp.gatsbyImageData} />
                    </div>
                    <div className="col-start-2 col-span-1">
                      <h2 className="text-3xl md:text-4xl -mt-2">{work.node.title}</h2>
                    </div>
                    <div className="col-start-2 col-span-1 row-start-2 self-end">
                      <h3 className="text-secondary-lighter">{work.node.subTitle}</h3>
                    </div>
                    <div className="col-start-1 col-span-2 md:col-span-2 my-2 md:my-0">
                      <p>{work.node.teaserDescription}</p>
                    </div>
                    <div className="col-start-1 col-span-2 md:col-span-2 md:row-start-2 flex flex-row justify-between">
                      <div className="self-end">
                        <span className="text-secondary-lighter block text-sm">
                          key facts
                          </span>
                        <FeatureList items={work.node.features} />
                      </div>
                      <div className="self-end">
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
                  </li>
                )}
              </ul>
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
                  <li className="text-secondary-lighter mb-1">
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
                        work.node.title + " " + work.node.subTitle + " " + work.node.teaserImage.reference.link + "by " + work.node.teaserImage.reference.author
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

export const pageQuery = graphql`
  query {
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
                  gatsbyImageData(
                    layout: CONSTRAINED, 
                    quality: 100, 
                    width: 300
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`

export default PageProjectArchive
