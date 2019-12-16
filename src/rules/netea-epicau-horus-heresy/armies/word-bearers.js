'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  LegionDestroyerDetachment
} from '../detachments/space-marine-legion'
import {
  WordBearersPrimarchDetachment,
  WordBearersGalVorbakDarkBrethrenDetachment,
  WordBearersAshenCircleDetachment,
  WordBearersDestroyerDetachment,
  WordBearersMharaGalTaintedDreadnoughtTalon
} from '../detachments/word-bearers'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import DaemonicHordes from './daemonic-hordes'
import withType from '../with-type'

export default class WordBearers extends SpaceMarineLegion {
  constructor (game) {
    super(game, 'word-bearers')

    this.supportDetachments.push(
      WordBearersGalVorbakDarkBrethrenDetachment,
      WordBearersAshenCircleDetachment,
      WordBearersDestroyerDetachment,
      WordBearersMharaGalTaintedDreadnoughtTalon
    )
    this.supportDetachments = this.supportDetachments
      .filter(detachment => detachment !== LegionDestroyerDetachment)
    this.lordsOfWar.push(WordBearersPrimarchDetachment)
    this.allies.push(
      LegioTitanicus,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      DaemonicHordes
    )

    this.colour = '#54202e'
  }

  getStrategyRating (list) {
    const rating = super.getStrategyRating(list)

    if (list.allies.find(item =>
      item.army.type === LegioTitanicus.type ||
      item.army.type === MechanicumTaghmata.type ||
      item.army.type === KnightHousehold.type ||
      item.army.type === SolarAuxilia.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(WordBearers)
