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
        relative 
        overflow-hidden bg-black
        mb-4 md:mb-0
        flex items-center flex-col
        transition-transform duration-1000 ease-out`
      }>
      <Img
        className="w-full h-full"
        imgStyle={{
          "objectFit": fit
        } }
        fluid={src.childImageSharp.fluid}
        alt={alt} />
      <figcaption className="px-1 text-xs italic">
        Fig.{index + 1}
      </figcaption>
    </div>
  )
}

export default Image
