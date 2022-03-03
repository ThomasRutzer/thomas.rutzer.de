import React from "react"
import classnames from "classnames"

const SIZES = { SMALL: "small", LARGE: "large" }
const CONTENT_TYPES = { TEXT: "text", IMAGE: "image" }

const cssClassesRootDefault =
  "external-link text-primary rounded-md font-mono no-underline inline-block"
const cssClassesRootActive = "active:opacity-80"
const cssClassesRootFocus = "focus:outline-primary focus:outline-dashed"
const cssClassesRootFocusSizeSmall = "focus:outline-1 focus:outline-offset-4"
const cssClassesRootFocusSizeLarge = "focus:outline-2 focus:outline-offset-8"
const cssClassesRootSizeSmall = "external-link--small text-sm"
const cssClassesRootSizeLarge = "external-link--large text-3xl md:text-5xl md:leading-normal"

const cssClassesIconDefault = "external-link__icon"
const cssClassesIconByContentTypeImage = "absolute right-0"
const cssClassesIconByContentTypeText = "relative"

const Root = ({ children, link, contentType = CONTENT_TYPES.TEXT, size = SIZES.SMALL }) => {
  const cssClassesRootFocusBySize = classnames(cssClassesRootFocus, {
    [cssClassesRootFocusSizeSmall]: size === "small",
    [cssClassesRootFocusSizeLarge]: size === "large",
  })

  const cssClassesRootBySize = classnames({
    [cssClassesRootSizeSmall]: size === "small",
    [cssClassesRootSizeLarge]: size === "large",
  })

  const cssClassesIconByContentType = classnames({
    [cssClassesIconByContentTypeText]: contentType === "text",
    [cssClassesIconByContentTypeImage]: contentType === "image",
  })

  return (
    <a
      className={`${cssClassesRootDefault} ${cssClassesRootActive} ${cssClassesRootFocusBySize} ${cssClassesRootBySize}`}
      href={link}
      rel="noopener noreferrer"
      target="_blank"
    >
      {contentType === "image" && (
        <span className="inherit" aria-hidden="true">
          {children}
        </span>
      )}
      {contentType !== "image" && <>{children}</>}
      <svg
        className={`${cssClassesIconDefault} ${cssClassesIconByContentType}`}
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
    </a>
  )
}

export { Root, CONTENT_TYPES, SIZES }
