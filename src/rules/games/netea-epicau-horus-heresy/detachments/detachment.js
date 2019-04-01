'use strict'

import shortid from 'shortid'
import Unit, { MultipleUnit, InvalidUnit } from '../units/unit'
import {
  find
} from '../../../../utils/with-type'

export default class Detachment {
  constructor (list) {
    this.id = shortid.generate()
    this.list = list
    this.units = []
    this.upgrades = []
    this.constraints = []
    this.rules = []
    this.errors = []
  }

  addError (error) {
    this.errors = this.errors.concat(error)
  }

  clearErrors () {
    this.errors = []
  }

  setMandatoryUnits (...units) {
    this.units = this.units.concat(
      units.map(unit => {
        unit.mandatory = true

        return unit
      })
    )
  }

  setUpgrades (...upgrades) {
    this.upgrades = upgrades
  }

  setConstraints (...constraints) {
    this.constraints = constraints
  }

  setRules (...rules) {
    this.rules = rules
  }

  getName () {
    return this.code
  }

  addUnit (UnitType) {
    let unit = new UnitType(this)

    if (unit instanceof MultipleUnit) {
      unit = unit.getUnits(this)
    }

    this.units = this.units.concat(unit)
  }

  removeUnit (unit) {
    this.units = this.units
      .filter(item => item.id !== unit.id)
  }

  getCost () {
    const cost = this.units.reduce((acc, unit) => {
      const cost = unit.getCost(this)

      if (!isNaN(cost)) {
        return acc + cost
      }

      return acc
    }, 0)

    return Math.round(cost)
  }

  getInitiativeRating () {
    return 1
  }

  moveUnitUp (unit) {
    const index = this.units.findIndex(item => item.id === unit.id)

    if (index !== -1) {
      const a = this.units[index - 1]
      const b = this.units[index]

      this.units[index - 1] = b
      this.units[index] = a

      this.units = this.units.slice()
    }
  }

  moveUnitDown (unit) {
    const index = this.units.findIndex(item => item.id === unit.id)

    if (index !== -1) {
      const a = this.units[index]
      const b = this.units[index + 1]

      this.units[index] = b
      this.units[index + 1] = a

      this.units = this.units.slice()
    }
  }

  toJSON () {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      units: this.units.map(unit => unit.toJSON())
    }
  }

  static fromJSON (json, list) {
    try {
      const DetachmentType = find(json.type)

      const detachment = new DetachmentType(list)
      detachment.id = json.id
      detachment.name = json.name
      detachment.units = json.units.map(json => {
        const unit = Unit.fromJSON(json, detachment)

        if (unit.deserialized) {
          unit.deserialized(json)
        }

        return unit
      })

      return detachment
    } catch (error) {
      return new InvalidDetachment(list, json, error)
    }
  }
}

export class InvalidDetachment extends Detachment {
  constructor (list, json, error) {
    super(list)

    Object.assign(this, json)

    this.json = json
    this.error = error

    if (this.units && Array.isArray(this.units)) {
      this.units = this.units.map(json => new InvalidUnit(json))
    }
  }

  getCost () {
    return 0
  }

  toJSON () {
    return this.json
  }
}
