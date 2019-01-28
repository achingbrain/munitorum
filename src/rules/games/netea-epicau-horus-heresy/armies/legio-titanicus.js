'use strict'

import Army from './army'
import {
  LegioTitanicusWarhoundTitanDetachment,
  LegioTitanicusWarhoundTitanPackDetachment,
  LegioTitanicusReaverTitanDetachment,
  LegioTitanicusWarlordTitanDetachment,
  LegioTitanicusEmperorClassTitanDetachment
} from '../detachments/legio-titanicus'
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
import KnightHousehold from './knight-household'
import DaemonicHordes from './daemonic-hordes'
import withType from '../../../../utils/with-type'

export default class LegioTitanicus extends Army {
  constructor () {
    super()

    this.lineDetachments = [
      LegioTitanicusWarhoundTitanDetachment,
      LegioTitanicusWarhoundTitanPackDetachment,
      LegioTitanicusReaverTitanDetachment,
      LegioTitanicusWarlordTitanDetachment
    ]
    this.lordsOfWar = [
      LegioTitanicusEmperorClassTitanDetachment
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
      MechanicumTaghmata,
      KnightHousehold,
      DaemonicHordes
    )
  }

  getStrategyRating (list) {
    let rating = 3

    if (list.allies.find(item =>
      item.army.type === ImperialMilitia.type ||
      item.army.type === SolarAuxilia.type ||
      item.army.type === DaemonicHordes.type
    )) {
      return rating - 1
    }

    return rating
  }
}

withType(LegioTitanicus)
