import React from "react"

const SectionTitle = ({ children }) => {
  return (
    <h2 className="text-2xl">
      <span>
        {children}
      </span>
      <span className="text-primary">.</span>
    </h2>
  )
}

export default SectionTitle