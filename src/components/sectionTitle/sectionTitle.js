import React from "react"

const Root = ({ children }) => {
  return (
    <h2 className="section-title font-mono relative inline-flex items-center gap-2 md:gap-2 text-sm">
      <span>{children}</span>
    </h2>
  )
}

export { Root }
