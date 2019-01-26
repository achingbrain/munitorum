'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  WhiteScarsPrimarchDetachment,
  WhiteScarsOutriderDetachment,
  WhiteScarsSkyHunterAttackSquadron
} from '../detachments/white-scars'
import withType from '../../../../utils/with-type'

class WhiteScars extends SpaceMarineLegion {
  constructor () {
    super()

    this.lineDetachments.push(
      WhiteScarsOutriderDetachment,
      WhiteScarsSkyHunterAttackSquadron
    )
    this.lordsOfWar.push(WhiteScarsPrimarchDetachment)
  }
}

export default withType(WhiteScars)
