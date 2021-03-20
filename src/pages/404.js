import React, { useRef, useState } from "react"
import anime from "animejs"
import SlotMachine from "react-slot-machine"

import HeadInfos from "../components/headInfos"
import { ContentWrapper, LayoutWrapper } from "../components/layout"
import { InternalLink } from "../components/links"
import { CtaSecondaryTypeButton } from "./../components/cta"

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
      <HeadInfos title="404 — Too bad" />
      <LayoutWrapper>
        <section className="bg-gradient-to-r from-black">
          <ContentWrapper additionalClasses="flex flex-col h-screen">
            <SlotMachine
              symbols={["0", "1", "2", "3", "4"]}
              ref={slotMachineRef}
              initialSymbols={["4", "0", "4"]}
              onSpinningEnd={res => onSpinningEnd(res)}
              symbolEvaluatedStyleClass="text-white"
              symbolDefaultStyleClass="text-stroke text-stroke-white transition-colors duration-700" />
            <div className="flex justify-center mt-3 md:mt-6">
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
          </ContentWrapper>
        </section>
      </LayoutWrapper>
    </>
  )
}
