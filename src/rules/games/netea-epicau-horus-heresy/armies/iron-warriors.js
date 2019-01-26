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
import withType from '../../../../utils/with-type'

class IronWarriors extends SpaceMarineLegion {
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
  }
}

export default withType(IronWarriors)
