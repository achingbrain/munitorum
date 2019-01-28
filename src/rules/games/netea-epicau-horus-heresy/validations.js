'use strict'

import React from 'react'
import { Trans } from 'react-i18next'
import {
  LimitedPerPoints,
  Unique
} from './constraints'
import {
  LegionLordCommander,
  LegionDropPod,
  LegionDreadclaw
} from './units/space-marine-legion'
import {
  ImperialMilitiaDisciplineMaster,
  ImperialMilitiaForceCommander,
  ImperialMilitiaRoguePsyker,
  ImperialMilitiaUnit,
  WarriorElite,
  SurvivorsOfTheDarkAge,
  FeralWarriors,
  Traitors
} from './units/imperial-militia'
import SpacecraftUnit from './units/spacecraft-unit'
import PrimarchUnit from './units/primarch-unit'
import {
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

export class RequireSpacecraftForDropPods extends Rule {
  reset () {
    this.spacecraft = 0
    this.planetfall = 0
  }

  walkUnit (unit) {
    if (unit instanceof SpacecraftUnit) {
      this.spacecraft++
    }

    if (unit instanceof LegionDropPod || unit instanceof LegionDreadclaw) {
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

export class MaxTwoProvenances extends Rule {
  reset () {
    this.armyProvenance = {
      warriors: 0,
      survivors: 0,
      feral: 0,
      traitors: 0
    }
  }

  walkUnit (unit) {
    unit.getChosenWeapons().forEach(weapon => {
      if (weapon instanceof WarriorElite) {
        this.armyProvenance.warriors++
      }

      if (weapon instanceof SurvivorsOfTheDarkAge) {
        this.armyProvenance.survivors++
      }

      if (weapon instanceof FeralWarriors) {
        this.armyProvenance.feral++
      }

      if (weapon instanceof Traitors) {
        this.armyProvenance.traitors++
      }
    })
  }

  getErrors (list, t) {
    const errors = []

    let provenances = 0

    Object.values(this.armyProvenance)
      .forEach(provenance => {
        if (provenance) {
          provenances++
        }
      })

    if (provenances > 2) {
      errors.push('too-many-provenances')
    }

    return errors
  }
}

export class DaemonicAlliesRequireTraitorProvenance extends Rule {
  reset () {
    this.daemonicAllies = false
    this.traitorProvenance = false
  }

  walkUnit (unit) {
    unit.getChosenWeapons().forEach(weapon => {
      if (weapon instanceof Traitors) {
        this.traitorProvenance = true
      }
    })
  }

  walkAlly (ally) {
    if (ally.army.code === 'daemonic-hordes') {
      this.daemonicAllies = true
    }
  }

  getErrors (list, t) {
    const errors = []

    if (this.daemonicAllies && !this.traitorProvenance) {
      errors.push('daemonic-allies-require-at-least-one-detachment-with-traitor-provenance')
    }

    return errors
  }
}

export class OneDisciplineMasterPer500Points extends Rule {
  reset () {
    this.disciplineMasters = 0
  }

  walkUnit (unit) {
    if (unit instanceof ImperialMilitiaDisciplineMaster) {
      this.disciplineMasters++
    }
  }

  getErrors (list, t) {
    const errors = []
    const cost = list.getCost()

    if (this.disciplineMasters > Math.ceil(cost / 500)) {
      errors.push('too-many-discipline-masters')
    }

    return errors
  }
}

export class AllUnitsInDetachmentMustSelectSameProvenance extends Rule {
  reset () {
    this.provenances = {}
  }

  walkUnit (unit) {
    if (!this.provenances[unit.detachment.id]) {
      this.provenances[unit.detachment.id] = {
        eligible: 0,
        provenances: {
          warriors: 0,
          survivors: 0,
          feral: 0,
          traitors: 0
        }
      }
    }

    if (unit instanceof ImperialMilitiaUnit) {
      this.provenances[unit.detachment.id].eligible++
    }

    unit.getChosenWeapons().forEach(weapon => {
      if (weapon instanceof WarriorElite) {
        this.provenances[unit.detachment.id].provenances.warriors++
      }

      if (weapon instanceof SurvivorsOfTheDarkAge) {
        this.provenances[unit.detachment.id].provenances.survivors++
      }

      if (weapon instanceof FeralWarriors) {
        this.provenances[unit.detachment.id].provenances.feral++
      }

      if (weapon instanceof Traitors) {
        this.provenances[unit.detachment.id].provenances.traitors++
      }
    })
  }

  getErrors (list, t) {
    const errors = []

    Object.values(this.provenances)
      .forEach(detachment => {
        const provenances = Object.values(detachment.provenances)
          .reduce((acc, curr) => acc + curr, 0)

        if (detachment.eligible !== provenances) {
          errors.push('all-detachment-units-must-select-provenance')
        }
      })

    return errors
  }
}

export class UnitsWithChaosSpawnMustHaveTraitorProvenance extends Rule {
  reset () {
    this.errors = []
  }

  walkUnit (unit) {
    let hasChaosSpawnMutations = false
    let hasTraitorProvenance = false

    unit.getChosenWeapons().forEach(weapon => {
      if (weapon.name === 'chaos-spawn-mutations') {
        hasChaosSpawnMutations = true
      }

      if (weapon instanceof Traitors) {
        hasTraitorProvenance = true
      }
    })

    if (hasChaosSpawnMutations && !hasTraitorProvenance) {
      this.errors.push('units-with-chaos-spawn-mutations-must-have-traitor-provenance')
    }
  }

  getErrors (list, t) {
    return this.errors.slice()
  }
}

export class DetachmentsWithRoguePsykersMustHaveTraitorProvenance extends Rule {
  reset () {
    this.detachments = {}
  }

  walkUnit (unit) {
    if (unit instanceof ImperialMilitiaRoguePsyker) {
      this.detachments[unit.detachment.id] = {
        hasPsyker: true
      }

      unit.detachments.units.forEach(unit => {
        unit.getChosenWeapons().forEach(weapon => {
          if (weapon instanceof Traitors) {
            this.hasTraitorProvenance = true

            this.detachments[unit.detachment.id] = {
              isTraitor: true
            }
          }
        })
      })
    }
  }

  getErrors (list, t) {
    const errors = []

    Object.values(this.detachments)
      .forEach(detachment => {
        if (detachment.hasPsyker && !detachment.hasTraitorProvenance) {
          errors.push('detachment-with-rogue-psyker-must-have-traitor-provenance')
        }
      })

    return errors
  }
}

export class ForceCommanderShouldHaveFirstDisciplineMaster extends Rule {
  reset () {
    this.hasDisiplineMaster = false
    this.forceCommanderHasDisciplineMaster = false
  }

  walkUnit (unit) {
    if (unit instanceof ImperialMilitiaForceCommander && unit.detachment.units.find(unit => unit instanceof ImperialMilitiaDisciplineMaster)) {
      this.forceCommanderHasDisciplineMaster = true
    }

    if (unit instanceof ImperialMilitiaDisciplineMaster) {
      this.hasDisiplineMaster = true
    }
  }

  getErrors (list, t) {
    const errors = []

    if (this.hasDisiplineMaster && !this.forceCommanderHasDisciplineMaster) {
      errors.push('force-commander-should-have-discipline-master')
    }

    return errors
  }
}
