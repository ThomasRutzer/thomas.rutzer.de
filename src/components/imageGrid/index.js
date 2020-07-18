import React, { useEffect, useState, useCallback } from "react"

import getMousePosFromEvent from "./../../utils/getMousePosFromEvent"
import getRandomNumber from "./../../utils/getRandomNumber"
import lerp from "./../../utils/lerp"
import map from "./../../utils/map"
import Image from "./image"

const ImageGrid = ({ title, subtitle, images = [] }) => {
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
        className="
          mb-6 md:absolute md:w-full md:h-full 
          flex items-center justify-center flex-col z-10
        ">
        <h2 className="text-6xl underline underline-under">{title}</h2>
        <h3 className="mt-4">{subtitle}</h3>
      </div>
      <div className="grid grid-cols-6 md:grid-rows-3 md:gap-5 md:h-screen">
        {images.map((image, key) =>
          <Image
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