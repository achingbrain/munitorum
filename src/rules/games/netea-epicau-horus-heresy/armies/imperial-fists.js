'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  LegionDestroyerDetachment
} from '../detachments/space-marine-legion'
import {
  ImperialFistsPrimarchDetachment,
  ImperialFistsPhalanxWarderDetachment,
  ImperialFistsTemplarBrethrenDetachment,
  ImperialFistsSuperHeavyTankSquadron,
  ImperialFistsDestroyerDetachment,
  ImperialFistsCastellumStrongholdDetachment,
  ImperialFistsPrimusRedoubtDetachment
} from '../detachments/imperial-fists'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import LegioCustodes from './legio-custodes'
import withType from '../../../../utils/with-type'

export default class ImperialFists extends SpaceMarineLegion {
  constructor () {
    super()

    this.supportDetachments.push(
      ImperialFistsPhalanxWarderDetachment,
      ImperialFistsTemplarBrethrenDetachment,
      ImperialFistsDestroyerDetachment,
      ImperialFistsCastellumStrongholdDetachment,
      ImperialFistsPrimusRedoubtDetachment
    )
    this.supportDetachments = this.supportDetachments
      .filter(detachment => detachment !== LegionDestroyerDetachment)
    this.lordsOfWar.push(
      ImperialFistsSuperHeavyTankSquadron,
      ImperialFistsPrimarchDetachment
    )
    this.allies.push(
      LegioTitanicus,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      LegioCustodes
    )

    this.colour = '#e5e008'
    this.textColour = '#333333'
  }

  getStrategyRating (list) {
    const rating = super.getStrategyRating(list)

    if (list.allies.find(item =>
      item.type === ImperialMilitia.type ||
      item.army.type === SolarAuxilia.type ||
      item.army.type === MechanicumTaghmata.type ||
      item.army.type === KnightHousehold.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(ImperialFists)
