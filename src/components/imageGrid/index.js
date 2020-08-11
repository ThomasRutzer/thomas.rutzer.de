import React from "react"

import Image from "./image"
import { useMousemoveTranslation } from "./../../hooks"

const ImageGrid = ({ appearance, title, subtitle, images = [] }) => {
  const translations = useMousemoveTranslation(15, 35, 15, 35)

  return (
    <div className="relative">
      <div
        className={`mb-6 lg:absolute lg:w-full lg:h-full 
          flex items-center justify-center flex-col z-10
          pointer-events-none
          `}>
        <h3 className="text-4xl md:text-6xl md:text-stroke-white md:text-stroke-2">{title}</h3>
        <h4>{subtitle}</h4>
      </div>
      <div className="grid grid-cols-6 lg:grid-rows-3 lg:gap-5 lg:h-screen">
        {images.map((image, key) =>
          <Image
            appearance={appearance}
            key={key}
            index={key}
            src={image.src}
            alt={image.alt}
            fit={image.fit}
            tiles={image.tiles}
            offsetX={translations.tx}
            offsetY={translations.ty} />
        )}
      </div>
    </div>
  )
}

export default ImageGrid