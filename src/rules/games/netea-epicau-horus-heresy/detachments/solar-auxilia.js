import {
  MultipleChoiceOption,
  OgrynCharoniteSquad,
  InfantrySupportTank,
  SolarAuxiliaRapierBattery
} from '../upgrades'
import {
  SolarAuxiliaLordMarshall,
  SolarAuxiliaTacticalCommmandSection,
  SolarAuxiliaVeletarisStormSection,
  SolarAuxiliaInfantrySection,
  SolarAuxiliaBattleTankUnit,
  SolarAuxiliaBattleTankUnitWithVanquisher,
  SolarAuxiliaVeletarisSupportSquad,
  SolarAuxiliaCloseSupportSection,
  SolarAuxiliaDracosan,
  SolarAuxiliaStormlordTransport,
  SolarAuxiliaArvusLighter,
  SolarAuxiliaOrbitalSupportUnit,
  SolarAuxiliaMedusa,
  SolarAuxiliaArtilleryTankBatteryUnit,
  SolarAuxiliaMalcadorUnit,
  SolarAuxiliaSuperHeavyTankUnit,
  SolarAuxiliaSuperHeavyTankSquadronUnit,
  SolarAuxiliaCloseSupportTankUnit,
  SolarAuxiliaCloseSupportTankUnitWithExecutioner,
  SolarAuxiliaValdor,
  SolarAuxiliaTarantula,
  SolarAuxiliaTarantulaHyperios,
  SolarAuxiliaAvengerStrikeFighter,
  SolarAuxiliaPrimarisStrikeFighter
} from '../units/solar-auxilia'
import SolarAuxiliaDetachment from './solar-auxilia-detachment'
import {
  Unique
} from '../constraints'
import withType from '../../../../utils/with-type'

export class SolarAuxiliaCommandDetachment extends SolarAuxiliaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SolarAuxiliaLordMarshall(this),
      new SolarAuxiliaVeletarisStormSection(this)
    )
    this.setUpgrades(
      new InfantrySupportTank(),
      new OgrynCharoniteSquad(),
      new MultipleChoiceOption(
        SolarAuxiliaVeletarisSupportSquad,
        SolarAuxiliaCloseSupportSection
      ),
      new MultipleChoiceOption(
        SolarAuxiliaDracosan,
        SolarAuxiliaStormlordTransport,
        SolarAuxiliaArvusLighter
      )
    )
    this.setConstraints(
      new Unique()
    )
  }
}

export class SolarAuxiliaVeletarisStormCohort extends SolarAuxiliaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SolarAuxiliaTacticalCommmandSection(this),
      new SolarAuxiliaVeletarisStormSection(this)
    )
    this.setUpgrades(
      new InfantrySupportTank(),
      new OgrynCharoniteSquad(),
      new MultipleChoiceOption(
        SolarAuxiliaDracosan,
        SolarAuxiliaStormlordTransport,
        SolarAuxiliaArvusLighter
      )
    )
  }
}

export class SolarAuxiliaInfantryTercio extends SolarAuxiliaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SolarAuxiliaTacticalCommmandSection(this),
      new SolarAuxiliaInfantrySection(this)
    )
    this.setUpgrades(
      new InfantrySupportTank(),
      new OgrynCharoniteSquad(),
      new MultipleChoiceOption(
        SolarAuxiliaVeletarisSupportSquad,
        SolarAuxiliaCloseSupportSection
      ),
      new SolarAuxiliaRapierBattery(),
      new MultipleChoiceOption(
        SolarAuxiliaDracosan,
        SolarAuxiliaStormlordTransport,
        SolarAuxiliaArvusLighter
      )
    )
  }
}

export class SolarAuxiliaStrikeCompany extends SolarAuxiliaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SolarAuxiliaBattleTankUnitWithVanquisher(this),
      new SolarAuxiliaBattleTankUnit(this),
      new SolarAuxiliaBattleTankUnit(this),
      new SolarAuxiliaBattleTankUnit(this),
      new SolarAuxiliaBattleTankUnit(this),
      new SolarAuxiliaBattleTankUnit(this),
      new SolarAuxiliaBattleTankUnit(this),
      new SolarAuxiliaBattleTankUnit(this),
      new SolarAuxiliaBattleTankUnit(this),
      new SolarAuxiliaBattleTankUnit(this)
    )
  }
}

export class SolarAuxiliaOrbitalSupport extends SolarAuxiliaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SolarAuxiliaOrbitalSupportUnit(this)
    )
    this.setConstraints(
      new Unique()
    )
  }
}

export class SolarAuxiliaAssaultGunPlatoon extends SolarAuxiliaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SolarAuxiliaMedusa(this)
    )
  }
}

export class SolarAuxiliaArtilleryTankBattery extends SolarAuxiliaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SolarAuxiliaArtilleryTankBatteryUnit(this)
    )
  }
}

export class SolarAuxiliaMalcadorSquadron extends SolarAuxiliaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SolarAuxiliaMalcadorUnit(this),
      new SolarAuxiliaMalcadorUnit(this),
      new SolarAuxiliaMalcadorUnit(this),
      new SolarAuxiliaMalcadorUnit(this),
      new SolarAuxiliaMalcadorUnit(this)
    )
  }
}

export class SolarAuxiliaSuperHeavyTank extends SolarAuxiliaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SolarAuxiliaSuperHeavyTankUnit(this)
    )
  }
}

export class SolarAuxiliaSuperHeavyTankSquadron extends SolarAuxiliaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SolarAuxiliaSuperHeavyTankSquadronUnit(this)
    )
  }
}

export class SolarAuxiliaCloseSupportSquadron extends SolarAuxiliaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SolarAuxiliaCloseSupportTankUnitWithExecutioner(this),
      new SolarAuxiliaCloseSupportTankUnit(this),
      new SolarAuxiliaCloseSupportTankUnit(this),
      new SolarAuxiliaCloseSupportTankUnit(this),
      new SolarAuxiliaCloseSupportTankUnit(this)
    )
  }
}

export class SolarAuxiliaTankHunterSquadron extends SolarAuxiliaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SolarAuxiliaValdor(this)
    )
  }
}

export class SolarAuxiliaTarantulaBattery extends SolarAuxiliaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SolarAuxiliaTarantula(this),
      new SolarAuxiliaTarantulaHyperios(this)
    )
  }
}

export class SolarAuxiliaAvengerWing extends SolarAuxiliaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SolarAuxiliaAvengerStrikeFighter(this)
    )
  }
}

export class SolarAuxiliaPrimarisWing extends SolarAuxiliaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SolarAuxiliaPrimarisStrikeFighter(this)
    )
  }
}

withType(SolarAuxiliaCommandDetachment)
withType(SolarAuxiliaVeletarisStormCohort)
withType(SolarAuxiliaInfantryTercio)
withType(SolarAuxiliaStrikeCompany)
withType(SolarAuxiliaOrbitalSupport)
withType(SolarAuxiliaAssaultGunPlatoon)
withType(SolarAuxiliaArtilleryTankBattery)
withType(SolarAuxiliaMalcadorSquadron)
withType(SolarAuxiliaSuperHeavyTank)
withType(SolarAuxiliaSuperHeavyTankSquadron)
withType(SolarAuxiliaCloseSupportSquadron)
withType(SolarAuxiliaTankHunterSquadron)
withType(SolarAuxiliaTarantulaBattery)
withType(SolarAuxiliaAvengerWing)
withType(SolarAuxiliaPrimarisWing)
