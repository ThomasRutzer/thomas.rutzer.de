import React from "react"

export default React.forwardRef(({ children }, ref) => (
  <h1 ref={ref} className="intro-title text-primary md:-mt-4 font-mono">
    {children}
  </h1>
))
