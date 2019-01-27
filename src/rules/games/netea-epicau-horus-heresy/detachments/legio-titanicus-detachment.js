'use strict'

import Detachment from './detachment'

export default class LegioTitanicusDetachment extends Detachment {
  getInitiativeRating () {
    return 1
  }
}
