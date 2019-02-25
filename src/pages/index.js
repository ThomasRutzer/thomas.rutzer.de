import React from 'react'

import Seo from '../components/seo/seo'
import Intro from '../components/intro/intro'
import LayoutWrapper from '../components/layoutWrapper/layoutWrapper'

export default () => (
  <>
    <Seo />
    <LayoutWrapper>
      <Intro />
    </LayoutWrapper>
  </>
)
