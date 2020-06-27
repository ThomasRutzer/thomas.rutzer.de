import React from "react"
import { Link } from "gatsby"

import "./internalLink.scss"

const InternalLink = ({ children, link }) => (
  <Link className="internalLink" to={link} activeClassName="internalLink--active">
    {children}
  </Link>
)

export default InternalLink
