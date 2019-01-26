'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  LegionDestroyerDetachment
} from '../detachments/space-marine-legion'
import {
  NightLordsPrimarchDetachment,
  NightLordsNightRaptorDetachment,
  NightLordsTerrorDetachment,
  NightLordsDestroyerDetachment
} from '../detachments/night-lords'
import withType from '../../../../utils/with-type'

class NightLords extends SpaceMarineLegion {
  constructor () {
    super()

    this.supportDetachments.push(
      NightLordsNightRaptorDetachment,
      NightLordsDestroyerDetachment,
      NightLordsTerrorDetachment
    )
    this.supportDetachments = this.supportDetachments
      .filter(detachment => detachment !== LegionDestroyerDetachment)
    this.lordsOfWar.push(NightLordsPrimarchDetachment)
  }
}

export default withType(NightLords)
