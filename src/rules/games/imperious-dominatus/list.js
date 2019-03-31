'use strict'

import withType from './with-type'
import List, { InvalidList } from '../list'

export default class ImperiousDominatusList extends List {
  constructor (game, name, army) {
    super(game, name, army)

    this.detachments = []
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
      ...super.toJSON(),

      detachments: this.detachments.map(item => item.toJSON())
    }
  }
}

export class InvalidImperiousDominatusList extends InvalidList {
  constructor (json, error) {
    super(json, error)

    this.detachments = []
  }
}

withType(ImperiousDominatusList)
withType(InvalidImperiousDominatusList)
