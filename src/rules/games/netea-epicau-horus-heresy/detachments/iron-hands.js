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
  IronHandsPrimarch,
  IronHandsBodyguardSquad,
  IronHandsMedusanImmortalsSquad,
  IronHandsGorgonTerminatorSquad,
  IronHandsPredatorStrikeSquadronUnit,
  IronHandsSuperHeavyTankSquadronUnit,
  IronHandsPredator
} from '../units/iron-hands'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class IronHandsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new IronHandsPrimarch(),
      new IronHandsBodyguardSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new AssaultClaw(),
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

export class IronHandsGorgonTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new IronHandsGorgonTerminatorSquad()
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
    ])
  }
}

export class IronHandsMedusanImmortalsDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new IronHandsMedusanImmortalsSquad()
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

export class IronHandsPredatorDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new IronHandsPredatorStrikeSquadronUnit(),
      new IronHandsPredatorStrikeSquadronUnit(),
      new IronHandsPredator(),
      new IronHandsPredator(),
      new IronHandsPredator(),
      new IronHandsPredator()
    ], [
      new CommanderOption(
        new Centurion()
      ),
      new Hyperios()
    ])
  }
}

export class IronHandsDestroyerDetachment extends SpaceMarineLegionDetachment {
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

export class IronHandsSuperHeavyTankSquadron extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new IronHandsSuperHeavyTankSquadronUnit()
    ], [
      new CommanderOption(
        new Centurion()
      )
    ], [])
  }
}

withType(IronHandsPrimarchDetachment)
withType(IronHandsGorgonTerminatorDetachment)
withType(IronHandsMedusanImmortalsDetachment)
withType(IronHandsPredatorDetachment)
withType(IronHandsSuperHeavyTankSquadron)
withType(IronHandsDestroyerDetachment)
