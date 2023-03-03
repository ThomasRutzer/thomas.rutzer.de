import React, { useCallback, useRef, useState } from "react"
import anime from "animejs"
import Splitting from "splitting"

import { useReducedMotion } from "./../../hooks"
import * as ContentWrapper from "../contentWrapper"
import Title from "./title"
import * as SectionTitle from "../sectionTitle"
import Background from "./background"
import { SIZES } from "../contentWrapper"

const Root = () => {
  const [contentAnimatedIn, setContentAnimatedIn] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  const headline = useRef()
  const subline = useRef()
  const copy = useRef()
  const main = useRef()
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
          duration: 1000,
          easing: "easeOutQuad",
        },
        "-=1600"
      )
      .add(
        {
          targets: copy.current,
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
    <div className="intro relative overflow-hidden" ref={main}>
      <div className="h-full w-full p-6 md:px-0 md:py-7">
        <ContentWrapper.Root
          horizontalSpacing={false}
          verticalSpacing={false}
          size={SIZES.LARGE}
          className="flex justify-center md:px-5 h-full"
        >
          <div ref={subline} className="flex justify-between items-center flex-col h-full w-full">
            <div className="flex justify-between w-full font-mono">
              <span className="md:px-7">
                <span>T</span> <span className="inline-block ml-4">R</span>
              </span>
              <span className="md:w-3/6 md:max-w-screen-md">
                <SectionTitle.Root fullWidth>Intro</SectionTitle.Root>
              </span>
              <span className="block text-right md:px-7">50.949, 6.957</span>
            </div>
            <div className="md:w-3/6 md:max-w-screen-md">
              <Title ref={headline}>hay!</Title>
              <p ref={copy} className="text-xl md:text-2xl tracking-widest uppercase">
                <span className="block">I am Thomas</span>
                <span className="block pl-3">
                  specialized in crafting unique interfaces & interactions for the browser platform
                </span>
              </p>
            </div>
          </div>
        </ContentWrapper.Root>
      </div>
      <Background ref={bg} onReady={startAnimation} />
    </div>
  )
}

export { Root }
