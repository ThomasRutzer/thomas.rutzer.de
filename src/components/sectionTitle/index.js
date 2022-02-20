import React from "react"
import classnames from "classnames"

import "./index.scss"

const SectionTitle = ({ children, className }) => {
  const cssClasses = classnames(
    "section-title relative flex items-center gap-2 md:gap-4 text-sm w-full",
    className
  )

  return (
    <h2 className={cssClasses}>
      <span>{children}</span>
    </h2>
  )
}

export default SectionTitle
