import React from 'react'
import ContentWrapper from '../layout/contentWrapper'
import InternalLink from "../links/internalLink"

export default () => (
  <footer className="bg-black-pattern">
    <ContentWrapper>
      <div className="md:grid md:grid-cols-3">
        <ul>
          <li className="text-sm">
            <InternalLink link="/legal/">
              Legal notice
          </InternalLink>
          </li>
        </ul>
      </div>
    </ContentWrapper>
  </footer>
)
