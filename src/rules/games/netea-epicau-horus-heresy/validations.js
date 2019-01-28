'use strict'

import React from 'react'
import { Trans } from 'react-i18next'
import {
  LimitedPerPoints,
  Unique
} from './constraints'
import {
  LegionLordCommander
} from './units/space-marine-legion'
import SpacecraftUnit from './units/spacecraft-unit'
import PrimarchUnit from './units/primarch-unit'
import {
  Planetfall,
  SupremeCommander
} from './special-rules'

export class Rule {
  reset () {

  }

  walkList (list) {

  }

  walkDetachment (detachment) {

  }

  walkUnit (detachment) {

  }

  walkAlly (detachment) {

  }

  getErrors (list, t) {
    return []
  }
}

export class PointsLimitedRule extends Rule {
  reset () {
    this.pointsLimited = {}
  }

  walkDetachment (detachment) {
    detachment.constraints.forEach(constraint => {
      if (constraint instanceof LimitedPerPoints) {
        if (!this.pointsLimited[detachment.type]) {
          this.pointsLimited[detachment.type] = {
            type: detachment,
            constraint,
            count: 0
          }
        }

        this.pointsLimited[detachment.type].count++
      }
    })
  }

  getErrors (list, t) {
    const errors = []
    const cost = list.getCost()

    Object.keys(this.pointsLimited).forEach(key => {
      const type = this.pointsLimited[key]

      if (type.count > Math.floor(cost / type.constraint.limit)) {
        const count = t(type.constraint.count)
        const code = t(type.type.code)
        const limit = type.constraint.limit

        errors.push(
          <Trans i18nKey='limited-quantity-per-points'>Only {{ count }} {{ code }} detachment is allowed per full {{ limit }} points</Trans>
        )
      }
    })

    return errors
  }
}

export class UniqueRule extends Rule {
  reset () {
    this.unique = {}
  }

  walkDetachment (detachment) {
    detachment.constraints.forEach(constraint => {
      if (constraint instanceof Unique) {
        if (!this.unique[detachment.type]) {
          this.unique[detachment.type] = {
            type: detachment,
            count: 0
          }
        }

        this.unique[detachment.type].count++
      }
    })

    detachment.units.forEach(unit => {
      unit.getRules().forEach(rule => {
        if (rule instanceof Unique) {
          if (!this.unique[unit.type]) {
            this.unique[unit.type] = {
              type: unit,
              count: 0
            }
          }

          this.unique[unit.type].count++
        }
      })
    })
  }

  getErrors (list, t) {
    const errors = []

    Object.keys(this.unique).forEach(key => {
      const uniqeType = this.unique[key]

      if (uniqeType.count > 1) {
        const type = t(uniqeType.type.code)

        errors.push(
          <Trans i18nKey='there-can-be-only-one'>Only 1 {{ type }} is allowed</Trans>
        )
      }
    })

    return errors
  }
}

export class SingleDaemonicPatron extends Rule {
  constructor (patron) {
    super()

    this.patron = patron
  }

  reset () {
    this.gods = {
      khorne: 0,
      tzeench: 0,
      slaanesh: 0,
      nurgle: 0
    }
  }

  walkDetachment (detachment) {
    Object.keys(this.gods).forEach(god => {
      if (detachment.code.includes(god)) {
        this.gods[god]++
      }
    })
  }

  walkAlly (ally) {
    Object.keys(this.gods).forEach(god => {
      if (ally.army.code === 'daemonic-hordes') {
        ally.lineDetachments.forEach(detachment => {
          if (detachment.code.includes(god)) {
            this.gods[god]++
          }
        })

        ally.supportDetachments.forEach(detachment => {
          if (detachment.code.includes(god)) {
            this.gods[god]++
          }
        })

        ally.lordsOfWar.forEach(detachment => {
          if (detachment.code.includes(god)) {
            this.gods[god]++
          }
        })
      }
    })
  }

  getErrors (list, t) {
    const errors = []

    delete this.gods[this.patron]

    const count = Object.keys(this.gods)
      .map(key => this.gods[key])
      .reduce((acc, curr) => acc + curr, 0)

    const patron = t(this.patron)

    if (count > 0) {
      errors.push(
        <Trans i18nKey='only-one-patron-god'>You may only include units from the patron god {{ patron }}</Trans>
      )
    }

    return errors
  }
}

export class LordsOfWarLimit extends Rule {
  constructor (limit) {
    super()

    this.limit = limit
  }

  reset () {
    this.lordsOfWarCost = 0
    this.alliesCost = 0
  }

  walkList (list) {
    this.lordsOfWarCost = list.lordsOfWar.reduce((acc, curr) => acc + curr.getCost(), 0)
    this.alliesCost = list.allies.reduce((acc, curr) => acc + curr.getCost(), 0)
  }

