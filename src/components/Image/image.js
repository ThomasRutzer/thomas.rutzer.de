import React, { Suspense } from 'react'
const Smear = React.lazy(() => import(`./../smear/smear`))

export default props =>
  <>
    { props.sufficientConnection && 
      <Suspense fallback={<span role="img" aria-label="loading...">🏋️...</span>}>
        <Smear img={ props.src } initSize={ [959, 1200] } />
      </Suspense>
    }

    { !props.sufficientConnection && 
      <img width="100%" alt={ props.alt } src={ props.src } />
    }
  </>