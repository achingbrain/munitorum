'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  SonsOfHorusPrimarchDetachment,
  SonsOfHorusReaverAttackDetachment,
  SonsOfHorusJustaerinTerminatorDetachment
} from '../detachments/sons-of-horus'
import withType from '../../../../utils/with-type'

class SonsOfHorus extends SpaceMarineLegion {
  constructor () {
    super()

    this.lineDetachments.push(SonsOfHorusReaverAttackDetachment)
    this.supportDetachments.push(SonsOfHorusJustaerinTerminatorDetachment)
    this.lordsOfWar.push(SonsOfHorusPrimarchDetachment)
  }
}

export default withType(SonsOfHorus)
