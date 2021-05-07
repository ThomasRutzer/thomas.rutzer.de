/**
 * see https://www.joshwcomeau.com/react/prefers-reduced-motion/
 */
import React, { useEffect } from "react"

const QUERY = "(prefers-reduced-motion: no-preference)"

const getInitialState = () => !window.matchMedia(QUERY).matches

const usePrefersReducedMotion = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(
    getInitialState
  )
  useEffect(() => {
    const mediaQueryList = window.matchMedia(QUERY)
    const listener = event => {
      setPrefersReducedMotion(!event.matches)
    }
    mediaQueryList.addEventListener("change", listener)
    return () => {
      mediaQueryList.removeEventListener("change", listener)
    }
  }, [])

  return prefersReducedMotion
}

export default usePrefersReducedMotion
