import {
  Hyperios,
  Tank,
  Dreadnought,
  TransportOption,
  DropAssault,
  AssaultRam,
  HeavyTransport,
  Teleport,
  CommanderOption,
  Centurion,
  Praetor,
  Rhinos
} from '../upgrades'
import {
  IronWarriorsPrimarch,
  IronWarriorsBodyguardSquad,
  IronWarriorsTyrantSiegeTerminatorSquad,
  IronWarriorsIronHavocSquad,
  IronWarriorsArtilleryUnit,
  IronWarriorsSuperHeavyTankSquadronUnit
} from '../units/iron-warriors'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import {
  PlusTransports
} from '../special-rules'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../with-type'

export class IronWarriorsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new IronWarriorsPrimarch(this),
      new IronWarriorsBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new HeavyTransport(),
        new Teleport()
      )
    )
    this.setConstraints(
      new Unique()
    )
  }
}

export class IronWarriorsTyrantSiegeTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new IronWarriorsTyrantSiegeTerminatorSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new HeavyTransport(),
        new Teleport()
      ),
      new CommanderOption(
        new Praetor(),
        new Centurion()
      ),
      new Tank(),
      new Dreadnought(),
      new Hyperios()
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
  }
}

export class IronWarriorsIronHavocDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new IronWarriorsIronHavocSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault()
      ),
      new CommanderOption(
        new Praetor(),
        new Centurion()
      ),
      new Tank(),
      new Dreadnought(),
      new Hyperios()
    )
    this.setConstraints(
      new PlusTransports()
    )
  }
}

export class IronWarriorsArtilleryBatteryDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setUpgrades(
      new Hyperios()
    )
    this.setMandatoryUnits(
      new IronWarriorsArtilleryUnit(this)
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
  }
}

export class IronWarriorsSuperHeavyTankSquadron extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new IronWarriorsSuperHeavyTankSquadronUnit(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Centurion()
      )
    )
  }
}

withType(IronWarriorsPrimarchDetachment)
withType(IronWarriorsTyrantSiegeTerminatorDetachment)
withType(IronWarriorsIronHavocDetachment)
withType(IronWarriorsArtilleryBatteryDetachment)
withType(IronWarriorsSuperHeavyTankSquadron)
