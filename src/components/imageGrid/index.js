import React from "react"

import Image from "./image"

const ImageGrid = ({ }) => {
  return (
    <div className="relative">
      <div className="absolute w-full h-full flex items-center justify-center flex-col">
        <h2 className="h1">Futurium</h2>
        <h3>Permanent Exhibition</h3>
      </div>
      <div className="grid grid-cols-6 grid-rows-3 gap-5 h-screen">
        <Image tiles={[[1, 2], [2, 4]]} />
        <Image tiles={[[4, 2], [1, 1]]} />
        <Image tiles={[[6, 1], [2, 1]]} />
      </div>
    </div>
  )
}

export default ImageGrid