'use strict'

import Army from './army'
import {
  KnightHouseholdQuestorisKnights,
  KnightHouseholdCerastusKnights,
  KnightHouseholdAcastusKnightPorphyrions,
  KnightHouseholdArmigerKnights
} from '../detachments/knight-household'
import AlphaLegion from './alpha-legion'
import BloodAngels from './blood-angels'
import DarkAngels from './dark-angels'
import DeathGuard from './death-guard'
import EmperorsChildren from './emperors-children'
import ImperialFists from './imperial-fists'
import IronHands from './iron-hands'
import IronWarriors from './iron-warriors'
import NightLords from './night-lords'
import RavenGuard from './raven-guard'
import Salamanders from './salamanders'
import SonsOfHorus from './sons-of-horus'
import SpaceWolves from './space-wolves'
import ThousandSons from './thousand-sons'
import Ultramarines from './ultramarines'
import WhiteScars from './white-scars'
import WordBearers from './word-bearers'
import WorldEaters from './world-eaters'
import ImperialMilitia from './imperial-militia'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import LegioTitanicus from './legio-titanicus'
import DaemonicHordes from './daemonic-hordes'
import withType from '../with-type'
import {
  LordsOfWarLimit,
  SupportDetachmentsLimit
} from '../validations'

export default class KnightHousehold extends Army {
  constructor () {
    super()

    this.lineDetachments = [
      KnightHouseholdQuestorisKnights
    ]
    this.supportDetachments = [
      KnightHouseholdCerastusKnights,
      KnightHouseholdArmigerKnights
    ]
    this.lordsOfWar = [
      KnightHouseholdAcastusKnightPorphyrions
    ]
    this.validations.push(
      new LordsOfWarLimit(1 / 3),
      new SupportDetachmentsLimit(2)
    )
    this.allies.push(
      AlphaLegion,
      BloodAngels,
      DarkAngels,
      DeathGuard,
      EmperorsChildren,
      ImperialFists,
      IronHands,
      IronWarriors,
      NightLords,
      RavenGuard,
      Salamanders,
      SonsOfHorus,
      SpaceWolves,
      ThousandSons,
      Ultramarines,
      WhiteScars,
      WordBearers,
      WorldEaters,
      ImperialMilitia,
      SolarAuxilia,
      MechanicumTaghmata,
      LegioTitanicus,
      DaemonicHordes
    )
  }

  getStrategyRating (list) {
    return 3
  }
}

withType(KnightHousehold)
