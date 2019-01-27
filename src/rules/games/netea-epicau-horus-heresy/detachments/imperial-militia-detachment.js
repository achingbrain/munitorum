'use strict'

import Detachment from './detachment'

export default class ImperialMilitiaDetachment extends Detachment {
  getInitiativeRating () {
    return 2
  }
}
