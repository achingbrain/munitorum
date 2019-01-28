'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  SalamandersPrimarchDetachment,
  SalamandersPyroclastDetachment,
  SalamandersFiredrakeTerminatorDetachment
} from '../detachments/salamanders'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import LegioCustodes from './legio-custodes'
import withType from '../../../../utils/with-type'

export default class Salamanders extends SpaceMarineLegion {
  constructor () {
    super()

    this.lineDetachments.push(SalamandersFiredrakeTerminatorDetachment)
    this.supportDetachments.push(SalamandersPyroclastDetachment)
    this.lordsOfWar.push(SalamandersPrimarchDetachment)
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

withType(Salamanders)
