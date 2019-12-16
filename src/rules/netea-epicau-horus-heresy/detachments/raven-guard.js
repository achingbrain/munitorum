import {
  TransportOption,
  DropAssault,
  AssaultRam,
  AssaultClaw,
  HeavyTransport,
  CommanderOption,
  Centurion,
  Rhinos
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
import withType from '../with-type'

export class RavenGuardPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new RavenGuardPrimarch(this),
      new RavenGuardBodyguardSquad(this)
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

export class RavenGuardDarkFuryAssaultDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new RavenGuardDarkFuryAssaultSquad(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Centurion()
      ),
      new TransportOption(
        new DropAssault()
      )
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
  }
}

export class RavenGuardMorDeythanStrikeDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new RavenGuardMorDeythanStrikeSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new HeavyTransport(),
        new AssaultRam()
      )
    )
    this.setConstraints(
      new LimitedPerPoints(1, 1000)
    )
  }
}

export class RavenGuardDarkwingPatternStormEagleWing extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new RavenGuardDarkwingPatternStormEagle(this)
    )
  }
}

export class RavenGuardDestroyerDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionDestroyerSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault()
      ),
      new CommanderOption(
        new Centurion()
      )
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
  }
}

withType(RavenGuardPrimarchDetachment)
withType(RavenGuardDarkFuryAssaultDetachment)
withType(RavenGuardMorDeythanStrikeDetachment)
withType(RavenGuardDarkwingPatternStormEagleWing)
withType(RavenGuardDestroyerDetachment)
