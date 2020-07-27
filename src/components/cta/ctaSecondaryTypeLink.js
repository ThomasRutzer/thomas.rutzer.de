import React from "react"

const CtaSecondaryTypeLink = ({children, link}) => (
  <a
    href={link}
    className="cta-secondary">
    {children}
  </a>
)

export default CtaSecondaryTypeLink
