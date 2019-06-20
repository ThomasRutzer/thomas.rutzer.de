import React from 'react'
import { Link } from 'gatsby'
import footerStyles from './footer.module.scss'

export default props => (
  <footer className={footerStyles.footer}>
    <ul className={footerStyles.footerList}>
      <li>
        <Link
          className={footerStyles.footerLink}
          to="/legal/"
          activeClassName={footerStyles.footerLinkActive}
        >
          Legal notice
        </Link>
      </li>
    </ul>
  </footer>
)
