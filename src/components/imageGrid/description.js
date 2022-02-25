import React from "react"

const Description = ({ category, title, subTitle }) => {
  return (
    <div className="flex items-start md:items-center md:justify-center flex-col lg:absolute lg:w-full lg:h-full z-10 mb-6 pointer-events-none">
      <h3 className="text-4xl md:text-6xl md:text-stroke-white md:text-stroke font-mono leading-snug">
        {title}
      </h3>
      <div className="subline relative flex md:inline-flex justify-between items-center gap-2 md:gap-2 w-full md:w-auto">
        <h4 className="text-xl md:text-2xl tracking-widest uppercase font-mono whitespace-nowrap">{subTitle}</h4>
        <h5 className="md:order-3 text-xs text-primary">{category}</h5>
      </div>
    </div>
  )
}

export default Description
