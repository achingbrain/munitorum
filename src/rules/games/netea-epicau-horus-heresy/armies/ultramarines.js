'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  LegionDestroyerDetachment
} from '../detachments/space-marine-legion'
import {
  UltramarinesPrimarchDetachment,
  UltramarinesFulmentarusTerminatorDetachment,
  UltramarinesLoctarusDetachment,
  UltramarinesInvictarusSuzerainDetachment,
  UltramarinesDestroyerDetachment
} from '../detachments/ultramarines'
import withType from '../../../../utils/with-type'

class Ultramarines extends SpaceMarineLegion {
  constructor () {
    super()

    this.lineDetachments.push(
      UltramarinesFulmentarusTerminatorDetachment,
      UltramarinesLoctarusDetachment
    )
    this.supportDetachments.push(
      UltramarinesInvictarusSuzerainDetachment,
      UltramarinesDestroyerDetachment
    )
    this.supportDetachments = this.supportDetachments
      .filter(detachment => detachment !== LegionDestroyerDetachment)
    this.lordsOfWar.push(UltramarinesPrimarchDetachment)
  }
}

export default withType(Ultramarines)
