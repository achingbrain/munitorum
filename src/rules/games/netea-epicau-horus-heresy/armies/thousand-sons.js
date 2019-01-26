'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  ThousandSonsPrimarchDetachment,
  ThousandSonsSekhmetTerminatorDetachment,
  ThousandSonsAmmitaraIntercessorDetachment,
  ThousandSonsKhenetaiBladesDetachment
} from '../detachments/thousand-sons'
import withType from '../../../../utils/with-type'

class ThousandSons extends SpaceMarineLegion {
  constructor () {
    super()

    this.supportDetachments.push(
      ThousandSonsSekhmetTerminatorDetachment,
      ThousandSonsAmmitaraIntercessorDetachment,
      ThousandSonsKhenetaiBladesDetachment
    )
    this.lordsOfWar.push(ThousandSonsPrimarchDetachment)
  }
}

export default withType(ThousandSons)
