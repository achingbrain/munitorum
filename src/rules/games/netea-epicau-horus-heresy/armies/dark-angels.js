'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  LegionDestroyerDetachment
} from '../detachments/space-marine-legion'
import {
  DarkAngelsPrimarchDetachment,
  DarkAngelsDestroyerDetachment,
  DarkAngelsSuperHeavyTankSquadron
} from '../detachments/dark-angels'
import withType from '../../../../utils/with-type'

class DarkAngels extends SpaceMarineLegion {
  constructor () {
    super()

    this.supportDetachments.push(
      DarkAngelsDestroyerDetachment
    )
    this.supportDetachments = this.supportDetachments
      .filter(detachment => detachment !== LegionDestroyerDetachment)
    this.lordsOfWar.push(
      DarkAngelsPrimarchDetachment,
      DarkAngelsSuperHeavyTankSquadron
    )
  }
}

export default withType(DarkAngels)
