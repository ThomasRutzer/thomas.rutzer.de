import React from 'react'
import headlineStyles from './headline.module.scss'

export default ({ priority, center, children, spacing }) => {
  const Tag = `h${priority}`

  return (
    <Tag
      className={`${center ? headlineStyles.center : headlineStyles.left} ${
        spacing ? headlineStyles.spacing : headlineStyles.noSpacing
      }`}
    >
      {children}
    </Tag>
  )
}
