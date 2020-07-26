import React from "react"
import "typeface-ibm-plex-mono"

import Footer from "./../footer"

const LayoutWrapper = ({ children }) => (
  <div>
    {children}
    <Footer />
  </div>
)

export default LayoutWrapper
