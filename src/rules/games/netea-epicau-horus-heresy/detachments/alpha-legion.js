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
import withType from '../../../../utils/with-type'

export class AlphaLegionPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new AlphaLegionPrimarch(),
      new AlphaLegionBodyguardSquad()
    ], [
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new AssaultClaw(),
        new HeavyTransport()
      ),
      new Tank(),
      new Hyperios()
    ], [
      new Unique()
    ], [
      new PlusTransports()
    ])
  }
}

export class AlphaLegionLernaeanTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new AlphaLegionLernaeanTerminatorSquad()
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

export class AlphaLegionHeadHunterKillTeamDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new AlphaLegionHeadHunterKillTeamSquad()
    ], [
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
    ], [], [
      new PlusTransports()
    ])
  }
}

withType(AlphaLegionPrimarchDetachment)
withType(AlphaLegionLernaeanTerminatorDetachment)
withType(AlphaLegionHeadHunterKillTeamDetachment)
