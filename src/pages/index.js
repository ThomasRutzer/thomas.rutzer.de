import React from "react"
import { graphql } from "gatsby"

import Intro from "../components/intro"
import Seo from "../components/seo"
import { ContentWrapper, LayoutWrapper } from "./../components/layout"
import { ExternalLink } from "../components/links"
import { SectionTitle, WorkSectionWithImageGrid } from "./../components/sections"

export default ({ data }) => {
  return (
    <LayoutWrapper>
      <Seo />
      <Intro imgPath={data.portrait.childImageSharp.fluid} />
      <ContentWrapper
        verticalSpacing={false}
        additionalClasses="pt-4 md:pt-7">
        <SectionTitle>work</SectionTitle>
      </ContentWrapper>
      {data.allWorksJson.edges.map((work, key) =>
        <WorkSectionWithImageGrid
          work={work.node}
          key={key} />
      )}
      <section className="bg-grey-darkest-pattern">
        <ContentWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-start-1 col-span-1">
              <SectionTitle appearance="primary">thoughts</SectionTitle>
            </div>
            <div className="col-start-1 md:col-start-2 col-span-2">
              {data.allWritesJson.edges.map((write, key) =>
                <div key={key} className={key === 0 ? "mt-0" : "mt-4 md:mt-7"}>
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
                I'm a leading JavaScript developer with a focus on unique interfaces and interactions, currently working at <ExternalLink link={"https://artcom.de"} appearance="primary">art+com</ExternalLink>, a studio for media installations and spaces.
              </p>
              <p className="mt-4">
                In my team located in 50°56"52.8"N 6°54"48.7"E, we are specialized in crafting custom solutions, mostly with full-stack JavaScript and MQTT based realtime communication.
              </p>
              <p className="mt-4">
                My personal research focus at the moment is blending interfaces into spaces with the new WebXR Device API.
              </p>
            </div>
            <div className="col-start-1 md:col-start-3 col-span-1">
              <div className="flex flex-col md:items-end">
                <div className="md:transform md:-rotate-90 md:-translate-y-full md:origin-bottom-right md:pl-2">
                  <div>
                    <ExternalLink
                      additionalClasses="whitespace-no-wrap"
                      appearance="primary"
                      link={"twitter.com/thomasrutzer"}
                      size="large">
                      twitter
                </ExternalLink>
                  </div>
                  <div>
                    <ExternalLink
                      additionalClasses="whitespace-no-wrap"
                      appearance="primary"
                      link={"mailto:thomas@rutzer.de"}
                      size="large">
                      mail
                </ExternalLink>
                  </div>
                  <div>
                    <ExternalLink
                      additionalClasses="whitespace-no-wrap"
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
      <section className="bg-grey-darkest-pattern">
        <ContentWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-start-1 col-span-1">
              <SectionTitle appearance="primary">credits</SectionTitle>
            </div>
            <div className="col-start-1 md:col-start-2 col-span-1">
              <p className="mb-2 font-bold">images</p>
              {data.allWorksJson.edges.map((work, key) =>
                <div key={key} className={key === 0 ? "mt-0" : "mt-4"}>
                  <p className="text-sm text-tertiary-lighter"
                  >{work.node.title} <i>{work.node.subTitle}</i>
                  </p>
                  <ul>
                    {work.node.images.map((image, imageKey) =>
                      <li key={imageKey}>
                        {image.reference.link &&
                          <ExternalLink
                            link={image.reference.link}
                            size="small">
                            Fig.{imageKey + 1} by {image.reference.author}
                          </ExternalLink>
                        }
                        {!image.reference.link &&
                          <p className="text-sm">
                            Fig.{imageKey + 1} by {image.reference.author}
                          </p>
                        }
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div className="col-start-1 md:col-start-3 col-span-1">
              <p className="mb-2 font-bold">this site</p>
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
                    link={"https://animejs.com/"}
                    size="small">
                    anime.js
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
    portrait: file(relativePath: { eq: "me.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1920, quality: 100) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    allWritesJson {
      edges {
        node {
          title
          link
          description
        }
      }
    }
    allWorksJson(limit: 3, filter: {selected: { eq: true }}) {
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
                fluid(maxWidth: 320, quality: 90) {
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