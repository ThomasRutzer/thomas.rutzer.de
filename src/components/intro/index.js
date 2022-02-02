import React, { useCallback, useRef, useState } from "react"
import anime from "animejs"
import Splitting from "splitting"

import { useReducedMotion } from "./../../hooks"
import Title from "./title"
import Background from "./background"
import { ContentWrapper } from "../layout"

const Intro = () => {
  const [contentAnimatedIn, setContentAnimatedIn] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const headline = useRef()
  const main = useRef()
  const subline = useRef()
  const bg = useRef()

  const startAnimation = useCallback(() => {
    if (prefersReducedMotion || contentAnimatedIn) return

    setContentAnimatedIn(true)

    const splittedHeadline = Splitting({
      target: headline.current,
    })
    const tl = anime.timeline()

    tl.add({
      targets: main.current,
      opacity: [0, 1],
      duration: 0,
    })
      .add({
        targets: bg.current,
        opacity: [0, 1],
        keyframes: [
          { clipPath: "inset(0)", padding: 0 },
          { clipPath: "inset(32px)", padding: "32px" },
        ],
        duration: 2000,
        easing: "easeInOutExpo",
      })
      .add(
        {
          targets: headline.current,
          opacity: [0, 1],
          duration: 0,
        },
        "-=300"
      )
      .add(
        {
          targets: splittedHeadline[0].chars,
          rotate: [20, 0],
          translateY: ["100%", 0],
          opacity: [0, 1],
          duration: 2700,
          delay: anime.stagger(20, {}),
          easing: "easeInOutExpo",
        },
        "-=1200"
      )
      .add(
        {
          targets: subline.current,
          opacity: [0, 1],
          translateY: [20, 0],
          duration: 1000,
          easing: "easeOutQuad",
        },
        "-=1600"
      )

    tl.play()
  }, [contentAnimatedIn, prefersReducedMotion])

  return (
    <div className="intro h-screen relative overflow-hidden" ref={main}>
      <div className="h-full w-full flex flex-col justify-between p-6 md:px-0 md:py-7">
        <ContentWrapper
          horizontalSpacing={false}
          verticalSpacing={false}
          additionalClasses="flex md:justify-center md:px-5"
        >
          <span className="block md:w-4/6">---------------------------</span>
        </ContentWrapper>

        <Title ref={headline}>hay I’m Thomas</Title>

        <ContentWrapper
          horizontalSpacing={false}
          verticalSpacing={false}
          additionalClasses="flex md:justify-center md:px-5"
        >
          <p ref={subline} className="md:w-4/6 text-xl md:text-xl tracking-widest uppercase">
            specialized in crafting unique interfaces & interactions for the browser platform
          </p>
        </ContentWrapper>
      </div>
      <Background ref={bg} onReady={startAnimation} />
    </div>
  )
}

export default Intro
