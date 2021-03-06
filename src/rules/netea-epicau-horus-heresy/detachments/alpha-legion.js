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
  AlphaLegionPrimarch,
  AlphaLegionBodyguardSquad,
  AlphaLegionLernaeanTerminatorSquad,
  AlphaLegionHeadHunterKillTeamSquad
} from '../units/alpha-legion'
import {
  Unique
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../with-type'

export class AlphaLegionPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new AlphaLegionPrimarch(this),
      new AlphaLegionBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new AssaultClaw(),
        new HeavyTransport()
      ),
      new Tank(),
      new ArmouryAssets(),
      new Hyperios()
    )
    this.setConstraints(
      new Unique()
    )
  }
}

export class AlphaLegionLernaeanTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new AlphaLegionLernaeanTerminatorSquad(this)
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
      )
    )
  }
}

export class AlphaLegionHeadHunterKillTeamDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new AlphaLegionHeadHunterKillTeamSquad(this)
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
  }
}

withType(AlphaLegionPrimarchDetachment)
withType(AlphaLegionLernaeanTerminatorDetachment)
withType(AlphaLegionHeadHunterKillTeamDetachment)
