'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  LegionDestroyerDetachment
} from '../detachments/space-marine-legion'
import {
  DeathGuardPrimarchDetachment,
  DeathGuardGraveWardenTerminatorDetachment,
  DeathGuardDeathshroudTerminatorDetachment,
  DeathGuardDestroyerDetachment
} from '../detachments/death-guard'
import withType from '../../../../utils/with-type'

class DeathGuard extends SpaceMarineLegion {
  constructor () {
    super()

    this.lineDetachments.push(DeathGuardGraveWardenTerminatorDetachment)
    this.supportDetachments.push(DeathGuardDeathshroudTerminatorDetachment)
    this.supportDetachments.push(DeathGuardDestroyerDetachment)
    this.supportDetachments = this.supportDetachments
      .filter(detachment => detachment !== LegionDestroyerDetachment)
    this.lordsOfWar.push(DeathGuardPrimarchDetachment)
  }
}

export default withType(DeathGuard)
