import {
  Noble,
  Seneschal,
  Aspirants,
  ScionsofUhlan,
  Upgrade
} from '../upgrades'
import {
  KnightHouseholdQuestorisKnight,
  KnightHouseholdCerastusKnight,
  KnightHouseholdAcastusKnightPorphyrion
} from '../units/knight-household'
import KnightHouseholdDetachment from './knight-household-detachment'
import withType from '../../../../utils/with-type'

class KnightHouseholdQuestorisKnightsUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === KnightHouseholdQuestorisKnight.type).length === 5) {
      return []
    }

    return [
      KnightHouseholdQuestorisKnight
    ]
  }
}

export class KnightHouseholdQuestorisKnights extends KnightHouseholdDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new KnightHouseholdQuestorisKnight(this),
      new KnightHouseholdQuestorisKnight(this),
      new KnightHouseholdQuestorisKnight(this)
    )
    this.setUpgrades(
      new Aspirants(),
      new Seneschal(),
      new Noble(),
      new ScionsofUhlan(),
      new KnightHouseholdQuestorisKnightsUpgrade()
    )
  }
}

class KnightHouseholdCerastusKnightsUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === KnightHouseholdCerastusKnight.type).length === 6) {
      return []
    }

    return [
      KnightHouseholdCerastusKnight
    ]
  }
}

export class KnightHouseholdCerastusKnights extends KnightHouseholdDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new KnightHouseholdCerastusKnight(this),
      new KnightHouseholdCerastusKnight(this),
      new KnightHouseholdCerastusKnight(this),
      new KnightHouseholdCerastusKnight(this)
    )
    this.setUpgrades(
      new Noble(),
      new KnightHouseholdCerastusKnightsUpgrade()
    )
  }
}

export class KnightHouseholdAcastusKnightPorphyrions extends KnightHouseholdDetachment {
  KnightHouseholdAcastusKnightPorphyrion

  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new KnightHouseholdAcastusKnightPorphyrion(this)
    )
    this.setUpgrades(
      new Noble()
    )
  }
}

withType(KnightHouseholdQuestorisKnights)
withType(KnightHouseholdCerastusKnights)
withType(KnightHouseholdAcastusKnightPorphyrions)
