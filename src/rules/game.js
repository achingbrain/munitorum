'use strict'

class Game {
  constructor (name, description) {
    // name & description are translation keys - see /src/localisation
    this.name = name
    this.description = description

    // this is a list of armies a game system supports.
    // each entry should be an instance of a subclass of Army - see /src/rules/army.js
    this.armies = []
  }

  newList (name, army) {
    // should return an instance of a subclass of /src/rules/list.js
    return {}
  }

  listFromJSON (json) {
    // given a plain JS object, this should return an instance of a subclass of /src/rules/list.js
    return null
  }

  addEditors (list) {
    // will be overridden
  }
}

export default Game
