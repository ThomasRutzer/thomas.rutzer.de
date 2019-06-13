import React from 'react'
import buttonStyle from './buttons.module.scss'

export default props => 
  <button 
    className={ buttonStyle.primary }
    onClick={ props.onClick }
    disabled={ props.disabled } 
  >
    { props.label }
  </button>
