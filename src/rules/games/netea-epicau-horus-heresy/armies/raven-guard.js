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
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import LegioCustodes from './legio-custodes'
import withType from '../../../../utils/with-type'

export default class RavenGuard extends SpaceMarineLegion {
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
    this.allies.push(
      LegioTitanicus,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      LegioCustodes
    )

    this.colour = '#000000'
  }

  getStrategyRating (list) {
    const rating = super.getStrategyRating(list)

    if (list.allies.find(item =>
      item.army.type === ImperialMilitia.type ||
      item.army.type === SolarAuxilia.type ||
      item.army.type === MechanicumTaghmata.type ||
      item.army.type === KnightHousehold.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(RavenGuard)
