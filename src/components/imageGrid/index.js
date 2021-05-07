import React, { useMemo, useState } from "react"

import { useMousemoveTranslation, useReducedMotion } from "./../../hooks"
import Image from "./image"
import isTouchDevice from "./../../utils/isTouchDevice"

const ImageGrid = ({ category, title, subTitle, images = [] }) => {
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
    <div className="relative" {...mouseEvents}>
      <div
        className={`flex items-center justify-center flex-col text-center lg:absolute lg:w-full lg:h-full z-10 mb-6 pointer-events-none`}
      >
        <h5 className="bg-primary text-xs italic rounded-md px-1">
          {category}
        </h5>
        <h3 className="text-4xl md:text-6xl md:text-stroke-white md:text-stroke-2 italic leading-snug">
          {title}
        </h3>
        <h4>{subTitle}</h4>
      </div>
      <div className="grid grid-cols-6 lg:grid-rows-3 lg:gap-5 lg:h-screen">
        {images.map(({ gatsbyImageData, alt, fit, tiles, link }, key) => (
          <Image
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

export default ImageGrid
