import React from "react"

import { ContentWrapper } from "../layout"
import { InternalLink } from "./../links"

const PageHeader = ({ title }) => (
  <header className="bg-grey-darkest-pattern">
    <ContentWrapper verticalSpacing={false}>      
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
      <h1 className="relative text-4xl md:text-6xl text-primary">
        {title}
      </h1>
    </ContentWrapper>
  </header>
)

export default PageHeader