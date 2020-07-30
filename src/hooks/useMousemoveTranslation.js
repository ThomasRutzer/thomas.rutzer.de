import { useEffect, useState, useCallback, useRef } from "react"

import getMousePosFromEvent from "./../utils/getMousePosFromEvent"
import getRandomNumber from "./../utils/getRandomNumber"
import lerp from "./../utils/lerp"
import map from "./../utils/map"
import isTouchDevice from "./../utils/isTouchDevice"

export default (xRangeMin, xRangeMax, yRangeMin, yRangeMax) => {
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
    let animationFrameId = null
    const xStart = getRandomNumber(xRangeMin, xRangeMax)
    const yStart = getRandomNumber( yRangeMin, yRangeMax)

    const renderMousemove = () => {
      setTx(tx => lerp(tx, map(mouseX.current, 0, window.innerWidth, -xStart, xStart), 0.07))
      setTy(ty => lerp(ty, map(mouseY.current, 0, window.innerHeight, -yStart, yStart), 0.07))

      animationFrameId = requestAnimationFrame(renderMousemove)
    }
    
    animationFrameId = requestAnimationFrame(renderMousemove)

    return () => cancelAnimationFrame(animationFrameId)
  }, [xRangeMin, xRangeMax, yRangeMin, yRangeMax])

  useEffect(() => {
    if (!isTouchDevice()) return

    window.addEventListener('mousemove', mousemoveHandler)

    return () => {
      window.removeEventListener('mousemove', mousemoveHandler)
    }
  }, [mousemoveHandler])

  return {tx, ty}
}
