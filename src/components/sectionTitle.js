import React from "react"
import classnames from "classnames"

const SectionTitle = ({ children, appearance }) => {
  const createClasses = () => {
    return classnames(
      "italic", "text-stroke-1", "text-transparent",
      { ["text-stroke-white"]: appearance !=="primary" },
      { ["text-stroke-tertiary"]: appearance ==="primary" },
    )
  }

  return (
    <h3 className="text-3xl">
      <span className={createClasses()}>
        {children}
      </span>
      <span className="text-primary">.</span>
    </h3>
  )
}



export default SectionTitle