'use strict'

import React, {
  Component
} from 'react'
import component from '../../component'
import PopOverMenu from '../../pop-over-menu'
import AllyEditor from './ally-editor'
import game from '../../../rules/netea-epicau-horus-heresy'
import {
  removeDetachment
} from '../../../store/actions'

class EditAllies extends Component {
  handleAddAlly = (Army) => {
    const {
      onAddAlly,
      t
    } = this.props

    const army = new Army(game)

    onAddAlly('allies', game.newList(t(army.code), army))
  }

  handleRemoveAlly = (ally) => {
    const {
      list,
      removeDetachment
    } = this.props

    removeDetachment({
      list: list,
      detachment: ally
    })
  }

  render () {
    const {
      list,
      army,
      classes,
      t
    } = this.props

    return (
      <div className={classes.detachmentTypeWrapper}>
        <PopOverMenu
          text={t('allies')}
          textClassName={classes.detachmentType}
          items={army.allies}
          onSelect={this.handleAddAlly}
        />
        {
          list.allies.map((ally, index) => (
            <AllyEditor
              key={`allies-${index}`}
              list={ally}
              onRemoveAlly={this.handleRemoveAlly}
              isFirst={index === 0}
              isLast={index === list.allies.length - 1}
            />
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (state, { list }) => {
  return {
    list,
    army: list.army
  }
}

const mapDispatchToProps = {
  removeDetachment
}

export default component(EditAllies, mapStateToProps, mapDispatchToProps)
