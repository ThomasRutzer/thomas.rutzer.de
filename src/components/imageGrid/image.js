import React, { useMemo } from "react"
import classnames from "classnames"

const Image = ({ src, tiles }) => {
  const createTilesClasses = useMemo(() => classnames({
    [`col-start-${tiles[0][0]}`]: true,
    [`col-span-${tiles[0][1]}`]: true,
    [`row-start-${tiles[1][0]}`]: true,
    [`row-span-${tiles[1][1]}`]: true,
  }), [tiles[0][0], tiles[0][1], tiles[1][0], tiles[1][1]])
  
  return (
    <div className={`${createTilesClasses} overflow-hidden flex items-center`}>
      <img className="w-full h-full object-cover"
        src="https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" />
    </div>
  )
}

export default Image