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
import withType from '../../../../utils/with-type'

class IronHands extends SpaceMarineLegion {
  constructor () {
    super()

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
  }
}

export default withType(IronHands)
