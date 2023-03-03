import classnames from "classnames"
import React from "react"

const Root = ({ children, fullWidth = false }) => {
  const classNames = classnames(
    "section-title font-mono relative inline-flex items-center gap-2 md:gap-2 text-sm uppercase",
    { "w-full": fullWidth }
  )
  return (
    <h2 className={classNames}>
      <span>{children}</span>
    </h2>
  )
}

export { Root }
