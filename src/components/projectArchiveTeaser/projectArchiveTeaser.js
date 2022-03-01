import React from "react"

import { ContentWrapper } from "../layout"
import { CtaSecondaryTypeLink } from "../cta"
import ParallaxCircles from "../parallaxCircles"

const Root = () => {
  return (
    <section className="project-archive-teaser md:py-5 md:-mb-7 bg-black bg-gradient-to-b from-grey-darkest">
      <ContentWrapper additionalClasses="bg-primary md:rounded-xl shadow-xl overflow-hidden">
        <div className="project-archive-teaser__content flex flex-col md:flex-row items-center align-center justify-center">
          <h2 className="mb-4 md:mb-0 md:mr-7 font-mono">
            <span className="text-4xl md:-ml-4">There</span>
            <span className="text-5xl md:text-stroke-white italic md:text-stroke ml-4 md:ml-0 block">
              is more
            </span>
          </h2>
          <CtaSecondaryTypeLink link="/project-archive">project archive</CtaSecondaryTypeLink>
        </div>
        <div className="project-archive-teaser__bg" aria-hidden="true">
          <div className="project-archive-teaser__circle project-archive-teaser__circle--1">
            <ParallaxCircles mouseMoveTranslations={[2, 6, 2, 6]} />
          </div>
          <div className="project-archive-teaser__circle project-archive-teaser__circle--2">
            <ParallaxCircles mouseMoveTranslations={[5, 10, 5, 10]} />
          </div>
          <div className="project-archive-teaser__circle project-archive-teaser__circle--3">
            <ParallaxCircles mouseMoveTranslations={[1, 3, 1, 3]} />
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export { Root }
