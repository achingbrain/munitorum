import {
  TransportOption,
  DropAssault,
  AssaultRam,
  AssaultClaw,
  HeavyTransport,
  CommanderOption,
  Centurion,
  Teleport,
  Tank,
  Hyperios
} from '../upgrades'
import {
  LegionDestroyerSquad,
  LegionChampion
} from '../units/space-marine-legion'
import {
  ImperialFistsPrimarch,
  ImperialFistsBodyguardSquad,
  ImperialFistsPhalanxWarderSquad,
  ImperialFistsTemplarBrethrenSquad,
  ImperialFistsCastellumStronghold,
  ImperialFistsPrimusRedoubt,
  ImperialFistsFellblade
} from '../units/imperial-fists'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class ImperialFistsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new ImperialFistsPrimarch(),
      new ImperialFistsBodyguardSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new HeavyTransport()
      ),
      new Tank(),
      new Hyperios()
    ], [
      new Unique()
    ])
  }
}

export class ImperialFistsPhalanxWarderDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new ImperialFistsPhalanxWarderSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new Teleport()
      ),
      new CommanderOption(
        new Centurion()
      )
    ], [
      new LimitedPerPoints(1, 2000)
    ])
  }
}

export class ImperialFistsTemplarBrethrenDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new ImperialFistsTemplarBrethrenSquad(),
      new LegionChampion()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      )
    ])
  }
}

export class ImperialFistsSuperHeavyTankSquadron extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new ImperialFistsFellblade()
    ])
  }
}

export class ImperialFistsDestroyerDetachment extends SpaceMarineLegionDetachment {
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

export class ImperialFistsCastellumStrongholdDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new ImperialFistsCastellumStronghold()
    ], [], [
      new LimitedPerPoints(1, 2000)
    ])
  }
}

export class ImperialFistsPrimusRedoubtDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new ImperialFistsPrimusRedoubt()
    ], [], [
      new LimitedPerPoints(1, 2000)
    ])
  }
}

withType(ImperialFistsPrimarchDetachment)
withType(ImperialFistsPhalanxWarderDetachment)
withType(ImperialFistsTemplarBrethrenDetachment)
withType(ImperialFistsSuperHeavyTankSquadron)
withType(ImperialFistsDestroyerDetachment)
withType(ImperialFistsCastellumStrongholdDetachment)
withType(ImperialFistsPrimusRedoubtDetachment)
