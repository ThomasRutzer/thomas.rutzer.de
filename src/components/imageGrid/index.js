import React from "react"

import ContentWrapper from "./../layout/contentWrapper"

const ImageGrid = ({ }) => {
  return (
    <ContentWrapper variant="large">

      <div className="absolute w-full h-full flex items-center justify-center flex-col">
        <h2 className="h1">Futurium</h2>
        <h3>Permanent Exhibition</h3>
      </div>
      <div className="grid grid-cols-6 grid-rows-3 gap-5 h-screen">
        <div  className="row-start-2 col-span-2 row-span-2 overflow-hidden flex items-center">
        <img className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" />
        </div>
        <div  className="row-start-1 col-start-4 col-span-2 row-span-1 overflow-hidden flex items-center">
        <img className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" />
        </div>
        <div  className="row-start-2 col-start-6 col-span-1 overflow-hidden flex items-center">
        <img className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80" />
        </div>
      </div>
    </ContentWrapper>
  )
}

export default ImageGrid