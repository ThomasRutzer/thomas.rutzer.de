import React from "react"

import { useMousemoveTranslation } from "../../hooks"

const ParallaxCircles = () => {
  const translations = useMousemoveTranslation(10, 20, 10, 20)

  return (
    <div className="parallax-circles" aria-hidden>
      <div className="parallax-circles__outer">
        <div
          style={{
            transform: `translate(${translations.tx}px, ${translations.ty}px)`
          }}
          className="parallax-circles__inner  transition-transform duration-700 ease-out"></div>
      </div>
    </div>
  )
}

export default ParallaxCircles
