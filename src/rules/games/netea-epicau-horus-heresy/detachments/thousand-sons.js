import {
  TransportOption,
  Rhinos,
  DropAssault,
  AssaultRam,
  AssaultClaw,
  HeavyTransport,
  Teleport
} from '../upgrades'
import {
  ThousandSonsPrimarch,
  ThousandSonsBodyguardSquad,
  ThousandSonsSekhmetTerminatorSquad,
  ThousandSonsAmmitaraIntercessorSquad,
  ThousandSonsKhenetaiBladesSquad
} from '../units/thousand-sons'
import {
  Unique
} from '../constraints'
import {
  PlusTransports
} from '../special-rules'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class ThousandSonsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new ThousandSonsPrimarch(),
      new ThousandSonsBodyguardSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultClaw(),
        new HeavyTransport()
      )
    ], [
      new Unique()
    ])
  }
}

export class ThousandSonsSekhmetTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new ThousandSonsSekhmetTerminatorSquad()
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

export class ThousandSonsAmmitaraIntercessorDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new ThousandSonsAmmitaraIntercessorSquad()
    ], [
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new Teleport()
      )
    ], [], [
      new PlusTransports()
    ])
  }
}

export class ThousandSonsKhenetaiBladesDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new ThousandSonsKhenetaiBladesSquad()
    ], [
      new TransportOption(
        new Rhinos(),
        new DropAssault()
      )
    ], [], [
      new PlusTransports()
    ])
  }
}

withType(ThousandSonsPrimarchDetachment)
withType(ThousandSonsSekhmetTerminatorDetachment)
withType(ThousandSonsAmmitaraIntercessorDetachment)
withType(ThousandSonsKhenetaiBladesDetachment)
