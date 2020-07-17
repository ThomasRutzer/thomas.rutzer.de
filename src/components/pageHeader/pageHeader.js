import React from "react"

import Header from "./../header"
import ContentWrapper from "./../layout/contentWrapper"

export default props => (
  <>
    <Header />
    <ContentWrapper>
      <h1 className="text-4xl md:text-5xl">
        {props.title}
      </h1>
    </ContentWrapper>
  </>
)
