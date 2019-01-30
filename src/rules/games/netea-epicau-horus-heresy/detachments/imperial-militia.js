import {
  TransportOption,
  MultipleChoiceOption,
  ImperialMilitiaHeavyTransport,
  ImperialMilitiaTransport,
  MilitiaFireSupport,
  MilitiaSupportAuxiliaries,
  MilitiaReconAuxiliaries,
  MilitiaOgrynBruteSquad
} from '../upgrades'
import {
  ImperialMilitiaForceCommander,
  ImperialMilitiaPlatoonCommander,
  ImperialMilitiaAuxiliaries,
  ImperialMilitiaLevyAuxiliaries,
  ImperialMilitiaMotorcycleCommander,
  ImperialMilitiaMotorcycle,
  ImperialMilitiaGrenedier,
  ImperialMilitiaOrbitalSupportUnit,
  ImperialMilitiaCavalryAuxiliary,
  ImperialMilitiaHeavyOrdnanceBatteryUnit,
  ImperialMilitiaMalcadorUnit,
  ImperialMilitiaRapier,
  ImperialMilitiaSentinel,
  ImperialMilitiaSuperHeavyTankUnit,
  ImperialMilitiaSuperHeavyTankPlatoonUnit,
  ImperialMilitiaBattleTankUnit,
  ImperialMilitiaBattleTankUnitWithVanquisher,
  ImperialMilitiaAvengerStrikeFighter,
  ImperialMilitiaPrimarisStrikeFighter,
  ImperialMilitiaDisciplineMaster,
  ImperialMilitiaRoguePsyker,
  ImperialMilitiaWarriorEliteProvenance,
  ImperialMilitiaSurvivorsOfTheDarkAgeProvenance,
  ImperialMilitiaFeralWarriorsProvenance,
  ImperialMilitiaTraitorsProvenance
} from '../units/imperial-militia'
import ImperialMilitiaDetachment from './imperial-militia-detachment'
import {
  Unique
} from '../constraints'
import withType from '../../../../utils/with-type'

export class ImperialMilitiaCommandSquad extends ImperialMilitiaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialMilitiaForceCommander(this),
      new ImperialMilitiaAuxiliaries(this)
    )
    this.setUpgrades(
      new TransportOption(
        new ImperialMilitiaHeavyTransport(),
        new ImperialMilitiaTransport()
      ),
      new MultipleChoiceOption(
        ImperialMilitiaDisciplineMaster,
        ImperialMilitiaRoguePsyker
      ),
      new MilitiaFireSupport(),
      new MilitiaSupportAuxiliaries(),
      new MilitiaReconAuxiliaries(),
      new MilitiaOgrynBruteSquad(),
      new MultipleChoiceOption(
        ImperialMilitiaWarriorEliteProvenance,
        ImperialMilitiaSurvivorsOfTheDarkAgeProvenance,
        ImperialMilitiaFeralWarriorsProvenance,
        ImperialMilitiaTraitorsProvenance
      )
    )
    this.setConstraints(
      new Unique()
    )
  }
}

export class ImperialMilitiaInfantrySquad extends ImperialMilitiaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialMilitiaPlatoonCommander(this),
      new ImperialMilitiaAuxiliaries(this)
    )
    this.setUpgrades(
      new TransportOption(
        new ImperialMilitiaHeavyTransport()
      ),
      new MultipleChoiceOption(
        ImperialMilitiaDisciplineMaster,
        ImperialMilitiaRoguePsyker
      ),
      new MilitiaFireSupport(),
      new MilitiaSupportAuxiliaries(),
      new MilitiaReconAuxiliaries(),
      new MilitiaOgrynBruteSquad(),
      new MultipleChoiceOption(
        ImperialMilitiaWarriorEliteProvenance,
        ImperialMilitiaSurvivorsOfTheDarkAgeProvenance,
        ImperialMilitiaFeralWarriorsProvenance,
        ImperialMilitiaTraitorsProvenance
      )
    )
  }
}

export class ImperialMilitiaLevySquad extends ImperialMilitiaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialMilitiaLevyAuxiliaries(this)
    )
    this.setUpgrades(
      new MultipleChoiceOption(
        ImperialMilitiaDisciplineMaster,
        ImperialMilitiaRoguePsyker
      ),
      new MilitiaOgrynBruteSquad(),
      new MultipleChoiceOption(
        ImperialMilitiaWarriorEliteProvenance,
        ImperialMilitiaSurvivorsOfTheDarkAgeProvenance,
        ImperialMilitiaFeralWarriorsProvenance,
        ImperialMilitiaTraitorsProvenance
      )
    )
  }
}

