'use strict'

import SpaceMarineLegion from './space-marine-legion'
import {
  LegionAssaultDetachment,
  LegionDestroyerDetachment
} from '../detachments/space-marine-legion'
import {
  DeathGuardPrimarchDetachment,
  DeathGuardGraveWardenTerminatorDetachment,
  DeathGuardDeathshroudTerminatorDetachment,
  DeathGuardDestroyerDetachment
} from '../detachments/death-guard'
import LegioTitanicus from './legio-titanicus'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import DaemonicHordes from './daemonic-hordes'
import withType from '../with-type'
import {
  SingleDaemonicPatron
} from '../validations'

export default class DeathGuard extends SpaceMarineLegion {
  constructor (game) {
    super(game, 'death-guard')

    this.lineDetachments = this.lineDetachments
      .filter(detachment => detachment !== LegionAssaultDetachment)
    this.lineDetachments.push(DeathGuardGraveWardenTerminatorDetachment)
    this.supportDetachments.push(DeathGuardDeathshroudTerminatorDetachment)
    this.supportDetachments.push(DeathGuardDestroyerDetachment)
    this.supportDetachments = this.supportDetachments
      .filter(detachment => detachment !== LegionDestroyerDetachment)
    this.lordsOfWar.push(DeathGuardPrimarchDetachment)
    this.allies.push(
      LegioTitanicus,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      DaemonicHordes
    )
    this.validations.push(
      new SingleDaemonicPatron('nurgle')
    )

    this.colour = '#6f694b'
  }

  getStrategyRating (list) {
    const rating = super.getStrategyRating(list)

    if (list.allies.find(item =>
      item.type === MechanicumTaghmata.type ||
      item.army.type === ImperialMilitia.type ||
      item.army.type === SolarAuxilia.type ||
      item.army.type === KnightHousehold.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(DeathGuard)
