'use strict'

import Army from './army'
import {
  MechanicumTaghmataAdsecularisCovenent,
  MechanicumTaghmataThallaxCohort,
  MechanicumTaghmataUrsaraxCohort,
  MechanicumTaghmataVoraxManiple,
  MechanicumTaghmataCastellaxManiple,
  MechanicumTaghmataThanatarManiple,
  MechanicumTaghmataKriosSquadron,
  MechanicumTaghmataKaracnosSquadron,
  MechanicumTaghmataMyrmidonSect,
  MechanicumTaghmataTarantulaBattery,
  MechanicumTaghmataMinotaurBattery,
  MechanicumTaghmataOrdinatusMinorisTormenta,
  MechanicumTaghmataAvengerWing,
  MechanicumTaghmataPrimarisWing,
  MechanicumTaghmataSuperHeavyTankDestroyer,
  MechanicumTaghmataOrdinatusMajorisDetachment,
  MechanicumTaghmataVultaraxStratosAutomataDetachment
} from '../detachments/mechanicum-taghmata'
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
import KnightHousehold from './knight-household'
import LegioTitanicus from './legio-titanicus'
import withType from '../with-type'
import {
  LordsOfWarLimit,
  SupportDetachmentsLimit
} from '../validations'

export default class MechanicumTaghmata extends Army {
  constructor (game) {
    super(game, 'mechanicum-taghmata')

    this.lineDetachments = [
      MechanicumTaghmataAdsecularisCovenent,
      MechanicumTaghmataThallaxCohort,
      MechanicumTaghmataUrsaraxCohort,
      MechanicumTaghmataVoraxManiple,
      MechanicumTaghmataCastellaxManiple
    ]
    this.supportDetachments = [
      MechanicumTaghmataThanatarManiple,
      MechanicumTaghmataKriosSquadron,
      MechanicumTaghmataKaracnosSquadron,
      MechanicumTaghmataMyrmidonSect,
      MechanicumTaghmataTarantulaBattery,
      MechanicumTaghmataMinotaurBattery,
      MechanicumTaghmataOrdinatusMinorisTormenta,
      MechanicumTaghmataVultaraxStratosAutomataDetachment
    ]
    this.lordsOfWar = [
      MechanicumTaghmataAvengerWing,
      MechanicumTaghmataPrimarisWing,
      MechanicumTaghmataSuperHeavyTankDestroyer,
      MechanicumTaghmataOrdinatusMajorisDetachment
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
      ImperialMilitia,
      SolarAuxilia,
      KnightHousehold,
      LegioTitanicus
    )
    this.validations.push(
      new LordsOfWarLimit(1 / 3),
      new SupportDetachmentsLimit(3)
    )

    this.colour = '#4c0404'
  }

  getStrategyRating (list) {
    const rating = 3

    if (list.allies.find(item =>
      item.army.type === ImperialMilitia.type ||
      item.army.type === SolarAuxilia.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(MechanicumTaghmata)
