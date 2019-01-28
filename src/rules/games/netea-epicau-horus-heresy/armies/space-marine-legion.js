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
  LordsOfWarLimit,
  SupportDetachmentsLimit,
  PrimarchsOrLordCommanders,
  RequireSpacecraftForPlanetfall
} from '../validations'

export default class SpaceMarineLegion extends Army {
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
    this.allies = []
    this.validations.push(
      new LordsOfWarLimit(1 / 3),
      new SupportDetachmentsLimit(3),
      new PrimarchsOrLordCommanders(),
      new RequireSpacecraftForPlanetfall()
    )
  }

  getStrategyRating (list) {
    return 5
  }
}
