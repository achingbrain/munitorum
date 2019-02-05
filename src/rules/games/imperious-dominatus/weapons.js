'use strict'

export class Weapon {
  constructor (name, stats = {}, notes = []) {
    const { sr, lr, ad, tsm } = stats

    this.name = name
    this.sr = sr
    this.lr = lr
    this.ad = ad
    this.tsm = tsm
    this.notes = notes
  }

  getName () {
    return this.name
  }

  getShortRange () {
    return this.sr
  }

  getLongRange () {
    return this.lr
  }

  getAttackDice () {
    return this.ad
  }

  getSaveModifier () {
    return this.tsm
  }

  getNotes () {
    return this.notes
  }
}

export class MultipleChoiceWeapon {
  constructor (...options) {
    this.options = options
  }
}
