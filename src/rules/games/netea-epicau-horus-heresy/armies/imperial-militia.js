'use strict'

import Army from './army'
import {
  ImperialMilitiaCommandSquad,
  ImperialMilitiaInfantrySquad,
  ImperialMilitiaLevySquad,
  ImperialMilitiaMotorcycleSquad,
  ImperialMilitiaGrenedierSquad,
  ImperialMilitiaOrbitalSupport,
  ImperialMilitiaCavalrySquad,
  ImperialMilitiaHeavyOrdnanceBattery,
  ImperialMilitiaMalcadorHeavyTankSquadron,
  ImperialMilitiaRapierBattery,
  ImperialMilitiaSentinelScoutSquadron,
  ImperialMilitiaSuperHeavyTank,
  ImperialMilitiaBattleTankSquadron,
  ImperialMilitiaSuperHeavyTankPlatoon,
  ImperialMilitiaAvengerWing,
  ImperialMilitiaPrimarisWing
} from '../detachments/imperial-militia'
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
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import DaemonicHordes from './daemonic-hordes'
import withType from '../../../../utils/with-type'
import {
  LordsOfWarLimit,
  SupportDetachmentsLimit,
  DaemonicAlliesRequireTraitorProvenance,
  MaxTwoProvenances,
  OneDisciplineMasterPer500Points,
  AllUnitsInDetachmentMustSelectSameProvenance,
  UnitsWithChaosSpawnMustHaveTraitorProvenance,
  DetachmentsWithRoguePsykersMustHaveTraitorProvenance,
  ForceCommanderShouldHaveFirstDisciplineMaster
} from '../validations'

export default class ImperialMilitia extends Army {
  constructor () {
    super()

    this.lineDetachments = [
      ImperialMilitiaCommandSquad,
      ImperialMilitiaLevySquad,
      ImperialMilitiaMotorcycleSquad,
      ImperialMilitiaGrenedierSquad,
      ImperialMilitiaInfantrySquad
    ]
    this.supportDetachments = [
      ImperialMilitiaOrbitalSupport,
      ImperialMilitiaCavalrySquad,
      ImperialMilitiaHeavyOrdnanceBattery,
      ImperialMilitiaMalcadorHeavyTankSquadron,
      ImperialMilitiaRapierBattery,
      ImperialMilitiaSentinelScoutSquadron,
      ImperialMilitiaSuperHeavyTank,
      ImperialMilitiaBattleTankSquadron
    ]
    this.lordsOfWar = [
      ImperialMilitiaSuperHeavyTankPlatoon,
      ImperialMilitiaAvengerWing,
      ImperialMilitiaPrimarisWing
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
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      DaemonicHordes
    )
    this.validations.push(
      new MaxTwoProvenances(),
      new DaemonicAlliesRequireTraitorProvenance(),
      new LordsOfWarLimit(1 / 3),
      new SupportDetachmentsLimit(2),
      new OneDisciplineMasterPer500Points(),
      new AllUnitsInDetachmentMustSelectSameProvenance(),
      new UnitsWithChaosSpawnMustHaveTraitorProvenance(),
      new DetachmentsWithRoguePsykersMustHaveTraitorProvenance(),
      new ForceCommanderShouldHaveFirstDisciplineMaster()
    )
  }

  getStrategyRating (list) {
    const rating = 2

    if (list.allies.find(item =>
      item.army.type === SolarAuxilia.type ||
      item.army.type === MechanicumTaghmata.type ||
      item.army.type === DaemonicHordes.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(ImperialMilitia)
