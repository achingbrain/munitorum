import {
  TransportOption,
  DropAssault,
  AssaultRam,
  AssaultClaw,
  HeavyTransport,
  CommanderOption,
  Praetor,
  Centurion,
  Teleport,
  Tank,
  Hyperios,
  Rhinos
} from '../upgrades'
import {
  LegionDestroyerSquad,
  LegionChampion
} from '../units/space-marine-legion'
import {
  UltramarinesPrimarch,
  UltramarinesBodyguardSquad,
  UltramarinesFulmentarusTerminatorSquad,
  UltramarinesLoctarusStormSquad,
  UltramarinesInvictarusSuzerainSquad
} from '../units/ultramarines'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class UltramarinesPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new UltramarinesPrimarch(),
      new UltramarinesBodyguardSquad()
    ], [
      new TransportOption(
        new Rhinos(),
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

export class UltramarinesFulmentarusTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new UltramarinesFulmentarusTerminatorSquad()
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

export class UltramarinesLoctarusDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new UltramarinesLoctarusStormSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      )
    ])
  }
}

export class UltramarinesInvictarusSuzerainDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new UltramarinesInvictarusSuzerainSquad(),
      new LegionChampion()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      )
    ], [
      new LimitedPerPoints(1, 4000)
    ])
  }
}

export class UltramarinesDestroyerDetachment extends SpaceMarineLegionDetachment {
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

withType(UltramarinesPrimarchDetachment)
withType(UltramarinesFulmentarusTerminatorDetachment)
withType(UltramarinesLoctarusDetachment)
withType(UltramarinesInvictarusSuzerainDetachment)
withType(UltramarinesDestroyerDetachment)
