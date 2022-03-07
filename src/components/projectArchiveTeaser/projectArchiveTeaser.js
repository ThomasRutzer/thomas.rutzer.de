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

const cssClassesRoot = "bg-primary relative py-6 md:py-7 rounded-xl shadow-xl overflow-hidden"

const cssClassesBackground =
  "absolute w-full h-full left-0 top-0 overflow-hidden lg:overflow-visible z-0"
const cssClassesCircle = "absolute"
const cssClassesContent =
  "relative z-10 flex flex-col md:flex-row items-center align-center justify-center"

const Root = () => {
  return (
    <ContentWrapper.Root verticalSpacing={false}>
      <div className={cssClassesRoot}>
        <div className={cssClassesContent}>
          <Title />
          <Cta.Root href="/project-archive" as="a">
            project archive
          </Cta.Root>
        </div>
        <div className={cssClassesBackground} aria-hidden="true">
          {circles.map((circle, key) => {
            const cssClassesCircleByIndex = classnames({
              [`project-archive-teaser-circle--${key}`]: true,
            })

            return (
              <div className={`${cssClassesCircle} ${cssClassesCircleByIndex}`}>
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

const cssClassesTitle = "mb-4 md:mb-0 md:mr-7 font-mono"
const cssClassesTitleFirstLine = "text-4xl md:-ml-4"
const cssClassesTitleLastLine =
  "block text-5xl md:text-stroke-white italic md:text-stroke ml-4 md:ml-0"

const Title = () => {
  return (
    <h2 className={cssClassesTitle}>
      <span className={cssClassesTitleFirstLine}>There</span>
      <span className={cssClassesTitleLastLine}>is more</span>
    </h2>
  )
}

export { Root }
