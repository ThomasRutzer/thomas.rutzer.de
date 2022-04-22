import React from "react"

import * as ContentWrapper from "../contentWrapper"
import * as InternalLink from "../internalLink"

const Root = () => (
  <footer className="bg-grey-2-pattern">
    <ContentWrapper.Root verticalSpacing={true}>
      <ul>
        <li className="text-sm inline rounded-md px-3 py-1 bg-grey-3">
          <InternalLink.Root link="/legal/">Legal notice</InternalLink.Root>
        </li>
      </ul>
    </ContentWrapper.Root>
  </footer>
)

export { Root }
