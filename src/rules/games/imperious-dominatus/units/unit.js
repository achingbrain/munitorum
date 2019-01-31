'use strict'

import shortid from 'shortid'

export default class Unit {
  constructor (card, quantity = 1) {
    this.id = shortid.generate()
    this.card = card
    this.quantity = 1
  }
}
