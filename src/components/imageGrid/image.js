import React, { useMemo, useRef, useEffect, useState } from "react"
import classnames from "classnames"
import Img from "gatsby-image"

const Image = ({ src, alt, fit = "cover", tiles, index, offsetX = 0, offsetY = 0 }) => {
  const createTilesClasses = useMemo(() => classnames({
    [`col-start-${index % 2 === 0 ? "1" : "2"} col-span-5`]: true,
    [`md:col-start-${tiles[0][0]}`]: true,
    [`md:col-span-${tiles[0][1]}`]: true,
    [`md:row-start-${tiles[1][0]}`]: true,
    [`md:row-span-${tiles[1][1]}`]: true
  }), [tiles[0][0], tiles[0][1], tiles[1][0], tiles[1][1]])

  return (
    <div
      style={{
        transform: `translate(${offsetX}px, ${offsetY}px)`
      }}
      className={
        `${createTilesClasses} 
        overflow-hidden bg-grey-darker
        mb-4 md:mb-0
        flex items-center relative transition-transform duration-1000 ease-out`
      }>
      <Img
        className="w-full h-full"
        imgStyle={{
          "objectFit": fit
        } }
        fluid={src.childImageSharp.fluid}
        alt={alt} />
      <figcaption className="absolute bg-grey bottom-0 right-0 px-1 text-xs text-grey-darker">
        Fig.{index + 1}
      </figcaption>
    </div>
  )
}

export default Image
