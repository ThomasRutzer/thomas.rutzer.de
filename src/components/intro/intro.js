import anime from "animejs"
import React, { useCallback, useRef, useState } from "react"
import { RandomReveal } from "react-random-reveal"
import Splitting from "splitting"

import * as ContentWrapper from "../contentWrapper"
import * as SectionTitle from "../sectionTitle"
import { useReducedMotion } from "./../../hooks"
import Background from "./background"
import Title from "./title"

const CHARSET_NUMBERS = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

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
          delay: anime.stagger(100, {}),
          easing: "easeInOutExpo",
        },
        "-=1200"
      )
      .add(
        {
          targets: subline.current,
          opacity: [0, 1],
          translateY: [16,0],
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
      <div className="h-full w-full py-6 md:py-7">
        <ContentWrapper.Root
          horizontalSpacing={true}
          verticalSpacing={false}
          className="h-full grid-rows-[min-content_48px_1fr] items-end"
        >
          <div className="md:flex justify-between flex-col col-start-2 col-span-5 row-start-1 md:col-span-2 font-mono">
            <span className="block">
              <span>T</span> <span className="inline-block ml-5 md:ml-[6ch]">R</span>
            </span>
          </div>

          <div className="flex justify-between flex-col col-start-2 col-span-10 row-start-2 md:col-start-4 md:col-span-6  md:row-start-1">
            <div ref={subline}>
              <SectionTitle.Root fullWidth>Intro</SectionTitle.Root>
            </div>
          </div>

          <div className="md:flex justify-end col-start-7 col-span-5 row-start-1 md:col-start-11 md:col-span-2 font-mono">
            <span className="block text-right">
              {prefersReducedMotion && "50.949, 6.957"}
              {!prefersReducedMotion && (
                <>
                  
                  <RandomReveal
                    isPlaying={contentAnimatedIn}
                    duration={2.6}
                    characters="50.949,"
                    characterSet={CHARSET_NUMBERS}
                  />
                  
                  <RandomReveal
                    isPlaying={contentAnimatedIn}
                    duration={2.6}
                    characters=" 6.957"
                    characterSet={CHARSET_NUMBERS}
                  />
                 
                </>
              )}
            </span>
          </div>

          <div className="col-start-2 col-span-10 row-start-3 md:col-start-4 md:col-span-6">
            <Title ref={headline}>hay!</Title>
            <p ref={copy} className="text-xl md:text-2xl tracking-widest uppercase">
              <span className="block">I am Thomas</span>
              <span className="block pl-3">
                specialized in crafting unique interfaces & interactions for the browser platform
              </span>
            </p>
          </div>
        </ContentWrapper.Root>
      </div>
      <Background ref={bg} onReady={startAnimation} />
    </div>
  )
}

export { Root }
