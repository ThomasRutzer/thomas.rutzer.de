import React, { useMemo } from "react"
import classnames from "classnames"
import { GatsbyImage } from "gatsby-plugin-image"

const Image = ({ gatsbyImageData, alt, fit = "cover", tiles, index, offsetX = 0, offsetY = 0 }) => {
  console.log(gatsbyImageData);
  const createTilesClasses = useMemo(() => classnames({
    [`col-start-${index % 2 === 0 ? "1" : "2"} col-span-5`]: true,
    [`lg:col-start-${tiles[0][0]}`]: true,
    [`lg:col-span-${tiles[0][1]}`]: true,
    [`lg:row-start-${tiles[1][0]}`]: true,
    [`lg:row-span-${tiles[1][1]}`]: true
  }), [index, tiles])

  return (
    <div
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px)`
      }}
      className={
        `${createTilesClasses} 
        overflow-hidden
        mt-${index === 0 ? "0" : "4"} lg:mt-0
        flex items-center flex-col
        transition-transform duration-1000 ease-out`
      }>
      <GatsbyImage
        className="w-full"
        imgStyle={{
          "objectFit": fit
        }}
        image={gatsbyImageData}
        alt={alt} />
      <figcaption 
        className={
            `text-xs italic text-center mt-2 px-1 `
          }>
        Fig.{index + 1}: {alt}
      </figcaption>
    </div>
  )
}

export default Image
