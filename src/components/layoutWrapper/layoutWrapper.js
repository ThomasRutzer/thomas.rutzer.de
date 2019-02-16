import React from 'react'
import layoutWrapperStyles from './layoutWrapper.module.scss'

export default ({ children }) => (
  <div className={layoutWrapperStyles.layoutWrapper}>{children}</div>
)
