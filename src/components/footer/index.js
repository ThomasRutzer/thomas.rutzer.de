import React from 'react'
import { ContentWrapper } from '../layout'
import { InternalLink } from "../links"

const Footer = () =>
  <footer className="bg-black">
    <ContentWrapper>
      <div className="md:grid md:grid-cols-3">
        <ul>
          <li className="text-sm inline">
            <InternalLink link="/legal/">
              Legal notice
            </InternalLink>
          </li>
        </ul>
      </div>
    </ContentWrapper>
  </footer>

export default Footer