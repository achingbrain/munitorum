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
import Detachment from './detachment'
import {
  Unique
} from '../constraints'
import withType from '../../../../utils/with-type'

export class ImperialMilitiaCommandSquad extends Detachment {
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

export class ImperialMilitiaInfantrySquad extends Detachment {
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

export class ImperialMilitiaLevySquad extends Detachment {
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

export class ImperialMilitiaMotorcycleSquad extends Detachment {
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

export class ImperialMilitiaGrenedierSquad extends Detachment {
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

export class ImperialMilitiaOrbitalSupport extends Detachment {
  constructor () {
    super([
      new ImperialMilitiaOrbitalSupportUnit()
    ], [], [
      new Unique()
    ])
  }
}

export class ImperialMilitiaCavalrySquad extends Detachment {
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

export class ImperialMilitiaHeavyOrdnanceBattery extends Detachment {
  constructor () {
    super([
      new ImperialMilitiaHeavyOrdnanceBatteryUnit()
    ])
  }
}

export class ImperialMilitiaMalcadorHeavyTankSquadron extends Detachment {
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

export class ImperialMilitiaRapierBattery extends Detachment {
  constructor () {
    super([
      new ImperialMilitiaRapier()
    ])
  }
}

export class ImperialMilitiaSentinelScoutSquadron extends Detachment {
  constructor () {
    super([
      new ImperialMilitiaSentinel()
    ])
  }
}

export class ImperialMilitiaSuperHeavyTank extends Detachment {
  constructor () {
    super([
      new ImperialMilitiaSuperHeavyTankUnit()
    ])
  }
}

export class ImperialMilitiaBattleTankSquadron extends Detachment {
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

export class ImperialMilitiaSuperHeavyTankPlatoon extends Detachment {
  constructor () {
    super([
      new ImperialMilitiaSuperHeavyTankPlatoonUnit()
    ])
  }
}

export class ImperialMilitiaAvengerWing extends Detachment {
  constructor () {
    super([
      new ImperialMilitiaAvengerStrikeFighter()
    ])
  }
}

export class ImperialMilitiaPrimarisWing extends Detachment {
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
