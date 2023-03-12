import React from "react"
import classnames from "classnames"

import * as ContentWrapper from "../contentWrapper"
import * as Cta from "../cta"
import * as ParallaxCircles from "../parallaxCircles"

const circles = [
  { mouseMoveTranslations: [6, 6, 6, 6] },
  { mouseMoveTranslations: [10, 10, 10, 10] },
  { mouseMoveTranslations: [4, 4, 4, 4] },
]

const Root = () => {
  return (
    <ContentWrapper.Root verticalSpacing={false}>
      <div className="bg-primary relative col-start-1 col-span-full md:col-start-2 md:col-span-10 py-6 md:py-7 rounded-xl shadow-xl overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row items-center align-center justify-center">
          <Title />
          <Cta.Root href="/project-archive" as="a">
            project archive
          </Cta.Root>
        </div>
        <div
          className="absolute w-full h-full left-0 top-0 overflow-hidden lg:overflow-visible z-0"
          aria-hidden="true"
        >
          {circles.map((circle, key) => {
            const classNames = classnames("absolute", {
              [`project-archive-teaser-circle--${key}`]: true,
            })

            return (
              <div key={key} className={classNames}>
                <ParallaxCircles.Root
                  appearance={ParallaxCircles.APPEARANCE.PRIMARY}
                  mouseMoveTranslations={circle.mouseMoveTranslations}
                />
              </div>
            )
          })}
        </div>
      </div>
    </ContentWrapper.Root>
  )
}

const Title = () => {
  return (
    <h2 className="mb-4 md:mb-0 md:mr-7 font-mono">
      <span className="text-4xl md:-ml-4">There</span>
      <span className="block text-5xl md:text-stroke-white italic md:text-stroke ml-4 md:ml-0">
        is more
      </span>
    </h2>
  )
}

export { Root }
