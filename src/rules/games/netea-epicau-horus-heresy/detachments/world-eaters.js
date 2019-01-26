import {
  Hyperios,
  Tank,
  TransportOption,
  Rhinos,
  DropAssault,
  AssaultRam,
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
import {
  PlusTransports
} from '../special-rules'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class WorldEatersPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new WorldEatersPrimarch(),
      new WorldEatersBodyguardSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new HeavyTransport()
      ),
      new Hyperios(),
      new Tank()
    ], [
      new Unique()
    ])
  }
}

export class WorldEatersDestroyerDetachment extends SpaceMarineLegionDetachment {
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
      new LimitedPerPoints(1, 1000)
    ])
  }
}

export class WorldEatersRampagerDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new WorldEatersRampagerSquad()
    ], [
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new HeavyTransport()
      ),
      new CommanderOption(
        new Centurion()
      )
    ], [], [
      new PlusTransports()
    ])
  }
}

export class WorldEatersRedButcherDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new WorldEatersRedButcherSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new HeavyTransport(),
        new Teleport()
      )
    ], [
      new LimitedPerPoints(1, 2000)
    ])
  }
}

withType(WorldEatersPrimarchDetachment)
withType(WorldEatersDestroyerDetachment)
withType(WorldEatersRampagerDetachment)
withType(WorldEatersRedButcherDetachment)
