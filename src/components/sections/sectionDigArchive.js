import React, { useRef } from "react"
import TransitionLink from "gatsby-plugin-transition-link"
import anime from "animejs"

import { ContentWrapper } from "./../layout"
import ParallaxCircles from "./../parallaxCircles"

const SectionDigArchive = () => {
  const cirlces = useRef()
  const wrapper = useRef()

  return (
    <section ref={wrapper} className="section-dig-archive md:py-4" >
      <ContentWrapper>
        <div className="section-dig-archive__content grid grid-cols-1 md:grid-cols-3 pb-4 md:py-4">
          <div className="col-start-1 md:col-start-2 col-span-2 relative">
            <div className="section-dig-archive__circle" ref={cirlces}>
              <ParallaxCircles />
            </div>
            <div className="flex flex-col md:flex-row md:items-center">
              <h2 className="text-3xl md:text-5xl md:text-stroke-white md:text-stroke">
                There<br /> is<br /> more
            </h2>
              <div className="flex-none mt-2 md:mt-0 md:ml-7">
                <TransitionLink
                  exit={{
                    length: 20,
                    trigger: ({ exit, node }) => {
                      document.body.style.overflow = "hidden"
                      wrapper.current.classList.add("circles-fixed")
                      anime({
                        targets: cirlces.current,
                        translateY: "-25%",
                        scale: "2",
                        duration: 20000,
                        onComplete: () => document.body.style.overflow = "visible"
                      })
                    }

                  }}
                  className="cta-secondary"
                  to="/project-archive"
                >
                  project archive
              </TransitionLink>
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section >
  )
}


export default SectionDigArchive