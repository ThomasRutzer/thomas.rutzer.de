import React, { useEffect, useState, useCallback, useRef } from "react"

import getMousePosFromEvent from "./../../utils/getMousePosFromEvent"
import getRandomNumber from "./../../utils/getRandomNumber"
import lerp from "./../../utils/lerp"
import map from "./../../utils/map"
import Image from "./image"

const ImageGrid = ({ appearance, title, subtitle, images = [] }) => {
  const [tx, setTx] = useState(0)
  const [ty, setTy] = useState(0)
  const mouseY = useRef(null)
  const mouseX = useRef(null)

  const mousemoveHandler = useCallback(e => {
    const { x, y } = getMousePosFromEvent(e)
    mouseX.current = x
    mouseY.current = y
  }, [])

  useEffect(() => {
    const xStart = getRandomNumber(15, 35);
    const yStart = getRandomNumber(15, 35);

    const render = () => {
      setTx(tx => lerp(tx, map(mouseX.current, 0, window.innerWidth, -xStart, xStart), 0.07))
      setTy(ty => lerp(ty, map(mouseY.current, 0, window.innerHeight, -yStart, yStart), 0.07))

      requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
  }, [])

  useEffect(() => {
    window.addEventListener('mousemove', mousemoveHandler)

    return () => window.removeEventListener('mousemove', mousemoveHandler)
  }, [mousemoveHandler])

  return (
    <div className="relative">
      <div
        className={`mb-6 lg:absolute lg:w-full lg:h-full 
          flex items-center justify-center flex-col z-10
          pointer-events-none
          `}>
        <h3 className="text-4xl md:text-6xl underline underline-under">{title}</h3>
        <h4 className="mt-2">{subtitle}</h4>
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