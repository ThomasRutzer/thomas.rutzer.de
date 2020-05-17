import React from 'react'
import contentWrapperStyles from './contentWrapper.module.scss'

export default ({ children, size }) => (
  <div
    className={`${contentWrapperStyles.container} ${
      size ? contentWrapperStyles[size] : null
      }`}
  >
    {children}
  </div>
)
