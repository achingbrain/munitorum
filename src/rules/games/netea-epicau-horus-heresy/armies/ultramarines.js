'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  LegionDestroyerDetachment
} from '../detachments/space-marine-legion'
import {
  UltramarinesPrimarchDetachment,
  UltramarinesFulmentarusTerminatorDetachment,
  UltramarinesLoctarusDetachment,
  UltramarinesInvictarusSuzerainDetachment,
  UltramarinesDestroyerDetachment
} from '../detachments/ultramarines'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import LegioCustodes from './legio-custodes'
import withType from '../with-type'

export default class Ultramarines extends SpaceMarineLegion {
  constructor () {
    super()

    this.lineDetachments.push(
      UltramarinesFulmentarusTerminatorDetachment,
      UltramarinesLoctarusDetachment
    )
    this.supportDetachments.push(
      UltramarinesInvictarusSuzerainDetachment,
      UltramarinesDestroyerDetachment
    )
    this.supportDetachments = this.supportDetachments
      .filter(detachment => detachment !== LegionDestroyerDetachment)
    this.lordsOfWar.push(UltramarinesPrimarchDetachment)
    this.allies.push(
      LegioTitanicus,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      LegioCustodes
    )

    this.colour = '#1b399b'
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

withType(Ultramarines)
