'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  LegionDestroyerDetachment,
  LegionTacticalDetachment
} from '../detachments/space-marine-legion'
import {
  UltramarinesPrimarchDetachment,
  UltramarinesFulmentarusTerminatorDetachment,
  UltramarinesLoctarusDetachment,
  UltramarinesInvictarusSuzerainDetachment,
  UltramarinesDestroyerDetachment,
  UltramarinesTacticalDetachment
} from '../detachments/ultramarines'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import LegioCustodes from './legio-custodes'
import withType from '../with-type'

export default class Ultramarines extends SpaceMarineLegion {
  constructor (game) {
    super(game, 'ultramarines')

    this.lineDetachments.push(
      UltramarinesFulmentarusTerminatorDetachment,
      UltramarinesLoctarusDetachment,
      UltramarinesTacticalDetachment
    )
    this.lineDetachments = this.lineDetachments.filter(
      detachment => detachment !== LegionTacticalDetachment
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
}

withType(Ultramarines)
