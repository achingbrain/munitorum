'use strict'

import Army from './army'
import {
  LegioTitanicusWarhoundTitanDetachment,
  LegioTitanicusWarhoundTitanPackDetachment,
  LegioTitanicusReaverTitanDetachment,
  LegioTitanicusWarlordTitanDetachment,
  LegioTitanicusEmperorClassTitanDetachment
} from '../detachments/legio-titanicus'
import withType from '../../../../utils/with-type'

class LegioTitanicus extends Army {
  constructor () {
    super()

    this.lineDetachments = [
      LegioTitanicusWarhoundTitanDetachment,
      LegioTitanicusWarhoundTitanPackDetachment,
      LegioTitanicusReaverTitanDetachment,
      LegioTitanicusWarlordTitanDetachment
    ]
    this.lordsOfWar = [
      LegioTitanicusEmperorClassTitanDetachment
    ]
  }

  getStrategyRating (list) {
    return 3
  }
}

export default withType(LegioTitanicus)
