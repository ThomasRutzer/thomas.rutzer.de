import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

import HeadInfos from "../components/headInfos"
import Tabs from "../components/tabs"
import * as Collapsible from "../components/collapsible"
import * as ContentWrapper from "../components/contentWrapper"
import * as ExternalLink from "../components/externalLink"
import * as FeatureList from "../components/featureList"
import * as LayoutWrapper from "../components/layoutWrapper"
import * as SectionTitle from "../components/sectionTitle"
import * as SubHero from "../components/subHero"

const formattedYear = year => `${year.toString().slice(-2)}`

const PageProjectArchive = ({ data }) => (
  <>
    <HeadInfos title="thomas rutzer – project archive" />
    <LayoutWrapper.Root>
      <SubHero.Root />
      <ContentWrapper.Root>
        <Tabs defaultIndex={data.allWorksJson.group.length - 1}>
          {data.allWorksJson.group.map((group, key) => (
            <section
              key={key}
              label={key === 0 ? group.edges[0].node.year : formattedYear(group.edges[0].node.year)}
            >
              <ul>
                {group.edges.map((work, groupKey) => (
                  <li
                    key={groupKey}
                    className={`project-archive-item__grid-item grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-5 pb-6 ${
                      groupKey !== 0 ? "pt-6 border-t-2 border-grey-3" : ""
                    }`}
                  >
                    <div className="col-start-1 col-span-1 row-start-1 row-span-2">
                      <GatsbyImage
                        className="rounded-lg"
                        // weird Safari hack: https://gist.github.com/ayamflow/b602ab436ac9f05660d9c15190f4fd7b
                        style={{
                          WebkitMaskImage: "-webkit-radial-gradient(white, black)",
                        }}
                        alt={work.node.teaserImage.alt}
                        image={work.node.fields.teaserImageAsset.childImageSharp.gatsbyImageData}
                      />
                    </div>
                    <div className="col-start-2 col-span-1">
                      <h2 className="text-xl lg:text-2xl tracking-widest uppercase font-mono">
                        {work.node.title}
                      </h2>
                    </div>
                    <div className="col-start-2 col-span-1 row-start-2 self-end">
                      <h3 className="text-secondary-lighter block font-mono uppercase">
                        {work.node.subTitle}
                      </h3>
                    </div>
                    <div className="col-start-1 col-span-2 md:col-span-2 my-2 md:my-0 leading-loose">
                      <p>{work.node.teaserDescription}</p>
                    </div>
                    <div className="col-start-1 col-span-2 md:col-span-2 md:row-start-2 flex flex-row justify-between">
                      <div className="self-end">
                        <FeatureList.Root>
                          <FeatureList.Title>Key facts</FeatureList.Title>
                          <FeatureList.List items={work.node.features} delimiter />
                        </FeatureList.Root>
                      </div>
                      <div className="self-end">
                        {work.node.links.map(({ link, label }, key) => (
                          <div className="whitespace-no-wrap" key={key}>
                            <ExternalLink.Root link={link}>{label}</ExternalLink.Root>
                          </div>
                        ))}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </Tabs>
      </ContentWrapper.Root>
      <section className="bg-grey-2-pattern">
        <ContentWrapper.Root>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-start-1 col-span-1">
              <SectionTitle.Root>credits</SectionTitle.Root>
            </div>
            <div className="col-start-1 md:col-start-2 col-span-1">
              <Collapsible.Root title="teaser images">
                {data.allWorksJson.group.map((group, groupKey) => (
                  <ul key={groupKey} className="text-sm">
                    <li className="text-secondary-lighter mb-1">{group.edges[0].node.year}</li>
                    {group.edges.map((work, key) => (
                      <li key={key + groupKey} className="mb-2 block">
                        {work.node.teaserImage.reference.link && (
                          <ExternalLink.Root link={work.node.teaserImage.reference.link}>
                            {work.node.title}&nbsp;{work.node.subTitle}&nbsp;by&nbsp;
                            {work.node.teaserImage.reference.author}
                          </ExternalLink.Root>
                        )}
                        {!work.node.teaserImage.reference.link &&
                          work.node.title +
                            " " +
                            work.node.subTitle +
                            " " +
                            work.node.teaserImage.reference.link +
                            "by " +
                            work.node.teaserImage.reference.author}
                      </li>
                    ))}
                  </ul>
                ))}
              </Collapsible.Root>
            </div>
          </div>
        </ContentWrapper.Root>
      </section>
    </LayoutWrapper.Root>
  </>
)

export const pageQuery = graphql`
  query {
    allWorksJson(sort: { fields: year, order: ASC }) {
      group(field: year) {
        edges {
          node {
            title
            subTitle
            teaserDescription
            links {
              link
              label
            }
            year
            features
            teaserImage {
              alt
              reference {
                author
                link
              }
            }
            fields {
              teaserImageAsset {
                childImageSharp {
                  gatsbyImageData(layout: CONSTRAINED, quality: 100, width: 300)
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
