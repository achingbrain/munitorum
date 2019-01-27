'use strict'

import Detachment from './detachment'

export default class SolarAuxiliaDetachment extends Detachment {
  getInitiativeRating () {
    return 2
  }
}
