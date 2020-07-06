import React from "react"
import { Link } from "gatsby"

const InternalLink = ({ children, link }) =>
  <Link className="internalLink" to={link} activeClassName="internalLink--active">
    {children}
  </Link>

export default InternalLink
