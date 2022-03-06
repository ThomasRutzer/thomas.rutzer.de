import React from "react"
import classnames from "classnames"

import { useMousemoveTranslation, useReducedMotion } from "../../hooks"
import isTouchDevice from "./../../utils/isTouchDevice"

const APPEARANCE = {
  DARK: "dark",
  PRIMARY: "primary",
}

const cssClassesRootDefault = "w-full h-full"
const cssClassesOuterDefault =
  "parallax-circles__outer relative w-full h-full bg-gradient-to-b rounded-full overflow-hidden"
const cssClassesInnerDefault =
  "parallax-circles__inner absolute top-0 w-full h-full rounded-full bg-gradient-to-r transition-transform duration-700 ease-out"

const Root = ({ mouseMoveTranslations = [10, 20, 10, 20], appearance = APPEARANCE.PRIMARY }) => {
  const prefersReducedMotion = useReducedMotion()
  const translations = useMousemoveTranslation(
    mouseMoveTranslations[0],
    mouseMoveTranslations[1],
    mouseMoveTranslations[2],
    mouseMoveTranslations[3],
    typeof window === "undefined" ? false : isTouchDevice() || prefersReducedMotion
  )

  const cssClassesInnerByAppearance = classnames({
    "from-grey-darker to-primary": appearance === APPEARANCE.PRIMARY,
    "from-grey-darker to-grey-darkest": appearance === APPEARANCE.DARK,
  })

  const cssClassesOuterByAppearance = classnames({
    "from-primary": appearance === APPEARANCE.PRIMARY,
    "from-secondary-default to-primary": appearance === APPEARANCE.DARK,
  })

  return (
    <div className={cssClassesRootDefault}>
      <div className={`${cssClassesOuterDefault} ${cssClassesOuterByAppearance}`}>
        <div
          style={{
            transform: `translate(${translations.tx}px, ${translations.ty}px)`,
          }}
          className={`${cssClassesInnerDefault} ${cssClassesInnerByAppearance}`}
        ></div>
      </div>
    </div>
  )
}

export { Root, APPEARANCE }
