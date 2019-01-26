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
import Detachment from './detachment'
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

export class KnightHouseholdQuestorisKnights extends Detachment {
  constructor () {
    super([
      new KnightHouseholdQuestorisKnight(),
      new KnightHouseholdQuestorisKnight(),
      new KnightHouseholdQuestorisKnight()
    ], [
      new Aspirants(),
      new Seneschal(),
      new Noble(),
      new ScionsofUhlan(),
      new KnightHouseholdQuestorisKnightsUpgrade()
    ])
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

export class KnightHouseholdCerastusKnights extends Detachment {
  constructor () {
    super([
      new KnightHouseholdCerastusKnight(),
      new KnightHouseholdCerastusKnight(),
      new KnightHouseholdCerastusKnight(),
      new KnightHouseholdCerastusKnight()
    ], [
      new Noble(),
      new KnightHouseholdCerastusKnightsUpgrade()
    ])
  }
}

export class KnightHouseholdAcastusKnightPorphyrions extends Detachment {
  KnightHouseholdAcastusKnightPorphyrion

  constructor () {
    super([
      new KnightHouseholdAcastusKnightPorphyrion()
    ], [
      new Noble()
    ])
  }
}

withType(KnightHouseholdQuestorisKnights)
withType(KnightHouseholdCerastusKnights)
withType(KnightHouseholdAcastusKnightPorphyrions)
