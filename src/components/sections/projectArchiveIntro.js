import React from "react"

import ParallaxCircles from "./../parallaxCircles"
import { ContentWrapper } from "../layout"
import { InternalLink } from "./../links"

const ProjectArchiveTitle = () => {
  return (
    <div className="project-archive-intro relative">
      <ContentWrapper verticalSpacing={ false }>
        <ul className="py-2">
          <li>
            <InternalLink link="/">
              <svg
                className="external-link__icon transform -rotate-90 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="arcs"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
            Go to start view
          </InternalLink>
          </li>
        </ul>
        </ContentWrapper>
        <ContentWrapper>
          <h1 className="project-archive-intro__title leading-tight md:my-4">
            <span className="text-sm text-grey-lighter">(Almost all)</span>
            <span className="text-6xl font-bold block">Design <br />& Code</span>
            <span className="text-5xl text-stroke text-stroke-white block">along the road</span>
          </h1>
        </ContentWrapper>

        <div className="project-archive-intro__bg bg-gradient-to-r from-black" aria-hidden="true">
          <div className="project-archive-intro__circle project-archive-intro__circle--1">
            <ParallaxCircles mouseMoveTranslations={[1, 3, 1, 3]} />
          </div>
          <div className="project-archive-intro__circle project-archive-intro__circle--2">
            <ParallaxCircles mouseMoveTranslations={[5, 10, 5, 10]} />
          </div>
          <div className="project-archive-intro__circle project-archive-intro__circle--3">
            <ParallaxCircles />
          </div>
        </div>
    </div>
  )
}

export default ProjectArchiveTitle