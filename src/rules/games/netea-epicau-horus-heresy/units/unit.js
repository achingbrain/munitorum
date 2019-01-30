'use strict'

import shortid from 'shortid'
import { find } from '../../../../utils/with-type'
import {
  WeaponSet,
  MultipleChoiceWeapon
} from '../weapons'

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
