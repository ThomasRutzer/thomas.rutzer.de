import React, { useMemo } from "react"
import classnames from "classnames"

const Image = ({ src, mobileRow, tiles, index }) => {
  const createTilesClasses = useMemo(() => classnames({
    [`col-start-${index + 1} col-span-1`]: true,
    [`row-start-${mobileRow} row-span-1`]: true,
    [`md:col-start-${tiles[0][0]}`]: true,
    [`md:col-span-${tiles[0][1]}`]: true,
    [`md:row-start-${tiles[1][0]}`]: true,
    [`md:row-span-${tiles[1][1]}`]: true
  }), [tiles[0][0], tiles[0][1], tiles[1][0], tiles[1][1]])
  
  return (
    <div className={`${createTilesClasses} overflow-hidden flex items-center`}>
      <img className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" />
    </div>
  )
}

export default Image