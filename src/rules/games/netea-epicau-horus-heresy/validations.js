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
  LegionDreadclaw,
  LegionPrimarchUnit
} from './units/space-marine-legion'
import {
  ImperialMilitiaDisciplineMaster,
  ImperialMilitiaForceCommander,
  ImperialMilitiaRoguePsyker,
  ImperialMilitiaWarriorEliteProvenance,
  ImperialMilitiaSurvivorsOfTheDarkAgeProvenance,
  ImperialMilitiaFeralWarriorsProvenance,
  ImperialMilitiaTraitorsProvenance
} from './units/imperial-militia'
import SpacecraftUnit from './units/spacecraft-unit'
import {
  SupremeCommander
} from './special-rules'
import MultipleChoiceUnit from './units/multiple-choice-unit'

export class Rule {
  init () {

  }

  walkList (list) {

  }

  walkDetachment (detachment) {

  }

  walkUnit (detachment) {

  }

  walkAlly (detachment) {

  }

  collect () {
    return []
  }
}

export class PointsLimitedRule extends Rule {
  init () {
    this.pointsLimited = {}
  }

  walkDetachment (detachment) {
    detachment.constraints.forEach(constraint => {
      if (constraint instanceof LimitedPerPoints) {
        if (!this.pointsLimited[detachment.type]) {
          this.pointsLimited[detachment.type] = {
            code: detachment.code,
            detachments: [],
            constraint,
            count: 0
          }
        }

        this.pointsLimited[detachment.type].count++
        this.pointsLimited[detachment.type].detachments.push(detachment)
      }
    })
  }

  collect (list, t) {
    const cost = list.getCost()
    let errors = false

    Object.values(this.pointsLimited).forEach(type => {
      if (type.count > Math.floor(cost / type.constraint.limit)) {
        errors = true
        const count = t(type.constraint.count)
        const code = t(type.code)
        const limit = type.constraint.limit

        type.detachments.forEach(detachment => {
          detachment.addError(
            <Trans i18nKey='limited-quantity-per-points'>Only {{ count }} {{ code }} detachment is allowed per full {{ limit }} points</Trans>
          )
        })
      }
    })

    return errors
  }
}

export class UniqueRule extends Rule {
  init () {
    this.unique = {}
  }

  walkDetachment (detachment) {
    detachment.constraints.forEach(constraint => {
      if (constraint instanceof Unique) {
        if (!this.unique[detachment.type]) {
          this.unique[detachment.type] = {
            type: detachment,
            detachments: [],
            count: 0
          }
        }

        this.unique[detachment.type].count++
        this.unique[detachment.type].detachments.push(detachment)
      }
    })

    detachment.units.forEach(unit => {
      unit.getRules().forEach(rule => {
        if (rule instanceof Unique) {
          if (!this.unique[unit.type]) {
            this.unique[unit.type] = {
              type: unit,
              detachments: [],
              count: 0
            }
          }

          this.unique[unit.type].count++
          this.unique[detachment.type].detachments.push(unit.detachment)
        }
      })
    })
  }

