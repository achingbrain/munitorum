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
  AlphaLegionPrimarch,
  AlphaLegionBodyguardSquad,
  AlphaLegionLernaeanTerminatorSquad,
  AlphaLegionHeadHunterKillTeamSquad
} from '../units/alpha-legion'
import {
  Unique
} from '../constraints'
import {
  PlusTransports
} from '../special-rules'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../with-type'

export class AlphaLegionPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits([
      new AlphaLegionPrimarch(this),
      new AlphaLegionBodyguardSquad(this)
    ])
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new AssaultClaw(),
        new HeavyTransport()
      ),
      new Tank(),
      new Hyperios()
    )
    this.setConstraints(
      new Unique()
    )
    this.setRules(
      new PlusTransports()
    )
  }
}

export class AlphaLegionLernaeanTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new AlphaLegionLernaeanTerminatorSquad()
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
      )
    )
  }
}

export class AlphaLegionHeadHunterKillTeamDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new AlphaLegionHeadHunterKillTeamSquad()
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new HeavyTransport()
      ),
      new CommanderOption(
        new Praetor(),
        new Centurion()
      ),
      new Tank()
    )
    this.setRules(
      new PlusTransports()
    )
  }
}

withType(AlphaLegionPrimarchDetachment)
withType(AlphaLegionLernaeanTerminatorDetachment)
withType(AlphaLegionHeadHunterKillTeamDetachment)
