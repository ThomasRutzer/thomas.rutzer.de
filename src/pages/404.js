import React, { useRef, useState } from "react"
import anime from "animejs"

import Seo from "../components/seo"
import SlotMachine from "react-slot-machine"
import { ContentWrapper, LayoutWrapper } from "../components/layout"
import { InternalLink } from "../components/links"
import page404Styles from "./404.module.scss"
import { CtaSecondaryTypeButton } from "./../components/cta"
import PageHeader from "../components/pageHeader"

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
          { filter: "invert(100%)", backgroundColor: "#f8f8f8" },
          { filter: "invert(0%)", backgroundColor: "#2e2d2d" },
          { filter: "invert(100%)", backgroundColor: "#f8f8f8" },
          { filter: "invert(0%)", backgroundColor: "#2e2d2d" },
        ],
        easing: "easeInOutQuad",
        complete() {
          document.body.removeAttribute("style")
        },
      })
    }
  }

  return (
    <>
      <Seo title="404 — Too bad" />
      <LayoutWrapper>
        <PageHeader title="404 — Too bad" />
        <section className="bg-gradient-to-r from-black">
          <ContentWrapper>
            <div className={`${page404Styles.grid}`}>
              <SlotMachine
                symbols={["0", "1", "2", "3", "4"]}
                ref={slotMachineRef}
                initialSymbols={["4", "0", "4"]}
                onSpinningEnd={res => onSpinningEnd(res)}
                symbolEvaluatedStyleClass={page404Styles.evaluated}
                symbolDefaultStyleClass={page404Styles.symbol} />
              <div className={page404Styles.cta}>
                <CtaSecondaryTypeButton
                  disabled={isSpinning}
                  onClick={onStartSpinning}>
                  Spin to Win!
              </CtaSecondaryTypeButton>
              </div>
              <div className="mt-4 text-center">
                <p>
                  I couldn't find what you were looking for. <br></br>Go&nbsp;
              <InternalLink link="/">home</InternalLink> or try your luck.
              </p>
              </div>
            </div>
          </ContentWrapper>
        </section>
      </LayoutWrapper>
    </>
  )
}
