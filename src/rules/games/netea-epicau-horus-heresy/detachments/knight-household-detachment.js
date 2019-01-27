'use strict'

import Detachment from './detachment'

export default class KnightHouseholdDetachment extends Detachment {
  getInitiativeRating () {
    return 2
  }
}
