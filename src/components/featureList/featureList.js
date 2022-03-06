import React from "react"
import classnames from "classnames"

const Root = ({ children }) => {
  return <div className="feature-list">{children}</div>
}

const cssClassesTitleDefault = "block font-mono text-xs uppercase text-primary"

const Title = ({ children }) => {
  return <span className={cssClassesTitleDefault}>{children}</span>
}

const cssClassesListDefault =
  "feature-list__item text-sm text-grey-lighter block font-mono text-xs mt-1"

const List = ({ items, delimiter }) => {
  const cssClasses = classnames(cssClassesListDefault, {
    "feature-list__item--with-delimiter": delimiter,
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
