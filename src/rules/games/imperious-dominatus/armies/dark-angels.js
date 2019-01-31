'use strict'

import SpaceMarineLegion from './space-marine-legion'
import withType from '../with-type'

export default class DarkAngels extends SpaceMarineLegion {
  constructor (game) {
    super(game)

    this.colour = '#000000'
  }
}

withType(DarkAngels)
