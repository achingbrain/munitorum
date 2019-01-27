'use strict'

import shortid from 'shortid'
import Unit, { InvalidUnit } from '../units/unit'
import {
  find
} from '../../../../utils/with-type'

export default class Detachment {
  constructor (units = [], upgrades = [], constraints = [], rules = []) {
    this.id = shortid.generate()

    this.units = units
    this.upgrades = upgrades
    this.constraints = constraints
    this.rules = rules

    this.units.forEach(unit => {
      unit.mandatory = true
    })
  }

  addUnit (UnitType) {
    const unit = new UnitType()
    unit.detachment = this

    this.units = this.units.concat(unit)
  }

  removeUnit (unit) {
    this.units = this.units
      .filter(item => item.id !== unit.id)
  }

  getCost () {
    return this.units.reduce((acc, unit) => {
      const cost = unit.getCost(this)

      if (!isNaN(cost)) {
        return acc + cost
      }

      return acc
    }, 0)
  }

  getInitiativeRating () {
    return 1
  }

  toJSON () {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      units: this.units.map(unit => unit.toJSON())
    }
  }

  static fromJSON (json) {
    try {
      const DetachmentType = find(json.type)

      const detachment = new DetachmentType()
      detachment.id = json.id
      detachment.name = json.name
      detachment.units = json.units.map(json => {
        const unit = Unit.fromJSON(json)
        unit.detachment = detachment

        if (unit.deserialized) {
          unit.deserialized(json)
        }

        return unit
      })

      return detachment
    } catch (error) {
      return new InvalidDetachment(json, error)
    }
  }
}

export class InvalidDetachment extends Detachment {
  constructor (json, error) {
    super()

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
