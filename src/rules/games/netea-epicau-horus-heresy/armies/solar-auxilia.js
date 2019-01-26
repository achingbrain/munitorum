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

class SolarAuxilia extends Army {
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
  }

  validate (list, t) {
    const errors = super.validate(list, t)

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

    return errors
  }
}

export default withType(SolarAuxilia)
