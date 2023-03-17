import React from "react"
import * as RadixCollapsible from "@radix-ui/react-collapsible"
import classnames from "classnames"

const Root = ({ children, title }) => {
  return (
    <RadixCollapsible.Root className="collapsible w-full">
      <Trigger>{title}</Trigger>
      <Content>{children}</Content>
    </RadixCollapsible.Root>
  )
}

const Trigger = ({ children }) => {
  const classNames = classnames(
    "flex items-center justify-between w-full border-2 border-white rounded-md px-1 py-2 transition-colors duration-300",
    "focus:outline-1 focus:outline-white focus:outline-dashed focus:outline-offset-4",
    "hover:bg-white hover:text-black"
  )

  return (
    <RadixCollapsible.Trigger className={classNames} suppressHydrationWarning={true}>
      <span>{children}</span>
      <svg
        className="collapsible__icon"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="square"
        strokeLinejoin="arcs"
      >
        <path d="M7 17l9.2-9.2M17 17V7H7" />
      </svg>
    </RadixCollapsible.Trigger>
  )
}

const Content = ({ children }) => {
  return (
    <RadixCollapsible.Content className="collapsible__content p-2" suppressHydrationWarning={true}>
      {children}
    </RadixCollapsible.Content>
  )
}

export { Root }
