import React from 'react'
import copyStyles from './copy.module.scss'

export default props => <p className={copyStyles.copy}>{props.children}</p>
