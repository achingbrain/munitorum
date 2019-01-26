import {
  TransportOption,
  DropAssault,
  AssaultRam,
  AssaultClaw,
  HeavyTransport,
  CommanderOption,
  Centurion
} from '../upgrades'
import {
  LegionDestroyerSquad
} from '../units/space-marine-legion'
import {
  RavenGuardPrimarch,
  RavenGuardBodyguardSquad,
  RavenGuardDarkFuryAssaultSquad,
  RavenGuardMorDeythanStrikeSquad,
  RavenGuardDarkwingPatternStormEagle
} from '../units/raven-guard'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class RavenGuardPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new RavenGuardPrimarch(),
      new RavenGuardBodyguardSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      )
    ], [
      new Unique()
    ])
  }
}

export class RavenGuardDarkFuryAssaultDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new RavenGuardDarkFuryAssaultSquad()
    ], [
      new CommanderOption(
        new Centurion()
      )
    ], [
      new LimitedPerPoints(1, 2000)
    ])
  }
}

export class RavenGuardMorDeythanStrikeDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new RavenGuardMorDeythanStrikeSquad()
    ], [
      new TransportOption(
        new HeavyTransport(),
        new AssaultRam()
      )
    ], [
      new LimitedPerPoints(1, 1000)
    ])
  }
}

export class RavenGuardDarkwingPatternStormEagleWing extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new RavenGuardDarkwingPatternStormEagle()
    ])
  }
}

export class RavenGuardDestroyerDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionDestroyerSquad()
    ], [
      new TransportOption(
        new DropAssault()
      ),
      new CommanderOption(
        new Centurion()
      )
    ], [
      new LimitedPerPoints(1, 2000)
    ])
  }
}

withType(RavenGuardPrimarchDetachment)
withType(RavenGuardDarkFuryAssaultDetachment)
withType(RavenGuardMorDeythanStrikeDetachment)
withType(RavenGuardDarkwingPatternStormEagleWing)
withType(RavenGuardDestroyerDetachment)
