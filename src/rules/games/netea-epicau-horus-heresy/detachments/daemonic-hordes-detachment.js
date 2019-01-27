'use strict'

import Detachment from './detachment'

export default class DaemonicHordesDetachment extends Detachment {
  getInitiativeRating () {
    return 2
  }
}
