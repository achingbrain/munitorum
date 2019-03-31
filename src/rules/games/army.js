'use strict'

export default class Army {
  constructor (game) {
    this.game = game
  }

  getEditor () {
    // should return a React Component
    return null
  }

  getViewer () {
    // should return a React Component
    return null
  }

  getTopBar () {
    // should return a React Component
    return null
  }

  validate () {
    // should return a list of i18n keys corresponding to error messages in the localisation folder
    return []
  }
}
