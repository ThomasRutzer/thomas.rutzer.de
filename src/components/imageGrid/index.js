import React from "react"

import Image from "./image"

const ImageGrid = ({ }) => {
  return (
    <div className="relative">
      <div className="mb-6 md:absolute md:w-full md:h-full flex items-center justify-center flex-col">
        <h2 className="text-6xl">Futurium</h2>
        <h3>Permanent Exhibition</h3>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 md:grid-cols-6 md:grid-rows-3 md:gap-5 md:h-screen">
        <Image index={0} mobileRow="2" tiles={[[1, 2], [2, 4]]} />
        <Image index={1} mobileRow="1" tiles={[[4, 2], [1, 1]]} />
        <Image index={2} mobileRow="1" tiles={[[6, 1], [2, 1]]} />
      </div>
    </div>
  )
}

export default ImageGrid