'use strict'

import withType from '../../../utils/with-type'
import Game from '../game'
import NetEaEpicAuHorusHeresyList from './list'
import Detachment from './detachments/detachment'
import DarkAngels from './armies/dark-angels'
import EmperorsChildren from './armies/emperors-children'
import IronWarriors from './armies/iron-warriors'
import WhiteScars from './armies/white-scars'
import ImperialFists from './armies/imperial-fists'
import SpaceWolves from './armies/space-wolves'
import NightLords from './armies/night-lords'
import BloodAngels from './armies/blood-angels'
import IronHands from './armies/iron-hands'
import WorldEaters from './armies/world-eaters'
import Ultramarines from './armies/ultramarines'
import DeathGuard from './armies/death-guard'
import ThousandSons from './armies/thousand-sons'
import SonsOfHorus from './armies/sons-of-horus'
import WordBearers from './armies/word-bearers'
import Salamanders from './armies/salamanders'
import RavenGuard from './armies/raven-guard'
import AlphaLegion from './armies/alpha-legion'
import LegioCustodes from './armies/legio-custodes'
import ImperialMilitia from './armies/imperial-militia'
import LegioTitanicus from './armies/legio-titanicus'
import MechanicumTaghmata from './armies/mechanicum-taghmata'
import KnightHousehold from './armies/knight-household'
import SolarAuxilia from './armies/solar-auxilia'
import DaemonicHordes from './armies/daemonic-hordes'

class NetEaEpicAuHorusHeresy extends Game {
  constructor () {
    super('netea-epicau-horus-heresy', 'netea-epicau-horus-heresy-description')

    this.armies = [
      new DarkAngels(this),
      new EmperorsChildren(this),
      new IronWarriors(this),
      new WhiteScars(this),
      new ImperialFists(this),
      new SpaceWolves(this),
      new NightLords(this),
      new BloodAngels(this),
      new IronHands(this),
      new WorldEaters(this),
      new Ultramarines(this),
      new DeathGuard(this),
      new ThousandSons(this),
      new SonsOfHorus(this),
      new WordBearers(this),
      new Salamanders(this),
      new RavenGuard(this),
      new AlphaLegion(this),
      new LegioCustodes(this),
      new ImperialMilitia(this),
      new LegioTitanicus(this),
      new MechanicumTaghmata(this),
      new KnightHousehold(this),
      new SolarAuxilia(this),
      new DaemonicHordes(this)
    ]
  }

  newList (name, army) {
    return new NetEaEpicAuHorusHeresyList(this, name, army)
  }

  listFromJSON (json) {
    const army = this.armies.find(item => item.type === json.army)

    const list = new NetEaEpicAuHorusHeresyList(this, json.name, army)
    list.id = json.id
    list.lineDetachments = json.lineDetachments.map(item => Detachment.fromJSON(item))
    list.supportDetachments = json.supportDetachments.map(item => Detachment.fromJSON(item))
    list.lordsOfWar = json.lordsOfWar.map(item => Detachment.fromJSON(item))

    return list
  }

  toJSON () {
    return {
      id: this.id
    }
  }
}

export default withType(NetEaEpicAuHorusHeresy)
