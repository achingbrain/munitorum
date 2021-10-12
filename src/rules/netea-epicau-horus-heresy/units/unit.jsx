'use strict'

import shortid from 'shortid'
import { find } from '../../../utils/with-type'
import {
  WeaponSet,
  MultipleChoiceWeapon
} from '../weapons'
import React from 'react'
import Typography from '@material-ui/core/Typography'

export default class Unit {
  constructor (detachment, cost, min, max) {
    this.id = shortid.generate()
    this.cost = cost
    this.min = min
    this.max = max
    this.quantity = min
    this.detachment = detachment
    this.weaponOptions = []
    this.rules = []
    this.constraints = []
    this.weapons = []
  }

  getWeaponOptions () {
    return this.weaponOptions
  }

  getMandatory () {
    return this.mandatory
  }

  decreaseQuantity () {
    this.quantity--

    if (this.quantity < this.min) {
      this.quantity = this.min
    }
  }

  increaseQuantity () {
    this.quantity++

    if (this.quantity > this.max) {
      this.quantity = this.max
    }
  }

  getTransportType () {
    return this.transportType
  }

  getTransportCost () {
    return this.transportCost
  }

  getRules () {
    return this.rules
  }

  getQuantity () {
    return this.quantity
  }

  getMin () {
    return this.min
  }

  getMax () {
    return this.max
  }

  getImage () {
    return this.image
  }

  setUnitOption (choice) {

  }

  getUnitOptions () {

  }

  setWeaponOption (index, choice) {
    this.weaponOptions = this.weaponOptions.slice()
    this.weaponOptions[index] = choice
  }

  getCost () {
    let cost = this.cost

    this.getChosenWeapons().forEach(weapon => {
      if (weapon.pointsModifier) {
        cost = weapon.pointsModifier.modify(cost)
      }
    })

    if (this.max === undefined) {
      return cost
    }

    return this.quantity * cost
  }

  getName () {
    return this.code
  }

  getStats () {
    return this.stats
  }

  getChosenWeapons () {
    return this.weapons
      .map((weapon, weaponIndex) => {
        if (weapon instanceof MultipleChoiceWeapon) {
          weapon = weapon.options[this.weaponOptions[weaponIndex] || 0]
        }

        return weapon
      })
      .reduce((acc, curr) => {
        if (curr instanceof WeaponSet) {
          return acc.concat(curr.options)
        } else {
          acc.push(curr)
        }

        return acc
      }, [])
  }

  getWeapons () {
    return this.weapons
  }

  toJSON () {
    return {
      id: this.id,
      type: this.type,
      quantity: this.quantity,
      mandatory: this.mandatory,
      weaponOptions: this.weaponOptions
    }
  }

  static fromJSON (json, detachment) {
    try {
      const UnitType = find(json.type)

      if (!UnitType) {
        throw new Error('Unknown or invalid unit type')
      }

      const unit = new UnitType(detachment)

      Object.assign(unit, json)

      return unit
    } catch (error) {
      return new InvalidUnit(detachment, json, error)
    }
  }
}

export class MultipleUnit extends Unit {
  getUnits (detachment) {
    return this.types.map(UnitType => new UnitType(detachment))
  }
}

export class InvalidUnit extends Unit {
  constructor (detachment, json, error) {
    super(detachment)

    Object.assign(this, json)

    this.json = json
    this.error = error

    this.weapons = []
  }

  getCost () {
    return 0
  }

  toJSON () {
    return this.json
  }
}

export class TransportUnit extends Unit {
  getQuantity () {
    // need to calculate number of transports required to transport
    // all eligible units in the detachment
    const requirement = {}

    this.detachment.units.forEach(unit => {
      if (unit === this) {
        return
      }

      if (unit instanceof TransportUnit) {
        return
      }

      const quantity = unit.getQuantity()
      const transportType = unit.getTransportType()

      if (!transportType) {
        return
      }

      if (!this.transportTypes[transportType]) {
        // cannot transport this unit, show an error?
        return
      }

      requirement[transportType] = (requirement[transportType] || 0) + quantity
    })

    let numTransports = 0

    Object.keys(requirement).forEach(transportType => {
      const capacity = this.transportTypes[transportType]

      numTransports += Math.ceil(requirement[transportType] / capacity)
    })

    return numTransports
  }

  getCost () {
    return this.getQuantity() * this.cost
  }

  getDisplay (t) {
    const quantity = this.getQuantity()
    const type = t(this.code)

    return (
      <Typography component='p'>
        {quantity}x {type}
      </Typography>
    )
  }
}

export class InfantryTransportUnit extends TransportUnit {
  getQuantity () {
    // need to calculate number of transports required to transport
    // all eligible units in the detachment
    let requirement = 0

    this.detachment.units.forEach(unit => {
      if (unit === this || unit instanceof TransportUnit || !unit.getTransportCost()) {
        return
      }

      const quantity = unit.getQuantity()
      const cost = unit.getTransportCost()

      requirement += quantity * cost
    })

    return Math.ceil(requirement / this.transportCapacity)
  }
}
