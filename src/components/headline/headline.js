import React from 'react'
import headlineStyles from './headline.module.scss'

export default ({ priority, center, children }) => {
  const Tag = `h${priority}`

  return (
    <Tag
      className={`${headlineStyles[`h${priority}`]} ${center ? headlineStyles.center : null}`}
    >
      {children}
    </Tag>
  )
}
