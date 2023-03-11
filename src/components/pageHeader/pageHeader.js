import React from "react"

import * as ContentWrapper from "../contentWrapper"
import * as InternalLink from "../internalLink"

const Root = ({ title }) => (
  <header className="bg-grey-2-pattern">
    <ContentWrapper.Root>
      <ul className="col-span-full py-2">
        <li>
          <InternalLink.Root link="/">
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
          </InternalLink.Root>
        </li>
      </ul>
    </ContentWrapper.Root>
    <ContentWrapper.Root verticalSpacing>
      <h1 className="relative col-span-full text-4xl md:text-6xl text-primary">{title}</h1>
    </ContentWrapper.Root>
  </header>
)

export { Root }
