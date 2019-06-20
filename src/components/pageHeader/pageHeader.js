import React from 'react'
import pageHeaderStyles from './pageHeader.module.scss'

export default props => (
  <div className={pageHeaderStyles.pageHeader}>
    <h1>{props.title}</h1>
  </div>
)
