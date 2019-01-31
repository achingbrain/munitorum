'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  LegionDestroyerDetachment
} from '../detachments/space-marine-legion'
import {
  NightLordsPrimarchDetachment,
  NightLordsNightRaptorDetachment,
  NightLordsTerrorDetachment,
  NightLordsDestroyerDetachment
} from '../detachments/night-lords'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import DaemonicHordes from './daemonic-hordes'
import withType from '../with-type'

export default class NightLords extends SpaceMarineLegion {
  constructor () {
    super()

    this.supportDetachments.push(
      NightLordsNightRaptorDetachment,
      NightLordsDestroyerDetachment,
      NightLordsTerrorDetachment
    )
    this.supportDetachments = this.supportDetachments
      .filter(detachment => detachment !== LegionDestroyerDetachment)
    this.lordsOfWar.push(NightLordsPrimarchDetachment)
    this.allies.push(
      LegioTitanicus,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      DaemonicHordes
    )

    this.colour = '#091448'
  }

  getStrategyRating (list) {
    const rating = super.getStrategyRating(list)

    if (list.allies.find(item =>
      item.army.type === ImperialMilitia.type ||
      item.army.type === SolarAuxilia.type ||
      item.army.type === KnightHousehold.type ||
      item.army.type === MechanicumTaghmata.type ||
      item.army.type === DaemonicHordes.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(NightLords)
