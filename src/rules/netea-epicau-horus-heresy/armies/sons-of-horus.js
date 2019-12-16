'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  SonsOfHorusPrimarchDetachment,
  SonsOfHorusReaverAttackDetachment,
  SonsOfHorusJustaerinTerminatorDetachment
} from '../detachments/sons-of-horus'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import DaemonicHordes from './daemonic-hordes'
import withType from '../with-type'

export default class SonsOfHorus extends SpaceMarineLegion {
  constructor (game) {
    super(game, 'sons-of-horus')

    this.lineDetachments.push(SonsOfHorusReaverAttackDetachment)
    this.supportDetachments.push(SonsOfHorusJustaerinTerminatorDetachment)
    this.lordsOfWar.push(SonsOfHorusPrimarchDetachment)
    this.allies.push(
      LegioTitanicus,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      DaemonicHordes
    )

    this.colour = '#1a4a45'
  }

  getStrategyRating (list) {
    const rating = super.getStrategyRating(list)

    if (list.allies.find(item =>
      item.army.type === DaemonicHordes.type ||
      item.army.type === MechanicumTaghmata.type ||
      item.army.type === KnightHousehold.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(SonsOfHorus)
