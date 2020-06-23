import React from "react"
import classnames from "classnames"

function ContentWrapper({ children, className = "", variant, verticalSpacing = true }) {
  const createClasses = () => {
    const widthClass = (variant => {
      switch(variant) {
        case 'small':
          return "max-w-xl";
        case "large":
          return "max-w-full xl:max-w-screen-xl";
        default:
          return "max-w-4xl";
      }
    })(variant);

    return classnames(
      "relative", "container", "mx-auto", "px-4", "md:px-5",
      { ["py-7"]: verticalSpacing }, 
      { [`${ widthClass}`]: true },
    ) 
  }

  return (
    <div className={ `${ createClasses() } ${ className }` }>
      { children }
    </div>
  )
}

export default ContentWrapper
