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
  UltramarinesDamoclesRhino,
  UltramarinesRhinoTransports
} from './units/ultramarines'
import {
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
  MechanicumTaghmataArchmagosPrime,
  MechanicumTaghmataMagosPrime,
  MechanicumTaghmataScyllax,
  MechanicumTaghmataTriaros,
  MechanicumTaghmataKriosUpgrade,
  MechanicumTaghmataLandRaider,
  MechanicumTaghmataTechPriestUpgrade,
  MechanicumTaghmataThanatarUpgrade
} from './units/mechanicum-taghmata'
import {
  KnightHouseholdLordScion,
  KnightHouseholdPreceptor,
  KnightHouseholdSeneschal,
  KnightHouseholdAspirants
} from './units/knight-household'
import {
  SolarAuxiliaOgrynCharoniteSquad,
  SolarAuxiliaInfantrySupportTankUnit,
  SolarAuxiliaRapier
} from './units/solar-auxilia'
import {
  TransportUnit
} from './units/unit'

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

    return this.options.map(Type => new Type(detachment))
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

    const Type = this.unit

    return [
      new Type(detachment)
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
        new LegionDreadnought(detachment),
        new LegionContemptorDreadnought(detachment),
        new LegionDeredeoDreadnought(detachment),
        new LegionLeviathanDreadnought(detachment)
      ]
    }

    const upgrades = []

    if (dreadCount.legion) {
      upgrades.push(new LegionDreadnought(detachment))
    }

    if (dreadCount.contemptor) {
      upgrades.push(new LegionContemptorDreadnought(detachment))
      upgrades.push(new LegionDeredeoDreadnought(detachment))
    }

    if (dreadCount.leviathan) {
      upgrades.push(new LegionLeviathanDreadnought(detachment))
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
        new LegionVindicator(detachment),
        new LegionPredator(detachment),
        new LegionSicaran(detachment),
        new LegionTyphon(detachment),
        new LegionCerberus(detachment)
      ]
    }

    const upgrades = []

    if (count.vindicator) {
      upgrades.push(new LegionVindicator(detachment))
    }

    if (count.predator) {
      upgrades.push(new LegionPredator(detachment))
    }

    if (count.sicaran) {
      upgrades.push(new LegionSicaran(detachment))
    }

    if (count.typhon) {
      upgrades.push(new LegionTyphon(detachment))
    }

    if (count.cerberus) {
      upgrades.push(new LegionCerberus(detachment))
    }

    return upgrades
  }
}

export class ArmouryAssets extends Upgrade {
  getAvailableUpgrades (detachment) {
    const count = {
      vindicator: 0,
      predator: 0
    }

    detachment.units.forEach(unit => {
      if (unit.type === LegionVindicator.type || unit.type === LegionVindicatorLaserDestroyer.type) {
        count.vindicator++
      }

      if (unit.type === LegionPredator.type || unit.type === LegionPredatorInfernus.type || unit.type === LegionPredatorExecutioner.type || unit.type === LegionWhirlwindScorpius.type) {
        count.predator++
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
        new LegionVindicatorLaserDestroyer(detachment),
        new LegionPredatorInfernus(detachment),
        new LegionPredatorExecutioner(detachment),
        new LegionWhirlwindScorpius(detachment)
      ]
    }

    const upgrades = []

    if (count.vindicator) {
      upgrades.push(new LegionVindicatorLaserDestroyer(detachment))
    }

    if (count.predator) {
      upgrades.push(new LegionPredatorInfernus(detachment))
      upgrades.push(new LegionPredatorExecutioner(detachment))
      upgrades.push(new LegionWhirlwindScorpius(detachment))
    }

    return upgrades
  }
}

export class TransportOption extends MultipleChoiceOption {
  getAvailableUpgrades (detachment) {
    let upgrades = this.options.reduce((acc, curr) => {
      return acc.concat(curr.getAvailableUpgrades(detachment))
    }, [])

    if (detachment.units.find(unit => unit instanceof TransportUnit)) {
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
      upgrades.push(new LegionLandRaiderAchillesTransport(detachment))
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
    super(MechanicumTaghmataKriosUpgrade, 3)
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
      new SolarAuxiliaInfantrySupportTankUnit(detachment)
    ]
  }
}

export class SolarAuxiliaRapierBattery extends AdditionalUnitOption {
  constructor () {
    super(SolarAuxiliaRapier)
  }
}

export class UltramarinesDamoclesRhinoUpgrade extends AdditionalUnitOption {
  constructor () {
    super(
      UltramarinesDamoclesRhino,
      LegionRhino
    )
  }
}

export class UltramarinesRhinos extends MultipleChoiceOption {
  getAvailableUpgrades (detachment) {
    let rhinos = false
    let damocles = false

    detachment.units.forEach(unit => {
      if (unit instanceof LegionRhino) {
        rhinos = true
      }

      if (unit instanceof UltramarinesDamoclesRhino) {
        damocles = true
      }
    })

    if (rhinos || damocles) {
      return []
    }

    return [
      new UltramarinesRhinoTransports(detachment)
    ]
  }
}
