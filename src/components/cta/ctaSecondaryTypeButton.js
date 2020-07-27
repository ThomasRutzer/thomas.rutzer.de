import React from "react"

const CtaSecondaryTypeButton = ({ children, disabled, onClick }) => (
  <button
    className="cta-secondary"
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </button>
)

export default CtaSecondaryTypeButton
