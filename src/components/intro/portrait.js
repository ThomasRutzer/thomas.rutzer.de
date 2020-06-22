import React, { Suspense } from 'react'
import networkAnalyzer from "../../utils/networkAnalyzer"
import isMobileDevice from "../../utils/isMobileDevice"
import portraitImagePath from './../../images/me.jpg'
const Smear = React.lazy(() => import(`../smear/smear`))

const Portrait = () => {
  const sufficientConnection = networkAnalyzer() && !isMobileDevice()

  return (
    <>
      {sufficientConnection && (
        <Suspense
          fallback={
            <span role="img" aria-label="loading...">
              🏋️...
            </span>
          }
        >
          <Smear img={portraitImagePath} initSize={[959, 1200]} />
        </Suspense>
      )}

      {!sufficientConnection && (
        <img width="100%" alt={"Portrait of Thomas Rutzer"} src={portraitImagePath} />
      )}
    </>
  )
}

export default Portrait
