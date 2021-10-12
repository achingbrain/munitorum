'use strict'

import React from 'react'
import component from './component'
import SvgIcon from './svg-icon'
import Avatar from '@material-ui/core/Avatar'
import skull from '../images/skull.svg'

const Icon = ({ src, className }) => {
  if (src && src.src) {
    src = src.src
  }

  if (!src) {
    src = skull
  }

  if (src.endsWith('.png')) {
    return (
      <Avatar className={className} src={src} />
    )
  }

  return (
    <SvgIcon className={className} dangerouslySetInnerHTML={{ __html: src
        .replace(/\sfill="[#0-9]+"/g, '')
        .replace(/\swidth="[0-9]+"/g, '')
        .replace(/\sheight="[0-9]+"/g, '')
    }} component='div' />
  )
}

export default component(Icon)
