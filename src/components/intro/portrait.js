import React, { Suspense, useEffect, useState } from "react"
import { useScrollPercentage } from "react-scroll-percentage"
import Img from "gatsby-image"

import networkAnalyzer from "../../utils/networkAnalyzer"
import isMobileDevice from "../../utils/isMobileDevice"
import map from "../../utils/map"

const Smear = React.lazy(() => import("../smear"))

const Portrait = ({ imgPath, onReady }) => {
  const [sufficientConnection, setSufficientConnection] = useState()
  useEffect(() => {
    setSufficientConnection(networkAnalyzer() && !isMobileDevice())
  }, [])

  const [ref, percentage] = useScrollPercentage({
    threshold: 0,
  })

  return (
    <div
      ref={ref}
      className="portrait"
      aria-hidden="true"
      style={{ opacity: 1 - map(percentage, .5, 1, 0, 1) }}>
      {sufficientConnection && (
        <Suspense
          fallback={
            <span role="img" aria-label="loading...">
              🏋️
            </span>
          }
        >
          <Smear img={imgPath.src} onReady={onReady} />
        </Suspense>
      )}

      {!sufficientConnection && (
        <Img
          onLoad={onReady}
          className="w-full h-full"
          alt={"Portrait of Thomas Rutzer"}
          fluid={imgPath} />
      )}
    </div>
  )
}

export default Portrait
