import React from "react"

import * as ContentWrapper from "../contentWrapper"
import * as InternalLink from "../internalLink"

const Root = () => (
  <footer className="bg-grey-darkest-pattern">
    <ContentWrapper.Root className="py-4" verticalSpacing={false}>
      <ul>
        <li className="text-sm inline rounded-md px-3 py-1 bg-black">
          <InternalLink.Root link="/legal/">Legal notice</InternalLink.Root>
        </li>
      </ul>
    </ContentWrapper.Root>
  </footer>
)

export { Root }
