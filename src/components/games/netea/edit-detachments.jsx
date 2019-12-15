'use strict'

import React, {
  Component
} from 'react'
import component from '../../component'
import PopOverMenu from '../../pop-over-menu'
import DetachmentEditor from './detachment-editor'
import InvalidDetachment from '../../invalid-detachment-editor'
import {
  addDetachment
} from '../../../store/actions'
import kebab from '../../../utils/kebab-case'

class EditDetachments extends Component {
  handleAddDetachment = (detachment) => {
    const {
      type,
      onAddDetachment
    } = this.props

    onAddDetachment(type, detachment)
  }

  render () {
    const {
      type,
      available,
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
          items={available}
          onSelect={this.handleAddDetachment}
          identifier={`add-${kebab(type)}`}
        />
        {
          detachments.map((detachment, index) => (
            <InvalidDetachment
              key={`${kebab(type)}-${index}`}
              detachment={detachment}
            >
              <DetachmentEditor
                detachment={detachment}
                isFirst={index === 0}
                isLast={index === detachments.length - 1}
              />
            </InvalidDetachment>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state, { list, type, detachments, available }) => {
  return {
    list,
    type,
    detachments,
    available
  }
}

const mapDispatchToProps = {
  addDetachment
}

export default component(EditDetachments, mapStateToProps, mapDispatchToProps)
