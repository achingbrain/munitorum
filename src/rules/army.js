'use strict'

export default class Army {
  constructor (game, name) {
    this.game = game
    this.name = name
  }

  validate () {
    // should return a list of i18n keys corresponding to error messages in the localisation folder
    return []
  }
}
