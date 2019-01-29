'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  AlphaLegionHeadHunterKillTeamDetachment,
  AlphaLegionLernaeanTerminatorDetachment,
  AlphaLegionPrimarchDetachment
} from '../detachments/alpha-legion'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import DaemonicHordes from './daemonic-hordes'
import withType from '../../../../utils/with-type'

export default class AlphaLegion extends SpaceMarineLegion {
  constructor () {
    super()

    this.supportDetachments.push(
      AlphaLegionHeadHunterKillTeamDetachment,
      AlphaLegionLernaeanTerminatorDetachment
    )
    this.lordsOfWar.push(AlphaLegionPrimarchDetachment)
    this.allies.push(
      LegioTitanicus,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      DaemonicHordes
    )

    this.colour = '#1e5e78'
  }

  getStrategyRating (list) {
    const rating = super.getStrategyRating(list)

    if (list.allies.find(item =>
      item.army.type === DaemonicHordes.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(AlphaLegion)
