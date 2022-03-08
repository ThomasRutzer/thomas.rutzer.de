import React from "react"
import classnames from "classnames"

const Root = ({ children, as = "button", ...props }) => {
  const Tag = as
  const classNames = classnames(
    "min-w-[250px] inline-flex items-center justify-center border-2 rounded-md p-2 cursor-pointer transition-colors duration-300 ease-in-out",
    "disabled:pointer-events-none disabled:opacity-50",
    "hover:bg-white hover:text-black",
    "focus:outline-1 focus:outline-white focus:outline-dashed focus:outline-offset-4"
  )

  return (
    <Tag className={classNames} {...props}>
      {children}
    </Tag>
  )
}

export { Root }
