import React from 'react'
import symbolStyles from './symbol.module.scss'

export default ({ symbol, evaluated, jackpot }) => 
  <div className={`${symbolStyles.symbol} ${evaluated ? symbolStyles.evaluated : ""}`}>
    { symbol }
  </div>
