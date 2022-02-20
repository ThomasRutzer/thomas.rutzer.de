import React from "react"

import "./index.scss"

const SectionTitle = ({ children }) => {
  return (
    <h2 className="section-title relative inline-flex items-center gap-2 md:gap-2 text-sm">
      <span>{children}</span>
    </h2>
  )
}

export default SectionTitle
