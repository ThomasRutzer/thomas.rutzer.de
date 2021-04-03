import React, { useMemo } from "react"
import classnames from "classnames"

const ExternalLink = ({ additionalClasses = "", children, link, appearance, size }) => {
  const createSizeClass = useMemo(() => classnames({ 
    "external-link--large text-3xl md:text-5xl": size === "large",
    "external-link--small text-sm": size === "small"  
  }), [size])
  const createAppearanceClass = useMemo(
    () => classnames({ "external-link--primary text-primary": appearance === "primary" }), 
    [appearance]
  )

  return (
    <a 
      className={`external-link ${additionalClasses} ${createAppearanceClass} ${createSizeClass}`} 
      href={link} 
      rel="noopener"
      target="blank">
      {children}
      <svg
        className="external-link__icon"
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

export default ExternalLink