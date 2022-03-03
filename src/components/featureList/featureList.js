import React from "react"
import classnames from "classnames"

const Root = ({ children }) => {
  return <div className="feature-list">{children}</div>
}

const cssClassesTitleDefault = "block font-mono text-xs uppercase"

const Title = ({ children, appearance }) => {
  const cssClasses = classnames(cssClassesTitleDefault, {
    "text-secondary-lighter": appearance === "primary",
    "text-grey-darkest": appearance === "secondary",
  })

  return <span className={cssClasses}>{children}</span>
}

const cssClassesListDefault = "featureList__item text-sm text-grey-lighter block font-mono text-xs"

const List = ({ items, delimiter }) => {
  const cssClasses = classnames(cssClassesListDefault, {
    "featureList__item--with-delimiter": delimiter,
  })

  return (
    <ul>
      {items.map((item, key) => (
        <li key={key} className={cssClasses}>
          {item}
        </li>
      ))}
    </ul>
  )
}

export { Root, Title, List }
