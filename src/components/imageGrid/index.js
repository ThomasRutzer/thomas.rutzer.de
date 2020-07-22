import React, { useEffect, useState, useCallback } from "react"

import getMousePosFromEvent from "./../../utils/getMousePosFromEvent"
import getRandomNumber from "./../../utils/getRandomNumber"
import lerp from "./../../utils/lerp"
import map from "./../../utils/map"
import Image from "./image"

const ImageGrid = ({ appearance, title, subtitle, images = [] }) => {
  const [tx, setTx] = useState(0)
  const [ty, setTy] = useState(0)

  const mousemoveHandler = useCallback(e => {
    const xstart = getRandomNumber(5, 30)
    const ystart = getRandomNumber(5, 15)
    const { x: mouseX, y: mouseY } = getMousePosFromEvent(e)
    setTx(prevTx => lerp(prevTx, map(mouseX, 0, window.innerWidth, -xstart, xstart), 0.07))
    setTy(prevTy => lerp(prevTy, map(mouseY, 0, window.innerHeight, -ystart, ystart), 0.07))
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', mousemoveHandler)

    return () => document.removeEventListener('mousemove', mousemoveHandler)
  }, [mousemoveHandler])

  return (
    <div className="relative">
      <div
        className={`
          mb-6 lg:absolute lg:w-full lg:h-full 
          flex items-center justify-center flex-col z-10
          pointer-events-none
          `}>
        <h3 className="text-4xl md:text-6xl underline underline-under">{title}</h3>
        <h4 className="mt-4">{subtitle}</h4>
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
            offsetX={tx} offsetY={ty} />
        )}
      </div>
    </div>
  )
}

export default ImageGrid