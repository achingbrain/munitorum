'use strict'

import React from 'react'
import component from '../../component'
import DetachmentViewer from './detachment-viewer'
import InvalidDetachment from '../../invalid-detachment-viewer'
import kebab from '../../../utils/kebab-case'

const ViewDetachments = ({ army, type, detachments, classes, t }) => {
  return (
    <div className={classes.detachmentTypeWrapper}>
      {
        detachments.map((detachment, index) => (
          <InvalidDetachment
            key={`${kebab(type)}-${index}`}
            detachment={detachment}
          >
            <DetachmentViewer
              detachment={detachment}
            />
          </InvalidDetachment>
        ))
      }
    </div>
  )
}

const mapStateToProps = (state, { list, type }) => {
  return {
    army: list.army,
    detachments: list[type]
  }
}

const mapDispatchToProps = {

}

export default component(ViewDetachments, mapStateToProps, mapDispatchToProps)
