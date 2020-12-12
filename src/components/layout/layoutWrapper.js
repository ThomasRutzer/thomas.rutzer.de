import React from "react"
import "typeface-ibm-plex-mono"
import { Helmet } from "react-helmet"

import Footer from "./../footer"

const LayoutWrapper = ({ children }) => (
  <>
    {children}
    <Footer />
  </>
)

export default LayoutWrapper
