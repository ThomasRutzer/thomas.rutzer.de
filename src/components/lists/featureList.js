import React from "react"

import "./featureList.scss"

const FeatureList = ({ items }) => {
  return (
    <ul className="featureList pl-2">
      {items.map(item => <li className="featureList__item text-secondary">{item}</li>)}
    </ul>
  )
}

export default FeatureList