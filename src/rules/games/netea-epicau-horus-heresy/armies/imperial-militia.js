'use strict'

import Army from './army'
import {
  ImperialMilitiaCommandSquad,
  ImperialMilitiaInfantrySquad,
  ImperialMilitiaLevySquad,
  ImperialMilitiaMotorcycleSquad,
  ImperialMilitiaGrenedierSquad,
  ImperialMilitiaOrbitalSupport,
  ImperialMilitiaCavalrySquad,
  ImperialMilitiaHeavyOrdnanceBattery,
  ImperialMilitiaMalcadorHeavyTankSquadron,
  ImperialMilitiaRapierBattery,
  ImperialMilitiaSentinelScoutSquadron,
  ImperialMilitiaSuperHeavyTank,
  ImperialMilitiaBattleTankSquadron,
  ImperialMilitiaSuperHeavyTankPlatoon,
  ImperialMilitiaAvengerWing,
  ImperialMilitiaPrimarisWing
} from '../detachments/imperial-militia'
import {
  ImperialMilitiaUnit,
  WarriorElite,
  SurvivorsOfTheDarkAge,
  FeralWarriors,
  Traitors,
  ImperialMilitiaRoguePsyker,
  ImperialMilitiaDisciplineMaster,
  ImperialMilitiaForceCommander
} from '../units/imperial-militia'
import AlphaLegion from './alpha-legion'
import BloodAngels from './blood-angels'
import DarkAngels from './dark-angels'
import DeathGuard from './death-guard'
import EmperorsChildren from './emperors-children'
import ImperialFists from './imperial-fists'
import IronHands from './iron-hands'
import IronWarriors from './iron-warriors'
import NightLords from './night-lords'
import RavenGuard from './raven-guard'
import Salamanders from './salamanders'
import SonsOfHorus from './sons-of-horus'
import SpaceWolves from './space-wolves'
import ThousandSons from './thousand-sons'
import Ultramarines from './ultramarines'
import WhiteScars from './white-scars'
import WordBearers from './word-bearers'
import WorldEaters from './world-eaters'
import LegioTitanicus from './legio-titanicus'
import SolarAuxilia from './solar-auxilia'
import MechanicumTaghmata from './mechanicum-taghmata'
import KnightHousehold from './knight-household'
import DaemonicHordes from './daemonic-hordes'
import withType from '../../../../utils/with-type'

export default class ImperialMilitia extends Army {
  constructor () {
    super()

    this.lineDetachments = [
      ImperialMilitiaCommandSquad,
      ImperialMilitiaLevySquad,
      ImperialMilitiaMotorcycleSquad,
      ImperialMilitiaGrenedierSquad,
      ImperialMilitiaInfantrySquad
    ]
    this.supportDetachments = [
      ImperialMilitiaOrbitalSupport,
      ImperialMilitiaCavalrySquad,
      ImperialMilitiaHeavyOrdnanceBattery,
      ImperialMilitiaMalcadorHeavyTankSquadron,
      ImperialMilitiaRapierBattery,
      ImperialMilitiaSentinelScoutSquadron,
      ImperialMilitiaSuperHeavyTank,
      ImperialMilitiaBattleTankSquadron
    ]
    this.lordsOfWar = [
      ImperialMilitiaSuperHeavyTankPlatoon,
      ImperialMilitiaAvengerWing,
      ImperialMilitiaPrimarisWing
    ]
    this.allies.push(
      AlphaLegion,
      BloodAngels,
      DarkAngels,
      DeathGuard,
      EmperorsChildren,
      ImperialFists,
      IronHands,
      IronWarriors,
      NightLords,
      RavenGuard,
      Salamanders,
      SonsOfHorus,
      SpaceWolves,
      ThousandSons,
      Ultramarines,
      WhiteScars,
      WordBearers,
      WorldEaters,
      LegioTitanicus,
      SolarAuxilia,
      MechanicumTaghmata,
      KnightHousehold,
      DaemonicHordes
    )
  }

