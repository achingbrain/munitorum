'use strict'

import shortid from 'shortid'
import InvalidListEditor from '../components/invalid-list-editor'
import InvalidListViewer from '../components/invalid-list-viewer'
import InvalidListTopBar from '../components/invalid-list-top-bar'

export default class List {
  constructor (game, name, army) {
    this.id = shortid.generate()
    this.name = name
    this.game = game
    this.army = army

    this.errors = []
  }

  addError (error) {
    // nb, concat, not push so react detects a props change and re-renders components
    this.errors = this.errors.concat(error)
  }

  clearErrors () {
    this.errors = []
  }

  getCost () {
    return 0
  }

  toJSON () {
    return {
      id: this.id,
      name: this.name,
      game: this.game.type,
      army: this.army.type
    }
  }
}

export class InvalidList extends List {
  constructor (game, json, error) {
    super()

    Object.assign(this, json)

    this.game = game
    this.json = json
    this.error = error

    this.id = json.id
    this.name = json.name
  }

  // should return a React component
  getEditor () {
    return InvalidListEditor
  }

  // should return a React component
  getViewer () {
    return InvalidListViewer
  }

  getTopBar () {
    return InvalidListTopBar
  }

  getCost () {
    return 0
  }

  toJSON () {
    return this.json
  }
}
