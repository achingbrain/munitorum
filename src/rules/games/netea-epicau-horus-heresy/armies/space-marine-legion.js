'use strict'

import Army from './army'
import {
  LegionTacticalDetachment,
  LegionTerminatorDetachment,
  LegionAssaultDetachment,
  LegionBreacherDetachment,
  LegionArtilleryBattery,
  LegionAssaultSupportDetachment,
  LegionBreacherSupportDetachment,
  LegionDreadnoughtTalon,
  LegionLeviathanDreadnoughtTalon,
  LegionDestroyerDetachment,
  LegionContemptorDreadnoughtTalon,
  LegionJavelinAttackSpeederSquadron,
  LegionLandSpeederSquadron,
  LegionLandRaiderPhobosSquadron,
  LegionLandRaiderProteusSquadron,
  LegionOutriderSquadron,
  LegionPredatorStrikeSquadron,
  LegionRapierWeaponsBattery,
  LegionReconnaissanceDetachment,
  LegionSicaranBattleTankSquadron,
  LegionSkyHunterAttackSquadron,
  LegionStormEagleAttackWing,
  LegionSpacecraft,
  LegionThunderhawkGunshipWing,
  LegionThunderhawkTransporterWing,
  LegionVindicatorSquadron,
  LegionGunshipWing,
  LegionInterceptorAttackWing,
  LegionStormbirdWing,
  LegionSuperHeavyTank,
  LegionSuperHeavyTankDestroyer,
  LegionSuperHeavyTankBattery
} from '../detachments/space-marine-legion'
import {
  LegionLordCommander,
  LegionSpacecraftUnit
} from '../units/space-marine-legion'
import PrimarchUnit from '../units/primarch-unit'
import {
  Planetfall
} from '../special-rules'

class SpaceMarineLegion extends Army {
  constructor (game, name) {
    super(game, name)

    this.lineDetachments = [
      LegionTacticalDetachment,
      LegionTerminatorDetachment,
      LegionAssaultDetachment,
      LegionBreacherDetachment
    ]

    this.supportDetachments = [
      LegionArtilleryBattery,
      LegionAssaultSupportDetachment,
      LegionBreacherSupportDetachment,
      LegionDreadnoughtTalon,
      LegionLeviathanDreadnoughtTalon,
      LegionDestroyerDetachment,
      LegionContemptorDreadnoughtTalon,
      LegionJavelinAttackSpeederSquadron,
      LegionLandSpeederSquadron,
      LegionLandRaiderPhobosSquadron,
      LegionLandRaiderProteusSquadron,
      LegionOutriderSquadron,
      LegionPredatorStrikeSquadron,
      LegionRapierWeaponsBattery,
      LegionReconnaissanceDetachment,
      LegionSicaranBattleTankSquadron,
      LegionSkyHunterAttackSquadron,
      LegionStormEagleAttackWing,
      LegionSpacecraft,
      LegionThunderhawkGunshipWing,
      LegionThunderhawkTransporterWing,
      LegionVindicatorSquadron
    ]

    this.lordsOfWar = [
      LegionGunshipWing,
      LegionInterceptorAttackWing,
      LegionStormbirdWing,
      LegionSuperHeavyTank,
      LegionSuperHeavyTankDestroyer,
      LegionSuperHeavyTankBattery
    ]
  }

  validate (list, t) {
    const errors = super.validate(list, t)

    let lordCommanders = 0
    let primarchs = 0
    let spacecraft = 0
    let planetfall = 0

    const test = (detachment) => {
      detachment.units.forEach(unit => {
        if (unit instanceof LegionLordCommander) {
          lordCommanders++
        }

        if (unit instanceof LegionSpacecraftUnit) {
          spacecraft++
        }

        if (unit.getRules().find(rule => rule instanceof Planetfall)) {
          planetfall++
        }

        if (unit instanceof PrimarchUnit) {
          primarchs++
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

    if (list.supportDetachments.length > (list.lineDetachments.length * 3)) {
      errors.push('too-many-support-detachments')
    }

    if (planetfall && !spacecraft) {
      errors.push('spacecraft-required')
    }

    if (lordCommanders && primarchs) {
      errors.push('cannot-take-primarch-and-lord-commander')
    }

    return errors
  }
}

export default SpaceMarineLegion
