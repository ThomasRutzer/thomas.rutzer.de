import React from "react"

import Header from "../header"
import { ContentWrapper } from "../layout"

export default ({ title }) => (
  <>
    <Header />
    <ContentWrapper additionalClasses="flex items-end overflow-hidden">
      <h1 className="relative text-4xl md:text-6xl text-primary">
        {title}
      </h1>
    </ContentWrapper>
  </>
)
