'use strict'

import React, {
  Component
} from 'react'
import component from '../../component'
import MoreIcon from '@material-ui/icons/ExpandMore'
import PopOverMenu from '../../pop-over-menu'
import {
  WeaponSet,
  TitanWeapon
} from '../../../rules/games/netea-epicau-horus-heresy/weapons'
import {
  updateUnit
} from '../../../store/actions'

class EditableMultiChoiceWeapon extends Component {
  handleWeaponChoice = ({ index }) => {
    const {
      unit,
      updateUnit,
      weaponIndex
    } = this.props

    updateUnit({
      unit,
      operation: (unit) => {
        unit.setWeaponOption(weaponIndex, index)
      }
    })
  }

  render () {
    const {
      weapon,
      weaponOptions,
      weaponIndex,
      t
    } = this.props

    const weapons = weapon.options.map((option, index) => {
      if (option instanceof WeaponSet) {
        return {
          name: option.options.map(option => t(option.name)).join(', '),
          index,
          getCost: option.getCost.bind(option)
        }
      }

      return {
        name: t(option.name),
        index,
        getCost: option.getCost.bind(option)
      }
    })

    let weaponText = t(weapons[weaponOptions[weaponIndex] || 0].name)

    if (weapon instanceof TitanWeapon) {
      weaponText = `${t(weapon.mount)} ${weaponText}`
    }

    return (
      <PopOverMenu
        text={weaponText}
        textComponent='div'
        textVariant='subtitle2'
        textColour='textSecondary'
        items={weapons}
        onSelect={this.handleWeaponChoice}
        button={<MoreIcon fontSize='small' />}
        buttonSize='small' />
    )
  }
}

const mapStateToProps = (state, { unit }) => {
  return {
    unit: unit,
    weapons: unit.getWeapons(),
    weaponOptions: unit.getWeaponOptions(),
    chosenWeapons: unit.getChosenWeapons()
  }
}

const mapDispatchToProps = {
  updateUnit
}

export default component(EditableMultiChoiceWeapon, mapStateToProps, mapDispatchToProps)
