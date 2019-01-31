'use strict'

import React, {
  Component
} from 'react'
import component from '../../component'
import Validator from '../../validator'
import PopOverMenu from '../../pop-over-menu'
import DetachmentEditor from './detachment-editor'
import InvalidDetachment from '../../invalid-detachment-editor'
import {
  addDetachment
} from '../../../store/actions'

class ListEditor extends Component {
  handleAddDetachment = (Detachment) => {
    const {
      list,
      addDetachment
    } = this.props

    const detachment = new Detachment(list)

    addDetachment({
      list,
      detachment
    })
  }

  render () {
    const {
      list,
      detachments,
      t,
      classes
    } = this.props

    list.army.validate(list, t)

    return (
      <>
        <Validator errors={list.errors} />
        <div className={classes.detachmentTypeWrapper}>
          <PopOverMenu
            text={t('formations')}
            textClassName={classes.detachmentType}
            items={list.army.formations}
            onSelect={this.handleAddDetachment} />
          {
            detachments.map((detachment, index) => (
              <InvalidDetachment
                key={`formation-${index}`}
                detachment={detachment}
              >
                <DetachmentEditor
                  detachment={detachment}
                  isFirst={index === 0}
                  isLast={index === detachments.length - 1} />
              </InvalidDetachment>
            ))
          }
        </div>
      </>
    )
  }
}

const mapStateToProps = ({ list }) => ({
  list,
  detachments: list.detachments,
  cacheBuster: Date.now()
})

const mapDispatchToProps = {
  addDetachment
}

export default component(ListEditor, mapStateToProps, mapDispatchToProps)
