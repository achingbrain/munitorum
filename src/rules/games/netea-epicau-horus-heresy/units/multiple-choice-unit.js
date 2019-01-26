'use strict'

import Unit from './unit'

export default class MultipleChoiceUnit extends Unit {
  constructor (...types) {
    super()

    this.types = types
    this.choice = 0
  }

  getTransportType () {
    return this.types[this.choice].getTransportType()
  }

  getRules () {
    return this.types[this.choice].getRules()
  }

  getQuantity () {
    return this.types[this.choice].getQuantity()
  }

  getMin () {
    return this.types[this.choice].getMin()
  }

  getMax () {
    return this.types[this.choice].getMax()
  }

  getCost () {
    return this.types[this.choice].getCost()
  }

  getName () {
    return this.types[this.choice].getName()
  }

  getStats () {
    return this.types[this.choice].getStats()
  }

  getWeapons () {
    return this.types[this.choice].getWeapons()
  }

  getChosenWeapons () {
    return this.types[this.choice].getChosenWeapons()
  }

  getWeaponOptions () {
    return this.types[this.choice].getWeaponOptions()
  }

  setWeaponOption (index, choice) {
    this.types[this.choice].setWeaponOption(index, choice)
  }

  getMandatory () {
    return this.mandatory
  }

  setUnitOption (choice) {
    this.types[this.choice].weaponOptions = []
    this.choice = choice
    this.weaponOptions = []
  }

  getUnitOptions () {
    return this.types
  }

  toJSON () {
    const json = super.toJSON()
    json.choice = this.choice
    json.weaponOptions = this.types[this.choice].getWeaponOptions()

    return json
  }

  deserialized (json) {
    this.types[this.choice].weaponOptions = json.weaponOptions
    this.types[this.choice].detachment = this.detachment
  }
}
