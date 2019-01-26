'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  SpaceWolvesPrimarchDetachment,
  SpaceWolvesGreySlayerDetachment,
  SpaceWolvesDeathswornDetachment,
  SpaceWolvesVaragyrWolfGuardDetachment
} from '../detachments/space-wolves'
import withType from '../../../../utils/with-type'

class SpaceWolves extends SpaceMarineLegion {
  constructor () {
    super()

    this.lineDetachments.push(
      SpaceWolvesGreySlayerDetachment
    )
    this.supportDetachments.push(
      SpaceWolvesDeathswornDetachment,
      SpaceWolvesVaragyrWolfGuardDetachment
    )
    this.lordsOfWar.push(SpaceWolvesPrimarchDetachment)
  }
}

export default withType(SpaceWolves)
