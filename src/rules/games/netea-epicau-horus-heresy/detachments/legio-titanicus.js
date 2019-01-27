import {
  Legate,
  VeteranPrinceps,
  SacredIcon,
  AirDefence
} from '../upgrades'
import {
  LegioTitanicusWarhoundScountTitan,
  LegioTitanicusWarhoundScountTitanPackUnit,
  LegioTitanicusReaverBattleTitan,
  LegioTitanicusWarlordBattleTitan,
  LegioTitanicusEmperorClassTitanUnit
} from '../units/legio-titanicus'
import {
  LimitedPerPoints
} from '../constraints'
import LegioTitanicusDetachment from './legio-titanicus-detachment'
import withType from '../../../../utils/with-type'

export class LegioTitanicusWarhoundTitanDetachment extends LegioTitanicusDetachment {
  constructor () {
    super([
      new LegioTitanicusWarhoundScountTitan()
    ], [
      new VeteranPrinceps()
    ], [
      new LimitedPerPoints(1, 4000)
    ])
  }
}

export class LegioTitanicusWarhoundTitanPackDetachment extends LegioTitanicusDetachment {
  constructor () {
    super([
      new LegioTitanicusWarhoundScountTitanPackUnit(),
      new LegioTitanicusWarhoundScountTitanPackUnit()
    ], [
      new VeteranPrinceps()
    ])
  }
}

export class LegioTitanicusReaverTitanDetachment extends LegioTitanicusDetachment {
  constructor () {
    super([
      new LegioTitanicusReaverBattleTitan()
    ], [
      new Legate(),
      new VeteranPrinceps(),
      new AirDefence(),
      new SacredIcon()
    ])
  }
}

export class LegioTitanicusWarlordTitanDetachment extends LegioTitanicusDetachment {
  constructor () {
    super([
      new LegioTitanicusWarlordBattleTitan()
    ], [
      new Legate(),
      new VeteranPrinceps(),
      new AirDefence(),
      new SacredIcon()
    ])
  }
}

export class LegioTitanicusEmperorClassTitanDetachment extends LegioTitanicusDetachment {
  constructor () {
    super([
      new LegioTitanicusEmperorClassTitanUnit()
    ], [
      new Legate(),
      new VeteranPrinceps()
    ])
  }
}

withType(LegioTitanicusWarhoundTitanDetachment)
withType(LegioTitanicusWarhoundTitanPackDetachment)
withType(LegioTitanicusReaverTitanDetachment)
withType(LegioTitanicusWarlordTitanDetachment)
withType(LegioTitanicusEmperorClassTitanDetachment)
