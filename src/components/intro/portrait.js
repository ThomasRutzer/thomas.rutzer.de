import React, { Suspense, useEffect, useState } from "react"
import networkAnalyzer from "../../utils/networkAnalyzer"
import isMobileDevice from "../../utils/isMobileDevice"
import Img from "gatsby-image"
const Smear = React.lazy(() => import("../smear/smear"))

const Portrait = ({ imgPath }) => {
  const [sufficientConnection, setSufficientConnection] = useState()
console.log(imgPath)
  useEffect(() => {
    setSufficientConnection(networkAnalyzer() && !isMobileDevice())
  }, [])

  return (
    <>
      {sufficientConnection && (
        <Suspense
          fallback={
            <span role="img" aria-label="loading...">
              🏋️
            </span>
          }
        >
          <Smear img={imgPath.src} />
        </Suspense>
      )}

      {!sufficientConnection && (
        <Img
          className="w-full h-full"
          alt={"Portrait of Thomas Rutzer"} 
          fluid={imgPath} />
      )}
    </>
  )
}

export default Portrait
