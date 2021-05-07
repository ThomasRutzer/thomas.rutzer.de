import React from "react"
import classnames from "classnames"

const ContentWrapper = ({
  children,
  additionalClasses = "",
  variant,
  verticalSpacing = true,
  horizontalSpacing = true,
}) => {
  const createClasses = () => {
    const maxWClass = () => {
      switch (variant) {
        case "small":
          return "max-w-4xl"
        case "large":
          return "max-w-full"
        default:
          return "max-w-6xl"
      }
    }

    return classnames(
      { "px-5": horizontalSpacing },
      { "py-6 md:py-7": verticalSpacing },
      { [`${maxWClass()}`]: true }
    )
  }

  return (
    <div
      className={`relative container mx-auto ${createClasses()} ${additionalClasses}`}
    >
      {children}
    </div>
  )
}

export default ContentWrapper
