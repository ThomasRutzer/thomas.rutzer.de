import React from "react"

import { ContentWrapper } from "../layout"
import * as InternalLink from "../internalLink"

const Root = () => (
  <footer className="bg-grey-darkest-pattern">
    <ContentWrapper additionalClasses="py-4" verticalSpacing={false}>
      <ul>
        <li className="text-sm inline rounded-md px-3 py-1 bg-black">
          <InternalLink.Root link="/legal/">Legal notice</InternalLink.Root>
        </li>
      </ul>
    </ContentWrapper>
  </footer>
)

export { Root }
