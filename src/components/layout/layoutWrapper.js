import React from 'react'
import Footer from './../footer/footer'
import Header from './../header/header'

export default ({ children, seo }) => (
  <div>
    {children}
    <Footer />
  </div>
)
