import React from "react"
import layoutWrapperStyles from "./layoutWrapper.module.css"

export default ({ children }) => (
    <div className={layoutWrapperStyles.layoutWrapper}>{children}</div>
)
  