  collect (list, t) {
    let errors = false

    Object.values(this.unique).forEach(uniqeType => {
      if (uniqeType.count > 1) {
        const type = t(uniqeType.type.code)
        errors = true

        uniqeType.detachments.forEach(detachment => {
          detachment.addError(
            <Trans i18nKey='there-can-be-only-one'>Only 1 {{ type }} is allowed</Trans>
          )
        })
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

  init () {
    this.gods = {
      khorne: {
        count: 0,
        detachments: []
      },
      tzeench: {
        count: 0,
        detachments: []
      },
      slaanesh: {
        count: 0,
        detachments: []
      },
      nurgle: {
        count: 0,
        detachments: []
      }
    }
  }

  walkDetachment (detachment) {
    Object.keys(this.gods).forEach(god => {
      if (detachment.code.includes(god)) {
        this.gods[god].count++
        this.gods[god].detachments.push(detachment)
      }
    })
  }

  walkAlly (ally) {
    Object.keys(this.gods).forEach(god => {
      if (ally.army.code === 'daemonic-hordes') {
        ally.lineDetachments.forEach(detachment => {
          if (detachment.code.includes(god)) {
            this.gods[god].count++
            this.gods[god].detachments.push(detachment)
          }
        })

        ally.supportDetachments.forEach(detachment => {
          if (detachment.code.includes(god)) {
            this.gods[god].count++
            this.gods[god].detachments.push(detachment)
          }
        })

        ally.lordsOfWar.forEach(detachment => {
          if (detachment.code.includes(god)) {
            this.gods[god].count++
            this.gods[god].detachments.push(detachment)
          }
        })
      }
    })
  }

  collect (list, t) {
    let errors = false
    const patron = t(this.patron)

    delete this.gods[this.patron]

    Object.values(this.gods).forEach(god => {
      if (god.count) {
        errors = true
        god.detachments.forEach(detachment => {
          detachment.addError(
            <Trans i18nKey='only-one-patron-god'>You may only include units from the patron god {{ patron }}</Trans>
          )
        })
      }
    })

    return errors
  }
}

export class LordsOfWarLimit extends Rule {
  constructor (limit) {
    super()

    this.limit = limit
  }

  init () {
    this.lordsOfWarCost = 0
    this.alliesCost = 0
  }

  walkList (list) {
    this.lordsOfWarCost = list.lordsOfWar.reduce((acc, curr) => acc + curr.getCost(), 0)
    this.alliesCost = list.allies.reduce((acc, curr) => acc + curr.getCost(), 0)
  }

  collect (list, t) {
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

  init () {
    this.lineDetachments = 0
    this.supportDetachments = 0
  }

  walkList (list) {
    this.lineDetachments = list.lineDetachments.length
    this.supportDetachments = list.supportDetachments.length
  }

  collect (list, t) {
    const errors = []

    if (this.supportDetachments > (this.lineDetachments * this.limit)) {
      errors.push('too-many-support-detachments')
    }

    return errors
  }
}

export class PrimarchsOrLordCommanders extends Rule {
  init () {
    this.primarchs = 0
    this.lordCommanders = 0
    this.detachments = []
  }

  walkUnit (unit) {
    if (unit instanceof LegionLordCommander) {
      this.lordCommanders++
      this.detachments.push(unit.detachment)
    }

    if (unit instanceof LegionPrimarchUnit) {
      this.primarchs++
      this.detachments.push(unit.detachment)
    }
  }

  collect (list, t) {
    let errors = false

    if (this.primarchs && this.lordCommanders) {
      errors = true
      this.detachments.forEach(detachment => {
        detachment.addError(
          'cannot-take-primarch-and-lord-commander'
        )
      })
    }

    return errors
  }
}

export class RequireSpacecraftForDropPods extends Rule {
  init () {
    this.spacecraft = 0
    this.planetfall = 0
  }

  walkUnit (unit) {
    if (unit instanceof MultipleChoiceUnit) {
      unit = unit.getChoice()
    }

    if (unit instanceof SpacecraftUnit) {
      this.spacecraft++
    }

    if (unit instanceof LegionDropPod || unit instanceof LegionDreadclaw) {
      this.planetfall++
    }
  }

  collect (list, t) {
    const errors = []

    if (this.planetfall && !this.spacecraft) {
      errors.push('spacecraft-required')
    }

    return errors
  }
}

export class GreaterDaemonsRequireHordes extends Rule {
  init () {
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

  collect (list, t) {
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
  init () {
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

  collect (list, t) {
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
  init () {
    this.overlords = 0
    this.detachments = []
  }

  walkUnit (unit) {
    if (unit.getChosenWeapons().find(item => item.name === 'daemonic-overlord')) {
      this.overlords++
      this.detachments.push(unit.detachment)
    }
  }

  collect (list, t) {
    if (this.overlords > 1) {
      this.detachments.forEach(detachment => {
        detachment.addError('too-many-daemonic-overlords')
      })

      return true
    }

    return false
  }
}

export class NoAlliedSupremeCommanders extends Rule {
  init () {
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

  collect (list, t) {
    const errors = []

    if (this.alliedSupremeCommanders > 0) {
      errors.push('no-allied-supreme-commanders')
    }

    return errors
  }
}

export class MaxTwoProvenances extends Rule {
  init () {
    this.armyProvenance = {
      warriors: 0,
      survivors: 0,
      feral: 0,
      traitors: 0
    }
    this.detatchments = {}
  }

  walkUnit (unit) {
    if (unit instanceof ImperialMilitiaWarriorEliteProvenance) {
      this.armyProvenance.warriors++
      this.detatchments[unit.detachment.id] = unit.detachment
    }

    if (unit instanceof ImperialMilitiaSurvivorsOfTheDarkAgeProvenance) {
      this.armyProvenance.survivors++
      this.detatchments[unit.detachment.id] = unit.detachment
    }

    if (unit instanceof ImperialMilitiaFeralWarriorsProvenance) {
      this.armyProvenance.feral++
      this.detatchments[unit.detachment.id] = unit.detachment
    }

    if (unit instanceof ImperialMilitiaTraitorsProvenance) {
      this.armyProvenance.traitors++
      this.detatchments[unit.detachment.id] = unit.detachment
    }
  }

  collect (list, t) {
    let provenances = 0

    Object.values(this.armyProvenance)
      .forEach(provenance => {
        if (provenance) {
          provenances++
        }
      })

    if (provenances > 2) {
      Object.values(this.detatchments)
        .forEach(detatchment => {
          detatchment.addError('too-many-provenances')
        })

      return true
    }

    return false
  }
}

export class DaemonicAlliesRequireTraitorProvenance extends Rule {
  init () {
    this.daemonicAllies = false
    this.traitorProvenance = false
  }

  walkUnit (unit) {
    if (unit instanceof ImperialMilitiaTraitorsProvenance) {
      this.traitorProvenance = true
    }
  }

  walkAlly (ally) {
    if (ally.army.code === 'daemonic-hordes') {
      this.daemonicAllies = true
    }
  }

  collect (list, t) {
    const errors = []

    if (this.daemonicAllies && !this.traitorProvenance) {
      errors.push('daemonic-allies-require-at-least-one-detachment-with-traitor-provenance')
    }

    return errors
  }
}

export class OneDisciplineMasterPer500Points extends Rule {
  init () {
    this.disciplineMasters = 0
    this.detachments = {}
  }

  walkDetachment (detachment) {
    detachment.units.forEach(unit => {
      if (unit instanceof ImperialMilitiaDisciplineMaster || unit instanceof ImperialMilitiaRoguePsyker) {
        this.disciplineMasters++
        this.detachments[detachment.id] = detachment
      }
    })
  }

  collect (list, t) {
    const cost = list.getCost()

    if (this.disciplineMasters > Math.ceil(cost / 500)) {
      Object.values(this.detachments).forEach(detachment => {
        detachment.addError(
          'too-many-discipline-masters'
        )
      })

      return true
    }

    return false
  }
}

export class UnitsWithChaosSpawnMustHaveTraitorProvenance extends Rule {
  init () {
    this.detachments = {}
  }

  walkUnit (unit) {
    let hasChaosSpawnMutations = false
    let hasTraitorProvenance = false

    unit.getChosenWeapons().forEach(weapon => {
      if (weapon.name === 'chaos-spawn-mutations') {
        hasChaosSpawnMutations = true
      }

      unit.detachment.units.forEach(unit => {
        if (unit instanceof ImperialMilitiaTraitorsProvenance) {
          hasTraitorProvenance = true
        }
      })
    })

    if (hasChaosSpawnMutations && !hasTraitorProvenance) {
      this.detachments[unit.detachment.id] = unit.detachment
    }
  }

  collect (list, t) {
    Object.values(this.detachments).forEach(detachment => {
      detachment.addError(
        'units-with-chaos-spawn-mutations-must-have-traitor-provenance'
      )
    })

    return Boolean(Object.keys(this.detachments).length)
  }
}

export class DetachmentsWithRoguePsykersMustHaveTraitorProvenance extends Rule {
  init () {
    this.errors = false
  }

  walkDetachment (detachment) {
    let hasTraitorProvenance = false
    let hasRoguePsykers = false

    detachment.units.forEach(unit => {
      if (unit instanceof ImperialMilitiaRoguePsyker) {
        hasRoguePsykers = true
      }

      if (unit instanceof ImperialMilitiaTraitorsProvenance) {
        hasTraitorProvenance = true
      }
    })

    if (hasRoguePsykers && !hasTraitorProvenance) {
      detachment.addError(
        'detachment-with-rogue-psyker-must-have-traitor-provenance'
      )

      this.errors = true
    }
  }

  collect (list, t) {
    return this.errors
  }
}

export class ForceCommanderShouldHaveFirstDisciplineMaster extends Rule {
  init () {
    this.hasDisciplineMasters = false
    this.forceCommandersWithoutDisciplineMasters = []
    this.detachmentsWithDisciplineMasters = []
  }

  walkDetachment (detachment) {
    let hasForceCommander = false
    let hasDisiplineMaster = false

    detachment.units.forEach(unit => {
      if (unit instanceof ImperialMilitiaForceCommander) {
        hasForceCommander = true
      }

      if (unit instanceof ImperialMilitiaDisciplineMaster || unit instanceof ImperialMilitiaRoguePsyker) {
        hasDisiplineMaster = true
      }
    })

    if (hasForceCommander && !hasDisiplineMaster) {
      this.forceCommandersWithoutDisciplineMasters.push(detachment)
    }

    if (hasDisiplineMaster) {
      this.hasDisciplineMasters = true

      if (!hasForceCommander) {
        this.detachmentsWithDisciplineMasters.push(detachment)
      }
    }
  }

  collect (list, t) {
    if (this.hasDisciplineMasters && this.forceCommandersWithoutDisciplineMasters.length) {
      this.forceCommandersWithoutDisciplineMasters.forEach(detachment => {
        detachment.addError(
          'force-commander-should-have-discipline-master'
        )
      })
      this.detachmentsWithDisciplineMasters.forEach(detachment => {
        detachment.addError(
          'force-commander-should-have-discipline-master'
        )
      })

      return true
    }

    return false
  }
}