  getErrors (list, t) {
    const errors = []
    const cost = list.getCost()

    if ((this.lordsOfWarCost + this.alliesCost) > (cost * this.limit)) {
      errors.push('too-many-lords-of-war-or-allies')
    }

    return errors
  }
}

export class SupportDetachmentsLimit extends Rule {
  constructor (limit) {
    super()

    this.limit = limit
  }

  reset () {
    this.lineDetachments = 0
    this.supportDetachments = 0
  }

  walkList (list) {
    this.lineDetachments = list.lineDetachments.length
    this.supportDetachments = list.supportDetachments.length
  }

  getErrors (list, t) {
    const errors = []

    if (this.supportDetachments > (this.lineDetachments * this.limit)) {
      errors.push('too-many-support-detachments')
    }

    return errors
  }
}

export class PrimarchsOrLordCommanders extends Rule {
  reset () {
    this.primarchs = 0
    this.lordCommanders = 0
  }

  walkUnit (unit) {
    if (unit instanceof LegionLordCommander) {
      this.lordCommanders++
    }

    if (unit instanceof PrimarchUnit) {
      this.primarchs++
    }
  }

  getErrors (list, t) {
    const errors = []

    if (this.primarchs && this.lordCommanders) {
      errors.push('cannot-take-primarch-and-lord-commander')
    }

    return errors
  }
}

export class RequireSpacecraftForPlanetfall extends Rule {
  reset () {
    this.spacecraft = 0
    this.planetfall = 0
  }

  walkUnit (unit) {
    if (unit instanceof SpacecraftUnit) {
      this.spacecraft++
    }

    if (unit.getRules().find(rule => rule instanceof Planetfall)) {
      this.planetfall++
    }
  }

  getErrors (list, t) {
    const errors = []

    if (this.planetfall && !this.spacecraft) {
      errors.push('spacecraft-required')
    }

    return errors
  }
}

export class GreaterDaemonsRequireHordes extends Rule {
  reset () {
    this.greaterDaemons = {
      khorne: 0,
      tzeench: 0,
      slaanesh: 0,
      nurgle: 0
    }
    this.hordes = {
      khorne: 0,
      tzeench: 0,
      slaanesh: 0,
      nurgle: 0
    }
  }

  walkDetachment (detachment) {
    Object.keys(this.greaterDaemons).forEach(god => {
      if (detachment.getName().includes(`${god}-greater-daemon-horde`)) {
        this.greaterDaemons[god]++
      }

      if (detachment.getName().includes(`${god}-horde`)) {
        this.hordes[god]++
      }
    })
  }

  getErrors (list, t) {
    const errors = []

    Object.keys(this.greaterDaemons).forEach(god => {
      if (this.greaterDaemons[god] && this.greaterDaemons[god] > this.hordes[god]) {
        errors.push('greater-daemons-require-patron-hordes')
      }
    })

    return errors
  }
}

export class FollowersRequireHordes extends Rule {
  reset () {
    this.followers = {
      khorne: 0,
      tzeench: 0,
      slaanesh: 0,
      nurgle: 0,
      undivided: 0
    }
    this.hordes = {
      khorne: 0,
      tzeench: 0,
      slaanesh: 0,
      nurgle: 0,
      undivided: 0
    }
  }

  walkDetachment (detachment) {
    Object.keys(this.followers).forEach(god => {
      if (detachment.getName().includes(`${god}-followers`)) {
        this.followers[god]++
      }

      if (detachment.getName().includes(`${god}-horde`)) {
        this.hordes[god]++
      }
    })
  }

  getErrors (list, t) {
    const errors = []

    Object.keys(this.followers).forEach(god => {
      if (this.followers[god] && this.followers[god] > this.hordes[god]) {
        errors.push('not-enough-daemon-hordes')
      }
    })

    return errors
  }
}

export class OnlyOneDaemonicOverlord extends Rule {
  reset () {
    this.overlords = 0
  }

  walkUnit (unit) {
    this.overlords += unit
      .getChosenWeapons()
      .filter(weapon => weapon.name === 'daemonic-overlord')
      .length
  }

  getErrors (list, t) {
    const errors = []

    if (this.overlords > 1) {
      errors.push('too-many-daemonic-overlords')
    }

    return errors
  }
}

export class NoAlliedSupremeCommanders extends Rule {
  reset () {
    this.alliedSupremeCommanders = 0
  }

  walkAlly (ally) {
    const test = (detachments) => {
      detachments.forEach(detachment => {
        detachment.units.forEach(unit => {
          unit.getRules().forEach(rule => {
            if (rule instanceof SupremeCommander) {
              this.alliedSupremeCommanders++
            }
          })
        })
      })
    }

    test(ally.lineDetachments)
    test(ally.supportDetachments)
    test(ally.lordsOfWar)
  }

  getErrors (list, t) {
    const errors = []

    if (this.alliedSupremeCommanders > 0) {
      errors.push('no-allied-supreme-commanders')
    }

    return errors
  }
}
