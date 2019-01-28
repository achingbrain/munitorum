'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  LegionDestroyerDetachment
} from '../detachments/space-marine-legion'
import {
  DarkAngelsPrimarchDetachment,
  DarkAngelsDestroyerDetachment,
  DarkAngelsSuperHeavyTankSquadron
} from '../detachments/dark-angels'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import LegioCustodes from './legio-custodes'
import withType from '../../../../utils/with-type'

export default class DarkAngels extends SpaceMarineLegion {
  constructor () {
    super()

    this.supportDetachments.push(
      DarkAngelsDestroyerDetachment
    )
    this.supportDetachments = this.supportDetachments
      .filter(detachment => detachment !== LegionDestroyerDetachment)
    this.lordsOfWar.push(
      DarkAngelsPrimarchDetachment,
      DarkAngelsSuperHeavyTankSquadron
    )
    this.allies.push(
      LegioTitanicus,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      LegioCustodes
    )
  }

  getStrategyRating (list) {
    const rating = super.getStrategyRating(list)

    if (list.allies.find(item =>
      item.type === ImperialMilitia.type ||
        item.type === SolarAuxilia.type ||
        item.type === MechanicumTaghmata.type ||
        item.type === KnightHousehold.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(DarkAngels)
