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
  ImperialMilitiaRoguePsyker
} from '../units/imperial-militia'
import ImperialMilitiaDetachment from './imperial-militia-detachment'
import {
  Unique
} from '../constraints'
import withType from '../../../../utils/with-type'

export class ImperialMilitiaCommandSquad extends ImperialMilitiaDetachment {
  constructor () {
    super([
      new ImperialMilitiaForceCommander(),
      new ImperialMilitiaAuxiliaries()
    ], [
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
      new MilitiaOgrynBruteSquad()
    ], [
      new Unique()
    ])
  }
}

export class ImperialMilitiaInfantrySquad extends ImperialMilitiaDetachment {
  constructor () {
    super([
      new ImperialMilitiaPlatoonCommander(),
      new ImperialMilitiaAuxiliaries()
    ], [
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
      new MilitiaOgrynBruteSquad()
    ])
  }
}

export class ImperialMilitiaLevySquad extends ImperialMilitiaDetachment {
  constructor () {
    super([
      new ImperialMilitiaLevyAuxiliaries()
    ], [
      new MultipleChoiceOption(
        ImperialMilitiaDisciplineMaster,
        ImperialMilitiaRoguePsyker
      ),
      new MilitiaOgrynBruteSquad()
    ])
  }
}

export class ImperialMilitiaMotorcycleSquad extends ImperialMilitiaDetachment {
  constructor () {
    super([
      new ImperialMilitiaMotorcycleCommander(),
      new ImperialMilitiaMotorcycle()
    ], [
      new MultipleChoiceOption(
        ImperialMilitiaDisciplineMaster,
        ImperialMilitiaRoguePsyker
      )
    ])
  }
}

export class ImperialMilitiaGrenedierSquad extends ImperialMilitiaDetachment {
  constructor () {
    super([
      new ImperialMilitiaGrenedier()
    ], [
      new TransportOption(
        new ImperialMilitiaHeavyTransport(),
        new ImperialMilitiaTransport()
      ),
      new MultipleChoiceOption(
        ImperialMilitiaDisciplineMaster,
        ImperialMilitiaRoguePsyker
      )
    ])
  }
}

export class ImperialMilitiaOrbitalSupport extends ImperialMilitiaDetachment {
  constructor () {
    super([
      new ImperialMilitiaOrbitalSupportUnit()
    ], [], [
      new Unique()
    ])
  }
}

export class ImperialMilitiaCavalrySquad extends ImperialMilitiaDetachment {
  constructor () {
    super([
      new ImperialMilitiaCavalryAuxiliary()
    ], [
      new MultipleChoiceOption(
        ImperialMilitiaDisciplineMaster,
        ImperialMilitiaRoguePsyker
      )
    ])
  }
}

export class ImperialMilitiaHeavyOrdnanceBattery extends ImperialMilitiaDetachment {
  constructor () {
    super([
      new ImperialMilitiaHeavyOrdnanceBatteryUnit()
    ])
  }
}

export class ImperialMilitiaMalcadorHeavyTankSquadron extends ImperialMilitiaDetachment {
  constructor () {
    super([
      new ImperialMilitiaMalcadorUnit(),
      new ImperialMilitiaMalcadorUnit(),
      new ImperialMilitiaMalcadorUnit(),
      new ImperialMilitiaMalcadorUnit(),
      new ImperialMilitiaMalcadorUnit()
    ])
  }
}

export class ImperialMilitiaRapierBattery extends ImperialMilitiaDetachment {
  constructor () {
    super([
      new ImperialMilitiaRapier()
    ])
  }
}

export class ImperialMilitiaSentinelScoutSquadron extends ImperialMilitiaDetachment {
  constructor () {
    super([
      new ImperialMilitiaSentinel()
    ])
  }
}

export class ImperialMilitiaSuperHeavyTank extends ImperialMilitiaDetachment {
  constructor () {
    super([
      new ImperialMilitiaSuperHeavyTankUnit()
    ])
  }
}

export class ImperialMilitiaBattleTankSquadron extends ImperialMilitiaDetachment {
  constructor () {
    super([
      new ImperialMilitiaBattleTankUnitWithVanquisher(),
      new ImperialMilitiaBattleTankUnit(),
      new ImperialMilitiaBattleTankUnit(),
      new ImperialMilitiaBattleTankUnit(),
      new ImperialMilitiaBattleTankUnit()
    ])
  }
}

export class ImperialMilitiaSuperHeavyTankPlatoon extends ImperialMilitiaDetachment {
  constructor () {
    super([
      new ImperialMilitiaSuperHeavyTankPlatoonUnit()
    ])
  }
}

export class ImperialMilitiaAvengerWing extends ImperialMilitiaDetachment {
  constructor () {
    super([
      new ImperialMilitiaAvengerStrikeFighter()
    ])
  }
}

export class ImperialMilitiaPrimarisWing extends ImperialMilitiaDetachment {
  constructor () {
    super([
      new ImperialMilitiaPrimarisStrikeFighter()
    ])
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
