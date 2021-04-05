import React, { useCallback, useEffect, useRef, useState } from "react"
import anime from "animejs"
import Splitting from "splitting"

import Title from "./title"
import Portrait from "./portrait"

const Intro = () => {
  const [contentAnimatedIn, setContentAnimatedIn] = useState(false)
  const headline = useRef()
  const main = useRef()
  const subline = useRef()
  const bg = useRef()

  const startAnimation = useCallback(() => {
    if (contentAnimatedIn) return

    setContentAnimatedIn(true)

    const splittedHeadline = Splitting({
      target: headline.current,
    })
    const tl = anime.timeline()

    tl
      .add({
        targets: main.current,
        opacity: [0, 1],
        duration: 0
      })
      .add({
        targets: bg.current,
        opacity: [0, 1],
        keyframes: [
          { clipPath: "inset(0)" },
          { clipPath: "inset(32px)" }
        ],
        duration: 2000,
        easing: "easeInOutExpo"
      })
      .add({
        targets: headline.current,
        opacity: [0, 1],
        duration: 0,
      }, "-=300")
      .add({
        targets: splittedHeadline[0].chars,
        rotate: [20, 0],
        translateY: ["100%", 0],
        opacity: [0, 1],
        duration: 2700,
        delay: anime.stagger(20, {}),
        easing: "easeInOutExpo",
      }, "-=1200")
      .add({
        targets: subline.current,
        opacity: [0, 1],
        "translateY": [20, 0],
        duration: 1000,
        easing: "easeOutQuad",
      }, "-=1600")

    tl.play()
  }, [contentAnimatedIn])

  useEffect(() => {
    startAnimation()
  }, [startAnimation])

  return (
    <div
      className="intro relative flex items-center overflow-hidden"
      ref={main}>
      <div className="min-h-screen flex justify-between flex-col p-6 md:p-7" variant="large">
        <Title ref={headline}>
          hay I’m Thomas
            </Title>
        <div ref={subline} className="max-w-screen-sm">
          <p className="relative text-xl md:text-3xl">
            creative developer who feels most comfortable where sophisticated design meets well structured code.
          </p>
        </div>
      </div>
      <div ref={bg} className="intro__bg" aria-hidden="true">
        <Portrait onReady={startAnimation} />
      </div>
    </div>
  )
}

export default Intro