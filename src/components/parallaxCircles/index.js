import React from "react"

import { useMousemoveTranslation } from "../../hooks"

const ParallaxCircles = ({ mouseMoveTranslations = [10, 20, 10, 20] }) => {
  const translations = useMousemoveTranslation(
    mouseMoveTranslations[0], mouseMoveTranslations[1], mouseMoveTranslations[2], mouseMoveTranslations[3]
  )

  return (
    <div className="parallax-circles" aria-hidden>
      <div className="parallax-circles__outer">
        <div
          style={{
            transform: `translate(${translations.tx}px, ${translations.ty}px)`
          }}
          className="parallax-circles__inner bg-gradient-to-r from-grey-darker transition-transform duration-700 ease-out"></div>
      </div>
    </div>
  )
}

export default ParallaxCircles
