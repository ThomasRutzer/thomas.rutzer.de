import React from 'react'
import pageHeaderStyles from './pageHeader.module.scss'
import Headline from './../headline/headline'

export default props => (
  <div className={pageHeaderStyles.pageHeader}>
    <Headline priority={1} spacing={false}>
      {props.title}
    </Headline>
  </div>
)
