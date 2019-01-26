'use strict'

import {
  LegionWhirlwindHyperios,
  LegionRapier,
  LegionDreadnought,
  LegionContemptorDreadnought,
  LegionDeredeoDreadnought,
  LegionLeviathanDreadnought,
  LegionVindicator,
  LegionVindicatorLaserDestroyer,
  LegionPredator,
  LegionPredatorInfernus,
  LegionPredatorExecutioner,
  LegionWhirlwindScorpius,
  LegionSicaran,
  LegionTyphon,
  LegionCerberus,
  LegionRhino,
  LegionDropPod,
  LegionDreadclaw,
  LegionCaestus,
  LegionKharybdis,
  LegionLandRaiderProteusTransport,
  LegionLandRaiderPhobosTransport,
  LegionLandRaiderAchillesTransport,
  LegionTeleport,
  LegionSpartan,
  LegionMastodon,
  LegionLibrarian,
  LegionChaplain,
  LegionChampion,
  LegionLordCommander,
  LegionLieutenantCommander
} from './units/space-marine-legion'
import {
  LegioTitanicusVeteranPrinceps,
  LegioTitanicusLegate,
  LegioTitanicusAirDefence,
  LegioTitanicusSacredIcon
} from './units/legio-titanicus'
import {
  LegioCustodesCaptainGeneral,
  LegioCustodesTribune,
  LegioCustodesCoronusGravCarrier
} from './units/legio-custodes'
import {
  ImperialMilitiaGorgon,
  ImperialMilitiaArvusLighter,
  ImperialMilitiaRhino,
  ImperialMilitiaLandRaiderProteus,
  ImperialMilitiaFireSupport,
  ImperialMilitiaSupportAuxiliaries,
  ImperialMilitiaReconAuxiliaries,
  ImperialMilitiaOgrynBruteSquad
} from './units/imperial-militia'
import {
  MechanicumTaghmataKriosUpgrade,
  MechanicumTaghmataArchmagosPrime,
  MechanicumTaghmataMagosPrime,
  MechanicumTaghmataScyllax,
  MechanicumTaghmataTriaros,
  MechanicumTaghmataLandRaider,
  MechanicumTaghmataTechPriestUpgrade,
  MechanicumTaghmataThanatarUpgrade
} from './units/mechanicum-taghmata'
import {
  KnightHouseholdLordScion,
  KnightHouseholdPreceptor,
  KnightHouseholdSeneschal,
  KnightHouseholdAspirants,
  KnightHouseholdScionsOfUhlan
} from './units/knight-household'
import {
  SolarAuxiliaOgrynCharoniteSquad,
  SolarAuxiliaInfantrySupportTankUnit,
  SolarAuxiliaRapier
} from './units/solar-auxilia'

export class Upgrade {
  getAvailableUpgrades (detachment) {
    return []
  }
}

export class MultipleChoiceOption extends Upgrade {
  constructor (...options) {
    super()

    this.options = options
  }

  getAvailableUpgrades (detachment) {
    // if a transport option is present, no further options can be added
    if (detachment.units.find(unit => {
      return this.options.find(option => unit.type === option.type)
    })) {
      return []
    }

    return this.options.slice()
  }
}

export class AdditionalUnitOption extends Upgrade {
  constructor (unit, max = 1) {
    super()

    this.unit = unit
    this.max = max
  }

  getAvailableUpgrades (detachment) {
    const count = detachment.units
      .filter(unit => unit.type === this.unit.type)
      .length

    if (count >= this.max) {
      return []
    }

    return [
      this.unit
    ]
  }
}

export class RapierBattery extends AdditionalUnitOption {
  constructor () {
    super(LegionRapier, 4)
  }
}

export class Hyperios extends AdditionalUnitOption {
  constructor () {
    super(LegionWhirlwindHyperios)
  }
}

export class VeteranPrinceps extends AdditionalUnitOption {
  constructor () {
    super(LegioTitanicusVeteranPrinceps)
  }
}

export class Legate extends AdditionalUnitOption {
  constructor () {
    super(LegioTitanicusLegate)
  }
}

export class AirDefence extends AdditionalUnitOption {
  constructor () {
    super(LegioTitanicusAirDefence)
  }
}

export class SacredIcon extends AdditionalUnitOption {
  constructor () {
    super(LegioTitanicusSacredIcon)
  }
}

