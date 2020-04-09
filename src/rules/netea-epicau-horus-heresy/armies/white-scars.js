'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  WhiteScarsPrimarchDetachment,
  WhiteScarsChogorianBrotherhood,
  WhiteScarsEbonKeshigDetachment,
  WhiteScarsDestroyerDetachment,
  WhiteScarsJavelinAttackDetachment
} from '../detachments/white-scars'
import {
  LegionDestroyerDetachment,
  LegionJavelinAttackSpeederSquadron
} from '../detachments/space-marine-legion'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import LegioCustodes from './legio-custodes'
import withType from '../with-type'

export default class WhiteScars extends SpaceMarineLegion {
  constructor (game) {
    super(game, 'white-scars')

    this.lineDetachments.push(
      WhiteScarsChogorianBrotherhood
    )
    this.supportDetachments.push(WhiteScarsDestroyerDetachment)
    this.supportDetachments.push(WhiteScarsJavelinAttackDetachment)
    this.supportDetachments = this.supportDetachments
      .filter(detachment => detachment !== LegionDestroyerDetachment && detachment !== LegionJavelinAttackSpeederSquadron)
    this.lordsOfWar.push(WhiteScarsPrimarchDetachment)
    this.lordsOfWar.push(WhiteScarsEbonKeshigDetachment)
    this.allies.push(
      LegioTitanicus,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      LegioCustodes
    )

    this.colour = '#eeeeee'
    this.textColour = '#333333'
  }

  getStrategyRating (list) {
    const rating = super.getStrategyRating(list)

    if (list.allies.find(item =>
      item.army.type === ImperialMilitia.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(WhiteScars)
