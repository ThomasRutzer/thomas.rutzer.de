import React from 'react'
import { Link } from 'gatsby'
import internalLinkStyles from './internalLink.module.scss'

export default props => (
  <Link className={internalLinkStyles.link} to={props.to}>
    {props.label}
  </Link>
)
