import React, { useMemo } from "react"
import classnames from "classnames"
import { GatsbyImage } from "gatsby-plugin-image"

import ExternalLink from "./../links/externalLink"

const renderGatsbyImage = (gatsbyImageData, objectFit) =>
  <GatsbyImage
    className="w-full rounded-xl overflow-hidden"
    imgStyle={{
      "objectFit": objectFit
    }}
    alt=""
    image={gatsbyImageData} />

const Image = ({
  alt,
  fit = "cover",
  gatsbyImageData,
  index,
  link,
  tiles, offsetX = 0, offsetY = 0
}) => {
  const createTilesClasses = useMemo(() => classnames({
    [`col-start-${index % 2 === 0 ? "1" : "2"} col-span-5`]: true,
    [`lg:col-start-${tiles[0][0]}`]: true,
    [`lg:col-span-${tiles[0][1]}`]: true,
    [`lg:row-start-${tiles[1][0]}`]: true,
    [`lg:row-span-${tiles[1][1]}`]: true
  }), [index, tiles])

  console.log(link);

  return (
    <figure
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px)`
      }}
      className={
        `${createTilesClasses} 
        mt-${index === 0 ? "0" : "4"} lg:mt-0
        flex items-center flex-col
        transition-transform duration-1000 ease-out`
      }>
      { link &&
        <ExternalLink link={link.link} appearance="primary" contentType="image" size="large">
          {renderGatsbyImage(gatsbyImageData, fit, true)}
          <span className="sr-only">(opens in new tab)</span>
        </ExternalLink>
      }
      { !link && renderGatsbyImage(gatsbyImageData, fit)}
      <figcaption
        className={
          `text-xs italic text-center mt-2 px-1`
        }>
        Fig.{index + 1}: {alt}
      </figcaption>
    </figure>
  )
}

export default Image
