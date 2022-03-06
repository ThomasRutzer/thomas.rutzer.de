import React from "react"

import * as ContentWrapper from "../contentWrapper"
import * as Cta from "../cta"
import * as ParallaxCircles from "../parallaxCircles"

const Root = () => {
  return (
    <section className="project-archive-teaser md:py-5 md:-mb-7 bg-black bg-gradient-to-b from-grey-darkest">
      <ContentWrapper.Root className="bg-primary md:rounded-xl shadow-xl overflow-hidden">
        <div className="project-archive-teaser__content flex flex-col md:flex-row items-center align-center justify-center">
          <h2 className="mb-4 md:mb-0 md:mr-7 font-mono">
            <span className="text-4xl md:-ml-4">There</span>
            <span className="text-5xl md:text-stroke-white italic md:text-stroke ml-4 md:ml-0 block">
              is more
            </span>
          </h2>
          <Cta.Root href="/project-archive" as="a">
            project archive
          </Cta.Root>
        </div>
        <div className="project-archive-teaser__bg" aria-hidden="true">
          <div className="project-archive-teaser__circle project-archive-teaser__circle--1">
            <ParallaxCircles.Root
              appearance={ParallaxCircles.APPEARANCE.PRIMARY}
              mouseMoveTranslations={[6, 6, 6, 6]}
            />
          </div>
          <div className="project-archive-teaser__circle project-archive-teaser__circle--2">
            <ParallaxCircles.Root
              appearance={ParallaxCircles.APPEARANCE.PRIMARY}
              mouseMoveTranslations={[10, 10, 10, 10]}
            />
          </div>
          <div className="project-archive-teaser__circle project-archive-teaser__circle--3">
            <ParallaxCircles.Root
              appearance={ParallaxCircles.APPEARANCE.PRIMARY}
              mouseMoveTranslations={[4, 4, 4, 4]}
            />
          </div>
        </div>
      </ContentWrapper.Root>
    </section>
  )
}

export { Root }
