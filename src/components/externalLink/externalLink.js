import React from 'react'
import externalLinkStyles from './externalLink.module.scss'

export default props => (
  <a className={ externalLinkStyles.link } href={props.link} target="blank">
    {props.children}
    <span className={ externalLinkStyles.icon }>↗</span>
  </a>
)
