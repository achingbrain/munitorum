import {
  Hyperios,
  Tank,
  TransportOption,
  Rhinos,
  DropAssault,
  AssaultRam,
  AssaultClaw,
  HeavyTransport,
  CommanderOption,
  Centurion,
  Praetor
} from '../upgrades'
import {
  LegionDestroyerSquad
} from '../units/space-marine-legion'
import {
  NightLordsTerrorSquad,
  NightLordsNightRaptorSquad,
  NightLordsPrimarch,
  NightLordsBodyguardSquad
} from '../units/night-lords'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import {
  PlusTransports
} from '../special-rules'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class NightLordsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new NightLordsPrimarch(),
      new NightLordsBodyguardSquad()
    ], [
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new AssaultRam(),
        new HeavyTransport()
      ),
      new Hyperios(),
      new Tank()
    ], [
      new Unique()
    ], [
      new PlusTransports()
    ])
  }
}

export class NightLordsTerrorDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new NightLordsTerrorSquad()
    ], [
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new AssaultClaw()
      ),
      new CommanderOption(
        new Praetor(),
        new Centurion()
      )
    ], [
      new LimitedPerPoints(1, 2000)
    ], [
      new PlusTransports()
    ])
  }
}

export class NightLordsNightRaptorDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new NightLordsNightRaptorSquad()
    ], [], [
      new LimitedPerPoints(1, 1000)
    ])
  }
}

export class NightLordsDestroyerDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionDestroyerSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      ),
      new CommanderOption(
        new Centurion()
      )
    ], [
      new LimitedPerPoints(1, 1000)
    ])
  }
}

withType(NightLordsPrimarchDetachment)
withType(NightLordsTerrorDetachment)
withType(NightLordsNightRaptorDetachment)
withType(NightLordsDestroyerDetachment)
