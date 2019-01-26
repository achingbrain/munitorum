import {
  Hyperios,
  Tank,
  TransportOption,
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
  LegionDestroyerSquad
} from '../units/space-marine-legion'
import {
  DeathGuardPrimarch,
  DeathGuardBodyguardSquad,
  DeathGuardDeathshroudTerminatorSquad,
  DeathGuardGraveWardenTerminatorSquad
} from '../units/death-guard'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class DeathGuardPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new DeathGuardPrimarch(),
      new DeathGuardBodyguardSquad()
    ], [
      new TransportOption(
        new AssaultRam(),
        new HeavyTransport(),
        new Teleport()
      ),
      new Tank(),
      new Hyperios()
    ], [
      new Unique()
    ])
  }
}

export class DeathGuardDeathshroudTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new DeathGuardDeathshroudTerminatorSquad()
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
      )
    ], [
      new LimitedPerPoints(1, 4000)
    ])
  }
}

export class DeathGuardGraveWardenTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new DeathGuardGraveWardenTerminatorSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new HeavyTransport(),
        new Teleport()
      ),
      new CommanderOption(
        new Centurion()
      )
    ])
  }
}

export class DeathGuardDestroyerDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionDestroyerSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      ),
      new CommanderOption(
        new Centurion()
      )
    ], [
      new LimitedPerPoints(1, 1000)
    ])
  }
}

withType(DeathGuardPrimarchDetachment)
withType(DeathGuardDeathshroudTerminatorDetachment)
withType(DeathGuardGraveWardenTerminatorDetachment)
withType(DeathGuardDestroyerDetachment)
