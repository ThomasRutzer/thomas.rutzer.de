import React from 'react'
import subTitleStyles from './subTitle.module.scss'

export default props => (
  <p className={subTitleStyles.subtitle}
  >
    {props.children}
  </p>
)
