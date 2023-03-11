import React, { useEffect, useRef, useState } from "react"
import anime from "animejs"
import SlotMachine from "react-slot-machine"

import HeadInfos from "../components/headInfos"
import * as ContentWrapper from "../components/contentWrapper"
import * as InternalLink from "../components/internalLink"
import * as LayoutWrapper from "../components/layoutWrapper"
import * as Cta from "./../components/cta"

const Page404 = () => {
  const slotMachineRef = useRef()
  const fadeContainerRef = useRef()
  const [isSpinning, setIsSpinning] = useState(true)

  useEffect(() => {
    anime({
      targets: fadeContainerRef.current,
      duration: 700,
      opacity: 1,
      easing: "easeInOutQuad",
      complete: () => {
        onStartSpinning()
      },
    })
  }, [])

  const onStartSpinning = () => {
    slotMachineRef.current.spin()
    setIsSpinning(true)
  }

  const onSpinningEnd = isJackpot => {
    if (isJackpot) {
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
          setIsSpinning(false)
        },
      })
    } else {
      setIsSpinning(false)
    }
  }

  return (
    <>
      <HeadInfos title="404 — Too bad" />
      <LayoutWrapper.Root>
        <section className="bg-gradient-to-r from-black">
          <ContentWrapper.Root className="h-screen" verticalSpacing>
            <div
            className="flex flex-col col-span-full md:col-start-2 md:col-span-9 w-full h-full"
              ref={fadeContainerRef}
              style={{
                opacity: 0,
              }}
            >
              <SlotMachine
                symbols={["0", "1", "2", "3", "4"]}
                ref={slotMachineRef}
                initialSymbols={["4", "0", "4"]}
                onSpinningEnd={isJackpot => onSpinningEnd(isJackpot)}
                symbolEvaluatedStyleClass="text-white"
                symbolDefaultStyleClass="text-stroke text-stroke-white transition-colors duration-700"
              />
              <div className="flex justify-center mt-3 md:mt-6">
              <Cta.Root disabled={isSpinning} onClick={onStartSpinning}>
                Spin to Win!
              </Cta.Root>
            </div>
            <div className="mt-4 text-center">
              <p>
                I couldn't find what you were looking for. <br></br>Go&nbsp;
                <InternalLink.Root link="/">home</InternalLink.Root> or try your luck.
              </p>
            </div>
            </div>
            
          </ContentWrapper.Root>
        </section>
      </LayoutWrapper.Root>
    </>
  )
}

export default Page404
