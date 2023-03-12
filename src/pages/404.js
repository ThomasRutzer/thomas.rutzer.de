import anime from "animejs"
import React, { useCallback, useEffect, useRef, useState } from "react"

import * as ContentWrapper from "../components/contentWrapper"
import HeadInfos from "../components/headInfos"
import * as InternalLink from "../components/internalLink"
import * as LayoutWrapper from "../components/layoutWrapper"
import * as Cta from "./../components/cta"

const symbols = ["0", "1", "2", "3", "4"]
const symbolCount = 12

const Page404 = () => {
  const fadeContainerRef = useRef()
  const slotLane1Ref = useRef()
  const slotLane2Ref = useRef()
  const slotLane3Ref = useRef()
  const timelineRef = useRef()
  const ctaRef = useRef()

  const [isSpinning, setIsSpinning] = useState(true)
  const [lane1, setLane1] = useState([])
  const [lane2, setLane2] = useState([])
  const [lane3, setLane3] = useState([])

  const onStartSpinning = useCallback(() => {
    setIsSpinning(true)
    timelineRef.current.play()

    anime({
      targets: ctaRef.current,
      duration: 700,
      opacity: 0,
      easing: "easeInOutQuad",
    })

    anime({
      targets: fadeContainerRef.current,
      duration: 700,
      opacity: 1,
      easing: "easeInOutQuad",
    })
  }, [])

  const onRestart = useCallback(() => {
    anime({
      targets: ctaRef.current,
      duration: 700,
      opacity: 1,
      easing: "easeInOutQuad",
    })

    anime({
      targets: fadeContainerRef.current,
      duration: 700,
      opacity: 0.05,
      easing: "easeInOutQuad",
      complete: () => {
        setIsSpinning(false)
        timelineRef.current.seek(0)

        setLane1([
          ...lane1.splice(symbolCount - 3, symbolCount),
          ...fillWithRandomElements(9, symbols),
        ])
        setLane2([
          ...lane2.splice(symbolCount - 3, symbolCount),
          ...fillWithRandomElements(9, symbols),
        ])
        setLane3([
          ...lane3.splice(symbolCount - 3, symbolCount),
          ...fillWithRandomElements(9, symbols),
        ])
      },
    })
  }, [lane1, lane2, lane3])

  const onEndSpinning = useCallback(() => {
    const lane1EndValue = lane1[symbolCount - 2]
    const lane2EndValue = lane2[symbolCount - 2]
    const lane3EndValue = lane3[symbolCount - 2]
    const isJackpot = lane1EndValue === lane2EndValue && lane1EndValue === lane3EndValue

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
          onRestart()
        },
      })
    } else {
      onRestart()
    }
  }, [lane1, lane2, lane3, onRestart])

  useEffect(() => {
    timelineRef.current = anime.timeline({
      complete: onEndSpinning,
      autoplay: false,
    })

    timelineRef.current
      .add({
        targets: slotLane1Ref.current,
        translateY: "-300%",
        duration: 1200,
        easing: "easeOutSine",
      })
      .add(
        {
          targets: slotLane2Ref.current,
          translateY: "-300%",
          duration: 1200,
          easing: "easeOutSine",
        },
        "-=400"
      )
      .add(
        {
          targets: slotLane3Ref.current,
          translateY: "-300%",
          duration: 1200,
          easing: "easeOutSine",
        },
        "-=200"
      )
  }, [lane1, lane2, lane3, onEndSpinning])

  useEffect(() => {
    setLane1([
        ...fillWithRandomElements(symbolCount - 3, symbols),
        getRandomElementFromList(symbols),
        "4",
        getRandomElementFromList(symbols),
      ])

      setLane2([
        ...fillWithRandomElements(symbolCount - 3, symbols),
        getRandomElementFromList(symbols),
        "0",
        getRandomElementFromList(symbols),
      ])

      setLane3([
    ...fillWithRandomElements(symbolCount - 3, symbols),
    getRandomElementFromList(symbols),
    "4",
    getRandomElementFromList(symbols),
  ])


    anime({
      targets: fadeContainerRef.current,
      duration: 700,
      opacity: 1,
      easing: "easeInOutQuad",
      complete: onStartSpinning,
    })
  }, [onStartSpinning])

  return (
    <>
      <HeadInfos title="404 — Too bad" />
      <LayoutWrapper.Root>
        <section className="bg-gradient-to-r from-black">
          <ContentWrapper.Root className="h-screen" verticalSpacing>
            <div className="col-span-full grid grid-rows-[1fr_min-content] gap-3 md:gap-5 md:col-start-2 md:col-span-9 w-full h-full overflow-hidden">
              <div className="relative h-full overflow-hidden">
                <div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 opacity-0"
                  ref={ctaRef}
                >
                  <Cta.Root disabled={isSpinning} onClick={onStartSpinning}>
                    Spin to Win!
                  </Cta.Root>
                </div>
                <div className="grid grid-cols-3 h-full  opacity-0" ref={fadeContainerRef}>
                  <div className="slot h-full overflow-hidden">
                    <div className="slot__lane h-full" ref={slotLane1Ref}>
                      {lane1.map((symbol, index) => (
                        <span
                          key={index}
                          className={
                            "slot__symbol flex justify-center items-center h-2/6 text-stroke text-stroke-white transition-colors duration-700"
                          }
                        >
                          {symbol}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="slot h-full overflow-hidden">
                    <div className="slot__lane h-full" ref={slotLane2Ref}>
                      {lane2.map((symbol, index) => (
                        <span
                          key={index}
                          className={
                            "slot__symbol flex justify-center items-center h-2/6 text-stroke text-stroke-white transition-colors duration-700"
                          }
                        >
                          {symbol}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="slot h-full overflow-hidden">
                    <div className="slot__lane h-full" ref={slotLane3Ref}>
                      {lane3.map((symbol, index) => (
                        <span
                          key={index}
                          className={
                            "slot__symbol flex justify-center items-center h-2/6 text-stroke text-stroke-white transition-colors duration-700"
                          }
                        >
                          {symbol}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-4">
                <p className="text-center">
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

function getRandomElementFromList(list) {
  return list[Math.floor(Math.random() * list.length)]
}

function fillWithRandomElements(count, randomElementCollection) {
  return Array.from(Array(count).keys()).reduce(
    acc => [...acc, getRandomElementFromList(randomElementCollection)],
    []
  )
}

export default Page404
