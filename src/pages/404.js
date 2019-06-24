import React from 'react'
import Seo from '../components/seo/seo'
import { SlotMachine } from '../components/slotMachine/index'
import Copy from '../components/copy/copy'
import Headline from '../components/headline/headline'
import LayoutWrapper from '../components/layout/layoutWrapper'
import ContentWrapper from '../components/layout/contentWrapper'
import InternalLink from '../components/internalLink/internalLink'

const heightWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: 'calc(100vh - 140px)',
}

const horizontalRuleStyle = {
  width: '400px',
  maxWidth: '100%',
  margin: '32px auto 0 auto',
  opacity: '0.2',
}

export default () => (
  <>
    <Seo title={'404 — Too bad'} />
    <LayoutWrapper>
      <div style={heightWrapperStyle}>
        <ContentWrapper size={'small'}>
          <Headline priority={1} center={true}>
            Too bad
          </Headline>
          <Copy center={true}>
            — I couldn't find what you were looking for. <br></br>Go
            <InternalLink to={'/'} label={'home'} /> or try your luck.
          </Copy>
          <hr style={horizontalRuleStyle} />
        </ContentWrapper>
        <SlotMachine />
      </div>
    </LayoutWrapper>
  </>
)
