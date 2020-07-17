import React, { useRef, useState } from "react"
import anime from "animejs"
import Seo from "../components/seo/seo"
import SlotMachine from "react-slot-machine"
import LayoutWrapper from "../components/layout/layoutWrapper"
import ContentWrapper from "../components/layout/contentWrapper"
import InternalLink from "../components/links/internalLink"
import page404Styles from "./404.module.scss"
import SecondaryButton from "./../components/buttons/secondary-button"
import Header from "./../components/header"

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
      <Header />
      <Seo title="404 — Too bad" />
      <LayoutWrapper>
        <ContentWrapper variant="large">
          <div className={page404Styles.grid}>
            <div className="pb-4 text-center">
              <h1 className="text-4xl md:text-5xl">
                Too bad
              </h1>
              <p>
                — I couldn't find what you were looking for. <br></br>Go&nbsp;
              <InternalLink link="/">home</InternalLink> or try your luck.
              </p>
            </div>
            <hr className={page404Styles.divider} />
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
                label="Spin to win!"
              />
            </div>
          </div>
        </ContentWrapper>
      </LayoutWrapper>
    </>
  )
}
