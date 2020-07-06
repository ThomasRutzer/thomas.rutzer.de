import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"
import ContentWrapper from "./../layout/contentWrapper"

export default () => (
  <header className={headerStyles.header}>
    <ContentWrapper variant="large">
      <ul className={headerStyles.headerList}>
        <li>
          <Link
            className={headerStyles.headerLink}
            to="/"
            activeClassName={headerStyles.headerLinkActive}
          >
            start
        </Link>
        </li>
      </ul>
    </ContentWrapper>
  </header>
)
