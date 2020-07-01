import React from "react"
import { graphql } from "gatsby"

import Intro from "../components/intro/intro"
import LayoutWrapper from "../components/layout/layoutWrapper"
import Seo from "../components/seo/seo"
import ImageGrid from "../components/imageGrid"
import FeatureList from "../components/lists/featureList"
import ContentWrapper from "./../components/layout/contentWrapper"
import ExternalLink from "../components/links/externalLink/externalLink"

export default ({ data }) => {
  console.log(data.allWorksJson.edges)
  return (
    <LayoutWrapper>
      <Seo />
      <Intro />
      {data.allWorksJson.edges.map((work, key) =>
        <section key={key} className={key % 2 === 0 ? "bg-grey-darker" : "bg-black"}>
          <ContentWrapper variant="large">
            {key === 0 &&
              <>
                <h3 className="text-sm mb-4">
                  <span className="underline">works</span>
                  <span className="text-secondary">.</span>
                </h3>
              </>
            }
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
            <div className="grid grid-cols-6 md:mt-7 md:gap-5">
              <div className="col-start-1 cols-span-4 md:col-span-1">
                <p className="text-grey">{work.node.year}</p>
                <FeatureList items={work.node.features} />
              </div>
              <div className="col-start-1 col-span-6 md:col-start-2 md:col-span-3">
                <p>{work.node.description}</p>
              </div>
              <div className="col-start-1 col-span-6 md:col-start-5 md:col-span-2">
                <div className="flex flex-col md:items-end">
                  <div className="md:transform md:-rotate-90 md:translate-x-1/2 md:origin-bottom">
                    {work.node.links.map(({ link, label }, key) =>
                      <div key={key}>
                        <ExternalLink
                          link={link}
                          appearace="primary">
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
      <ContentWrapper variant="large">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="col-start-1 col-span-1">
            <h3 className="text-sm md:mt-4">
              <span className="underline">writes</span>
              <span className="text-secondary">.</span>
            </h3>
          </div>
          <div className="col-start-1 md:col-start-2 col-span-2">
            <div className="mb-7">
              <ExternalLink link={"https://blog.diepartments.de/pains-and-gains-when-developing-a-node-js-dialogflow-application/"} size="large">
                Pains and gains when developing a node.js Dialogflow application
      </ExternalLink>
              <small className="block italic">— Published first time 07.2018 on diepartments' blog. A translated version has been printed in
        <ExternalLink link="https://kiosk.entwickler.de/php-magazin/php-magazin-3-2019/"> php magazin 03.2019</ExternalLink>
              </small>
            </div>
            <div>
              <ExternalLink
                link="https://blog.diepartments.de/webvr-webgl-vue-js-2-0-and-aframe-js-a-sweet-couple/"
                size="large">
                vue.js 2.0 and aframe.js for WebVR & 3D WebGL applications
      </ExternalLink>
              <small className="block italic">— Published 02.2017</small>
            </div>
          </div>
        </div>
      </ContentWrapper>
      <section className="bg-secondary">
        <ContentWrapper variant="large">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-start-1 col-span-1">
              <h3 className="text-sm">
                <span className="underline">about</span>
                <span>.</span>
              </h3>
            </div>
            <div className="col-start-1 md:col-start-2 col-span-1">
              <p>
                I currently work at <ExternalLink link={"https://artcom.de"} appearace="primary">art+com</ExternalLink>, a studio for media installations and spaces.
          </p>
              <p className="mt-4">
                In my team located in 50°56"52.8"N 6°54"48.7"E, we are specialized in crafting custom interfaces with web technologies and realtime communications with mqtt.
          </p>
              <p className="mt-4">
                My personal reasearch focus at the moment is bringing interfaces into spaces with the new webXR API.
          </p>
            </div>
            <div className="col-start-1 md:col-start-3 col-span-1">
              <div className="flex flex-col md:items-end">
                <div className="md:transform md:-rotate-90 md:pl-2">
                  <div>
                    <ExternalLink
                      link={"twitter.com/thomasrutzer"}
                      size="large">
                      twitter
                </ExternalLink>
                  </div>
                  <div>
                    <ExternalLink
                      link={"mailto:thomas@rutzer.de"}
                      size="large">
                      mail
                </ExternalLink>
                  </div>
                  <div>
                    <ExternalLink
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
      <section>
        <ContentWrapper variant="large">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="col-start-1 col-span-1">
              <h3 className="text-sm">
                <span className="underline">credits</span>
                <span className="secondary">.</span>
              </h3>
            </div>
            <div className="col-start-1 md:col-start-2 col-span-1">
              <h5 className="mb-2">images</h5>
              <ul>
                <li>
                  <ExternalLink
                    link="https://futurium.de/uploads/images/Futurium_David_von_Becker_VB_4593.jpg"
                    size="small">
                    Fig.1: Futurium <i>permanent exhibition</i> by David von Becker
                </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    link="https://futurium.de/uploads/images/FUT_Eroeffnung_Jan_Windszus_06092019_01734.jpg"
                    size="small">
                    Fig.2: Futurium <i>permanent exhibition</i> by Jan Windszus
              </ExternalLink>
                </li>
                <li>
                  <ExternalLink
                    link="https://futurium.de/uploads/images/Futurium_David_von_Becker_VB_9824.jpg"
                    size="small">
                    Fig.3: Futurium <i>permanent exhibition</i> by David von Becker
              </ExternalLink>
                </li>
              </ul>
            </div>
            <div className="col-start-1 md:col-start-3 col-span-1">
              <h5 className="mb-2">this site</h5>
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
                    CD with Github actions
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
    allWorksJson(limit: 3) {
      edges {
        node {
          title,
          subTitle,
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
              mobileRow,
              fit
            }
          },
          fields {
            workImageAssets {
              childImageSharp {
                fluid(maxWidth: 1280, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`