import {
  Upgrade,
  Hyperios,
  Tank,
  TransportOption,
  Rhinos,
  DropAssault,
  AssaultClaw,
  HeavyTransport,
  CommanderOption,
  Centurion,
  Praetor,
  Dreadnought
} from '../upgrades'
import {
  LegionDestroyerSquad
} from '../units/space-marine-legion'
import {
  WordBearersPrimarch,
  WordBearersBodyguardSquad,
  WordBearersGalVorbakDarkBrethrenSquad,
  WordBearersIncendiarySquad,
  WordBearersMalGharaTaintedContemptorDreadnought,
  WordBearersMalGharaTaintedContemptorDreadnoughtTalonUnit
} from '../units/word-bearers'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import {
  PlusTransports
} from '../special-rules'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class WordBearersPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new WordBearersPrimarch(),
      new WordBearersBodyguardSquad()
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
    ], [
      new PlusTransports()
    ])
  }
}

export class WordBearersGalVorbakDarkBrethrenDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new WordBearersGalVorbakDarkBrethrenSquad()
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
      new LimitedPerPoints(1, 1000)
    ], [
      new PlusTransports()
    ])
  }
}

export class WordBearersAshenCircleDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new WordBearersIncendiarySquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      ),
      new CommanderOption(
        new Praetor(),
        new Centurion()
      ),
      new Dreadnought()
    ], [
      new LimitedPerPoints(1, 2000)
    ])
  }
}

export class WordBearersDestroyerDetachment extends SpaceMarineLegionDetachment {
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
      new LimitedPerPoints(1, 2000)
    ])
  }
}

class WordBearersMharaGalTainedDreadnoughtUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === WordBearersMalGharaTaintedContemptorDreadnought.type || item.type === WordBearersMalGharaTaintedContemptorDreadnoughtTalonUnit.type).length === 6) {
      return []
    }

    return [
      WordBearersMalGharaTaintedContemptorDreadnought
    ]
  }
}

export class WordBearersMharaGalTaintedDreadnoughtTalon extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new WordBearersMalGharaTaintedContemptorDreadnoughtTalonUnit(),
      new WordBearersMalGharaTaintedContemptorDreadnoughtTalonUnit(),
      new WordBearersMalGharaTaintedContemptorDreadnought(),
      new WordBearersMalGharaTaintedContemptorDreadnought()
    ], [
      new TransportOption(
        new DropAssault()
      ),
      new WordBearersMharaGalTainedDreadnoughtUpgrade()
    ])
  }
}

withType(WordBearersPrimarchDetachment)
withType(WordBearersGalVorbakDarkBrethrenDetachment)
withType(WordBearersAshenCircleDetachment)
withType(WordBearersDestroyerDetachment)
withType(WordBearersMharaGalTaintedDreadnoughtTalon)
