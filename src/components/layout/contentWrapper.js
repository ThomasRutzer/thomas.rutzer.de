import React from "react"
import classnames from "classnames"

function ContentWrapper(
  { 
    children, 
    additionalClasses = "", 
    variant, 
    verticalSpacing = true, 
    horizontalSpacing = true 
  }
) {
  const createClasses = () => {
    const maxWClass = (variant => {
      switch (variant) {
        case 'small':
          return "max-w-4xl";
        case "large":
          return "max-w-full";
        default:
          return "max-w-6xl";
      }
    })(variant);

    return classnames(
      "relative", "container", "mx-auto",
      { "px-5": horizontalSpacing },
      { "py-6 md:py-7": verticalSpacing },
      { [`${maxWClass}`]: true },
    )
  }

  return (
    <div className={`${createClasses()} ${additionalClasses}`}>
      {children}
    </div>
  )
}

export default ContentWrapper
