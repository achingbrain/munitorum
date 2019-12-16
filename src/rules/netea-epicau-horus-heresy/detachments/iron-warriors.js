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
  Rhinos,
  Upgrade,
  ArmouryAssets
} from '../upgrades'
import {
  IronWarriorsPrimarch,
  IronWarriorsBodyguardUnit,
  IronWarriorsTerminatorSquadUnit,
  IronWarriorsTerminatorSquadExtra,
  IronWarriorsIronHavocSquad,
  IronWarriorsArtilleryUnit,
  IronWarriorsSuperHeavyTankSquadronUnit
} from '../units/iron-warriors'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../with-type'

class IronHandsTerminatorDetachmentUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === IronWarriorsTerminatorSquadUnit.type).length === 6) {
      return []
    }

    return [
      new IronWarriorsTerminatorSquadExtra(detachment)
    ]
  }
}

export class IronWarriorsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new IronWarriorsPrimarch(this),
      new IronWarriorsBodyguardUnit(this)
    )
    this.setUpgrades(
      new TransportOption(
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

export class IronWarriorsTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new IronWarriorsTerminatorSquadUnit(this),
      new IronWarriorsTerminatorSquadUnit(this),
      new IronWarriorsTerminatorSquadUnit(this),
      new IronWarriorsTerminatorSquadUnit(this)
    )
    this.setUpgrades(
      new TransportOption(
        new AssaultRam(),
        new HeavyTransport(),
        new Teleport()
      ),
      new CommanderOption(
        new Praetor(),
        new Centurion()
      ),
      new Tank(),
      new ArmouryAssets(),
      new Dreadnought(),
      new Hyperios(),
      new IronHandsTerminatorDetachmentUpgrade()
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
        new DropAssault(),
        new HeavyTransport()
      ),
      new CommanderOption(
        new Centurion()
      ),
      new Hyperios()
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
      new LimitedPerPoints(1, 1000)
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
withType(IronWarriorsTerminatorDetachment)
withType(IronWarriorsIronHavocDetachment)
withType(IronWarriorsArtilleryBatteryDetachment)
withType(IronWarriorsSuperHeavyTankSquadron)
