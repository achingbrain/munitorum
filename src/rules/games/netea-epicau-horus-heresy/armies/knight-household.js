'use strict'

import Army from './army'
import {
  KnightHouseholdQuestorisKnights,
  KnightHouseholdCerastusKnights,
  KnightHouseholdAcastusKnightPorphyrions
} from '../detachments/knight-household'
import {
  KnightHouseholdSeneschal
} from '../units/knight-household'
import withType from '../../../../utils/with-type'

class KnightHousehold extends Army {
  constructor () {
    super()

    this.lineDetachments = [
      KnightHouseholdQuestorisKnights
    ]
    this.supportDetachments = [
      KnightHouseholdCerastusKnights
    ]
    this.lordsOfWar = [
      KnightHouseholdAcastusKnightPorphyrions
    ]
  }

  validate (list, t) {
    const errors = super.validate(list, t)

    let seneschals = 0

    const test = (detachment) => {
      detachment.units.forEach(unit => {
        if (unit instanceof KnightHouseholdSeneschal) {
          seneschals++
        }
      })
    }

    list.lineDetachments.forEach(test)
    list.supportDetachments.forEach(test)
    list.lordsOfWar.forEach(test)

    const cost = list.getCost()
    const lordsOfWarCost = list.lordsOfWar.reduce((acc, curr) => {
      return acc + curr.getCost()
    }, 0)

    if (lordsOfWarCost > (cost / 3)) {
      errors.push('too-many-lords-of-war')
    }

    if (list.supportDetachments.length > (list.lineDetachments.length * 2)) {
      errors.push('too-many-support-detachments')
    }

    if (seneschals > 1) {
      errors.push('too-many-support-seneschals')
    }

    return errors
  }

  getStrategyRating (list) {
    return 3
  }
}

export default withType(KnightHousehold)
