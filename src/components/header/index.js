import React from "react"
import { Link } from "gatsby"

import ContentWrapper from "./../layout/contentWrapper"

export default () => (
  <header>
    <ContentWrapper variant="large">
      <ul>
        <li>
          <Link
            className="text-primary"
            to="/"
          >
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
            start
        </Link>
        </li>
      </ul>
    </ContentWrapper>
  </header>
)
