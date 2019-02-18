'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  BloodAngelsPrimarchDetachment
} from '../detachments/blood-angels'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import LegioCustodes from './legio-custodes'
import withType from '../with-type'

export default class BloodAngels extends SpaceMarineLegion {
  constructor () {
    super()

    this.lordsOfWar.push(
      BloodAngelsPrimarchDetachment
    )
    this.allies.push(
      LegioTitanicus,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      LegioCustodes
    )

    this.colour = '#b91f18'
  }

  getStrategyRating (list) {
    const rating = super.getStrategyRating(list)

    if (list.allies.find(item =>
      item.army.type === ImperialMilitia.type ||
      item.army.type === SolarAuxilia.type ||
      item.army.type === KnightHousehold.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(BloodAngels)
