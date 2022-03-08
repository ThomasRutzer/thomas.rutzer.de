import React from "react"
import classnames from "classnames"

const SIZES = { SMALL: "small", MID: "mid", LARGE: "large" }

const Root = ({
  children,
  className = "",
  size = SIZES.MID,
  verticalSpacing = true,
  horizontalSpacing = true,
}) => {
  const classNames = classnames("relative container mx-auto", className, {
    "px-5": horizontalSpacing,
    "py-6 md:py-7": verticalSpacing,
    "max-w-4xl": size === SIZES.SMALL,
    "max-w-6xl": size === SIZES.MID,
    "max-w-full": size === SIZES.LARGE,
  })

  return <div className={classNames}>{children}</div>
}

export { Root, SIZES }
