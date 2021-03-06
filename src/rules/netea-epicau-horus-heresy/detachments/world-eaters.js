import {
  TransportOption,
  Rhinos,
  DropAssault,
  AssaultRam,
  AssaultClaw,
  HeavyTransport,
  Teleport,
  CommanderOption,
  Centurion
} from '../upgrades'
import {
  LegionDestroyerSquad
} from '../units/space-marine-legion'
import {
  WorldEatersPrimarch,
  WorldEatersBodyguardSquad,
  WorldEatersRampagerSquad,
  WorldEatersRedButcherSquad
} from '../units/world-eaters'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../with-type'

export class WorldEatersPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new WorldEatersPrimarch(this),
      new WorldEatersBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new AssaultClaw(),
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

export class WorldEatersDestroyerDetachment extends SpaceMarineLegionDetachment {
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
      new LimitedPerPoints(1, 1000)
    )
  }
}

export class WorldEatersRampagerDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new WorldEatersRampagerSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new HeavyTransport()
      ),
      new CommanderOption(
        new Centurion()
      )
    )
  }
}

export class WorldEatersRedButcherDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new WorldEatersRedButcherSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new AssaultRam(),
        new HeavyTransport(),
        new Teleport()
      )
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
  }
}

withType(WorldEatersPrimarchDetachment)
withType(WorldEatersDestroyerDetachment)
withType(WorldEatersRampagerDetachment)
withType(WorldEatersRedButcherDetachment)
