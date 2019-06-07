import React from 'react'
import symbolStyles from './symbol.module.scss'

export default ({ symbol }) => 
  <div className={ symbolStyles.symbol }>
    { symbol }
  </div>

