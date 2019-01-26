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
  Praetor
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
import withType from '../../../../utils/with-type'

export class SonsOfHorusPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new SonsOfHorusPrimarch(),
      new SonsOfHorusBodyguardSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new HeavyTransport(),
        new Teleport()
      ),
      new Hyperios(),
      new Tank()
    ], [
      new Unique()
    ])
  }
}

export class SonsOfHorusReaverAttackDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new SonsOfHorusReaverAttackSquad()
    ], [
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new AssaultRam(),
        new AssaultClaw(),
        new HeavyTransport()
      ),
      new CommanderOption(
        new Praetor(),
        new Centurion()
      ),
      new Tank()
    ], [
      new LimitedPerPoints(1, 2000)
    ])
  }
}

export class SonsOfHorusJustaerinTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new SonsOfHorusJustaerinTerminatorSquad()
    ], [
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
    ], [
      new LimitedPerPoints(1, 2000)
    ])
  }
}

withType(SonsOfHorusPrimarchDetachment)
withType(SonsOfHorusReaverAttackDetachment)
withType(SonsOfHorusJustaerinTerminatorDetachment)
