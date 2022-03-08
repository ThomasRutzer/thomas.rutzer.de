import React, { forwardRef, Suspense, useEffect } from "react"
import resolveConfig from "tailwindcss/resolveConfig"
import { useScrollPercentage } from "react-scroll-percentage"

import tailwindConfig from "./../../../tailwind.config"
import map from "../../utils/map"
import { useMediaQuery } from "./../../hooks"
import mergeRefs from "./../../utils/mergeRefs"

const Smear = React.lazy(() => import("./smear"))

const Background = forwardRef(({ onReady }, ref) => {
  const { theme } = resolveConfig(tailwindConfig)
  const matchesMQ = useMediaQuery(`(min-width: ${theme.screens.lg})`)
  const [scrollTarget, percentage] = useScrollPercentage({
    threshold: 0,
  })

  useEffect(() => {
    if (!matchesMQ) {
      onReady()
    }
  }, [matchesMQ, onReady])

  return (
    <div
      ref={mergeRefs([ref, scrollTarget])}
      style={{ opacity: Math.min(1, 1 - map(percentage, 0.5, 1, 0, 1)) }}
      className="intro-bg"
      aria-hidden="true"
    >
      {!matchesMQ && <Gradient />}
      {matchesMQ && (
        <Suspense fallback={<Gradient />}>
          <Smear onReady={onReady} />
        </Suspense>
      )}
    </div>
  )
})

const Gradient = () => <span className="intro-bg__gradient rounded-xl"></span>

export default Background
