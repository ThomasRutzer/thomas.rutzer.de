import React from 'react'
import ContentWrapper from '../layout/contentWrapper'
import InternalLink from "./../../components/links/internalLink/internalLink"

export default () => (
  <footer className="bg-black-pattern">
    <ContentWrapper variant="large">
      <ul>
        <li className="text-sm">
          <InternalLink link="/legal/">
            Legal notice
          </InternalLink>
        </li>
      </ul>
    </ContentWrapper>
  </footer>
)
