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
import withType from '../../../../utils/with-type'

export class IronWarriorsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new IronWarriorsPrimarch(),
      new IronWarriorsBodyguardSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new HeavyTransport(),
        new Teleport()
      )
    ], [
      new Unique()
    ])
  }
}

export class IronWarriorsTyrantSiegeTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new IronWarriorsTyrantSiegeTerminatorSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new HeavyTransport()
      ),
      new CommanderOption(
        new Praetor(),
        new Centurion()
      ),
      new Tank(),
      new Dreadnought(),
      new Hyperios()
    ], [
      new LimitedPerPoints(1, 2000)
    ])
  }
}

export class IronWarriorsIronHavocDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new IronWarriorsIronHavocSquad()
    ], [
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
    ], [], [
      new PlusTransports()
    ])
  }
}

export class IronWarriorsArtilleryBatteryDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new IronWarriorsArtilleryUnit()
    ], [], [
      new LimitedPerPoints(1, 2000)
    ])
  }
}

export class IronWarriorsSuperHeavyTankSquadron extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new IronWarriorsSuperHeavyTankSquadronUnit()
    ], [
      new CommanderOption(
        new Centurion()
      )
    ], [])
  }
}

withType(IronWarriorsPrimarchDetachment)
withType(IronWarriorsTyrantSiegeTerminatorDetachment)
withType(IronWarriorsIronHavocDetachment)
withType(IronWarriorsArtilleryBatteryDetachment)
withType(IronWarriorsSuperHeavyTankSquadron)
