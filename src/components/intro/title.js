import React from "react"

export default React.forwardRef((props, ref) => (
  <h1 ref={ref} className="intro__title text-primary md:-mt-4">
    {props.children}
  </h1>
))
