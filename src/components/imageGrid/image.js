import React, { useMemo } from "react"
import classnames from "classnames"
import { GatsbyImage, withArtDirection } from "gatsby-plugin-image"
import resolveConfig from "tailwindcss/resolveConfig"

import tailwindConfig from "./../../../tailwind.config"
import * as ExternalLink from "../externalLink"

const RenderGatsbyImage = ({ gatsbyImageData, objectFit, alt }) => {
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
      className="image-grid__image w-full rounded-xl overflow-hidden"
      // weird Safari hack: https://gist.github.com/ayamflow/b602ab436ac9f05660d9c15190f4fd7b
      style={{ WebkitMaskImage: "-webkit-radial-gradient(white, black)" }}
      imgStyle={{
        objectFit: objectFit,
      }}
      alt={alt}
      image={images}
    />
  )
}

const Root = ({
  alt,
  fit = "cover",
  gatsbyImageData,
  index,
  link,
  tiles,
  offsetX = 0,
  offsetY = 0,
}) => {
  const classNames = classnames(
    "flex items-center flex-col transition-transform duration-1000 ease-out lg:mt-0",
    {
      [`col-start-${index % 2 === 0 ? "1" : "2"} col-span-5`]: true,
      [`lg:col-start-${tiles[0][0]}`]: true,
      [`lg:col-span-${tiles[0][1]}`]: true,
      [`lg:row-start-${tiles[1][0]}`]: true,
      [`lg:row-span-${tiles[1][1]}`]: true,
      "mt-0": index === 0,
      "mt-4": index !== 0,
    }
  )

  return (
    <figure
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px)`,
      }}
      className={classNames}
    >
      {link && (
        <ExternalLink.Root
          link={link.link}
          contentType={ExternalLink.CONTENT_TYPES.IMAGE}
          size={ExternalLink.SIZES.LARGE}
        >
          <RenderGatsbyImage gatsbyImageData={gatsbyImageData} fit={fit} alt={alt} />
          <span className="sr-only">(opens in new tab)</span>
        </ExternalLink.Root>
      )}
      {!link && <RenderGatsbyImage gatsbyImageData={gatsbyImageData} fit={fit} alt={alt} />}
      <figcaption className="text-xs text-center mt-2 px-1">
        Fig.{index + 1}: {alt}
      </figcaption>
    </figure>
  )
}

export { Root }
