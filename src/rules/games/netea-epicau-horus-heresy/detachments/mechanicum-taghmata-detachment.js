'use strict'

import Detachment from './detachment'

export default class MechanicumTaghmataDetachment extends Detachment {
  getInitiativeRating () {
    return 2
  }

  getRemainingUpgrades () {
    return 4
  }
}
