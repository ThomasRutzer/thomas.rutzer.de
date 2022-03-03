import React from "react"
import { Link } from "gatsby"

const cssClassesDefault = "internal-link text-secondary-lighter text-sm"
const cssClassesFocus =
  "focus:outline-1 outline-secondary-lighter focus:outline-dashed focus:outline-offset-4"
const cssClassesActive = "active:opacity-80"

const Root = ({ children, link }) => (
  <Link
    className={`${cssClassesDefault} ${cssClassesFocus} ${cssClassesActive}`}
    to={link}
    activeClassName="internal-link--active"
  >
    {children}
  </Link>
)

export { Root }
