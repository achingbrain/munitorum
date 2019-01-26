'use strict'

import React, {
  Component
} from 'react'
import PropTypes from 'prop-types'
import component from '../../component'
import { Trans } from 'react-i18next'
import IconButton from '@material-ui/core/IconButton'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import RemoveIcon from '@material-ui/icons/Remove'
import Typography from '@material-ui/core/Typography'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import MoreIcon from '@material-ui/icons/ExpandMore'
import InlineButton from '../../inline-button'
import Confirm from '../../confirm'
import PopOverMenu from '../../pop-over-menu'
import {
  MultipleChoiceWeapon
} from '../../../rules/games/netea-epicau-horus-heresy/weapons'
import {
  removeUnit,
  updateUnit
} from '../../../store/actions'
import EditableMultiChoiceWeapon from './edit-multiple-choice-weapon'

const EditableWeaponDisplay = component(({ name, t }) => {
  return (
    <Typography component='p' variant='subtitle2' color='textSecondary'>
      {t(name)}
    </Typography>
  )
})

const IncreaseQuantity = component(({ quantity, min, max, onIncreaseQuantity }) => {
  if (max === undefined) {
    return null
  }

  return (
    <InlineButton size='small' disabled={quantity === max} onClick={onIncreaseQuantity}>
      <AddIcon />
    </InlineButton>
  )
})

const DecreaseQuantity = component(({ quantity, min, max, onDecreaseQuantity }) => {
  if (max === undefined) {
    return null
  }

  return (
    <InlineButton size='small' disabled={quantity === min} onClick={onDecreaseQuantity}>
      <RemoveIcon />
    </InlineButton>
  )
})

const NameDisplay = component(({ name, quantity, min, max, unitOptions, onIncreaseQuantity, onDecreaseQuantity, onChooseUnitOption, t }) => {
  const type = t(name)

  let nameDisplay = (
    <Trans i18nKey='unit-quantity'>{{ quantity }}x {{ type }}</Trans>
  )

  if (isNaN(quantity) || (quantity === 1 && !max)) {
    nameDisplay = type
  }

  nameDisplay = (
    <>
      {nameDisplay}
      <IncreaseQuantity
        quantity={quantity}
        min={min}
        max={max}
        onIncreaseQuantity={onIncreaseQuantity} />
      <DecreaseQuantity
        quantity={quantity}
        min={min}
        max={max}
        onDecreaseQuantity={onDecreaseQuantity} />
    </>
  )

  if (unitOptions) {
    return (
      <PopOverMenu
        text={nameDisplay}
        textComponent='p'
        textVariant='subtitle1'
        items={unitOptions}
        onSelect={onChooseUnitOption}
        button={<MoreIcon fontSize='small' />}
        buttonSize='small' />
    )
  }

  return (
    <Typography component='p' variant='subtitle1'>
      {nameDisplay}
    </Typography>
  )
})

const CostDisplay = component(({ cost, t }) => {
  if (!cost) {
    return t('free')
  } else {
    return (
      <Trans i18nKey='cost'>{{ cost }} pts</Trans>
    )
  }
})

class UnitEditor extends Component {
  static propTypes = {
    unit: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    quantity: PropTypes.number,
    min: PropTypes.number,
    max: PropTypes.number,
    cost: PropTypes.number.isRequired,
    weapons: PropTypes.array.isRequired,
    mandatory: PropTypes.bool
  }

  handleRemoveUnit = () => {
    const {
      detachment,
      unit,
      removeUnit
    } = this.props

    removeUnit({
      detachment,
      unit
    })
  }

  handleIncreaseQuantity = () => {
    const {
      unit,
      updateUnit
    } = this.props

    updateUnit({
      unit,
      operation: (unit) => {
        unit.increaseQuantity()
      }
    })
  }

  handleDecreaseQuantity = () => {
    const {
      unit,
      updateUnit
    } = this.props

    updateUnit({
      unit,
      operation: (unit) => {
        unit.decreaseQuantity()
      }
    })
  }

  handleChooseUnitOption = ({ code }) => {
    const {
      unit,
      unitOptions,
      updateUnit
    } = this.props

    const choice = unitOptions.findIndex(item => item.code === code)

    updateUnit({
      unit,
      operation: (unit) => {
        unit.setUnitOption(choice)
      }
    })
  }

  render () {
    const {
      name,
      quantity,
      min,
      max,
      cost,
      weapons,
      mandatory,
      unitOptions,
      classes,
      detachmentType,
      detachmentIndex,
      unitIndex
    } = this.props

    return (
      <TableRow>
        <TableCell>
          <NameDisplay
            name={name}
            quantity={quantity}
            min={min}
            max={max}
            unitOptions={unitOptions}
            onChooseUnitOption={this.handleChooseUnitOption}
            onIncreaseQuantity={this.handleIncreaseQuantity}
            onDecreaseQuantity={this.handleDecreaseQuantity} />
          {
            weapons.map((weapon, weaponIndex) => {
              if (weapon instanceof MultipleChoiceWeapon) {
                return (
                  <EditableMultiChoiceWeapon
                    key={`weapon-${weaponIndex}`}
                    weapon={weapon}
                    detachmentType={detachmentType}
                    detachmentIndex={detachmentIndex}
                    unitIndex={unitIndex}
                    weaponIndex={weaponIndex} />
                )
              }

              return (
                <EditableWeaponDisplay
                  key={`weapon-${weaponIndex}`}
                  name={weapon.name} />
              )
            })
          }
        </TableCell>
        <TableCell padding='checkbox' className={classes.tablePointsCell}>
          <CostDisplay cost={cost} />
        </TableCell>
        <TableCell padding='checkbox' className={classes.tableIconCell}>
          <Confirm title={'Remove this unit?'} text={'Really remove this unit?'} onConfirm={this.handleRemoveUnit} button={(onClick) => (
            <IconButton aria-label='Remove' onClick={onClick} disabled={mandatory}>
              <DeleteIcon />
            </IconButton>
          )} />
        </TableCell>
      </TableRow>
    )
  }
}

const mapStateToProps = ({ list }, { detachmentType, detachmentIndex, unitIndex }) => {
  const detachment = list[detachmentType][detachmentIndex]
  const unit = detachment.units[unitIndex]

  return {
    detachment: detachment,
    unit: unit,
    name: unit.getName(),
    quantity: unit.getQuantity(),
    min: unit.getMin(),
    max: unit.getMax(),
    cost: unit.getCost(),
    weapons: unit.getWeapons(),
    mandatory: unit.getMandatory(),
    unitOptions: unit.getUnitOptions()
  }
}

const mapDispatchToProps = {
  removeUnit,
  updateUnit
}

export default component(UnitEditor, mapStateToProps, mapDispatchToProps)
