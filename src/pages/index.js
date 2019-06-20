import React from 'react'
import Intro from '../components/intro/intro'
import LayoutWrapper from '../components/layout/layoutWrapper'
import Seo from '../components/seo/seo'

export default () => (
  <>
    <Seo />
    <LayoutWrapper>
      <Intro />
    </LayoutWrapper>
  </>
)
