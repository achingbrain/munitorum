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
  handleAddDetachment = (detachment) => {
    const {
      type,
      onAddDetachment
    } = this.props

    onAddDetachment(type, detachment)
  }

  render () {
    const {
      army,
      type,
      detachments,
      classes,
      t
    } = this.props

    return (
      <div className={classes.detachmentTypeWrapper}>
        <PopOverMenu
          text={t(kebab(type))}
          textClassName={classes.detachmentType}
          items={army[type]}
          onSelect={this.handleAddDetachment} />
        {
          detachments.map((detachment, index) => (
            <InvalidDetachment
              key={`${kebab(type)}-${index}`}
              detachment={detachment}
            >
              <DetachmentEditor
                type={type}
                index={index} />
            </InvalidDetachment>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = ({ list }, { type }) => {
  return {
    army: list.army,
    detachments: list[type]
  }
}

const mapDispatchToProps = {
  addDetachment
}

export default component(EditDetachments, mapStateToProps, mapDispatchToProps)