export class Dreadnought extends Upgrade {
  getAvailableUpgrades (detachment) {
    const dreadCount = {
      legion: 0,
      contemptor: 0,
      leviathan: 0
    }

    detachment.units.forEach(unit => {
      if (unit.type === LegionDreadnought.type) {
        dreadCount.legion++
      }

      if (unit.type === LegionContemptorDreadnought.type || unit.type === LegionDeredeoDreadnought.type) {
        dreadCount.contemptor++
      }

      if (unit.type === LegionLeviathanDreadnought.type) {
        dreadCount.leviathan++
      }
    })

    const total = Object.keys(dreadCount)
      .map(key => dreadCount[key])
      .reduce((acc, curr) => acc + curr, 0)

    if (total === 2) {
      return []
    }

    if (total === 0) {
      return [
        LegionDreadnought,
        LegionContemptorDreadnought,
        LegionDeredeoDreadnought,
        LegionLeviathanDreadnought
      ]
    }

    const upgrades = []

    if (dreadCount.legion) {
      upgrades.push(LegionDreadnought)
    }

    if (dreadCount.contemptor) {
      upgrades.push(LegionContemptorDreadnought)
      upgrades.push(LegionDeredeoDreadnought)
    }

    if (dreadCount.leviathan) {
      upgrades.push(LegionLeviathanDreadnought)
    }

    return upgrades
  }
}

export class Tank extends Upgrade {
  getAvailableUpgrades (detachment) {
    const count = {
      vindicator: 0,
      predator: 0,
      sicaran: 0,
      typhon: 0,
      cerberus: 0
    }

    detachment.units.forEach(unit => {
      if (unit.type === LegionVindicator.type || unit.type === LegionVindicatorLaserDestroyer.type) {
        count.vindicator++
      }

      if (unit.type === LegionPredator.type || unit.type === LegionPredatorInfernus.type || unit.type === LegionPredatorExecutioner.type || unit.type === LegionWhirlwindScorpius.type) {
        count.predator++
      }

      if (unit.type === LegionSicaran.type) {
        count.sicaran++
      }

      if (unit.type === LegionTyphon.type) {
        count.typhon++
      }

      if (unit.type === LegionCerberus.type) {
        count.cerberus++
      }
    })

    const total = Object.keys(count)
      .map(key => count[key])
      .reduce((acc, curr) => acc + curr, 0)

    if (total === 2) {
      return []
    }

    if (total === 0) {
      return [
        LegionVindicator,
        LegionVindicatorLaserDestroyer,
        LegionPredator,
        LegionPredatorInfernus,
        LegionPredatorExecutioner,
        LegionWhirlwindScorpius,
        LegionSicaran,
        LegionTyphon,
        LegionCerberus
      ]
    }

    const upgrades = []

    if (count.vindicator) {
      upgrades.push(LegionVindicator)
      upgrades.push(LegionVindicatorLaserDestroyer)
    }

    if (count.predator) {
      upgrades.push(LegionPredator)
      upgrades.push(LegionPredatorInfernus)
      upgrades.push(LegionPredatorExecutioner)
      upgrades.push(LegionWhirlwindScorpius)
    }

    if (count.sicaran) {
      upgrades.push(LegionSicaran)
    }

    if (count.typhon) {
      upgrades.push(LegionTyphon)
    }

    if (count.cerberus) {
      upgrades.push(LegionCerberus)
    }

    return upgrades
  }
}

export class TransportOption extends MultipleChoiceOption {
  getAvailableUpgrades (detachment) {
    let upgrades = this.options.reduce((acc, curr) => {
      return acc.concat(curr.options)
    }, [])

    if (detachment.units.find(unit => upgrades.find(upgrade => upgrade.type === unit.type))) {
      // a transport option is already present
      upgrades = []
    }

    // if Land Raiders have been selected, allow 0-2 Achilles to be added
    let landRaiders = false
    let achilles = 0

    detachment.units.forEach(unit => {
      if (unit.type === LegionLandRaiderPhobosTransport.type) {
        landRaiders = true
      }

      if (unit.type === LegionLandRaiderProteusTransport.type) {
        landRaiders = true
      }

      if (unit.type === LegionLandRaiderAchillesTransport.type) {
        achilles++
      }
    })

    if (landRaiders && achilles < 2) {
      upgrades.push(LegionLandRaiderAchillesTransport)
    }

    return upgrades
  }
}

export class Rhinos extends MultipleChoiceOption {
  constructor () {
    super(
      LegionRhino
    )
  }
}

export class DropAssault extends MultipleChoiceOption {
  constructor () {
    super(
      LegionDropPod,
      LegionDreadclaw
    )
  }
}

export class AssaultRam extends MultipleChoiceOption {
  constructor () {
    super(
      LegionCaestus
    )
  }
}

export class AssaultClaw extends MultipleChoiceOption {
  constructor () {
    super(
      LegionKharybdis
    )
  }
}