  validate (list, t) {
    const errors = super.validate(list, t)

    let armyProvenance = {
      warriors: 0,
      survivors: 0,
      feral: 0,
      traitors: 0
    }
    let armyDisciplineMasters = 0
    let armyHasForceCommander
    let forceCommanderHasDisciplineMaster

    const test = (detachment) => {
      let provenanceUnits = 0
      let detachmentProvenance = {
        warriors: 0,
        survivors: 0,
        feral: 0,
        traitors: 0
      }
      let detachmentHasForceCommander
      let detachmentHasRoguePsyker
      let detachmentHasDisciplineMaster

      detachment.units.forEach(unit => {
        if (unit instanceof ImperialMilitiaRoguePsyker) {
          detachmentHasRoguePsyker = true
          armyDisciplineMasters++

          if (detachmentHasForceCommander) {
            forceCommanderHasDisciplineMaster = true
          }
        }

        if (unit instanceof ImperialMilitiaDisciplineMaster) {
          armyDisciplineMasters++
          detachmentHasDisciplineMaster = true

          if (detachmentHasForceCommander) {
            forceCommanderHasDisciplineMaster = true
          }
        }

        if (unit instanceof ImperialMilitiaForceCommander) {
          armyHasForceCommander = true
          detachmentHasForceCommander = true

          if (detachmentHasDisciplineMaster) {
            forceCommanderHasDisciplineMaster = true
          }
        }

        const weapons = unit.getChosenWeapons()

        if (unit instanceof ImperialMilitiaUnit) {
          provenanceUnits++
        }

        let hasChaosSpawnMutations
        let hasTraitorProvenance

        weapons.forEach(weapon => {
          if (weapon instanceof WarriorElite) {
            detachmentProvenance.warriors++
          }

          if (weapon instanceof SurvivorsOfTheDarkAge) {
            detachmentProvenance.survivors++
          }

          if (weapon instanceof FeralWarriors) {
            detachmentProvenance.feral++
          }

          if (weapon instanceof Traitors) {
            detachmentProvenance.traitors++
            hasTraitorProvenance = true
          }

          if (weapon.name === 'chaos-spawn-mutations') {
            hasChaosSpawnMutations = true
          }
        })

        if (hasChaosSpawnMutations && !hasTraitorProvenance && !errors.includes('units-with-chaos-spawn-mutations-must-have-traitor-provenance')) {
          errors.push('units-with-chaos-spawn-mutations-must-have-traitor-provenance')
        }
      })

      // store army-wide provenances
      Object.keys(detachmentProvenance)
        .forEach(key => {
          armyProvenance[key] += detachmentProvenance[key]
        })

      // validate detachment provenance
      const chosenProvenance = Object.keys(detachmentProvenance)
        .map(key => detachmentProvenance[key])
        .find(count => count > 0)

      if (chosenProvenance && chosenProvenance !== provenanceUnits && !errors.includes('all-detachment-units-must-select-provenance')) {
        errors.push('all-detachment-units-must-select-provenance')
      }

      if (detachmentHasRoguePsyker && !detachmentProvenance.traitors) {
        errors.push('detachment-with-rogue-psyker-must-have-traitor-provenance')
      }

      if (armyHasForceCommander && detachmentHasDisciplineMaster && !forceCommanderHasDisciplineMaster) {

      }
    }

    list.lineDetachments.forEach(test)
    list.supportDetachments.forEach(test)
    list.lordsOfWar.forEach(test)

    let daemonicAllies = false

    list.allies.forEach((ally) => {
      if (ally instanceof DaemonicHordes) {
        daemonicAllies = true
      }
    })

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

    const numDifferentProvenances = Object.keys(armyProvenance)
      .map(key => armyProvenance[key])
      .reduce((acc, curr) => curr > 0 ? acc + 1 : acc, 0)

    if (numDifferentProvenances > 2) {
      errors.push('too-many-provenances')
    }

    if (armyDisciplineMasters > Math.ceil(cost / 500)) {
      errors.push('too-many-discipline-masters')
    }

    if (armyDisciplineMasters > 0 && armyHasForceCommander && !forceCommanderHasDisciplineMaster) {
      errors.push('force-commander-should-have-discipline-master')
    }

    if (daemonicAllies && !armyProvenance.traitors) {
      errors.push('daemonic-allies-require-at-least-one-detachment-with-traitor-provenance')
    }

    return errors
  }

  getStrategyRating (list) {
    return 2
  }
}

withType(ImperialMilitia)
