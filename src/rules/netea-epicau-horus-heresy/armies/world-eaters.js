'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  LegionDestroyerDetachment
} from '../detachments/space-marine-legion'
import {
  WorldEatersPrimarchDetachment,
  WorldEatersRampagerDetachment,
  WorldEatersRedButcherDetachment,
  WorldEatersDestroyerDetachment
} from '../detachments/world-eaters'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import DaemonicHordes from './daemonic-hordes'
import withType from '../with-type'
import {
  SingleDaemonicPatron
} from '../validations'

export default class WorldEaters extends SpaceMarineLegion {
  constructor (game) {
    super(game, 'world-eaters')

    this.lineDetachments.push(WorldEatersRampagerDetachment)
    this.supportDetachments.push(WorldEatersRedButcherDetachment)
    this.supportDetachments.push(WorldEatersDestroyerDetachment)
    this.supportDetachments = this.supportDetachments
      .filter(detachment => detachment !== LegionDestroyerDetachment)
    this.lordsOfWar.push(WorldEatersPrimarchDetachment)
    this.allies.push(
      LegioTitanicus,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      DaemonicHordes
    )
    this.validations.push(
      new SingleDaemonicPatron('khorne')
    )

    this.colour = '#dfedff'
    this.textColour = '#333333'
  }

  getStrategyRating (list) {
    const rating = super.getStrategyRating(list)

    if (list.allies.find(item =>
      item.army.type === ImperialMilitia.type ||
      item.army.type === SolarAuxilia.type ||
      item.army.type === KnightHousehold.type ||
      item.army.type === MechanicumTaghmata.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(WorldEaters)
