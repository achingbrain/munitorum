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
  Dreadnought,
  ArmouryAssets
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
import withType from '../with-type'

export class WordBearersPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new WordBearersPrimarch(this),
      new WordBearersBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new HeavyTransport()
      ),
      new Tank(),
      new ArmouryAssets(),
      new Hyperios()
    )
    this.setConstraints(
      new Unique()
    )
    this.setRules(
      new PlusTransports()
    )
  }
}

export class WordBearersGalVorbakDarkBrethrenDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new WordBearersGalVorbakDarkBrethrenSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new AssaultClaw()
      ),
      new CommanderOption(
        new Centurion()
      )
    )
    this.setConstraints(
      new LimitedPerPoints(1, 1000)
    )
    this.setRules(
      new PlusTransports()
    )
  }
}

export class WordBearersAshenCircleDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new WordBearersIncendiarySquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      ),
      new CommanderOption(
        new Praetor(),
        new Centurion()
      ),
      new Dreadnought()
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
  }
}

export class WordBearersDestroyerDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionDestroyerSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      ),
      new CommanderOption(
        new Centurion()
      )
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
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
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new WordBearersMalGharaTaintedContemptorDreadnoughtTalonUnit(this),
      new WordBearersMalGharaTaintedContemptorDreadnoughtTalonUnit(this),
      new WordBearersMalGharaTaintedContemptorDreadnought(this),
      new WordBearersMalGharaTaintedContemptorDreadnought(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault()
      ),
      new WordBearersMharaGalTainedDreadnoughtUpgrade()
    )
  }
}

withType(WordBearersPrimarchDetachment)
withType(WordBearersGalVorbakDarkBrethrenDetachment)
withType(WordBearersAshenCircleDetachment)
withType(WordBearersDestroyerDetachment)
withType(WordBearersMharaGalTaintedDreadnoughtTalon)
