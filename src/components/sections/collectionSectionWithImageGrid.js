import React from "react"

import { ContentWrapper } from "../layout"
import { ExternalLink } from "../links"
import ImageGrid from "../imageGrid"

const CollectionSectionWithImageGrid = ({ collection, appearance }) => {
  console.log(collection);

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
            tiles: [collection.imageGrid.tiles[key], collection.imageGrid.tiles[key + 1]],
            fit: work.fields.workImageAssets[0].fit
          }))} />
      </ContentWrapper>
    </section>
  )
}

export default CollectionSectionWithImageGrid
