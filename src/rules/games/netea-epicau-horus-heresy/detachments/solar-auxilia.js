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
  constructor () {
    super([
      new SolarAuxiliaLordMarshall(),
      new SolarAuxiliaVeletarisStormSection()
    ], [
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
    ], [
      new Unique()
    ])
  }
}

export class SolarAuxiliaVeletarisStormCohort extends SolarAuxiliaDetachment {
  constructor () {
    super([
      new SolarAuxiliaTacticalCommmandSection(),
      new SolarAuxiliaVeletarisStormSection()
    ], [
      new InfantrySupportTank(),
      new OgrynCharoniteSquad(),
      new MultipleChoiceOption(
        SolarAuxiliaDracosan,
        SolarAuxiliaStormlordTransport,
        SolarAuxiliaArvusLighter
      )
    ])
  }
}

export class SolarAuxiliaInfantryTercio extends SolarAuxiliaDetachment {
  constructor () {
    super([
      new SolarAuxiliaTacticalCommmandSection(),
      new SolarAuxiliaInfantrySection()
    ], [
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
    ])
  }
}

export class SolarAuxiliaStrikeCompany extends SolarAuxiliaDetachment {
  constructor () {
    super([
      new SolarAuxiliaBattleTankUnitWithVanquisher(),
      new SolarAuxiliaBattleTankUnit(),
      new SolarAuxiliaBattleTankUnit(),
      new SolarAuxiliaBattleTankUnit(),
      new SolarAuxiliaBattleTankUnit(),
      new SolarAuxiliaBattleTankUnit(),
      new SolarAuxiliaBattleTankUnit(),
      new SolarAuxiliaBattleTankUnit(),
      new SolarAuxiliaBattleTankUnit(),
      new SolarAuxiliaBattleTankUnit()
    ])
  }
}

export class SolarAuxiliaOrbitalSupport extends SolarAuxiliaDetachment {
  constructor () {
    super([
      new SolarAuxiliaOrbitalSupportUnit()
    ], [], [
      new Unique()
    ])
  }
}

export class SolarAuxiliaAssaultGunPlatoon extends SolarAuxiliaDetachment {
  constructor () {
    super([
      new SolarAuxiliaMedusa()
    ])
  }
}

export class SolarAuxiliaArtilleryTankBattery extends SolarAuxiliaDetachment {
  constructor () {
    super([
      new SolarAuxiliaArtilleryTankBatteryUnit()
    ])
  }
}

export class SolarAuxiliaMalcadorSquadron extends SolarAuxiliaDetachment {
  constructor () {
    super([
      new SolarAuxiliaMalcadorUnit(),
      new SolarAuxiliaMalcadorUnit(),
      new SolarAuxiliaMalcadorUnit(),
      new SolarAuxiliaMalcadorUnit(),
      new SolarAuxiliaMalcadorUnit()
    ])
  }
}

export class SolarAuxiliaSuperHeavyTank extends SolarAuxiliaDetachment {
  constructor () {
    super([
      new SolarAuxiliaSuperHeavyTankUnit()
    ])
  }
}

export class SolarAuxiliaSuperHeavyTankSquadron extends SolarAuxiliaDetachment {
  constructor () {
    super([
      new SolarAuxiliaSuperHeavyTankSquadronUnit()
    ])
  }
}

export class SolarAuxiliaCloseSupportSquadron extends SolarAuxiliaDetachment {
  constructor () {
    super([
      new SolarAuxiliaCloseSupportTankUnitWithExecutioner(),
      new SolarAuxiliaCloseSupportTankUnit(),
      new SolarAuxiliaCloseSupportTankUnit(),
      new SolarAuxiliaCloseSupportTankUnit(),
      new SolarAuxiliaCloseSupportTankUnit()
    ])
  }
}

export class SolarAuxiliaTankHunterSquadron extends SolarAuxiliaDetachment {
  constructor () {
    super([
      new SolarAuxiliaValdor()
    ])
  }
}

export class SolarAuxiliaTarantulaBattery extends SolarAuxiliaDetachment {
  constructor () {
    super([
      new SolarAuxiliaTarantula(),
      new SolarAuxiliaTarantulaHyperios()
    ])
  }
}

export class SolarAuxiliaAvengerWing extends SolarAuxiliaDetachment {
  constructor () {
    super([
      new SolarAuxiliaAvengerStrikeFighter()
    ])
  }
}

export class SolarAuxiliaPrimarisWing extends SolarAuxiliaDetachment {
  constructor () {
    super([
      new SolarAuxiliaPrimarisStrikeFighter()
    ])
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
