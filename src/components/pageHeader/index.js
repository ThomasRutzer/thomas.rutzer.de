import React from "react"
import Img from "gatsby-image"

import Header from "../header"
import { ContentWrapper } from "../layout"

export default ({ imgPath, title }) => (
  <>
    <Header />
    <ContentWrapper additionalClasses="flex items-end overflow-hidden">
      <div className="absolute top-0 left-0 r-8 w-full h-full">
        <Img
          className="w-full h-full"
          objectFit="cover"
          fluid={imgPath} />
      </div>

      <h1 className="relative text-4xl md:text-5xl text-primary max-w-screen-md z-10">
        {title}
      </h1>
    </ContentWrapper>
  </>
)
