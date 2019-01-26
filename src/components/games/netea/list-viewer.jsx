'use strict'

import React from 'react'
import component from '../../component'
import ViewDetachments from './view-detachments'
import {
  addDetachment
} from '../../../store/actions'
import Validator from './validator'

const ListViewer = () => {
  return (
    <>
      <Validator />
      <ViewDetachments
        type={'lineDetachments'}
      />
      <ViewDetachments
        type={'supportDetachments'}
      />
      <ViewDetachments
        type={'lordsOfWar'}
      />
    </>
  )
}

const mapStateToProps = ({ list }) => ({
  list
})

const mapDispatchToProps = {
  addDetachment
}

export default component(ListViewer, mapStateToProps, mapDispatchToProps)
