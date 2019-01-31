'use strict'

import shortid from 'shortid'
import withType from './with-type'
import InvalidListEditor from '../../../components/invalid-list-editor'
import InvalidListViewer from '../../../components/invalid-list-viewer'

export default class ImperiousDominatusList {
  constructor (game, name, army) {
    this.id = shortid.generate()
    this.name = name
    this.game = game
    this.army = army

    this.detachments = []
    this.errors = []
  }

  addError (error) {
    this.errors = this.errors.concat(error)
  }

  clearErrors () {
    this.errors = []
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
    return this.detachments
      .reduce((curr, detachment) => curr + detachment.getCost(), 0)
  }

  getStrategyRating () {
    return this.army.getStrategyRating(this)
  }

  addDetachment (detachment) {
    this.detachments = this.detachments.concat(detachment)
  }

  removeDetachment (detachment) {
    if (this.detachments.find(item => item.id === detachment.id)) {
      this.detachments = this.detachments.filter(item => item.id !== detachment.id)
    }
  }

  moveDetachmentUp (detachment) {
    const index = this.detachments.findIndex(item => item.id === detachment.id)

    if (index !== -1) {
      const a = this.detachments[index - 1]
      const b = this.detachments[index]

      this.detachments[index - 1] = b
      this.detachments[index] = a

      this.detachments = this.detachments.slice()
    }
  }

  moveDetachmentDown (detachment) {
    const index = this.detachments.findIndex(item => item.id === detachment.id)

    if (index !== -1) {
      const a = this.detachments[index]
      const b = this.detachments[index + 1]

      this.detachments[index] = b
      this.detachments[index + 1] = a

      this.detachments = this.detachments.slice()
    }
  }

  toJSON () {
    return {
      id: this.id,
      name: this.name,
      game: this.game.type,
      army: this.army.type,
      detachments: this.detachments.map(item => item.toJSON())
    }
  }
}

export class InvalidList extends ImperiousDominatusList {
  constructor (json, error) {
    super()

    Object.assign(this, json)

    this.json = json
    this.error = error

    this.id = json.id
    this.name = json.name
    this.detachments = []
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

withType(ImperiousDominatusList)
withType(InvalidList)
