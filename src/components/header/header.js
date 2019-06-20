import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

export default props => (
  <header className={headerStyles.header}>
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
  </header>
)
