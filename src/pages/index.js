import React from "react"
import { graphql } from "gatsby"

import * as Intro from "../components/intro"
import HeadInfos from "../components/headInfos"
import * as Collapsible from "../components/collapsible"
import * as ContentWrapper from "./../components/contentWrapper"
import * as ExternalLink from "../components/externalLink"
import * as ImageGrid from "../components/imageGrid"
import * as LayoutWrapper from "../components/layoutWrapper"
import * as ProjectArchiveTeaser from "../components/projectArchiveTeaser"
import * as SectionTitle from "../components/sectionTitle"
import * as UseCasePreview from "../components/useCasePreview"
import * as WritingPreview from "../components/writingPreview"

const PageHome = ({ data }) => {
  return (
    <LayoutWrapper.Root>
      <HeadInfos />
      <Intro.Root />
      <ContentWrapper.Root verticalSpacing={false} className="pt-4 md:pt-7">
        <SectionTitle.Root>work</SectionTitle.Root>
      </ContentWrapper.Root>

      {data.allWorksJson.edges.map((work, key) => (
        <UseCasePreview.Root
          key={key}
          appearance={
            key % 2 === 0 ? UseCasePreview.APPEARANCES.GREY : UseCasePreview.APPEARANCES.SECONDARY
          }
        >
          <UseCasePreview.HeroContent>
            <UseCasePreview.TitleGroup
              category="project"
              title={work.node.title}
              subTitle={work.node.subTitle}
            />
            <ImageGrid.Root
              images={work.node.images.map((image, key) => ({
                gatsbyImageData: work.node.fields.workImageAssets[key],
                alt: image.alt,
                tiles: image.grid.tiles,
                fit: image.grid.fit,
              }))}
            />
          </UseCasePreview.HeroContent>
          <UseCasePreview.Content>
            <UseCasePreview.Infos features={work.node.features} facts={[work.node.year]} />
            <UseCasePreview.Copy>
              {work.node.leadingDescription}
              {work.node.description}
            </UseCasePreview.Copy>
            <UseCasePreview.Links links={work.node.links} />
          </UseCasePreview.Content>
        </UseCasePreview.Root>
      ))}
      {data.allCollectionsJson.edges.map((collection, key) => (
        <UseCasePreview.Root key={key} appearance={UseCasePreview.APPEARANCES.GREY}>
          <UseCasePreview.HeroContent>
            <UseCasePreview.TitleGroup
              category="collection"
              title={collection.node.title}
              subTitle={collection.node.subTitle}
            />
            <ImageGrid.Root
              images={collection.node.includedWorks.map(
                ({ fields, title, subTitle, year, links }, key) => ({
                  gatsbyImageData: fields.workImageAssets[0],
                  alt: `${title} – ${subTitle} (${year})`,
                  tiles: collection.node.imageGrid.tiles[key],
                  fit: fields.workImageAssets[0].fit,
                  link: links[0],
                })
              )}
            />
          </UseCasePreview.HeroContent>
          <UseCasePreview.Content>
            <UseCasePreview.Infos features={collection.node.features} />
            <UseCasePreview.Copy>
              {collection.node.leadingDescription}
              {collection.node.description}
            </UseCasePreview.Copy>
          </UseCasePreview.Content>
        </UseCasePreview.Root>
      ))}

      <section className="py-5 md:pb-0 md:-mb-7 bg-black bg-gradient-to-b from-grey-2">
        <ProjectArchiveTeaser.Root />
      </section>

      <section className="bg-grey-2-pattern">
        <ContentWrapper.Root>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:mt-7">
            <div className="col-start-1 col-span-1">
              <SectionTitle.Root>thoughts</SectionTitle.Root>
            </div>
            <div className="col-start-1 md:col-start-2 col-span-2">
              <div className="grid gap-5 md:grid-cols-2">
                {data.allWritesJson.edges.map((write, key) => (
                  <WritingPreview.Root key={key}>
                    <WritingPreview.Content>
                      <WritingPreview.Title>{write.node.title}</WritingPreview.Title>

                      <small className="block font-mono text-xs text-grey-11 mt-4">
                        — {write.node.description}
                      </small>
                    </WritingPreview.Content>
                    <WritingPreview.Footer>
                      <ExternalLink.Root link={write.node.link} size={ExternalLink.SIZES.SMALL}>
                        read more
                      </ExternalLink.Root>
                    </WritingPreview.Footer>
                  </WritingPreview.Root>
                ))}
              </div>
            </div>
          </div>
        </ContentWrapper.Root>
      </section>
      <section className="bg-secondary">
        <ContentWrapper.Root>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-start-1 col-span-1">
              <SectionTitle.Root>about</SectionTitle.Root>
            </div>
            <div className="col-start-1 md:col-start-2 md:col-span-2 lg:col-span-1 leading-loose">
              <p>
                I'm a experienced developer specialized in crafting unique interfaces & interactions
                for the browser platform. I work on a high level with JavaScript in general and
                currently use ReactJS daily. Building complex Frontend applications includes for me
                profound knowledge about state management, data structures and algorithms. I also
                know how to write semantic and accessible HTML and modern CSS that scales.
              </p>
              <p className="mt-4">
                In the last years, I extensivly used WebGL, mostly with React Three Fiber, and
                researched how to blend blending interfaces into spaces with the new WebXR Device
                API.
              </p>
              <p className="mt-4">
                My day-job is at&nbsp;
                <ExternalLink.Root link="https://sprinteins.com/">SprintEins</ExternalLink.Root>,
                where we build enterprise applications.
              </p>
            </div>
            <div className="col-start-1 md:col-start-2 lg:col-start-3 col-span-1">
              <div className="flex flex-col lg:items-end">
                <div className="lg:transform lg:-rotate-90 lg:-translate-y-full lg:origin-bottom-right lg:pl-2">
                  <div>
                    <ExternalLink.Root
                      additionalClasses="whitespace-no-wrap"
                      appearance="primary"
                      link="twitter.com/thomasrutzer"
                      size="large"
                    >
                      twitter
                    </ExternalLink.Root>
                  </div>
                  <div>
                    <ExternalLink.Root
                      additionalClasses="whitespace-no-wrap"
                      appearance="primary"
                      link="mailto:hi@thomasrutzer.dev"
                      size="large"
                    >
                      mail
                    </ExternalLink.Root>
                  </div>
                  <div>
                    <ExternalLink.Root
                      additionalClasses="whitespace-no-wrap"
                      appearance="primary"
                      link="https://github.com/ThomasRutzer"
                      size="large"
                    >
                      github
                    </ExternalLink.Root>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ContentWrapper.Root>
      </section>
      <section>
        <ContentWrapper.Root>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="col-start-1 col-span-1">
              <SectionTitle.Root>credits</SectionTitle.Root>
            </div>
            <div className="col-start-1 md:col-start-2 col-span-1">
              <Collapsible.Root title="images">
                {data.allWorksJson.edges.map((work, key) => (
                  <div key={key} className="mt-2">
                    <dl>
                      <dt className="mt-2">
                        <span className="text-sm text-secondary-lighter">
                          {work.node.title} <i>{work.node.subTitle}</i>
                        </span>
                      </dt>
                      {work.node.images.map((image, imageKey) => (
                        <dl className="mt-2" key={imageKey}>
                          {image.reference.link && (
                            <ExternalLink.Root
                              link={image.reference.link}
                              size={ExternalLink.SIZES.SMALL}
                            >
                              Fig.{imageKey + 1} by {image.reference.author}
                            </ExternalLink.Root>
                          )}
                          {!image.reference.link && (
                            <span className="text-sm">
                              Fig.{imageKey + 1} by {image.reference.author}
                            </span>
                          )}
                        </dl>
                      ))}
                    </dl>
                  </div>
                ))}
              </Collapsible.Root>
            </div>
            <div className="col-start-1 md:col-start-3 col-span-1">
              <Collapsible.Root title="this site">
                <ul>
                  <li className="mt-2">
                    <ExternalLink.Root
                      link="https://www.gatsbyjs.org/"
                      size={ExternalLink.SIZES.SMALL}
                    >
                      Gatsby.js
                    </ExternalLink.Root>
                  </li>
                  <li className="mt-2">
                    <ExternalLink.Root
                      link="https://tailwindcss.com/"
                      size={ExternalLink.SIZES.SMALL}
                    >
                      Tailwind.css
                    </ExternalLink.Root>
                  </li>
                  <li className="mt-2">
                    <ExternalLink.Root link="https://animejs.com/" size={ExternalLink.SIZES.SMALL}>
                      anime.js
                    </ExternalLink.Root>
                  </li>
                  <li className="mt-2">
                    <ExternalLink.Root
                      link="https://github.com/features/actions"
                      size={ExternalLink.SIZES.SMALL}
                    >
                      Github actions
                    </ExternalLink.Root>
                  </li>
                  <li className="mt-2">
                    <ExternalLink.Root
                      link="https://fonts.google.com/specimen/IBM+Plex+Mono"
                      size={ExternalLink.SIZES.SMALL}
                    >
                      IBM Plex Mono
                    </ExternalLink.Root>
                  </li>
                </ul>
              </Collapsible.Root>
            </div>
          </div>
        </ContentWrapper.Root>
      </section>
    </LayoutWrapper.Root>
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
