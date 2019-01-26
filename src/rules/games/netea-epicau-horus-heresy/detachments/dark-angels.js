import {
  Hyperios,
  Tank,
  TransportOption,
  DropAssault,
  HeavyTransport,
  Teleport,
  CommanderOption,
  Centurion
} from '../upgrades'
import {
  LegionDestroyerSquad
} from '../units/space-marine-legion'
import {
  DarkAngelsPrimarch,
  DarkAngelsBodyguardSquad,
  DarkAngelsSuperHeavyTankSquadronUnit
} from '../units/dark-angels'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class DarkAngelsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new DarkAngelsPrimarch(),
      new DarkAngelsBodyguardSquad()
    ], [
      new TransportOption(
        new DropAssault(),
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

export class DarkAngelsDestroyerDetachment extends SpaceMarineLegionDetachment {
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

export class DarkAngelsSuperHeavyTankSquadron extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new DarkAngelsSuperHeavyTankSquadronUnit()
    ], [
      new CommanderOption(
        new Centurion()
      )
    ], [])
  }
}

withType(DarkAngelsPrimarchDetachment)
withType(DarkAngelsSuperHeavyTankSquadron)
withType(DarkAngelsDestroyerDetachment)
