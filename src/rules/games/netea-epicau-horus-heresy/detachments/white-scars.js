import {
  TransportOption,
  DropAssault,
  AssaultClaw,
  HeavyTransport,
  Teleport,
  CommanderOption,
  Centurion,
  Praetor
} from '../upgrades'
import {
  WhiteScarsPrimarch,
  WhiteScarsBodyguardSquad,
  WhiteScarsOutriderUnit,
  WhiteScarsScimitarJetbike
} from '../units/white-scars'
import {
  Unique
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class WhiteScarsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new WhiteScarsPrimarch(),
      new WhiteScarsBodyguardSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultClaw(),
        new HeavyTransport(),
        new Teleport()
      )
    ], [
      new Unique()
    ])
  }
}

export class WhiteScarsOutriderDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new WhiteScarsOutriderUnit()
    ], [
      new CommanderOption(
        new Praetor(),
        new Centurion()
      )
    ])
  }
}

export class WhiteScarsSkyHunterAttackSquadron extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new WhiteScarsScimitarJetbike()
    ], [
      new CommanderOption(
        new Praetor(),
        new Centurion()
      )
    ])
  }
}

withType(WhiteScarsPrimarchDetachment)
withType(WhiteScarsOutriderDetachment)
withType(WhiteScarsSkyHunterAttackSquadron)
