'use strict'

import Army from './army'
import {
  DaemonicHordesWarpRiftDetachment,
  DaemonicHordesKhorneHorde,
  DaemonicHordesNurgleHorde,
  DaemonicHordesSlaaneshHorde,
  DaemonicHordesTzeenchHorde,
  DaemonicHordesKhorneGreaterDaemonHorde,
  DaemonicHordesNurgleGreaterDaemonHorde,
  DaemonicHordesSlaaneshGreaterDaemonHorde,
  DaemonicHordesTzeenchGreaterDaemonHorde,
  DaemonicHordesKhorneFollowers,
  DaemonicHordesNurgleFollowers,
  DaemonicHordesSlaaneshFollowers,
  DaemonicHordesTzeenchFollowers,
  DaemonicHordesChaosUndividedFuryFlight,
  DaemonicHordesChaosUndividedSpawnPack,
  DaemonicHordesChaosUndividedSoulGrinderManiple
} from '../detachments/daemonic-hordes'
import withType from '../with-type'
import {
  GreaterDaemonsRequireHordes,
  FollowersRequireHordes,
  OnlyOneDaemonicOverlord,
  RestrictedMinorDaemonQuanities
} from '../validations'
import AlphaLegion from './alpha-legion'
import DeathGuard from './death-guard'
import EmperorsChildren from './emperors-children'
import IronWarriors from './iron-warriors'
import NightLords from './night-lords'
import SonsOfHorus from './sons-of-horus'
import ThousandSons from './thousand-sons'
import WordBearers from './word-bearers'
import WorldEaters from './world-eaters'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import LegioTitanicus from './legio-titanicus'

export default class DaemonicHordes extends Army {
  constructor (game) {
    super(game, 'daemonic-hordes')

    this.lineDetachments = [
      DaemonicHordesWarpRiftDetachment,
      DaemonicHordesKhorneHorde,
      DaemonicHordesNurgleHorde,
      DaemonicHordesSlaaneshHorde,
      DaemonicHordesTzeenchHorde
    ]
    this.supportDetachments = [
      DaemonicHordesKhorneFollowers,
      DaemonicHordesNurgleFollowers,
      DaemonicHordesSlaaneshFollowers,
      DaemonicHordesTzeenchFollowers,
      DaemonicHordesChaosUndividedFuryFlight,
      DaemonicHordesChaosUndividedSpawnPack,
      DaemonicHordesChaosUndividedSoulGrinderManiple
    ]
    this.lordsOfWar = [
      DaemonicHordesKhorneGreaterDaemonHorde,
      DaemonicHordesNurgleGreaterDaemonHorde,
      DaemonicHordesSlaaneshGreaterDaemonHorde,
      DaemonicHordesTzeenchGreaterDaemonHorde
    ]
    this.allies.push(
      AlphaLegion,
      DeathGuard,
      EmperorsChildren,
      IronWarriors,
      NightLords,
      SonsOfHorus,
      ThousandSons,
      WordBearers,
      WorldEaters,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      LegioTitanicus
    )
    this.validations.push(
      new GreaterDaemonsRequireHordes(),
      new FollowersRequireHordes(),
      new OnlyOneDaemonicOverlord(),
      new RestrictedMinorDaemonQuanities()
    )

    this.colour = '#c00014'
  }

  getStrategyRating (list) {
    const rating = 2

    if (list.allies.find(item =>
      item.army.type === MechanicumTaghmata.type ||
      item.army.type === LegioTitanicus.type ||
      item.army.type === KnightHousehold.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(DaemonicHordes)
