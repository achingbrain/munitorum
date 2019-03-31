'use strict'

class Game {
  constructor (name, description) {
    // name & description are translation keys - see /src/localisation
    this.name = name
    this.description = description

    // this is a list of armies a game system supports.
    // each entry should be an instance of a subclass of Army - see /src/rules/games/army.js
    this.armies = []
  }

  newList (name, army) {
    // should return an instance of a subclass of /src/rules/games/list.js
    return {}
  }

  listFromJSON (json) {
    // given a plain JS object, this should return an instance of a subclass of /src/rules/games/list.js
    return null
  }
}

export default Game
