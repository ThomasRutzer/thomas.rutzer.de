import React from "react"
import { graphql } from "gatsby"

import Intro from "../components/intro"
import HeadInfos from "../components/headInfos"
import { ContentWrapper, LayoutWrapper } from "./../components/layout"
import { ExternalLink } from "../components/links"

import {
  SectionTitle,
  CollectionSectionWithImageGrid,
  ProjectArchiveTeaser,
  WorkSectionWithImageGrid,
} from "./../sections"

const PageHome = ({ data }) => {
  return (
    <LayoutWrapper>
      <HeadInfos />
      <Intro />
      <ContentWrapper verticalSpacing={false} additionalClasses="pt-4 md:pt-7">
        <SectionTitle>work</SectionTitle>
      </ContentWrapper>
      {data.allWorksJson.edges.map((work, key) => (
        <WorkSectionWithImageGrid
          work={work.node}
          appearance={key % 2 === 0 ? "primary" : "secondary"}
          key={key}
        />
      ))}
      {data.allCollectionsJson.edges.map((collection, key) => (
        <CollectionSectionWithImageGrid
          collection={collection.node}
          appearance={key % 2 === 0 ? "primary" : "secondary"}
          key={key}
        />
      ))}

      <ProjectArchiveTeaser />

      <section className="bg-grey-darkest-pattern">
        <ContentWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mt-7">
            <div className="col-start-1 col-span-1">
              <SectionTitle appearance="primary">thoughts</SectionTitle>
            </div>
            <div className="col-start-1 md:col-start-2 col-span-2">
              {data.allWritesJson.edges.map((write, key) => (
                <div key={key} className={key === 0 ? "mt-0" : "mt-4 md:mt-7"}>
                  <ExternalLink link={write.node.link} appearance="primary" size="large">
                    {write.node.title}
                  </ExternalLink>
                  <small className="block italic text-grey-lighter mt-4">
                    — {write.node.description}
                  </small>
                </div>
              ))}
            </div>
          </div>
        </ContentWrapper>
      </section>
      <section className="bg-secondary">
        <ContentWrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-start-1 col-span-1">
              <SectionTitle>about</SectionTitle>
            </div>
            <div className="col-start-1 md:col-start-2 md:col-span-2 lg:col-span-1">
              <p>
                I'm a creative JavaScript developer with a focus on unique interfaces and
                interactions. I currently work at{" "}
                <ExternalLink link="https://artcom.de" appearance="primary">
                  art+com
                </ExternalLink>
                , a studio for media installations and spaces.
              </p>
              <p className="mt-4">
                In my team located in 50°56"52.8"N 6°54"48.7"E, we are specialized in crafting
                custom solutions, mostly with fullstack JavaScript, WebGL and MQTT based realtime
                communication.
              </p>
              <p className="mt-4">
                Personally, I do everything possible with Javascript. My research focus at the
                moment is blending interfaces into spaces with the new WebXR Device API.
              </p>
            </div>
            <div className="col-start-1 md:col-start-2 lg:col-start-3 col-span-1">
              <div className="flex flex-col lg:items-end">
                <div className="lg:transform lg:-rotate-90 lg:-translate-y-full lg:origin-bottom-right lg:pl-2">
                  <div>
                    <ExternalLink
                      additionalClasses="whitespace-no-wrap"
                      appearance="primary"
                      link="twitter.com/thomasrutzer"
                      size="large"
                    >
                      twitter
                    </ExternalLink>
                  </div>
                  <div>
                    <ExternalLink
                      additionalClasses="whitespace-no-wrap"
                      appearance="primary"
                      link="mailto:hi@thomasrutzer.dev"
                      size="large"
                    >
                      mail
                    </ExternalLink>
                  </div>
                  <div>
                    <ExternalLink
                      additionalClasses="whitespace-no-wrap"
                      appearance="primary"
                      link="https://github.com/ThomasRutzer"
                      size="large"
                    >
                      github
                    </ExternalLink>
                  </div>
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
              {data.allWorksJson.edges.map((work, key) => (
                <div key={key} className={key === 0 ? "mt-0" : "mt-4"}>
                  <p className="text-sm text-secondary-lighter">
                    {work.node.title} <i>{work.node.subTitle}</i>
                  </p>
                  <ul>
                    {work.node.images.map((image, imageKey) => (
                      <li key={imageKey}>
                        {image.reference.link && (
                          <ExternalLink link={image.reference.link} size="small">
                            Fig.{imageKey + 1} by {image.reference.author}
                          </ExternalLink>
                        )}
                        {!image.reference.link && (
                          <p className="text-sm">
                            Fig.{imageKey + 1} by {image.reference.author}
                          </p>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="col-start-1 md:col-start-3 col-span-1">
              <p className="mb-2 font-bold">this site</p>
              <ul>
                <li>
                  <ExternalLink link="https://www.gatsbyjs.org/" size="small">
                    Gatsby.js
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink link="https://tailwindcss.com/" size="small">
                    Tailwind.css
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink link="https://animejs.com/" size="small">
                    anime.js
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink link="https://github.com/features/actions" size="small">
                    Github actions
                  </ExternalLink>
                </li>
                <li>
                  <ExternalLink link="https://fonts.google.com/specimen/IBM+Plex+Mono" size="small">
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
    allCollectionsJson(filter: { selected: { eq: true } }) {
      edges {
        node {
          title
          subTitle
          leadingDescription
          description
          features
          imageGrid {
            tiles
          }
          includedWorks {
            title
            subTitle
            year
            links {
              link
              label
              type
            }
            images {
              alt
              reference {
                author
                link
              }
            }
            fields {
              workImageAssets {
                default {
                  childImageSharp {
                    gatsbyImageData(
                      layout: CONSTRAINED
                      width: 1080
                      placeholder: DOMINANT_COLOR
                      quality: 90
                    )
                  }
                }
                smallVariant {
                  childImageSharp {
                    gatsbyImageData(
                      layout: CONSTRAINED
                      width: 768
                      placeholder: DOMINANT_COLOR
                      quality: 90
                    )
                  }
                }
              }
            }
          }
        }
      }
    }
    allWorksJson(filter: { selected: { eq: true } }) {
      edges {
        node {
          title
          subTitle
          leadingDescription
          description
          links {
            link
            label
          }
          year
          features
          images {
            alt
            grid {
              tiles
              fit
            }
            reference {
              author
              link
            }
          }
          fields {
            workImageAssets {
              default {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    width: 1080
                    placeholder: DOMINANT_COLOR
                    quality: 90
                  )
                }
              }
              smallVariant {
                childImageSharp {
                  gatsbyImageData(
                    layout: CONSTRAINED
                    width: 768
                    placeholder: DOMINANT_COLOR
                    quality: 90
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

export default PageHome
