'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  ThousandSonsPrimarchDetachment,
  ThousandSonsSekhmetTerminatorDetachment,
  ThousandSonsAmmitaraIntercessorDetachment,
  ThousandSonsKhenetaiBladesDetachment
} from '../detachments/thousand-sons'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import DaemonicHordes from './daemonic-hordes'
import withType from '../../../../utils/with-type'
import {
  SingleDaemonicPatron
} from '../validations'

export default class ThousandSons extends SpaceMarineLegion {
  constructor () {
    super()

    this.supportDetachments.push(
      ThousandSonsSekhmetTerminatorDetachment,
      ThousandSonsAmmitaraIntercessorDetachment,
      ThousandSonsKhenetaiBladesDetachment
    )
    this.lordsOfWar.push(ThousandSonsPrimarchDetachment)
    this.allies.push(
      LegioTitanicus,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      DaemonicHordes
    )
    this.validations.push(
      new SingleDaemonicPatron('tzeench')
    )

    this.colour = '#ac3125'
  }

  getStrategyRating (list) {
    const rating = super.getStrategyRating(list)

    if (list.allies.find(item =>
      item.army.type === ImperialMilitia.type ||
      item.army.type === SolarAuxilia.type ||
      item.army.type === MechanicumTaghmata.type ||
      item.army.type === KnightHousehold.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(ThousandSons)
