import React, { Suspense, useEffect, useState } from "react"
import { useScrollPercentage } from "react-scroll-percentage"

import imgAsset from "./../../images/me.jpg"
import networkAnalyzer from "../../utils/networkAnalyzer"
import isMobileDevice from "../../utils/isMobileDevice"
import map from "../../utils/map"

const Smear = React.lazy(() => import("../smear"))

const Portrait = ({ onReady }) => {
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
      className="portrait rounded-xl overflow-hidden w-full h-full"
      style={{ opacity: Math.min(1, 1 - map(percentage, 0.5, 1, 0, 1)) }}
    >
      {sufficientConnection && (
        <Suspense
          fallback={
            <span role="img" aria-label="loading...">
              🏋️
            </span>
          }
        >
          <Smear onReady={onReady} />
        </Suspense>
      )}

      {!sufficientConnection && (
        <img
          onLoad={onReady}
          className="w-full h-full object-cover"
          alt="Portrait of Thomas Rutzer"
          src={imgAsset}
        />
      )}
    </div>
  )
}

export default Portrait
