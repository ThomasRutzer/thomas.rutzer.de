import React from "react"
import { Link } from "gatsby"
import classnames from "classnames"

const Root = ({ children, link }) => {
  const classNames = classnames(
    "internal-link text-secondary-lighter text-sm rounded-sm",
    "focus:outline-1 focus:outline-secondary-lighter focus:outline-dashed focus:outline-offset-4",
    "active:opacity-80"
  )
  return (
    <Link className={classNames} to={link} activeClassName="internal-link--active">
      {children}
    </Link>
  )
}

export { Root }
