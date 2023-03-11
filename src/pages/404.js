import anime from "animejs"
import React, { useEffect, useRef, useState } from "react"

import * as ContentWrapper from "../components/contentWrapper"
import HeadInfos from "../components/headInfos"
import * as InternalLink from "../components/internalLink"
import * as LayoutWrapper from "../components/layoutWrapper"
import * as Cta from "./../components/cta"

const symbols = ["0", "1", "2", "3", "4"]
const symbolCount = 12

const Page404 = () => {
  const fadeContainerRef = useRef()
  const slotLane1 = useRef()
  const slotLane2 = useRef()
  const slotLane3 = useRef()
  const timeline = useRef()

  const [isSpinning, setIsSpinning] = useState(false)

  const [lane1, setLane1] = useState([
    ...fillWithRandomElements(symbolCount - 3, symbols),
    getRandomElementFromList(symbols),
    "4",
    getRandomElementFromList(symbols),
  ])
  const [lane2, setLane2] = useState([
    ...fillWithRandomElements(symbolCount - 3, symbols),
    getRandomElementFromList(symbols),
    "0",
    getRandomElementFromList(symbols),
  ])
  const [lane3, setLane3] = useState([
    ...fillWithRandomElements(symbolCount - 3, symbols),
    getRandomElementFromList(symbols),
    "4",
    getRandomElementFromList(symbols),
  ])

  useEffect(() => {
    timeline.current = anime.timeline({
      complete: onEndSpinning,
      autoplay: false,
    })

    timeline.current
      .add({
        targets: slotLane1.current,
        translateY: "-300%",
        duration: 1600,
        easing: "easeOutSine",
      })
      .add(
        {
          targets: slotLane2.current,
          translateY: "-300%",
          duration: 1600,
          easing: "easeOutSine",
        },
        "-=400"
      )
      .add(
        {
          targets: slotLane3.current,
          translateY: "-300%",
          duration: 1600,
          easing: "easeOutSine",
        },
        "-=200"
      )
  }, [lane1, lane2, lane3, onEndSpinning])

  useEffect(() => {
    anime({
      targets: fadeContainerRef.current,
      duration: 700,
      opacity: 1,
      easing: "easeInOutQuad",
      complete: onStartSpinning,
    })
  }, [])

  function onStartSpinning() {
    setIsSpinning(true)
    timeline.current.play()
  }

  const onEndSpinning = () => {
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
  }

  const onRestart = () => {
    setIsSpinning(false)
    timeline.current.seek(0)

    setLane1([...lane1.splice(symbolCount - 3, symbolCount), ...fillWithRandomElements(9, symbols)])
    setLane2([...lane2.splice(symbolCount - 3, symbolCount), ...fillWithRandomElements(9, symbols)])
    setLane3([...lane3.splice(symbolCount - 3, symbolCount), ...fillWithRandomElements(9, symbols)])
  }

  return (
    <>
      <HeadInfos title="404 — Too bad" />
      <LayoutWrapper.Root>
        <section className="bg-gradient-to-r from-black">
          <ContentWrapper.Root className="h-screen" verticalSpacing>
            <div
              className="col-span-full grid grid-rows-[1fr_min-content] gap-3 md:gap-5 md:col-start-2 md:col-span-9 w-full h-full opacity-0 overflow-hidden"
              ref={fadeContainerRef}
            >
              <div className="h-full overflow-hidden">
                <div className="grid grid-cols-3 h-full">
                  <div className="slot h-full overflow-hidden">
                    <div className="slot__lane h-full" ref={slotLane1}>
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
                    <div className="slot__lane h-full" ref={slotLane2}>
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
                    <div className="slot__lane h-full" ref={slotLane3}>
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
                <Cta.Root disabled={isSpinning} onClick={onStartSpinning}>
                  Spin to Win!
                </Cta.Root>
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
