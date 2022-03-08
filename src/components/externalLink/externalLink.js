import React from "react"
import classnames from "classnames"

const SIZES = { SMALL: "small", LARGE: "large" }
const CONTENT_TYPES = { TEXT: "text", IMAGE: "image" }

const Root = ({ children, link, contentType = CONTENT_TYPES.TEXT, size = SIZES.SMALL }) => {
  const classNames = classnames(
    "external-link relative text-primary rounded-md font-mono no-underline inline-block",
    "active:opacity-80",
    "focus:outline-primary focus:outline-dashed",
    {
      "focus:outline-1 focus:outline-offset-4": size === SIZES.SMALL,
      "focus:outline-2 focus:outline-offset-8": size === SIZES.LARGE,
      "external-link--small": size === SIZES.SMALL,
      "external-link--large text-3xl md:text-5xl md:leading-normal": size === SIZES.LARGE,
    }
  )

  return (
    <a className={classNames} href={link} rel="noopener noreferrer" target="_blank">
      {contentType === "image" && (
        <span className="inherit" aria-hidden="true">
          {children}
        </span>
      )}
      {contentType !== "image" && <>{children}</>}
      <Icon contentType={contentType} />
    </a>
  )
}

const Icon = ({ contentType }) => {
  const classNames = classnames("external-link__icon", {
    relative: contentType === "text",
    "absolute right-0": contentType === "image",
  })

  return (
    <svg
      className={classNames}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      strokeLinecap="square"
      strokeLinejoin="arcs"
    >
      <path d="M7 17l9.2-9.2M17 17V7H7" />
    </svg>
  )
}

export { Root, CONTENT_TYPES, SIZES }
