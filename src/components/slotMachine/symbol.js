import React from 'react'
import symbolStyles from './symbol.module.scss'

export default ({ symbol, evaluated }) => (
  <div
    className={`${symbolStyles.symbol} ${
      evaluated ? symbolStyles.evaluated : ''
    }`}
  >
    {symbol}
  </div>
)
