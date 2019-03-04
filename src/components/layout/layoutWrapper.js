import React from 'react'
import layoutWrapperStyles from './layoutWrapper.module.scss'
import Footer from './../footer/footer'
import Header from './../header/header'
import Seo from './../seo/seo'

export default ({ children }) => (
  <>
    <Seo />
    <div className={layoutWrapperStyles.layoutWrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  </>
)
