'use strict'

import React from 'react'
import component from './component'
import IconButton from '@material-ui/core/IconButton'

const InlineButton = (props) => {
  const {
    size,
    disabled,
    onClick,
    children,
    classes
  } = props

  return (
    <IconButton className={classes.inlineButton} size={size || 'small'} disabled={disabled} onClick={onClick}>
      {children}
    </IconButton>
  )
}

export default component(InlineButton)
