'use strict'

import shortid from 'shortid'
import withType from '../../../utils/with-type'

class NetEaEpicAuHorusHeresyList {
  constructor (game, name, army) {
    this.id = shortid.generate()
    this.name = name
    this.game = game
    this.army = army

    this.lineDetachments = []
    this.supportDetachments = []
    this.lordsOfWar = []
  }

  getEditor () {
    return this.army.getEditor()
  }

  getViewer () {
    return this.army.getViewer()
  }

  getCost () {
    let cost = 0

    cost += this.lineDetachments.reduce((curr, detachment) => curr + detachment.getCost(), 0)
    cost += this.supportDetachments.reduce((curr, detachment) => curr + detachment.getCost(), 0)
    cost += this.lordsOfWar.reduce((curr, detachment) => curr + detachment.getCost(), 0)

    return cost
  }

  addDetachment ({ type, detachment }) {
    if (!this[type]) {
      throw new Error(`Unknown detachment type ${type}`)
    }

    const Detachment = detachment

    this[type] = this[type].concat(new Detachment())
  }

  removeDetachment (detachment) {
    this.lineDetachments = this.lineDetachments.filter(item => item.id !== detachment.id)
    this.supportDetachments = this.supportDetachments.filter(item => item.id !== detachment.id)
    this.lordsOfWar = this.lordsOfWar.filter(item => item.id !== detachment.id)
  }

  toJSON () {
    return {
      id: this.id,
      name: this.name,
      game: this.game.type,
      army: this.army.type,
      lineDetachments: this.lineDetachments.map(item => item.toJSON()),
      supportDetachments: this.supportDetachments.map(item => item.toJSON()),
      lordsOfWar: this.lordsOfWar.map(item => item.toJSON())
    }
  }
}

export default withType(NetEaEpicAuHorusHeresyList)
