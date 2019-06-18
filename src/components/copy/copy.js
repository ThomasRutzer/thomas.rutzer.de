import React from 'react'
import copyStyles from './copy.module.scss'

export default props => <p className={ `${ copyStyles.copy } ${ props.center ? copyStyles.center : null }` }>{props.children}</p>
