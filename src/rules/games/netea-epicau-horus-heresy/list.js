'use strict'

import shortid from 'shortid'
import withType from '../../../utils/with-type'
import InvalidListEditor from '../../../components/games/netea/invalid-list-editor'
import InvalidListViewer from '../../../components/games/netea/invalid-list-viewer'

export default class NetEaEpicAuHorusHeresyList {
  constructor (game, name, army) {
    this.id = shortid.generate()
    this.name = name
    this.game = game
    this.army = army

    this.lineDetachments = []
    this.supportDetachments = []
    this.lordsOfWar = []
    this.allies = []
  }

  getEditor () {
    return this.army.getEditor()
  }

  getViewer () {
    return this.army.getViewer()
  }

  getTopBar () {
    return this.army.getTopBar()
  }

  getCost () {
    let cost = 0

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

    const Detachment = detachment

    this[type] = this[type].concat(new Detachment())
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

    this.allies.forEach(ally => ally.removeDetachment(detachment))
  }

  toJSON () {
    return {
      id: this.id,
      name: this.name,
      game: this.game.type,
      army: this.army.type,
      lineDetachments: this.lineDetachments.map(item => item.toJSON()),
      supportDetachments: this.supportDetachments.map(item => item.toJSON()),
      lordsOfWar: this.lordsOfWar.map(item => item.toJSON()),
      allies: this.allies.map(item => item.toJSON())
    }
  }
}

export class InvalidList extends NetEaEpicAuHorusHeresyList {
  constructor (json, error) {
    super()

    Object.assign(this, json)

    this.json = json
    this.error = error

    this.id = json.id
    this.name = json.name
    this.lineDetachments = []
    this.supportDetachments = []
    this.lordsOfWar = []
    this.allies = []
  }

  getEditor () {
    return InvalidListEditor
  }

  getViewer () {
    return InvalidListViewer
  }

  getCost () {
    return 0
  }

  toJSON () {
    return this.json
  }
}

withType(NetEaEpicAuHorusHeresyList)
withType(InvalidList)
