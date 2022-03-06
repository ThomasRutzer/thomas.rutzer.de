import React from "react"

import * as ContentWrapper from "../contentWrapper"
import * as InternalLink from "../internalLink"
import * as ParallaxCircles from "../parallaxCircles"

const Root = () => {
  return (
    <div className="sub-hero relative">
      <ContentWrapper.Root verticalSpacing={false}>
        <ul className="py-2">
          <li>
            <InternalLink.Root link="/">
              <svg
                className="external-link__icon transform -rotate-90 mr-1"
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="square"
                strokeLinejoin="arcs"
              >
                <path d="M7 17l9.2-9.2M17 17V7H7" />
              </svg>
              Go to start view
            </InternalLink.Root>
          </li>
        </ul>
      </ContentWrapper.Root>
      <ContentWrapper.Root>
        <h1 className="sub-hero__title leading-tight font-mono md:my-4">
          <span className="text-sm">(Almost all)</span>
          <span className="text-6xl block font-semibold">
            Design <br />& Code
          </span>
          <span className="text-5xl text-stroke text-stroke-white block italic">
            along the road
          </span>
        </h1>
      </ContentWrapper.Root>

      <div className="sub-hero__bg bg-gradient-to-r from-black" aria-hidden="true">
        <div className="sub-hero__circle sub-hero__circle--1">
          <ParallaxCircles.Root
            appearance={ParallaxCircles.APPEARANCE.DARK}
            mouseMoveTranslations={[1, 3, 1, 3]}
          />
        </div>
        <div className="sub-hero__circle sub-hero__circle--2">
          <ParallaxCircles.Root
            appearance={ParallaxCircles.APPEARANCE.DARK}
            mouseMoveTranslations={[5, 10, 5, 10]}
          />
        </div>
        <div className="sub-hero__circle sub-hero__circle--3">
          <ParallaxCircles.Root appearance={ParallaxCircles.APPEARANCE.DARK} />
        </div>
      </div>
    </div>
  )
}

export { Root }
