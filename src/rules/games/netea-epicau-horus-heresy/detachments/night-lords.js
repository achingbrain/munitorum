import {
  Hyperios,
  Tank,
  TransportOption,
  Rhinos,
  DropAssault,
  AssaultRam,
  AssaultClaw,
  HeavyTransport,
  CommanderOption,
  Centurion,
  Praetor
} from '../upgrades'
import {
  LegionDestroyerSquad
} from '../units/space-marine-legion'
import {
  NightLordsTerrorSquad,
  NightLordsNightRaptorSquad,
  NightLordsPrimarch,
  NightLordsBodyguardSquad
} from '../units/night-lords'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import {
  PlusTransports
} from '../special-rules'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../with-type'

export class NightLordsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new NightLordsPrimarch(this),
      new NightLordsBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new AssaultRam(),
        new HeavyTransport()
      ),
      new Hyperios(),
      new Tank()
    )
    this.setConstraints(
      new Unique()
    )
    this.setRules(
      new PlusTransports()
    )
  }
}

export class NightLordsTerrorDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new NightLordsTerrorSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new AssaultClaw()
      ),
      new CommanderOption(
        new Praetor(),
        new Centurion()
      )
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
    this.setRules(
      new PlusTransports()
    )
  }
}

export class NightLordsNightRaptorDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new NightLordsNightRaptorSquad(this)
    )
    this.setConstraints(
      new LimitedPerPoints(1, 1000)
    )
  }
}

export class NightLordsDestroyerDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionDestroyerSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      ),
      new CommanderOption(
        new Centurion()
      )
    )
    this.setConstraints(
      new LimitedPerPoints(1, 1000)
    )
  }
}

withType(NightLordsPrimarchDetachment)
withType(NightLordsTerrorDetachment)
withType(NightLordsNightRaptorDetachment)
withType(NightLordsDestroyerDetachment)
