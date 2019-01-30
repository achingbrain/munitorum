'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  IronWarriorsIronHavocDetachment,
  IronWarriorsTyrantSiegeTerminatorDetachment,
  IronWarriorsArtilleryBatteryDetachment,
  IronWarriorsSuperHeavyTankSquadron,
  IronWarriorsPrimarchDetachment
} from '../detachments/iron-warriors'
import {
  LegionLandRaiderProteusSquadron,
  LegionLandRaiderPhobosSquadron,
  LegionArtilleryBattery
} from '../detachments/space-marine-legion'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import DaemonicHordes from './daemonic-hordes'
import withType from '../../../../utils/with-type'

export default class IronWarriors extends SpaceMarineLegion {
  constructor () {
    super()

    this.lineDetachments.push(
      IronWarriorsIronHavocDetachment,
      IronWarriorsTyrantSiegeTerminatorDetachment,
      LegionLandRaiderProteusSquadron,
      LegionLandRaiderPhobosSquadron
    )
    this.supportDetachments = this.supportDetachments.filter(type => {
      return type !== LegionArtilleryBattery
    })
    this.supportDetachments.push(
      IronWarriorsArtilleryBatteryDetachment
    )
    this.lordsOfWar.push(
      IronWarriorsPrimarchDetachment,
      IronWarriorsSuperHeavyTankSquadron
    )
    this.allies.push(
      LegioTitanicus,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      DaemonicHordes
    )

    this.colour = '#2d2d2d'
  }

  getStrategyRating (list) {
    const rating = super.getStrategyRating(list)

    if (list.allies.find(item =>
      item.army.type === DaemonicHordes.type ||
      item.army.type === ImperialMilitia.type ||
      item.army.type === SolarAuxilia.type ||
      item.army.type === KnightHousehold.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(IronWarriors)
