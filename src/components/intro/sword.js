import React from "react"
import swordStyles from "./sword.module.css"

export default props => (
    <span className={ swordStyles.sword } 
          role="img" 
          aria-label="the sword">🗡
    </span>
)
  