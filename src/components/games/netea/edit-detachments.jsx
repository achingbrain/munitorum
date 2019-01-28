'use strict'

import React, {
  Component
} from 'react'
import component from '../../component'
import PopOverMenu from '../../pop-over-menu'
import DetachmentEditor from './detachment-editor'
import InvalidDetachment from './invalid-detachment-editor'
import {
  addDetachment
} from '../../../store/actions'
import kebab from '../../../utils/kebab-case'

class EditDetachments extends Component {
  handleAddDetachment = (Detachment) => {
    const {
      type,
      list,
      onAddDetachment
    } = this.props

    const detachment = new Detachment(list)

    onAddDetachment(type, detachment)
  }

  render () {
    const {
      army,
      type,
      detachments,
      classes,
      t,
      titleTextVariant,
      titleTextClassName
    } = this.props

    return (
      <div className={classes.detachmentTypeWrapper}>
        <PopOverMenu
          text={t(kebab(type))}
          textClassName={titleTextClassName || classes.detachmentType}
          textVariant={titleTextVariant}
          items={army[type]}
          onSelect={this.handleAddDetachment} />
        {
          detachments.map((detachment, index) => (
            <InvalidDetachment
              key={`${kebab(type)}-${index}`}
              detachment={detachment}
            >
              <DetachmentEditor
                detachment={detachment} />
            </InvalidDetachment>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state, { type, list }) => {
  return {
    list,
    army: list.army,
    detachments: list[type]
  }
}

const mapDispatchToProps = {
  addDetachment
}

export default component(EditDetachments, mapStateToProps, mapDispatchToProps)
