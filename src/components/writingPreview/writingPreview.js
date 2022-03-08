import React from "react"

const Root = ({ children }) => {
  return (
    <div className="bg-grey-darkest flex justify-between flex-col rounded-md p-2 border-grey-lighter border-2 shadow-lg lg:aspect-square">
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
  return <div className="pt-2 border-t border-grey-darker text-center">{children}</div>
}

export { Root, Content, Title, Footer }
