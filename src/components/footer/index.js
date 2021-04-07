import React from 'react'
import { ContentWrapper } from '../layout'
import { InternalLink } from "../links"

const Footer = () =>
  <footer className="bg-grey-darkest-pattern">
    <ContentWrapper additionalClasses="py-4" verticalSpacing={false}>
        <ul>
          <li className="text-sm inline rounded-md px-3 py-1 bg-black">
            <InternalLink link="/legal/">
              Legal notice
            </InternalLink>
          </li>
        </ul>
    </ContentWrapper>
  </footer>

export default Footer