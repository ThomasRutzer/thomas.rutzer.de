import React from "react"
import Img from "gatsby-image"

const AccordionImage = ({ src, alt, className = "accordion-item__image" }) => {
  return (
    <div className={`${className}`}>
      <Img
        alt={alt}
        fixed={src} />
    </div>
  )
}

export default AccordionImage