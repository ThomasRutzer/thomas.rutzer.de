import React, { useRef, useState } from 'react'
import anime from 'animejs'
import Seo from '../components/seo/seo'
import SlotMachine from 'slot-machine'
import Copy from '../components/copy/copy'
import Headline from '../components/headline/headline'
import LayoutWrapper from '../components/layout/layoutWrapper'
import ContentWrapper from '../components/layout/contentWrapper'
import InternalLink from '../components/internalLink/internalLink'
import page404Styles from './404.module.scss'
import SecondaryButton from './../components/buttons/secondary-button'

export default () => {
  const slotMachineRef = useRef()
  const [isSpinning, setIsSpinning] = useState(true)

  const onStartSpinning = () => {
    slotMachineRef.current.spin()
    setIsSpinning(true)
  }

  const onSpinningEnd = res => {
    setIsSpinning(false)

    if (res) {
      anime({
        targets: document.body,
        duration: 1200,
        keyframes: [
          { filter: 'invert(100%)', backgroundColor: '#f8f8f8' },
          { filter: 'invert(0%)', backgroundColor: '#2e2d2d' },
          { filter: 'invert(100%)', backgroundColor: '#f8f8f8' },
          { filter: 'invert(0%)', backgroundColor: '#2e2d2d' },
        ],
        easing: 'easeInOutQuad',
        complete() {
          document.body.removeAttribute('style')
        },
      })
    }
  }

  return (
    <>
      <Seo title={'404 — Too bad'} />
      <LayoutWrapper>
        <div className={page404Styles.grid}>
          <div className={page404Styles.intro}>
            <ContentWrapper size={'small'}>
              <Headline priority={1} center={true} spacing={false}>
                Too bad
            </Headline>
              <Copy center={true}>
                — I couldn't find what you were looking for. <br></br>Go&nbsp;
              <InternalLink to={'/'} label={'home'} /> or try your luck.
            </Copy>
              <hr className={page404Styles.divider} />
            </ContentWrapper>
          </div>
          <SlotMachine
            symbols={["0", "1", "2", "3", "4"]}
            ref={slotMachineRef}
            initialSymbols={["4", "0", "4"]}
            onSpinningEnd={res => onSpinningEnd(res)}
            symbolEvaluatedStyleClass={page404Styles.evaluated}
            symbolDefaultStyleClass={page404Styles.symbol} />
          <div className={page404Styles.cta}>
            <SecondaryButton
              disabled={isSpinning}
              onClick={onStartSpinning}
              label={'Spin to win!'}
            />
          </div>
        </div>
      </LayoutWrapper>
    </>
  )
}
