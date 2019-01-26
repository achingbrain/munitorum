import {
  TransportOption,
  Rhinos,
  DropAssault,
  AssaultRam,
  HeavyTransport,
  Teleport,
  CommanderOption,
  Centurion,
  Praetor
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
import {
  PlusTransports
} from '../special-rules'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class SpaceWolvesPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new SpaceWolvesPrimarch(),
      new SpaceWolvesBodyguardSquad()
    ], [
      new TransportOption(
        new HeavyTransport()
      )
    ], [
      new Unique()
    ])
  }
}

export class SpaceWolvesGreySlayerDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new SpaceWolvesGreySlayerSquad()
    ], [
      new TransportOption(
        new Rhinos(),
        new DropAssault()
      ),
      new CommanderOption(
        new Praetor(),
        new Centurion()
      )
    ], [], [
      new PlusTransports()
    ])
  }
}

export class SpaceWolvesDeathswornDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new SpaceWolvesDeathswornSquad()
    ], [
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new HeavyTransport()
      )
    ], [], [
      new PlusTransports()
    ])
  }
}

export class SpaceWolvesVaragyrWolfGuardDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new SpaceWolvesVaragyrWolfGuardSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new HeavyTransport(),
        new Teleport()
      )
    ])
  }
}

withType(SpaceWolvesPrimarchDetachment)
withType(SpaceWolvesGreySlayerDetachment)
withType(SpaceWolvesDeathswornDetachment)
withType(SpaceWolvesVaragyrWolfGuardDetachment)
