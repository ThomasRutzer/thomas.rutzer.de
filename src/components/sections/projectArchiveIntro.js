import React from "react"

import ParallaxCircles from "./../parallaxCircles"
import { ContentWrapper } from "../layout"


const ProjectArchiveTitle = () => {
  return (
    <div className="project-archive-intro relative">
      <ContentWrapper>
          <h1 className="project-archive-intro__title leading-tight ">
            <span className="text-sm">(Almost all)</span>
            <span className="text-6xl font-bold block">Design <br />& Code</span>
            <span className="text-5xl text-stroke text-stroke-white block">along the road</span>
          </h1>
      </ContentWrapper>

      <div className="project-archive-intro__bg bg-black">
        <div className="project-archive-intro__circle project-archive-intro__circle--1">
          <ParallaxCircles />
        </div>
        <div className="project-archive-intro__circle project-archive-intro__circle--2">
          <ParallaxCircles />
        </div>
        <div className="project-archive-intro__circle project-archive-intro__circle--3">
          <ParallaxCircles />
        </div>
      </div>
    </div>
  )
}

export default ProjectArchiveTitle