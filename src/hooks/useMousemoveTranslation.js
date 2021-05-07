import { useEffect, useState, useCallback, useRef } from "react"

import getMousePosFromEvent from "./../utils/getMousePosFromEvent"
import getRandomNumber from "./../utils/getRandomNumber"
import lerp from "./../utils/lerp"
import map from "./../utils/map"

const useMouseMoveTranslation = (
  xRangeMin,
  xRangeMax,
  yRangeMin,
  yRangeMax,
  isDisabled
) => {
  const [tx, setTx] = useState(null)
  const [ty, setTy] = useState(null)
  const mouseY = useRef(null)
  const mouseX = useRef(null)

  const mousemoveHandler = useCallback(e => {
    const { x, y } = getMousePosFromEvent(e)
    mouseX.current = x
    mouseY.current = y
  }, [])

  useEffect(() => {
    if (isDisabled) return

    let animationFrameId = null

    const xStart = getRandomNumber(xRangeMin, xRangeMax)
    const yStart = getRandomNumber(yRangeMin, yRangeMax)

    const renderMousemove = () => {
      setTx(tx =>
        lerp(
          tx,
          map(mouseX.current, 0, window.innerWidth, -xStart, xStart),
          0.07
        )
      )
      setTy(ty =>
        lerp(
          ty,
          map(mouseY.current, 0, window.innerHeight, -yStart, yStart),
          0.07
        )
      )

      animationFrameId = requestAnimationFrame(renderMousemove)
    }

    animationFrameId = requestAnimationFrame(renderMousemove)

    return () => cancelAnimationFrame(animationFrameId)
  }, [isDisabled, xRangeMin, xRangeMax, yRangeMin, yRangeMax])

  useEffect(() => {
    if (!isDisabled) {
      window.addEventListener("mousemove", mousemoveHandler)
    } else {
      window.removeEventListener("mousemove", mousemoveHandler)
    }

    return () => {
      window.removeEventListener("mousemove", mousemoveHandler)
    }
  }, [mousemoveHandler, isDisabled])

  return { tx, ty }
}

export default useMouseMoveTranslation
