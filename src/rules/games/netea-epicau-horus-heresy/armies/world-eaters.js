'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  LegionDestroyerDetachment
} from '../detachments/space-marine-legion'
import {
  WorldEatersPrimarchDetachment,
  WorldEatersRampagerDetachment,
  WorldEatersRedButcherDetachment,
  WorldEatersDestroyerDetachment
} from '../detachments/world-eaters'
import withType from '../../../../utils/with-type'

class WorldEaters extends SpaceMarineLegion {
  constructor () {
    super()

    this.lineDetachments.push(WorldEatersRampagerDetachment)
    this.supportDetachments.push(WorldEatersRedButcherDetachment)
    this.supportDetachments.push(WorldEatersDestroyerDetachment)
    this.supportDetachments = this.supportDetachments
      .filter(detachment => detachment !== LegionDestroyerDetachment)
    this.lordsOfWar.push(WorldEatersPrimarchDetachment)
  }
}

export default withType(WorldEaters)
