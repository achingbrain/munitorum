'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  EmperorsChildrenPalatineBladesDetachment,
  EmperorsChildrenKakophoniDetachment,
  EmperorsChildrenPhoenixTerminatorDetachment,
  EmperorsChildrenPrimarchDetachment
} from '../detachments/emperors-children'
import withType from '../../../../utils/with-type'

class EmperorsChildren extends SpaceMarineLegion {
  constructor () {
    super()

    this.supportDetachments.push(
      EmperorsChildrenPalatineBladesDetachment,
      EmperorsChildrenKakophoniDetachment,
      EmperorsChildrenPhoenixTerminatorDetachment
    )
    this.lordsOfWar.push(EmperorsChildrenPrimarchDetachment)
  }
}

export default withType(EmperorsChildren)
