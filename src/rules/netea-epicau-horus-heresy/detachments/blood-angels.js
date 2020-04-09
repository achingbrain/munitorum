import {
  TransportOption,
  DropAssault,
  AssaultClaw,
  HeavyTransport,
  Teleport
} from '../upgrades'
import {
  BloodAngelsPrimarch,
  BloodAngelsBodyguardSquad,
  BloodAngelsDawnbreakerSquad,
  BloodAngelsCrimsonPaladinsSquad,
  BloodAngelsAngelsTearsSquad
} from '../units/blood-angels'
import {
  Unique
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../with-type'

export class BloodAngelsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new BloodAngelsPrimarch(this),
      new BloodAngelsBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      )
    )
    this.setConstraints(
      new Unique()
    )
  }
}

export class BloodAngelsDawnbreakerDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new BloodAngelsDawnbreakerSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      )
    )
  }
}

export class BloodAngelsAngelsTearsDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new BloodAngelsAngelsTearsSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      )
    )
  }
}

export class BloodAngelsCrimsonPaladinsDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new BloodAngelsCrimsonPaladinsSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Teleport(),
        new HeavyTransport()
      )
    )
  }
}

withType(BloodAngelsPrimarchDetachment)
withType(BloodAngelsDawnbreakerDetachment)
withType(BloodAngelsAngelsTearsDetachment)
withType(BloodAngelsCrimsonPaladinsDetachment)
