import React from 'react'
import layoutWrapperStyles from './layoutWrapper.module.scss'
import Footer from './../footer/footer'
import Header from './../header/header'

export default ({ children, seo }) => (
  <>
    <div className={layoutWrapperStyles.layoutWrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  </>
)
