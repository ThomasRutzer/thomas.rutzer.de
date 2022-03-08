import React from "react"

import * as Footer from "../footer"

const Root = ({ children }) => (
  <>
    {children}
    <Footer.Root />
  </>
)

export { Root }
