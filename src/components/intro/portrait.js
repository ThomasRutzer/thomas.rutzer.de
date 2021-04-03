import React, { Suspense, useEffect, useState } from "react"
import { useScrollPercentage } from "react-scroll-percentage"
import { StaticImage } from "gatsby-plugin-image"

import networkAnalyzer from "../../utils/networkAnalyzer"
import isMobileDevice from "../../utils/isMobileDevice"
import map from "../../utils/map"

const Smear = React.lazy(() => import("../smear"))
const imgPath = "./../../images/me.jpg"

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
          <Smear onReady={onReady} />
        </Suspense>
      )}

      {!sufficientConnection && (
        <StaticImage
          loading="eager"
          layout="fullWidth"
          onLoad={onReady}
          className="w-full h-full"
          alt="Portrait of Thomas Rutzer"
          src={imgPath} />
      )}
    </div>
  )
}

export default Portrait
