'use strict'

import withType from './with-type'
import List, { InvalidList } from '../list'

export default class NetEaEpicAuHorusHeresyList extends List {
  constructor (game, name, army) {
    super(game, name, army)

    this.lineDetachments = []
    this.supportDetachments = []
    this.lordsOfWar = []
    this.allies = []
  }

  getCost () {
    let cost = super.getCost()

    cost += this.lineDetachments.reduce((curr, detachment) => curr + detachment.getCost(), 0)
    cost += this.supportDetachments.reduce((curr, detachment) => curr + detachment.getCost(), 0)
    cost += this.lordsOfWar.reduce((curr, detachment) => curr + detachment.getCost(), 0)
    cost += this.allies.reduce((curr, ally) => curr + ally.getCost(), 0)

    return cost
  }

  getStrategyRating () {
    return this.army.getStrategyRating(this)
  }

  addDetachment ({ type, detachment }) {
    if (!this[type]) {
      throw new Error(`Unknown detachment type ${type}`)
    }

    this[type] = this[type].concat(detachment)

    if (type === 'allies') {
      detachment.list = this
    }
  }

  moveDetachmentUp (detachment) {
    const move = (type) => {
      const index = this[type].findIndex(item => item.id === detachment.id)

      if (index !== -1) {
        const a = this[type][index - 1]
        const b = this[type][index]

        this[type][index - 1] = b
        this[type][index] = a

        this[type] = this[type].slice()
      }
    }

    move('lineDetachments')
    move('supportDetachments')
    move('lordsOfWar')
    move('allies')
  }

  moveDetachmentDown (detachment) {
    const move = (type) => {
      const index = this[type].findIndex(item => item.id === detachment.id)

      if (index !== -1) {
        const a = this[type][index]
        const b = this[type][index + 1]

        this[type][index] = b
        this[type][index + 1] = a

        this[type] = this[type].slice()
      }
    }

    move('lineDetachments')
    move('supportDetachments')
    move('lordsOfWar')
    move('allies')
  }

  removeDetachment (detachment) {
    if (this.lineDetachments.find(item => item.id === detachment.id)) {
      this.lineDetachments = this.lineDetachments.filter(item => item.id !== detachment.id)
    }

    if (this.supportDetachments.find(item => item.id === detachment.id)) {
      this.supportDetachments = this.supportDetachments.filter(item => item.id !== detachment.id)
    }

    if (this.lordsOfWar.find(item => item.id === detachment.id)) {
      this.lordsOfWar = this.lordsOfWar.filter(item => item.id !== detachment.id)
    }

    if (this.allies.find(item => item.id === detachment.id)) {
      this.allies = this.allies.filter(item => item.id !== detachment.id)
    }
  }

  toJSON () {
    return {
      ...super.toJSON(),

      lineDetachments: this.lineDetachments.map(item => item.toJSON()),
      supportDetachments: this.supportDetachments.map(item => item.toJSON()),
      lordsOfWar: this.lordsOfWar.map(item => item.toJSON()),
      allies: this.allies.map(item => item.toJSON())
    }
  }
}

export class InvalidNetEaEpicAuHorusHeresyList extends InvalidList {
  constructor (game, json, error) {
    super(game, json, error)

    this.lineDetachments = []
    this.supportDetachments = []
    this.lordsOfWar = []
    this.allies = []
  }
}

withType(NetEaEpicAuHorusHeresyList)
withType(InvalidNetEaEpicAuHorusHeresyList)
