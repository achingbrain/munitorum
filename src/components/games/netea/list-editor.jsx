'use strict'

import React, {
  Component
} from 'react'
import component from '../../component'
import EditDetachments from './edit-detachments'
import Validator from './validator'
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
        detachment
      }
    })
  }

  render () {
    return (
      <>
        <Validator />
        <EditDetachments
          type={'lineDetachments'}
          onAddDetachment={this.handleAddDetachment}
        />
        <EditDetachments
          type={'supportDetachments'}
          onAddDetachment={this.handleAddDetachment}
        />
        <EditDetachments
          type={'lordsOfWar'}
          onAddDetachment={this.handleAddDetachment}
        />
        <EditDetachments
          type={'allies'}
          onAddDetachment={this.handleAddDetachment}
        />
      </>
    )
  }
}

const mapStateToProps = ({ list }) => ({
  list
})

const mapDispatchToProps = {
  addDetachment
}

export default component(ListEditor, mapStateToProps, mapDispatchToProps)
