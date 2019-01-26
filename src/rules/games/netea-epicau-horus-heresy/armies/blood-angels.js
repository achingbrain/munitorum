'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  BloodAngelsPrimarchDetachment
} from '../detachments/blood-angels'
import withType from '../../../../utils/with-type'

class BloodAngels extends SpaceMarineLegion {
  constructor () {
    super()

    this.lordsOfWar.push(
      BloodAngelsPrimarchDetachment
    )
  }
}

export default withType(BloodAngels)
