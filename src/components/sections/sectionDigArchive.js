import React from "react"

import { ContentWrapper } from "./../layout"
import SecondaryButtonLink from "../cta/ctaSecondaryTypeLink"
import ParallaxCircles from "./../parallaxCircles"

const SectionDigArchive = () =>
  <section className="section-dig-archive md:py-4">
    <ContentWrapper>
      <div className="section-dig-archive__content grid grid-cols-1 md:grid-cols-3 md:py-4">
        <div className="col-start-1 md:col-start-2 col-span-2 relative">
          <div className="section-dig-archive__circle">
            <ParallaxCircles />
          </div>
          <div className="flex flex-col md:flex-row md:items-center">
            <h2 className="text-3xl md:text-5xl italic">
              There<br /> is more<br />
            </h2>
            <div className="flex-none text-center md:text-left mt-2 md:mt-0 md:ml-7">
              <SecondaryButtonLink link="/project-archive">
                project archive
              </SecondaryButtonLink>
            </div>
          </div>
        </div>
      </div>
    </ContentWrapper>
  </section>

export default SectionDigArchive