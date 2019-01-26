'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  AlphaLegionHeadHunterKillTeamDetachment,
  AlphaLegionLernaeanTerminatorDetachment,
  AlphaLegionPrimarchDetachment
} from '../detachments/alpha-legion'
import withType from '../../../../utils/with-type'

class AlphaLegion extends SpaceMarineLegion {
  constructor () {
    super()

    this.supportDetachments.push(
      AlphaLegionHeadHunterKillTeamDetachment,
      AlphaLegionLernaeanTerminatorDetachment
    )
    this.lordsOfWar.push(AlphaLegionPrimarchDetachment)
  }
}

export default withType(AlphaLegion)
