import React from "react"

import "./index.scss"

const FeatureList = ({ items }) => {
  return (
    <ul className="featureList">
      {items.map((item, key) => (
        <li key={key} className="featureList__item text-sm text-grey-lighter">
          {item}
        </li>
      ))}
    </ul>
  )
}

export default FeatureList
