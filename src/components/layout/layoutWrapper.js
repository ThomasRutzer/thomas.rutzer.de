import React from "react"
import Footer from "./../footer/footer"
import "typeface-ibm-plex-mono"

export default ({ children }) => (
  <div>
    {children}
    <Footer />
  </div>
)