export class ImperialMilitiaMotorcycleSquad extends ImperialMilitiaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialMilitiaMotorcycleCommander(this),
      new ImperialMilitiaMotorcycle(this)
    )
    this.setUpgrades(
      new MultipleChoiceOption(
        ImperialMilitiaDisciplineMaster,
        ImperialMilitiaRoguePsyker
      ),
      new MultipleChoiceOption(
        ImperialMilitiaWarriorEliteProvenance,
        ImperialMilitiaSurvivorsOfTheDarkAgeProvenance,
        ImperialMilitiaFeralWarriorsProvenance,
        ImperialMilitiaTraitorsProvenance
      )
    )
  }
}

export class ImperialMilitiaGrenedierSquad extends ImperialMilitiaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialMilitiaGrenedier(this)
    )
    this.setUpgrades(
      new TransportOption(
        new ImperialMilitiaHeavyTransport(),
        new ImperialMilitiaTransport()
      ),
      new MultipleChoiceOption(
        ImperialMilitiaDisciplineMaster,
        ImperialMilitiaRoguePsyker
      ),
      new MultipleChoiceOption(
        ImperialMilitiaWarriorEliteProvenance,
        ImperialMilitiaSurvivorsOfTheDarkAgeProvenance,
        ImperialMilitiaFeralWarriorsProvenance,
        ImperialMilitiaTraitorsProvenance
      )
    )
  }
}

export class ImperialMilitiaOrbitalSupport extends ImperialMilitiaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialMilitiaOrbitalSupportUnit(this)
    )
    this.setConstraints(
      new Unique()
    )
  }
}

export class ImperialMilitiaCavalrySquad extends ImperialMilitiaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialMilitiaCavalryAuxiliary(this)
    )
    this.setUpgrades(
      new MultipleChoiceOption(
        ImperialMilitiaDisciplineMaster,
        ImperialMilitiaRoguePsyker
      )
    )
  }
}

export class ImperialMilitiaHeavyOrdnanceBattery extends ImperialMilitiaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialMilitiaHeavyOrdnanceBatteryUnit(this)
    )
  }
}

export class ImperialMilitiaMalcadorHeavyTankSquadron extends ImperialMilitiaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialMilitiaMalcadorUnit(this),
      new ImperialMilitiaMalcadorUnit(this),
      new ImperialMilitiaMalcadorUnit(this),
      new ImperialMilitiaMalcadorUnit(this),
      new ImperialMilitiaMalcadorUnit(this)
    )
  }
}

export class ImperialMilitiaRapierBattery extends ImperialMilitiaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialMilitiaRapier(this)
    )
  }
}

export class ImperialMilitiaSentinelScoutSquadron extends ImperialMilitiaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialMilitiaSentinel(this)
    )
  }
}

export class ImperialMilitiaSuperHeavyTank extends ImperialMilitiaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialMilitiaSuperHeavyTankUnit(this)
    )
  }
}

export class ImperialMilitiaBattleTankSquadron extends ImperialMilitiaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialMilitiaBattleTankUnitWithVanquisher(this),
      new ImperialMilitiaBattleTankUnit(this),
      new ImperialMilitiaBattleTankUnit(this),
      new ImperialMilitiaBattleTankUnit(this),
      new ImperialMilitiaBattleTankUnit(this)
    )
  }
}

export class ImperialMilitiaSuperHeavyTankPlatoon extends ImperialMilitiaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialMilitiaSuperHeavyTankPlatoonUnit(this)
    )
  }
}

export class ImperialMilitiaAvengerWing extends ImperialMilitiaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialMilitiaAvengerStrikeFighter(this)
    )
  }
}

export class ImperialMilitiaPrimarisWing extends ImperialMilitiaDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialMilitiaPrimarisStrikeFighter(this)
    )
  }
}

withType(ImperialMilitiaCommandSquad)
withType(ImperialMilitiaInfantrySquad)
withType(ImperialMilitiaLevySquad)
withType(ImperialMilitiaMotorcycleSquad)
withType(ImperialMilitiaGrenedierSquad)
withType(ImperialMilitiaOrbitalSupport)
withType(ImperialMilitiaCavalrySquad)
withType(ImperialMilitiaHeavyOrdnanceBattery)
withType(ImperialMilitiaMalcadorHeavyTankSquadron)
withType(ImperialMilitiaRapierBattery)
withType(ImperialMilitiaSentinelScoutSquadron)
withType(ImperialMilitiaSuperHeavyTank)
withType(ImperialMilitiaBattleTankSquadron)
withType(ImperialMilitiaSuperHeavyTankPlatoon)
withType(ImperialMilitiaAvengerWing)
withType(ImperialMilitiaPrimarisWing)
