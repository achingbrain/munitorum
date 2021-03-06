'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  LegionDestroyerDetachment
} from '../detachments/space-marine-legion'
import {
  IronHandsPrimarchDetachment,
  IronHandsGorgonTerminatorDetachment,
  IronHandsMedusanImmortalsDetachment,
  IronHandsDestroyerDetachment,
  IronHandsPredatorDetachment,
  IronHandsSuperHeavyTankSquadron
} from '../detachments/iron-hands'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import LegioCustodes from './legio-custodes'
import withType from '../with-type'

export default class IronHands extends SpaceMarineLegion {
  constructor (game) {
    super(game, 'iron-hands')

    this.lineDetachments.push(
      IronHandsGorgonTerminatorDetachment,
      IronHandsPredatorDetachment
    )
    this.supportDetachments.push(
      IronHandsMedusanImmortalsDetachment,
      IronHandsDestroyerDetachment
    )
    this.supportDetachments = this.supportDetachments
      .filter(detachment => detachment !== LegionDestroyerDetachment)
    this.lordsOfWar.push(
      IronHandsPrimarchDetachment,
      IronHandsSuperHeavyTankSquadron
    )
    this.allies.push(
      LegioTitanicus,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      LegioCustodes
    )

    this.colour = '#282b2e'
  }

  getStrategyRating (list) {
    const rating = super.getStrategyRating(list)

    if (list.allies.find(item =>
      item.army.type === ImperialMilitia.type ||
      item.army.type === SolarAuxilia.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(IronHands)
