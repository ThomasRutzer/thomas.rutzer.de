import React from "react"

const cssClassesRoot =
  "bg-grey-darkest flex justify-between flex-col rounded-md p-2 border-grey-lighter border-2 shadow-lg lg:aspect-square"

const Root = ({ children }) => {
  return <div className={cssClassesRoot}>{children}</div>
}

const cssClassesTitle = "text-xl tracking-wider font-mono"

const Title = ({ children }) => {
  return <h3 className={cssClassesTitle}>{children}</h3>
}

const cssClassesContent = "py-2"

const Content = ({ children }) => {
  return <div className={cssClassesContent}>{children}</div>
}

const cssClassesFooter = "pt-2 border-t border-grey-darker text-center"

const Footer = ({ children }) => {
  return <div className={cssClassesFooter}>{children}</div>
}

export { Root, Content, Title, Footer }
