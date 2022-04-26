import React from "react"
import classnames from "classnames"

const Root = ({ children }) => {
  return <div className="feature-list">{children}</div>
}

const Title = ({ children }) => {
  return <span className="block font-mono text-xs uppercase text-primary">{children}</span>
}

const List = ({ items, delimiter }) => {
  const cssClasses = classnames(
    "feature-list__item text-sm block font-mono text-xs mt-1",
    {
      "feature-list__item--with-delimiter": delimiter,
    }
  )

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
