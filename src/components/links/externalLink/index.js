import React from "react"
import classnames from "classnames"

const classes = {
  contentType: contentType => `external-link--content-type-${contentType}`,
  size: size =>
    classnames({
      "external-link--large text-3xl md:text-5xl": size === "large",
      "external-link--small text-sm": size === "small",
    }),
  appearance: appearance =>
    classnames({
      "external-link--primary text-primary": appearance === "primary",
    }),
}

const ExternalLink = ({
  additionalClasses = "",
  appearance = "primary",
  children,
  contentType = "text",
  link,
  size,
}) => (
  <a
    className={`external-link ${classes.contentType(
      contentType
    )} ${classes.appearance(appearance)} ${classes.size(
      size
    )} ${additionalClasses}`}
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
      className="external-link__icon"
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

export default ExternalLink
