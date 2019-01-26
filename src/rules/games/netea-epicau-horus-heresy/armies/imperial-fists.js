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
import withType from '../../../../utils/with-type'

class ImperialFists extends SpaceMarineLegion {
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
  }
}

export default withType(ImperialFists)
