import React from 'react'
import contentWrapperStyles from './contentWrapper.module.scss'

export default ({ children, mode  }) => (
  <div className={ `${ contentWrapperStyles.container } ${ mode ? contentWrapperStyles[mode] : null }` }>
    {children}
  </div>
)
