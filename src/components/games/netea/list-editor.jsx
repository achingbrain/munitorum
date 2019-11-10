'use strict'

import React, {
  Component
} from 'react'
import component from '../../component'
import EditDetachments from './edit-detachments'
import EditAllies from './edit-allies'
import Validator from '../../validator'
import {
  addDetachment
} from '../../../store/actions'

class ListEditor extends Component {
  handleAddDetachment = (type, detachment) => {
    const {
      list,
      addDetachment
    } = this.props

    addDetachment({
      list,
      detachment: {
        type: type,
        detachment: detachment
      }
    })
  }

  render () {
    const {
      list,
      t
    } = this.props

    list.army.validate(list, t)

    return (
      <>
        <Validator errors={list.errors} />
        <EditDetachments
          list={list}
          type={'lineDetachments'}
          detachments={list.lineDetachments}
          available={list.army.getAvailableLineDetachments(list)}
          onAddDetachment={this.handleAddDetachment}
        />
        <EditDetachments
          list={list}
          type={'supportDetachments'}
          detachments={list.supportDetachments}
          available={list.army.getAvailableSupportDetachments(list)}
          onAddDetachment={this.handleAddDetachment}
        />
        <EditDetachments
          list={list}
          type={'lordsOfWar'}
          detachments={list.lordsOfWar}
          available={list.army.getAvailableLordOfWarDetachments(list)}
          onAddDetachment={this.handleAddDetachment}
        />
        <EditAllies
          list={list}
          type={'allies'}
          onAddAlly={this.handleAddDetachment}
        />
      </>
    )
  }
}

const mapStateToProps = ({ list }) => ({
  list,
  lineDetachments: list.lineDetachments,
  supportDetachments: list.supportDetachments,
  lordsOfWar: list.lordsOfWar,
  allies: list.allies,
  cacheBuster: Date.now()
})

const mapDispatchToProps = {
  addDetachment
}

export default component(ListEditor, mapStateToProps, mapDispatchToProps)