export class HeavyTransport extends MultipleChoiceOption {
  constructor () {
    super(
      LegionLandRaiderProteusTransport,
      LegionLandRaiderPhobosTransport,
      LegionSpartan,
      LegionMastodon
    )
  }
}

export class Teleport extends MultipleChoiceOption {
  constructor () {
    super(
      LegionTeleport
    )
  }
}

export class CommanderOption extends MultipleChoiceOption {
  constructor (...options) {
    super()

    this.options = options.reduce((acc, curr) => {
      return acc.concat(curr.options)
    }, [])
  }
}

export class Centurion extends MultipleChoiceOption {
  constructor () {
    super(
      LegionLibrarian,
      LegionChaplain,
      LegionChampion
    )
  }
}

export class Praetor extends MultipleChoiceOption {
  constructor () {
    super(
      LegionLordCommander,
      LegionLieutenantCommander
    )
  }
}

export class CaptainGeneral extends MultipleChoiceOption {
  constructor () {
    super(
      LegioCustodesCaptainGeneral
    )
  }
}

export class SeniorOfficer extends MultipleChoiceOption {
  constructor () {
    super(
      LegioCustodesTribune
    )
  }
}

export class Carrier extends MultipleChoiceOption {
  constructor () {
    super(
      LegioCustodesCoronusGravCarrier
    )
  }
}

export class ImperialMilitiaHeavyTransport extends MultipleChoiceOption {
  constructor () {
    super(
      ImperialMilitiaGorgon
    )
  }
}

export class ImperialMilitiaTransport extends MultipleChoiceOption {
  constructor () {
    super(
      ImperialMilitiaArvusLighter,
      ImperialMilitiaRhino,
      ImperialMilitiaLandRaiderProteus
    )
  }
}

export class MilitiaFireSupport extends AdditionalUnitOption {
  constructor () {
    super(ImperialMilitiaFireSupport)
  }
}

export class MilitiaSupportAuxiliaries extends AdditionalUnitOption {
  constructor () {
    super(ImperialMilitiaSupportAuxiliaries)
  }
}

export class MilitiaReconAuxiliaries extends AdditionalUnitOption {
  constructor () {
    super(ImperialMilitiaReconAuxiliaries)
  }
}

export class MilitiaOgrynBruteSquad extends AdditionalUnitOption {
  constructor () {
    super(ImperialMilitiaOgrynBruteSquad)
  }
}

export class Krios extends AdditionalUnitOption {
  constructor () {
    super(MechanicumTaghmataKriosUpgrade)
  }
}

export class Magos extends MultipleChoiceOption {
  constructor () {
    super(
      MechanicumTaghmataArchmagosPrime,
      MechanicumTaghmataMagosPrime
    )
  }
}

export class Scyllax extends AdditionalUnitOption {
  constructor () {
    super(MechanicumTaghmataScyllax)
  }
}

export class MechanicumTransport extends MultipleChoiceOption {
  constructor () {
    super(
      MechanicumTaghmataTriaros,
      MechanicumTaghmataLandRaider
    )
  }
}

export class TechPriest extends AdditionalUnitOption {
  constructor () {
    super(MechanicumTaghmataTechPriestUpgrade)
  }
}

export class Thanatar extends AdditionalUnitOption {
  constructor () {
    super(MechanicumTaghmataThanatarUpgrade)
  }
}

export class Seneschal extends AdditionalUnitOption {
  constructor () {
    super(KnightHouseholdSeneschal)
  }
}

export class Noble extends MultipleChoiceOption {
  constructor () {
    super(
      KnightHouseholdLordScion,
      KnightHouseholdPreceptor
    )
  }
}

export class Aspirants extends AdditionalUnitOption {
  constructor () {
    super(KnightHouseholdAspirants)
  }
}

export class ScionsofUhlan extends AdditionalUnitOption {
  constructor () {
    super(KnightHouseholdScionsOfUhlan)
  }
}

export class OgrynCharoniteSquad extends AdditionalUnitOption {
  constructor () {
    super(SolarAuxiliaOgrynCharoniteSquad)
  }
}

export class InfantrySupportTank extends Upgrade {
  getAvailableUpgrades (detachment) {
    let count = 0

    detachment.units.forEach(unit => {
      if (unit.type === SolarAuxiliaInfantrySupportTankUnit.type) {
        count++
      }
    })

    if (count === 2) {
      return []
    }

    return [
      SolarAuxiliaInfantrySupportTankUnit
    ]
  }
}

export class SolarAuxiliaRapierBattery extends AdditionalUnitOption {
  constructor () {
    super(SolarAuxiliaRapier)
  }
}
