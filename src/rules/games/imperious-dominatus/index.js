'use strict'

import Game from '../game'

class ImperiousDominatus extends Game {
  constructor () {
    super('imperious-dominatus', 'imperious-dominatus-description')
  }

  newList (army) {
    return {
      game: this.id,
      army: army.id,
      name: army.name,
      detachments: []
    }
  }
}

export default new ImperiousDominatus()
