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
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegioTitanicusWarhoundScountTitan(this)
    )
    this.setUpgrades(
      new VeteranPrinceps()
    )
    this.setConstraints(
      new LimitedPerPoints(1, 4000)
    )
  }
}

export class LegioTitanicusWarhoundTitanPackDetachment extends LegioTitanicusDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegioTitanicusWarhoundScountTitanPackUnit(this),
      new LegioTitanicusWarhoundScountTitanPackUnit(this)
    )
    this.setUpgrades(
      new VeteranPrinceps()
    )
  }
}

export class LegioTitanicusReaverTitanDetachment extends LegioTitanicusDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegioTitanicusReaverBattleTitan(this)
    )
    this.setUpgrades(
      new Legate(),
      new VeteranPrinceps(),
      new AirDefence(),
      new SacredIcon()
    )
  }
}

export class LegioTitanicusWarlordTitanDetachment extends LegioTitanicusDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegioTitanicusWarlordBattleTitan(this)
    )
    this.setUpgrades(
      new Legate(),
      new VeteranPrinceps(),
      new AirDefence(),
      new SacredIcon()
    )
  }
}

export class LegioTitanicusEmperorClassTitanDetachment extends LegioTitanicusDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegioTitanicusEmperorClassTitanUnit(this)
    )
    this.setUpgrades(
      new Legate(),
      new VeteranPrinceps()
    )
  }
}

withType(LegioTitanicusWarhoundTitanDetachment)
withType(LegioTitanicusWarhoundTitanPackDetachment)
withType(LegioTitanicusReaverTitanDetachment)
withType(LegioTitanicusWarlordTitanDetachment)
withType(LegioTitanicusEmperorClassTitanDetachment)
