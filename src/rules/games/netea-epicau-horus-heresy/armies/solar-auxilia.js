'use strict'

import Army from './army'
import {
  SolarAuxiliaCommandDetachment,
  SolarAuxiliaVeletarisStormCohort,
  SolarAuxiliaInfantryTercio,
  SolarAuxiliaStrikeCompany,
  SolarAuxiliaOrbitalSupport,
  SolarAuxiliaArtilleryTankBattery,
  SolarAuxiliaMalcadorSquadron,
  SolarAuxiliaSuperHeavyTank,
  SolarAuxiliaSuperHeavyTankSquadron,
  SolarAuxiliaCloseSupportSquadron,
  SolarAuxiliaTankHunterSquadron,
  SolarAuxiliaTarantulaBattery,
  SolarAuxiliaAvengerWing,
  SolarAuxiliaPrimarisWing
} from '../detachments/solar-auxilia'
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
import LegioTitanicus from './legio-titanicus'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import DaemonicHordes from './daemonic-hordes'
import withType from '../with-type'
import {
  LordsOfWarLimit,
  SupportDetachmentsLimit
} from '../validations'

export default class SolarAuxilia extends Army {
  constructor () {
    super()

    this.lineDetachments = [
      SolarAuxiliaCommandDetachment,
      SolarAuxiliaVeletarisStormCohort,
      SolarAuxiliaInfantryTercio,
      SolarAuxiliaStrikeCompany
    ]
    this.supportDetachments = [
      SolarAuxiliaOrbitalSupport,
      SolarAuxiliaArtilleryTankBattery,
      SolarAuxiliaMalcadorSquadron,
      SolarAuxiliaSuperHeavyTank,
      SolarAuxiliaSuperHeavyTankSquadron,
      SolarAuxiliaCloseSupportSquadron,
      SolarAuxiliaTankHunterSquadron,
      SolarAuxiliaTarantulaBattery
    ]
    this.lordsOfWar = [
      SolarAuxiliaAvengerWing,
      SolarAuxiliaPrimarisWing
    ]
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
      LegioTitanicus,
      MechanicumTaghmata,
      KnightHousehold,
      DaemonicHordes
    )
    this.validations.push(
      new LordsOfWarLimit(1 / 3),
      new SupportDetachmentsLimit(2)
    )
  }

  getStrategyRating (list) {
    let rating = 3

    if (list.allies.find(item =>
      item.army.type === MechanicumTaghmata.type ||
      item.army.type === DaemonicHordes.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(SolarAuxilia)
