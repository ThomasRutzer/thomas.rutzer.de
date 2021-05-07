import React from "react"
import classnames from "classnames"
import { GatsbyImage } from "gatsby-plugin-image"

import ExternalLink from "./../links/externalLink"

const classes = {
  image: "w-full rounded-xl overflow-hidden",
  caption: "text-xs italic text-center mt-2 px-1",
  wrapper: {
    tiles: (index, tiles) =>
      classnames({
        [`col-start-${index % 2 === 0 ? "1" : "2"} col-span-5`]: true,
        [`lg:col-start-${tiles[0][0]}`]: true,
        [`lg:col-span-${tiles[0][1]}`]: true,
        [`lg:row-start-${tiles[1][0]}`]: true,
        [`lg:row-span-${tiles[1][1]}`]: true,
      }),
    spacing: index => `mt-${index === 0 ? "0" : "4"} lg:mt-0`,
    flex: "flex items-center flex-col",
    animations: "transition-transform duration-1000 ease-out",
  },
}

const renderGatsbyImage = (gatsbyImageData, objectFit) => (
  <GatsbyImage
    className={classes.image}
    // weird Safari hack: https://gist.github.com/ayamflow/b602ab436ac9f05660d9c15190f4fd7b
    style={{ webkitMaskImage: "-webkit-radial-gradient(white, black)" }}
    imgStyle={{
      objectFit: objectFit,
    }}
    alt=""
    image={gatsbyImageData}
  />
)

const Image = ({
  alt,
  fit = "cover",
  gatsbyImageData,
  index,
  link,
  tiles,
  offsetX = 0,
  offsetY = 0,
}) => {
  return (
    <figure
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px)`,
      }}
      className={`${classes.wrapper.tiles(index, tiles)} 
        ${classes.wrapper.spacing(index)} 
        ${classes.wrapper.flex} 
        ${classes.wrapper.animations}`}
    >
      {link && (
        <ExternalLink
          link={link.link}
          additionalClasses="flex"
          appearance="primary"
          contentType="image"
          size="large"
        >
          {renderGatsbyImage(gatsbyImageData, fit)}
          <span className="sr-only">(opens in new tab)</span>
        </ExternalLink>
      )}
      {!link && renderGatsbyImage(gatsbyImageData, fit)}
      <figcaption className={classes.caption}>
        Fig.{index + 1}: {alt}
      </figcaption>
    </figure>
  )
}

export default Image
