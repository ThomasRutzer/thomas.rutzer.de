import React from "react"
import "typeface-ibm-plex-mono"
import { Helmet } from "react-helmet"

import Footer from "./../footer"

const LayoutWrapper = ({ children }) => (
  <>
    <Helmet>
      <script>
        {
          (function () {
            try {
              if (typeof document !== `undefined`)  {
                document.documentElement.classList.remove("no-js")
              }
            } catch (error) {
              console.warn(error)
            }
          }())
        }
      </script>
    </Helmet>
    {children}
    <Footer />
  </>
)

export default LayoutWrapper
