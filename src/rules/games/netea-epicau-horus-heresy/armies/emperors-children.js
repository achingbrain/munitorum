'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  EmperorsChildrenPalatineBladesDetachment,
  EmperorsChildrenKakophoniDetachment,
  EmperorsChildrenPhoenixTerminatorDetachment,
  EmperorsChildrenPrimarchDetachment
} from '../detachments/emperors-children'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import DaemonicHordes from './daemonic-hordes'
import withType from '../../../../utils/with-type'
import {
  SingleDaemonicPatron
} from '../validations'

export default class EmperorsChildren extends SpaceMarineLegion {
  constructor () {
    super()

    this.supportDetachments.push(
      EmperorsChildrenPalatineBladesDetachment,
      EmperorsChildrenKakophoniDetachment,
      EmperorsChildrenPhoenixTerminatorDetachment
    )
    this.lordsOfWar.push(EmperorsChildrenPrimarchDetachment)
    this.allies.push(
      LegioTitanicus,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      DaemonicHordes
    )
    this.validations.push(
      new SingleDaemonicPatron('slaanesh')
    )
  }

  getStrategyRating (list) {
    const rating = super.getStrategyRating(list)

    if (list.allies.find(item =>
      item.type === ImperialMilitia.type ||
      item.army.type === SolarAuxilia.type ||
      item.army.type === KnightHousehold.type ||
      item.army.type === MechanicumTaghmata.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(EmperorsChildren)
