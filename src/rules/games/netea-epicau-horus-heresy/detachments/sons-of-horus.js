import {
  Hyperios,
  Tank,
  TransportOption,
  Rhinos,
  DropAssault,
  AssaultRam,
  AssaultClaw,
  HeavyTransport,
  Teleport,
  CommanderOption,
  Centurion,
  Praetor,
  ArmouryAssets
} from '../upgrades'
import {
  SonsOfHorusPrimarch,
  SonsOfHorusJustaerinTerminatorSquad,
  SonsOfHorusBodyguardSquad,
  SonsOfHorusReaverAttackSquad
} from '../units/sons-of-horus'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../with-type'

export class SonsOfHorusPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SonsOfHorusPrimarch(this),
      new SonsOfHorusBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new HeavyTransport(),
        new Teleport()
      ),
      new Hyperios(),
      new Tank(),
      new ArmouryAssets()
    )
    this.setConstraints(
      new Unique(this)
    )
  }
}

export class SonsOfHorusReaverAttackDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SonsOfHorusReaverAttackSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new AssaultClaw(),
        new HeavyTransport()
      ),
      new CommanderOption(
        new Praetor(),
        new Centurion()
      ),
      new Tank()
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
  }
}

export class SonsOfHorusJustaerinTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SonsOfHorusJustaerinTerminatorSquad(this)
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
      new Tank()
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
  }
}

withType(SonsOfHorusPrimarchDetachment)
withType(SonsOfHorusReaverAttackDetachment)
withType(SonsOfHorusJustaerinTerminatorDetachment)
