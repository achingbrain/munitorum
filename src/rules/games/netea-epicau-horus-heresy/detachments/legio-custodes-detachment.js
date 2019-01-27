'use strict'

import Detachment from './detachment'

export default class LegioCustodesDetachment extends Detachment {
  getInitiativeRating () {
    return 1
  }
}
