import React from 'react'
import slotStyles from './slot.module.scss'
import Symbol from './symbol'

export default ({ symbols }) => 
  <div className={ slotStyles.slot }>
    { symbols.map((symbol, index) => <Symbol key={ index } symbol={ symbol } />) }
  </div>
