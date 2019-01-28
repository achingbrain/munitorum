'use strict'

import React from 'react'
import component from '../../component'
import ViewDetachments from './view-detachments'
import ViewAllies from './view-allies'
import Validator from './validator'

const ListViewer = ({ list }) => {
  return (
    <>
      <Validator />
      <ViewDetachments
        list={list}
        type={'lineDetachments'}
      />
      <ViewDetachments
        list={list}
        type={'supportDetachments'}
      />
      <ViewDetachments
        list={list}
        type={'lordsOfWar'}
      />
      <ViewAllies
        list={list}
      />
    </>
  )
}

const mapStateToProps = ({ list }) => ({
  list
})

const mapDispatchToProps = {}

export default component(ListViewer, mapStateToProps, mapDispatchToProps)
