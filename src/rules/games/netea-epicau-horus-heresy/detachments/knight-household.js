import {
  Noble,
  Seneschal,
  Aspirants,
  Upgrade
} from '../upgrades'
import {
  KnightHouseholdQuestorisPaladinKnight,
  KnightHouseholdQuestorisPaladinKnightExtra,
  KnightHouseholdQuestorisErrantKnight,
  KnightHouseholdQuestorisErrantKnightExtra,
  KnightHouseholdCerastusLancerKnight,
  KnightHouseholdCerastusCastigatorKnight,
  KnightHouseholdAcastusKnightPorphyrion,
  KnightHouseholdArmigerKnightUnit
} from '../units/knight-household'
import {
  LimitedPerPoints
} from '../constraints'
import KnightHouseholdDetachment from './knight-household-detachment'
import withType from '../with-type'

class KnightHouseholdQuestorisPaladinKnightsUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === KnightHouseholdQuestorisPaladinKnight.type || item.type === KnightHouseholdQuestorisPaladinKnightExtra.type).length === 5) {
      return []
    }

    return [
      KnightHouseholdQuestorisPaladinKnightExtra
    ]
  }
}

class KnightHouseholdQuestorisErrantKnightsUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === KnightHouseholdQuestorisErrantKnight.type || item.type === KnightHouseholdQuestorisErrantKnightExtra.type).length === 5) {
      return []
    }

    return [
      KnightHouseholdQuestorisErrantKnightExtra
    ]
  }
}

export class KnightHouseholdQuestorisPaladinKnights extends KnightHouseholdDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new KnightHouseholdQuestorisPaladinKnight(this),
      new KnightHouseholdQuestorisPaladinKnight(this),
      new KnightHouseholdQuestorisPaladinKnight(this)
    )
    this.setUpgrades(
      new Aspirants(),
      new Seneschal(),
      new Noble(),
      new KnightHouseholdQuestorisPaladinKnightsUpgrade()
    )
  }
}

export class KnightHouseholdQuestorisErrantKnights extends KnightHouseholdDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new KnightHouseholdQuestorisErrantKnight(this),
      new KnightHouseholdQuestorisErrantKnight(this),
      new KnightHouseholdQuestorisErrantKnight(this)
    )
    this.setUpgrades(
      new Aspirants(),
      new Seneschal(),
      new Noble(),
      new KnightHouseholdQuestorisErrantKnightsUpgrade()
    )
  }
}

class KnightHouseholdCerastusLancerKnightsUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === KnightHouseholdCerastusLancerKnight.type).length === 5) {
      return []
    }

    return [
      KnightHouseholdCerastusLancerKnight
    ]
  }
}

class KnightHouseholdCerastusCastigatorKnightsUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === KnightHouseholdCerastusCastigatorKnight.type).length === 5) {
      return []
    }

    return [
      KnightHouseholdCerastusCastigatorKnight
    ]
  }
}

export class KnightHouseholdCerastusLancerKnights extends KnightHouseholdDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new KnightHouseholdCerastusLancerKnight(this),
      new KnightHouseholdCerastusLancerKnight(this),
      new KnightHouseholdCerastusLancerKnight(this)
    )
    this.setUpgrades(
      new Noble(),
      new KnightHouseholdCerastusLancerKnightsUpgrade()
    )
  }
}


export class KnightHouseholdCerastusCastigatorKnights extends KnightHouseholdDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new KnightHouseholdCerastusCastigatorKnight(this),
      new KnightHouseholdCerastusCastigatorKnight(this),
      new KnightHouseholdCerastusCastigatorKnight(this)
    )
    this.setUpgrades(
      new Noble(),
      new KnightHouseholdCerastusCastigatorKnightsUpgrade()
    )
  }
}

export class KnightHouseholdAcastusKnightPorphyrions extends KnightHouseholdDetachment {
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

export class KnightHouseholdArmigerKnights extends KnightHouseholdDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new KnightHouseholdArmigerKnightUnit(this)
    )
    this.setUpgrades(
      new Aspirants()
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
  }
}

withType(KnightHouseholdQuestorisPaladinKnights)
withType(KnightHouseholdQuestorisErrantKnights)
withType(KnightHouseholdCerastusLancerKnights)
withType(KnightHouseholdCerastusCastigatorKnights)
withType(KnightHouseholdAcastusKnightPorphyrions)
withType(KnightHouseholdArmigerKnights)
