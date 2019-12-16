'use strict'

import Army from '../../army'

export default class ImperiousDominatusArmy extends Army {
  constructor (game) {
    super(game)

    this.formations = []
  }

  validate () {
    return []
  }
}
