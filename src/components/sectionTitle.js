import React from "react"

const SectionTitle = ({ children, appearance }) => {
  return (
    <h3 className="text-2xl text-grey-lighter">
      <span>
        {children}
      </span>
      <span className="text-primary">.</span>
    </h3>
  )
}

export default SectionTitle