import React, { useMemo } from "react"
import classnames from "classnames"

export default ({ children, link, appearance, size }) => {
  const createSizeClass = useMemo(() => classnames({ 
    "externalLink--large text-3xl md:text-5xl": size === "large",
    "externalLink--small text-sm": size === "small"  
  }), [size])
  const createAppearanceClass = useMemo(
    () => classnames({ "externalLink--primary text-primary": appearance === "primary" }), 
    [appearance]
  )

  return (
    <a 
      className={`externalLink ${createAppearanceClass} ${createSizeClass}`} 
      href={link} 
      rel="noopener"
      target="blank">
      {children}
      <svg
        className="externalLink__icon"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#000000"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="arcs"
      >
        <path d="M7 17l9.2-9.2M17 17V7H7" />
      </svg>
    </a>
  )
}
