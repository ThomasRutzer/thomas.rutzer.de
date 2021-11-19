import React, { useMemo } from "react"
import classnames from "classnames"
import { GatsbyImage, withArtDirection } from "gatsby-plugin-image"
import resolveConfig from "tailwindcss/resolveConfig"

import tailwindConfig from "./../../../tailwind.config"
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

const RenderGatsbyImage = ({ gatsbyImageData, objectFit }) => {
  const fullConfig = resolveConfig(tailwindConfig)
  const images = useMemo(
    () =>
      !!gatsbyImageData.smallVariant
        ? withArtDirection(gatsbyImageData.default.childImageSharp.gatsbyImageData, [
            {
              media: `(max-width: ${fullConfig.theme.screens.lg})`,
              image: gatsbyImageData.smallVariant.childImageSharp.gatsbyImageData,
            },
          ])
        : gatsbyImageData.default.childImageSharp.gatsbyImageData,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )

  return (
    <GatsbyImage
      className={`image-grid__image ${classes.image}`}
      // weird Safari hack: https://gist.github.com/ayamflow/b602ab436ac9f05660d9c15190f4fd7b
      style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
      imgStyle={{
        objectFit: objectFit,
      }}
      alt=""
      image={images}
    />
  )
}

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
          <RenderGatsbyImage gatsbyImageData={gatsbyImageData} fit={fit} />
          <span className="sr-only">(opens in new tab)</span>
        </ExternalLink>
      )}
      {!link && <RenderGatsbyImage gatsbyImageData={gatsbyImageData} fit={fit} />}
      <figcaption className={classes.caption}>
        Fig.{index + 1}: {alt}
      </figcaption>
    </figure>
  )
}

export default Image
