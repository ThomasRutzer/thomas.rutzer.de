import React from 'react'
import buttonStyle from './buttons.module.scss'

export default props => (
  <a
    href={props.link}
    className={buttonStyle.secondary}>
    {props.children}
  </a>
)
