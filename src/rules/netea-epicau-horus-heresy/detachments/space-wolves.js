import {
  TransportOption,
  Rhinos,
  DropAssault,
  AssaultRam,
  HeavyTransport,
  Teleport,
  CommanderOption,
  Centurion,
  Praetor,
  AssaultClaw
} from '../upgrades'
import {
  SpaceWolvesPrimarch,
  SpaceWolvesBodyguardSquad,
  SpaceWolvesGreySlayerSquad,
  SpaceWolvesDeathswornSquad,
  SpaceWolvesVaragyrWolfGuardSquad
} from '../units/space-wolves'
import {
  Unique
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../with-type'

export class SpaceWolvesPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SpaceWolvesPrimarch(this),
      new SpaceWolvesBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new AssaultClaw(),
        new HeavyTransport(),
        new Teleport()
      )
    )
    this.setConstraints(
      new Unique()
    )
  }
}

export class SpaceWolvesGreySlayerDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SpaceWolvesGreySlayerSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault()
      ),
      new CommanderOption(
        new Praetor(),
        new Centurion()
      )
    )
  }
}

export class SpaceWolvesDeathswornDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SpaceWolvesDeathswornSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new HeavyTransport()
      )
    )
  }
}

export class SpaceWolvesVaragyrWolfGuardDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SpaceWolvesVaragyrWolfGuardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new AssaultRam(),
        new HeavyTransport(),
        new Teleport()
      )
    )
  }
}

withType(SpaceWolvesPrimarchDetachment)
withType(SpaceWolvesGreySlayerDetachment)
withType(SpaceWolvesDeathswornDetachment)
withType(SpaceWolvesVaragyrWolfGuardDetachment)
