import React from 'react'
import ContentWrapper from '../layout/contentWrapper'
import InternalLink from "../links/internalLink"

export default () => (
  <footer className="bg-black">
    <ContentWrapper>
      <div className="md:grid md:grid-cols-3">
        <ul>
          <li className="text-sm inline">
            <InternalLink link="/legal/">
              Legal notice
          </InternalLink>
          </li>
          <li className="text-sm inline ml-4">
            <InternalLink link="/all-works/">
              Work archive
          </InternalLink>
          </li>
        </ul>
      </div>
    </ContentWrapper>
  </footer>
)
