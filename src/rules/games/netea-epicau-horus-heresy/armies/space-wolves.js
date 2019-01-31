'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  SpaceWolvesPrimarchDetachment,
  SpaceWolvesGreySlayerDetachment,
  SpaceWolvesDeathswornDetachment,
  SpaceWolvesVaragyrWolfGuardDetachment
} from '../detachments/space-wolves'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import LegioCustodes from './legio-custodes'
import withType from '../with-type'

export default class SpaceWolves extends SpaceMarineLegion {
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
    this.allies.push(
      LegioTitanicus,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      LegioCustodes
    )

    this.colour = '#605d69'
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

withType(SpaceWolves)
