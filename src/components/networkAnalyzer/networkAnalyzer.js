import React from 'react'
import isMobileDevice from './../../utils/isMobileDevice'

export default props => WrappedComponent => {
  const isMobile = isMobileDevice()
  let sufficientConnection =
    !isMobile &&
    (navigator.connection && navigator.connection.type !== 'cellular')

  return () => (
    <WrappedComponent sufficientConnection={sufficientConnection} {...props} />
  )
}
