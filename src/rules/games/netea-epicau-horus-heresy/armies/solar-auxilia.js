'use strict'

import Army from './army'
import {
  SolarAuxiliaCommandDetachment,
  SolarAuxiliaVeletarisStormCohort,
  SolarAuxiliaInfantryTercio,
  SolarAuxiliaStrikeCompany,
  SolarAuxiliaOrbitalSupport,
  SolarAuxiliaAssaultGunPlatoon,
  SolarAuxiliaArtilleryTankBattery,
  SolarAuxiliaMalcadorSquadron,
  SolarAuxiliaSuperHeavyTank,
  SolarAuxiliaSuperHeavyTankSquadron,
  SolarAuxiliaCloseSupportSquadron,
  SolarAuxiliaTankHunterSquadron,
  SolarAuxiliaTarantulaBattery,
  SolarAuxiliaAvengerWing,
  SolarAuxiliaPrimarisWing
} from '../detachments/solar-auxilia'
import withType from '../../../../utils/with-type'
import {
  LordsOfWarLimit,
  SupportDetachmentsLimit
} from '../validations'

export default class SolarAuxilia extends Army {
  constructor () {
    super()

    this.lineDetachments = [
      SolarAuxiliaCommandDetachment,
      SolarAuxiliaVeletarisStormCohort,
      SolarAuxiliaInfantryTercio,
      SolarAuxiliaStrikeCompany
    ]
    this.supportDetachments = [
      SolarAuxiliaOrbitalSupport,
      SolarAuxiliaAssaultGunPlatoon,
      SolarAuxiliaArtilleryTankBattery,
      SolarAuxiliaMalcadorSquadron,
      SolarAuxiliaSuperHeavyTank,
      SolarAuxiliaSuperHeavyTankSquadron,
      SolarAuxiliaCloseSupportSquadron,
      SolarAuxiliaTankHunterSquadron,
      SolarAuxiliaTarantulaBattery
    ]
    this.lordsOfWar = [
      SolarAuxiliaAvengerWing,
      SolarAuxiliaPrimarisWing
    ]
    this.validations.push(
      new LordsOfWarLimit(1 / 3),
      new SupportDetachmentsLimit(2)
    )
  }

  getStrategyRating (list) {
    return 3
  }
}

withType(SolarAuxilia)
