import React from "react"

import { useMousemoveTranslation } from "../../hooks"
import isTouchDevice from "./../../utils/isTouchDevice"

const ParallaxCircles = ({ mouseMoveTranslations = [10, 20, 10, 20] }) => {
  const translations = useMousemoveTranslation(
    mouseMoveTranslations[0],
    mouseMoveTranslations[1],
    mouseMoveTranslations[2],
    mouseMoveTranslations[3],
    typeof window === "undefined" ? false : isTouchDevice()
  )

  return (
    <div className="parallax-circles">
      <div className="parallax-circles__outer bg-primary bg-gradient-to-b from-secondary">
        <div
          style={{
            transform: `translate(${translations.tx}px, ${translations.ty}px)`,
          }}
          className="parallax-circles__inner bg-gradient-to-r from-grey-darker transition-transform duration-700 ease-out"
        ></div>
      </div>
    </div>
  )
}

export default ParallaxCircles
