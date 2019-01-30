'use strict'

class Game {
  constructor (name, description) {
    this.name = name
    this.description = description
    this.armies = []
  }

  newList (name, army) {
    return {}
  }

  listFromJSON (json) {
    return null
  }

  addDetachment (list, detachment) {

  }

  removeDetachment (list, detachment) {

  }
}

export default Game
