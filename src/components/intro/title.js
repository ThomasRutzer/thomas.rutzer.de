import React from 'react'
// eslint-disable-next-line
import titlestyles from './title.scss'

export default React.forwardRef((props, ref) => (
  <h1 ref={ref} className="title">
    {props.children}
  </h1>
))
