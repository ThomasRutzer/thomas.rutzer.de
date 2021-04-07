import React from "react"

import { ContentWrapper } from "../layout"
import { ExternalLink } from "../links"
import ImageGrid from "../imageGrid"
import FeatureList from "./../featureList"

const CollectionSectionWithImageGrid = ({ collection, appearance }) => {
  return (
    <section className={appearance === "primary" ? "bg-grey-darkest" : "bg-secondary"}>
      <ContentWrapper
        variant="large"
        additionalClasses="px-5 pt-6 md:pb-6 md:pt-7"
        verticalSpacing={false}
        horizontalSpacing={false}>
        <ImageGrid
          category="collection"
          title={collection.title}
          subTitle={collection.subTitle}
          images={collection.includedWorks.map((work, key) => ({
            gatsbyImageData: work.fields.workImageAssets[0].childImageSharp.gatsbyImageData,
            alt: `${work.title} – ${work.subTitle} (${work.year})`,
            tiles: collection.imageGrid.tiles[key],
            fit: work.fields.workImageAssets[0].fit
          }))} />
      </ContentWrapper>
      <ContentWrapper>
        <div className="grid grid-cols-6 md:gap-5 leading-7">
          <div
            className="flex md:flex-col justify-between text-sm col-start-1 col-span-6 md:col-span-1 mb-4 md:mb-0">
            <div>
              <span
                className={`${appearance === "primary" ? "text-secondary-lighter" : "text-grey-darkest"} block`}>
                key facts
              </span>
              <FeatureList items={collection.features} />
            </div>
          </div>
          <div className="my-4 md:my-0 col-start-1 col-span-6 md:col-start-2 md:col-span-4">
            <p className="whitespace-pre-line">{collection.leadingDescription}</p>
            <p className="whitespace-pre-line mt-3">
              {collection.description}
            </p>
          </div>
          <div className="col-start-1 col-span-6 md:col-start-6 md:col-span-1">
            <div className="flex flex-col md:items-end">
              <div
                className="md:transform md:-rotate-90 md:-translate-y-full md:origin-bottom-right"
              >
                {collection.links.map(({ link, label }, key) =>
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

export default CollectionSectionWithImageGrid
