import React from "react"
import { graphql } from "gatsby"

import Intro from "../components/intro/intro"
import LayoutWrapper from "../components/layout/layoutWrapper"
import Seo from "../components/seo/seo"
import ImageGrid from "../components/imageGrid"
import FeatureList from "../components/lists/featureList"
import ContentWrapper from "./../components/layout/contentWrapper"
import ExternalLink from "../components/links/externalLink"
import SectionTitle from "./../components/sectionTitle"

export default ({ data }) => {
  return (
    <LayoutWrapper>
      <Seo />
      <Intro />
      <ContentWrapper
        verticalSpacing={false}
        additionalClasses="pt-4 md:pt-7">
        <SectionTitle>works</SectionTitle>
      </ContentWrapper>
      {data.allWorksJson.edges.map((work, key) =>
        <section key={key} className={key % 2 === 0 ? "bg-grey-darkest" : "bg-grey-darker"}>
          <ContentWrapper
            variant="large"
            additionalClasses="md:px-5"
            horizontalSpacing={false}>
            <ImageGrid
              images={work.node.images.map((image, key) => ({
                src: work.node.fields.workImageAssets[key],
                alt: image.alt,
                tiles: image.grid.tiles,
                mobileRow: image.grid.mobileRow,
                fit: image.grid.fit
              }))}
              title={work.node.title}
              subtitle={work.node.subTitle} />
          </ContentWrapper>
          <ContentWrapper>
            <div className="grid grid-cols-6 md:gap-5">
              <div
                className="
                  flex md:flex-col justify-between 
                  col-start-1 col-span-6 md:col-span-1
                  mb-4 md:mb-0
                ">
                <p>
                  <span className="text-grey-lighter block">first release</span>
                  <span className="text-grey">{work.node.year}</span>
                </p>
                <FeatureList items={work.node.features} />
              </div>
              <div className="my-4 md:my-0 col-start-1 col-span-6 md:col-start-2 md:col-span-4">
                <p className="whitespace-pre-line">{work.node.leadingDescription}</p>
                <p className="whitespace-pre-line mt-3">
                  {work.node.description}
                </p>
              </div>
              <div className="col-start-1 col-span-6 md:col-start-6 md:col-span-1">
                <div className="flex flex-col md:items-end">
                  <div
                    className="
                      md:transform md:-rotate-90 md:-translate-x-1/2 md:origin-top-right 
                    ">
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
              </div>
            </div>
          </ContentWrapper>
        </section>
      )}
      <section className="bg-grey-darkest-pattern">
        <ContentWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-start-1 col-span-1">
              <SectionTitle appearance="primary">thoughts</SectionTitle>
            </div>
            <div className="col-start-1 md:col-start-2 col-span-2">
              {data.allWritesJson.edges.map((write, key) =>
                <div key={key} className={key === 0 ? "mb-4 md:mb-7" : "mb-0"}>
                  <ExternalLink link={write.node.link} appearance="primary" size="large">
                    {write.node.title}
                  </ExternalLink>
                  <small className="block italic text-grey-lighter mt-4">— {write.node.description}
                  </small>
                </div>
              )}
            </div>
          </div>
        </ContentWrapper>
      </section>
      <section className="bg-tertiary">
        <ContentWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-start-1 col-span-1">
              <SectionTitle>about</SectionTitle>
            </div>
            <div className="col-start-1 md:col-start-2 col-span-1">
              <p>
                I'm leading JavaScript developer with focus on unique interfaces and interactions, currently working at <ExternalLink link={"https://artcom.de"} appearance="primary">art+com</ExternalLink>, a studio for media installations and spaces.
              </p>
              <p className="mt-4">
                In my team located in 50°56"52.8"N 6°54"48.7"E, we are specialized in crafting custom solutions with web technologies and mqtt based realtime communications.
              </p>
              <p className="mt-4">
                My personal reasearch focus at the moment is blending interfaces into spaces with the new webXR API.
              </p>
            </div>
            <div className="col-start-1 md:col-start-3 col-span-1">
              <div className="flex flex-col md:items-end">
                <div className="md:transform md:-rotate-90 md:-translate-x-1/2 md:origin-top-right md:pl-2">
                  <div>
                    <ExternalLink
                      appearance="primary"
                      link={"twitter.com/thomasrutzer"}
                      size="large">
                      twitter
                </ExternalLink>
                  </div>
                  <div>
                    <ExternalLink
                      appearance="primary"
                      link={"mailto:thomas@rutzer.de"}
                      size="large">
                      mail
                </ExternalLink>
                  </div>
                  <div>
                    <ExternalLink
                      appearance="primary"
                      link={"https://github.com/ThomasRutzer"}
                      size="large">
                      github
                </ExternalLink></div>
                </div>
              </div>
            </div>
          </div>
        </ContentWrapper>
      </section>
      <section className="bg-grey-darkest-pattern text-tertiary">
        <ContentWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-start-1 col-span-1">
              <SectionTitle appearance="primary">credits</SectionTitle>
            </div>
            <div className="col-start-1 md:col-start-2 col-span-1">
              <h4 className="mb-2 font-bold">images</h4>
              {data.allWorksJson.edges.map((work, key) =>
                <ul key={key} className={key === 0 ? "mb-4" : "mb-0"}>
                  {work.node.images.map((image, imageKey) =>
                    <li key={imageKey}>
                      {image.reference.link &&
                        <ExternalLink
                          link={image.reference.link}
                          size="small">
                          Fig.{imageKey + 1}: {work.node.title} <i>{work.node.subTitle}</i> by {image.reference.author}
                        </ExternalLink>
                      }
                      {!image.reference.link &&
                        <p className="text-sm">
                          Fig.{imageKey + 1}: {work.node.title} <i>{work.node.subTitle}</i> by {image.reference.author}
                        </p>
                      }
                    </li>
                  )}
                </ul>
              )}
            </div>
            <div className="col-start-1 md:col-start-3 col-span-1">
              <h4 className="mb-2 font-bold">this site</h4>
              <ul>
                <li>
                  <ExternalLink
                    link={"https://www.gatsbyjs.org/"}
                    size="small">
                    Gatsby.js
              </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    link={"https://tailwindcss.com/"}
                    size="small">
                    Tailwind.css
              </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    link={"https://github.com/features/actions"}
                    size="small">
                    Github actions
              </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    link={"https://fonts.google.com/specimen/IBM+Plex+Mono"}
                    size="small">
                    IBM Plex Mono
              </ExternalLink>
                </li>
              </ul>
            </div>
          </div>
        </ContentWrapper>
      </section>
    </LayoutWrapper>
  )
}

export const query = graphql`
  query {
    allWritesJson {
      edges {
        node {
          title
          link
          description
        }
      }
    }
    allWorksJson(limit: 3) {
      edges {
        node {
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
                fluid(maxWidth: 1000, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`