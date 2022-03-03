import React from "react"

const cssClassesDefault =
  "min-w-[250px] inline-flex items-center justify-center border-2 rounded-md p-2 cursor-pointer transition-colors duration-300 ease-in-out"
const cssClassesDisabled = "disabled:pointer-events-none disabled:opacity-50"
const cssClassesHover = "hover:bg-white hover:text-black"
const cssClassesFocus = "focus:outline-1 outline-white focus:outline-dashed focus:outline-offset-4"

const Root = ({ children, as = "button", ...props }) => {
  const Tag = as

  return (
    <Tag
      className={`${cssClassesDefault} ${cssClassesDisabled} ${cssClassesHover} ${cssClassesFocus}`}
      {...props}
    >
      {children}
    </Tag>
  )
}

export { Root }
