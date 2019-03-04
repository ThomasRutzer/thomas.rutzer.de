import React from 'react'
// eslint-disable-next-line
import headlineStyles from './headline.scss'

export default React.forwardRef((props, ref) => (
  <h1 ref={ref} className="headline">
    {props.children}
  </h1>
))
