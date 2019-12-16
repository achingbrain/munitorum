import {
  TransportOption,
  Rhinos,
  DropAssault,
  AssaultRam,
  AssaultClaw,
  HeavyTransport,
  Teleport
} from '../upgrades'
import {
  ThousandSonsPrimarch,
  ThousandSonsBodyguardSquad,
  ThousandSonsSekhmetTerminatorSquad,
  ThousandSonsAmmitaraIntercessorSquad,
  ThousandSonsKhenetaiBladesSquad
} from '../units/thousand-sons'
import {
  Unique
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../with-type'

export class ThousandSonsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ThousandSonsPrimarch(this),
      new ThousandSonsBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Teleport(),
        new AssaultClaw(),
        new HeavyTransport()
      )
    )
    this.setConstraints(
      new Unique()
    )
  }
}

export class ThousandSonsSekhmetTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ThousandSonsSekhmetTerminatorSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new AssaultRam(),
        new HeavyTransport(),
        new Teleport()
      )
    )
  }
}

export class ThousandSonsAmmitaraIntercessorDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ThousandSonsAmmitaraIntercessorSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new Teleport()
      )
    )
  }
}

export class ThousandSonsKhenetaiBladesDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ThousandSonsKhenetaiBladesSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault()
      )
    )
  }
}

withType(ThousandSonsPrimarchDetachment)
withType(ThousandSonsSekhmetTerminatorDetachment)
withType(ThousandSonsAmmitaraIntercessorDetachment)
withType(ThousandSonsKhenetaiBladesDetachment)
