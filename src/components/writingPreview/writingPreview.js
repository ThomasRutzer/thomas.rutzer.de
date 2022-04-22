import React from "react"

const Root = ({ children }) => {
  return (
    <div className="bg-grey-2 flex justify-between flex-col rounded-md p-2 border-grey-7 border-2 shadow-lg lg:aspect-square hover:shadow-[hsla(242,_100%,_79%,_0.3)_0px_6px_32px] transition-shadow duration-300">
      {children}
    </div>
  )
}

const Title = ({ children }) => {
  return <h3 className="text-xl tracking-wider font-mono">{children}</h3>
}

const Content = ({ children }) => {
  return <div className="py-2">{children}</div>
}

const Footer = ({ children }) => {
  return <div className="pt-2 border-t-2 border-grey-6 text-center">{children}</div>
}

export { Root, Content, Title, Footer }
