import React, { useMemo, useState } from "react"

import { useMousemoveTranslation, useReducedMotion } from "./../../hooks"
import isTouchDevice from "./../../utils/isTouchDevice"
import * as Image from "./image"

const Root = ({ images = [] }) => {
  const [disableImgTranslations, setDisableImgTranslations] = useState(true)
  const prefersReducedMotion = useReducedMotion()
  const translations = useMousemoveTranslation(10, 20, 10, 20, disableImgTranslations)

  const mouseEvents = useMemo(() => {
    const isTouch = typeof window === "undefined" ? false : isTouchDevice()
    const addEvents = !isTouch && !prefersReducedMotion

    return {
      onMouseEnter: addEvents ? () => setDisableImgTranslations(false) : null,
      onMouseLeave: addEvents ? () => setDisableImgTranslations(false) : null,
    }
  }, [prefersReducedMotion])

  return (
    <div className="relative col-span-full col-start-1" {...mouseEvents}>
      <div className="grid grid-cols-6 xl:grid-rows-3 lg:gap-5">
        {images.map(({ gatsbyImageData, alt, fit, tiles, link }, key) => (
          <Image.Root
            key={key}
            index={key}
            gatsbyImageData={gatsbyImageData}
            alt={alt}
            fit={fit}
            link={link}
            tiles={tiles}
            offsetX={translations.tx}
            offsetY={translations.ty}
          />
        ))}
      </div>
    </div>
  )
}

export { Root }
