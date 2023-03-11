import React from "react"
import classnames from "classnames"

const SIZES = { SMALL: "small", MID: "mid", LARGE: "large", FULL: "full" }

const Root = ({
  children,
  className = "",
  size = SIZES.LARGE,
  verticalSpacing = false,
  horizontalSpacing = true,
}) => {
  const classNames = classnames("relative mx-auto grid grid-cols-12 md:gap-y-0 md:gap-x-5", className, {
    "px-5 md:px-7": horizontalSpacing,
    "py-6 md:py-7": verticalSpacing,
    "max-w-4xl": size === SIZES.SMALL,
    "max-w-6xl": size === SIZES.MID,
    "max-w-screen-2xl": size !== SIZES.FULL,
  })

  return <div className={classNames}>{children}</div>
}

export { Root, SIZES }
