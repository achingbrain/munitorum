'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  LegionDestroyerDetachment
} from '../detachments/space-marine-legion'
import {
  RavenGuardPrimarchDetachment,
  RavenGuardDarkFuryAssaultDetachment,
  RavenGuardMorDeythanStrikeDetachment,
  RavenGuardDarkwingPatternStormEagleWing,
  RavenGuardDestroyerDetachment
} from '../detachments/raven-guard'
import withType from '../../../../utils/with-type'

class RavenGuard extends SpaceMarineLegion {
  constructor () {
    super()

    this.supportDetachments.push(
      RavenGuardDarkFuryAssaultDetachment,
      RavenGuardMorDeythanStrikeDetachment,
      RavenGuardDarkwingPatternStormEagleWing,
      RavenGuardDestroyerDetachment
    )
    this.supportDetachments = this.supportDetachments
      .filter(detachment => detachment !== LegionDestroyerDetachment)
    this.lordsOfWar.push(RavenGuardPrimarchDetachment)
  }
}

export default withType(RavenGuard)
