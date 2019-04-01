import {
  SacredIcon,
  AirDefence,
  MultipleChoiceOption
} from '../upgrades'
import {
  LegioTitanicusWarhoundScountTitan,
  LegioTitanicusWarhoundScountTitanPackUnit,
  LegioTitanicusReaverBattleTitan,
  LegioTitanicusWarlordBattleTitan,
  LegioTitanicusEmperorClassTitanUnit,
  LegioTitanicusLegate,
  LegioTitanicusVeteranPrinceps
} from '../units/legio-titanicus'
import {
  LimitedPerPoints
} from '../constraints'
import LegioTitanicusDetachment from './legio-titanicus-detachment'
import withType from '../with-type'

export class LegioTitanicusWarhoundTitanDetachment extends LegioTitanicusDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegioTitanicusWarhoundScountTitan(this)
    )
    this.setUpgrades(
      new MultipleChoiceOption(
        LegioTitanicusVeteranPrinceps
      )
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
      new MultipleChoiceOption(
        LegioTitanicusVeteranPrinceps
      )
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
      new MultipleChoiceOption(
        LegioTitanicusLegate,
        LegioTitanicusVeteranPrinceps
      ),
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
      new MultipleChoiceOption(
        LegioTitanicusLegate,
        LegioTitanicusVeteranPrinceps
      ),
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
      new MultipleChoiceOption(
        LegioTitanicusLegate,
        LegioTitanicusVeteranPrinceps
      )
    )
  }
}

withType(LegioTitanicusWarhoundTitanDetachment)
withType(LegioTitanicusWarhoundTitanPackDetachment)
withType(LegioTitanicusReaverTitanDetachment)
withType(LegioTitanicusWarlordTitanDetachment)
withType(LegioTitanicusEmperorClassTitanDetachment)
