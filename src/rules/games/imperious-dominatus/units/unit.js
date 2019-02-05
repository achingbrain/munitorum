'use strict'

import shortid from 'shortid'

export default class Unit {
  constructor (card, quantity = 1) {
    this.id = shortid.generate()
    this.card = card
    this.quantity = quantity
  }

  getName () {
    return this.code
  }

  getStats () {
    return this.stats
  }

  getWeapons () {
    return this.weapons
  }

  getNotes () {
    return this.notes
  }

  getImage () {
    return this.image
  }
}
