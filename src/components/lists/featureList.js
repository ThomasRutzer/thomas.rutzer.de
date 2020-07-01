import React from "react"

import "./featureList.scss"

const FeatureList = ({ items }) => {
  return (
    <ul className="featureList pl-2">
      {items.map((item, key) => 
        <li key={key} className="featureList__item text-secondary">{item}</li>
      )}
    </ul>
  )
}

export default FeatureList