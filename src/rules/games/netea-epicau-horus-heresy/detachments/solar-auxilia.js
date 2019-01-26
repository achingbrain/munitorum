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
import Detachment from './detachment'
import {
  Unique
} from '../constraints'
import withType from '../../../../utils/with-type'

export class SolarAuxiliaCommandDetachment extends Detachment {
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

export class SolarAuxiliaVeletarisStormCohort extends Detachment {
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

export class SolarAuxiliaInfantryTercio extends Detachment {
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

export class SolarAuxiliaStrikeCompany extends Detachment {
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

export class SolarAuxiliaOrbitalSupport extends Detachment {
  constructor () {
    super([
      new SolarAuxiliaOrbitalSupportUnit()
    ], [], [
      new Unique()
    ])
  }
}

export class SolarAuxiliaAssaultGunPlatoon extends Detachment {
  constructor () {
    super([
      new SolarAuxiliaMedusa()
    ])
  }
}

export class SolarAuxiliaArtilleryTankBattery extends Detachment {
  constructor () {
    super([
      new SolarAuxiliaArtilleryTankBatteryUnit()
    ])
  }
}

export class SolarAuxiliaMalcadorSquadron extends Detachment {
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

export class SolarAuxiliaSuperHeavyTank extends Detachment {
  constructor () {
    super([
      new SolarAuxiliaSuperHeavyTankUnit()
    ])
  }
}

export class SolarAuxiliaSuperHeavyTankSquadron extends Detachment {
  constructor () {
    super([
      new SolarAuxiliaSuperHeavyTankSquadronUnit()
    ])
  }
}

export class SolarAuxiliaCloseSupportSquadron extends Detachment {
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

export class SolarAuxiliaTankHunterSquadron extends Detachment {
  constructor () {
    super([
      new SolarAuxiliaValdor()
    ])
  }
}

export class SolarAuxiliaTarantulaBattery extends Detachment {
  constructor () {
    super([
      new SolarAuxiliaTarantula(),
      new SolarAuxiliaTarantulaHyperios()
    ])
  }
}

export class SolarAuxiliaAvengerWing extends Detachment {
  constructor () {
    super([
      new SolarAuxiliaAvengerStrikeFighter()
    ])
  }
}

export class SolarAuxiliaPrimarisWing extends Detachment {
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
