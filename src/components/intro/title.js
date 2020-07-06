import React from 'react'
import './title.scss'

export default React.forwardRef((props, ref) => (
  <h1 ref={ref} className="title text-highlight-darker">
    {props.children}
  </h1>
))
