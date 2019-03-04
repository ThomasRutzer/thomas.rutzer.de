import React from 'react'
import externalLinkStyles from './externalLink.module.scss'

export default props => (
  <a className={ externalLinkStyles.link } href={props.link} target="blank">
    {props.children}
    <svg className={ externalLinkStyles.icon } xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="square" strokeLinejoin="arcs"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
  </a>
)
