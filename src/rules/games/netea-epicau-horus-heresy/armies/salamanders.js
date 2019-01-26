'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  SalamandersPrimarchDetachment,
  SalamandersPyroclastDetachment,
  SalamandersFiredrakeTerminatorDetachment
} from '../detachments/salamanders'
import withType from '../../../../utils/with-type'

class Salamanders extends SpaceMarineLegion {
  constructor () {
    super()

    this.lineDetachments.push(SalamandersFiredrakeTerminatorDetachment)
    this.supportDetachments.push(SalamandersPyroclastDetachment)
    this.lordsOfWar.push(SalamandersPrimarchDetachment)
  }
}

export default withType(Salamanders)
