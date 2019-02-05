'use strict'

import React from 'react'
import component from '../../component'
import DetachmentViewer from './detachment-viewer'
import InvalidDetachment from '../../invalid-detachment-viewer'
import Validator from '../../validator'

const ListViewer = ({ list, detachments, t, classes }) => {
  list.army.validate(list, t)

  return (
    <>
      <Validator errors={list.errors} />
      {
        detachments.map((detachment, index) => {
          return (
            <InvalidDetachment
              key={`formation-${index}`}
              detachment={detachment}
            >
              <DetachmentViewer
                detachment={detachment}
                isFirst={index === 0}
                isLast={index === detachments.length - 1} />
            </InvalidDetachment>
          )
        })
      }
    </>
  )
}

const mapStateToProps = ({ list }) => ({
  list,
  detachments: list.detachments,
  cacheBuster: Date.now()
})

const mapDispatchToProps = {}

export default component(ListViewer, mapStateToProps, mapDispatchToProps)
