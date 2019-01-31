'use strict'

import shortid from 'shortid'
import { find } from '../../../../utils/with-type'

export default class Card {
  constructor (list, morale, breakPoint, cost, victoryPoints) {
    this.id = shortid.generate()
    this.list = list
    this.morale = morale
    this.breakPoint = breakPoint
    this.cost = cost
    this.victoryPoints = victoryPoints
    this.errors = []
    this.sections = []
    this.support = []
    this.upgrades = []
  }

  addError (error) {
    this.errors = this.errors.concat(error)
  }

  clearErrors () {
    this.errors = []
  }

  getCost () {
    return this.cost +
      this.support.reduce((acc, curr) => acc + curr.getCost(), 0) +
      this.upgrades.reduce((acc, curr) => acc + curr.getCost(), 0)
  }

  _moveDown (type, thing) {
    const index = this[type].findIndex(item => item.id === thing.id)

    if (index !== -1) {
      const a = this[type][index]
      const b = this[type][index + 1]

      this[type][index] = b
      this[type][index + 1] = a

      this[type] = this[type].slice()
    }
  }

  _moveUp (type, thing) {
    const index = this[type].findIndex(item => item.id === thing.id)

    if (index !== -1) {
      const a = this[type][index - 1]
      const b = this[type][index]

      this[type][index - 1] = b
      this[type][index] = a

      this[type] = this[type].slice()
    }
  }

  moveSupportCardDown (card) {
    return this._moveDown('support', card)
  }

  moveSupportCardUp (card) {
    return this._moveUp('support', card)
  }

  moveUpgradeCardDown (card) {
    return this._moveDown('upgrade', card)
  }

  moveUpgradeCardUp (card) {
    return this._moveUp('upgrade', card)
  }

  toJSON () {
    return {
      id: this.id,
      name: this.name,
      type: this.type,
      support: this.support.map(card => card.toJSON()),
      upgrades: this.upgrades.map(card => card.toJSON())
    }
  }

  static fromJSON (json, list) {
    try {
      const CardType = find(json.type)
      const card = new CardType(list)
      card.id = json.id
      card.name = json.name

      const deserializeCards = (type, json) => {
        return json[type].map(json => {
          const subCard = Card.fromJSON(json, card)

          if (subCard.deserialized) {
            card.deserialized(json)
          }

          return subCard
        })
      }

      card.support = deserializeCards('support', json)
      card.upgrades = deserializeCards('upgrades', json)

      return card
    } catch (error) {
      return new InvalidCard(list, json, error)
    }
  }
}

export class InvalidCard extends Card {
  constructor (list, json, error) {
    super(list)

    Object.assign(this, json)

    this.json = json
    this.error = error

    if (Array.isArray(this.support)) {
      this.support = this.support.map(json => new InvalidCard(json))
    }

    if (Array.isArray(this.upgrades)) {
      this.upgrades = this.upgrades.map(json => new InvalidCard(json))
    }
  }

  getCost () {
    return 0
  }

  toJSON () {
    return this.json
  }
}
