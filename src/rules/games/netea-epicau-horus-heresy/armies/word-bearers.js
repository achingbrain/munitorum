'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  LegionDestroyerDetachment
} from '../detachments/space-marine-legion'
import {
  WordBearersPrimarchDetachment,
  WordBearersGalVorbakDarkBrethrenDetachment,
  WordBearersAshenCircleDetachment,
  WordBearersDestroyerDetachment,
  WordBearersMharaGalTaintedDreadnoughtTalon
} from '../detachments/word-bearers'
import withType from '../../../../utils/with-type'

class WordBearers extends SpaceMarineLegion {
  constructor () {
    super()

    this.supportDetachments.push(
      WordBearersGalVorbakDarkBrethrenDetachment,
      WordBearersAshenCircleDetachment,
      WordBearersDestroyerDetachment,
      WordBearersMharaGalTaintedDreadnoughtTalon
    )
    this.supportDetachments = this.supportDetachments
      .filter(detachment => detachment !== LegionDestroyerDetachment)
    this.lordsOfWar.push(WordBearersPrimarchDetachment)
  }
}

export default withType(WordBearers)
