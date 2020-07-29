import React from "react"
import classNames from "classnames"

import { ContentWrapper } from "./../layout"
import { ExternalLink } from "./../links"
import ImageGrid from "./../imageGrid"
import FeatureList from "./../featureList"

const WorkSectionWithImageGrid = ({
  work
}) => {
  const bgClass = classNames({
    "bg-grey-darkest": work.selectedAppearance === "dark",
    "bg-tertiary": work.selectedAppearance === "tertiary"
  })
  return (
    <section className={bgClass}>
      <ContentWrapper
        variant="large"
        additionalClasses="md:px-5 pt-6 md:pb-6 md:pt-7"
        verticalSpacing={false}
        horizontalSpacing={false}>
        <ImageGrid
          appearance={work.selectedAppearance === "dark" ? "light" : "dark"}
          images={work.images.map((image, key) => ({
            src: work.fields.workImageAssets[key],
            alt: image.alt,
            tiles: image.grid.tiles,
            mobileRow: image.grid.mobileRow,
            fit: image.grid.fit
          }))}
          title={work.title}
          subtitle={work.subTitle} />
      </ContentWrapper>
      <ContentWrapper>
        <div className="grid grid-cols-6 md:gap-5">
          <div
            className="flex md:flex-col justify-between text-sm col-start-1 col-span-6 md:col-span-1 mb-4 md:mb-0">
            <p>
              <span
                className={`${work.selectedAppearance === "dark" ? "text-tertiary-lighter" : "text-grey-darkest"} block`}>
                first release
              </span>
              <span className="text-grey-lighter">{work.year}</span>
            </p>
            <div>
              <span
                className={`${work.selectedAppearance === "dark" ? "text-tertiary-lighter" : "text-grey-darkest"} block`}>
                key facts
              </span>
              <FeatureList items={work.features} />
            </div>
          </div>
          <div className="my-4 md:my-0 col-start-1 col-span-6 md:col-start-2 md:col-span-4">
            <p className="whitespace-pre-line">{work.leadingDescription}</p>
            <p className="whitespace-pre-line mt-3">
              {work.description}
            </p>
          </div>
          <div className="col-start-1 col-span-6 md:col-start-6 md:col-span-1">
            <div className="flex flex-col md:items-end">
              <div
                className="md:transform md:-rotate-90 md:-translate-y-full md:origin-bottom-right">
                {work.links.map(({ link, label }, key) =>
                  <div className="whitespace-no-wrap" key={key}>
                    <ExternalLink
                      appearance="primary"
                      link={link}>
                      {label}
                    </ExternalLink>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </ContentWrapper>
    </section>
  )
}

export default WorkSectionWithImageGrid