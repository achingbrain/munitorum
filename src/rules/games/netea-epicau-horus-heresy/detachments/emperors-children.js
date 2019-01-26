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
  EmperorsChildrenPrimarch,
  EmperorsChildrenBodyguardSquad,
  EmperorsChildrenPhoenixTerminatorSquad,
  EmperorsChildrenPalatineBladesSquad,
  EmperorsChildrenKakophoniSquad
} from '../units/emperors-children'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import {
  PlusTransports
} from '../special-rules'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class EmperorsChildrenPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new EmperorsChildrenPrimarch(),
      new EmperorsChildrenBodyguardSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new AssaultClaw(),
        new HeavyTransport(),
        new Teleport()
      )
    ], [
      new Unique()
    ])
  }
}

export class EmperorsChildrenPhoenixTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new EmperorsChildrenPhoenixTerminatorSquad()
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
      new LimitedPerPoints(1, 2000)
    ])
  }
}

export class EmperorsChildrenPalatineBladesDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new EmperorsChildrenPalatineBladesSquad()
    ], [
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new AssaultClaw()
      ),
      new CommanderOption(
        new Centurion()
      )
    ], [
      new LimitedPerPoints(1, 2000)
    ], [
      new PlusTransports()
    ])
  }
}

export class EmperorsChildrenKakophoniDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new EmperorsChildrenKakophoniSquad()
    ], [
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new HeavyTransport()
      ),
      new Tank(),
      new Hyperios()
    ], [
      new LimitedPerPoints(1, 2000)
    ], [
      new PlusTransports()
    ])
  }
}

withType(EmperorsChildrenPrimarchDetachment)
withType(EmperorsChildrenPhoenixTerminatorDetachment)
withType(EmperorsChildrenPalatineBladesDetachment)
withType(EmperorsChildrenKakophoniDetachment)
