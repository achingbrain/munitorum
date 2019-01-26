import {
  TransportOption,
  DropAssault,
  AssaultRam,
  HeavyTransport,
  CommanderOption,
  Praetor,
  Centurion,
  Teleport,
  Tank,
  Hyperios
} from '../upgrades'
import {
  SalamandersPrimarch,
  SalamandersBodyguardSquad,
  SalamandersPyroclastSquad,
  SalamandersFiredrakeTerminatorSquad
} from '../units/salamanders'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class SalamandersPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new SalamandersPrimarch(),
      new SalamandersBodyguardSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
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

export class SalamandersPyroclastDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new SalamandersPyroclastSquad()
    ], [
      new TransportOption(
        new AssaultRam(),
        new HeavyTransport()
      )
    ], [
      new LimitedPerPoints(1, 2000)
    ])
  }
}

export class SalamandersFiredrakeTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new SalamandersFiredrakeTerminatorSquad()
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

withType(SalamandersPrimarchDetachment)
withType(SalamandersPyroclastDetachment)
withType(SalamandersFiredrakeTerminatorDetachment)
