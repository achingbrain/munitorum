'use strict'

import Detachment from './detachment'
import {
  LegionLandRaiderPhobosTransport,
  LegionLandRaiderProteusTransport,
  LegionLandRaiderAchillesTransport
} from '../units/space-marine-legion'

export default class SpaceMarineLegionDetachment extends Detachment {
  removeUnit (unit) {
    // if we are removing Land Raider Phobos/Proteus transports, remove any
    // Achilles upgrades too
    if (unit.type === LegionLandRaiderPhobosTransport.type || unit.type === LegionLandRaiderProteusTransport.type) {
      this.units = this.units
        .filter(item => {
          if (item.id === unit.id) {
            return false
          }

          if (item.type === LegionLandRaiderAchillesTransport.type) {
            return false
          }

          return true
        })

      return
    }

    this.units = this.units
      .filter(item => item.id !== unit.id)
  }

  getInitiativeRating () {
    return 1
  }
}
