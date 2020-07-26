import React from "react"
import {
  Accordion,
  resetNextUuid
} from "react-accessible-accordion"

export default ({ children }) => {
  resetNextUuid()

  return (
    <Accordion allowZeroExpanded>
      { children }
    </Accordion>
  )
}

