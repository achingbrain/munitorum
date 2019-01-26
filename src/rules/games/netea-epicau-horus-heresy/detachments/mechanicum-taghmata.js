import {
  Krios,
  Magos,
  Scyllax,
  MechanicumTransport,
  TechPriest,
  Thanatar
} from '../upgrades'
import {
  MechanicumTaghmataTechPriest,
  MechanicumTaghmataTechThrall,
  MechanicumTaghmataThallax,
  MechanicumTaghmataUrsarax,
  MechanicumTaghmataVorax,
  MechanicumTaghmataCastellax,
  MechanicumTaghmataThanatar,
  MechanicumTaghmataKrios,
  MechanicumTaghmataKaracnos,
  MechanicumTaghmataMyrmidonUnit,
  MechanicumTaghmataTarantulaUnit,
  MechanicumTaghmataMinotaur,
  MechanicumTaghmataOrdinatusMinoris,
  MechanicumTaghmataAvengerStrikeFighter,
  MechanicumTaghmataPrimarisStrikeFighter,
  MechanicumTaghmataFalchion,
  MechanicumTaghmataOrdinatusMajoris
} from '../units/mechanicum-taghmata'
import Detachment from './detachment'
import {
  Unique
} from '../constraints'
import withType from '../../../../utils/with-type'

export class MechanicumTaghmataAdsecularisCovenent extends Detachment {
  constructor () {
    super([
      new MechanicumTaghmataTechPriest(),
      new MechanicumTaghmataTechThrall()
    ], [
      new Krios(),
      new Magos(),
      new Scyllax(),
      new MechanicumTransport()
    ])
  }
}

export class MechanicumTaghmataThallaxCohort extends Detachment {
  constructor () {
    super([
      new MechanicumTaghmataThallax()
    ], [
      new Krios(),
      new Magos(),
      new Scyllax(),
      new MechanicumTransport(),
      new TechPriest()
    ])
  }
}

export class MechanicumTaghmataUrsaraxCohort extends Detachment {
  constructor () {
    super([
      new MechanicumTaghmataUrsarax()
    ], [
      new MechanicumTransport(),
      new TechPriest()
    ])
  }
}

export class MechanicumTaghmataVoraxManiple extends Detachment {
  constructor () {
    super([
      new MechanicumTaghmataVorax()
    ], [
      new TechPriest()
    ])
  }
}

export class MechanicumTaghmataCastellaxManiple extends Detachment {
  constructor () {
    super([
      new MechanicumTaghmataTechPriest(),
      new MechanicumTaghmataCastellax()
    ], [
      new Magos(),
      new Scyllax(),
      new Thanatar()
    ])
  }
}

export class MechanicumTaghmataThanatarManiple extends Detachment {
  constructor () {
    super([
      new MechanicumTaghmataThanatar()
    ], [
      new Magos(),
      new Scyllax(),
      new TechPriest()
    ])
  }
}

export class MechanicumTaghmataKriosSquadron extends Detachment {
  constructor () {
    super([
      new MechanicumTaghmataKrios()
    ], [
      new Krios()
    ])
  }
}

export class MechanicumTaghmataKaracnosSquadron extends Detachment {
  constructor () {
    super([
      new MechanicumTaghmataKaracnos()
    ], [
      new Krios()
    ])
  }
}

export class MechanicumTaghmataMyrmidonSect extends Detachment {
  constructor () {
    super([
      new MechanicumTaghmataMyrmidonUnit()
    ], [
      new Krios(),
      new Magos(),
      new Scyllax(),
      new MechanicumTransport()
    ])
  }
}

export class MechanicumTaghmataTarantulaBattery extends Detachment {
  constructor () {
    super([
      new MechanicumTaghmataTarantulaUnit()
    ])
  }
}

export class MechanicumTaghmataMinotaurBattery extends Detachment {
  constructor () {
    super([
      new MechanicumTaghmataMinotaur()
    ])
  }
}

export class MechanicumTaghmataOrdinatusMinorisTormenta extends Detachment {
  constructor () {
    super([
      new MechanicumTaghmataOrdinatusMinoris()
    ], [], [
      new Unique()
    ])
  }
}

export class MechanicumTaghmataAvengerWing extends Detachment {
  constructor () {
    super([
      new MechanicumTaghmataAvengerStrikeFighter()
    ])
  }
}

export class MechanicumTaghmataPrimarisWing extends Detachment {
  constructor () {
    super([
      new MechanicumTaghmataPrimarisStrikeFighter()
    ])
  }
}

export class MechanicumTaghmataSuperHeavyTankDestroyer extends Detachment {
  constructor () {
    super([
      new MechanicumTaghmataFalchion()
    ])
  }
}

export class MechanicumTaghmataOrdinatusMajorisDetachment extends Detachment {
  constructor () {
    super([
      new MechanicumTaghmataOrdinatusMajoris()
    ], [], [
      new Unique()
    ])
  }
}

withType(MechanicumTaghmataAdsecularisCovenent)
withType(MechanicumTaghmataThallaxCohort)
withType(MechanicumTaghmataUrsaraxCohort)
withType(MechanicumTaghmataVoraxManiple)
withType(MechanicumTaghmataCastellaxManiple)
withType(MechanicumTaghmataThanatarManiple)
withType(MechanicumTaghmataKriosSquadron)
withType(MechanicumTaghmataKaracnosSquadron)
withType(MechanicumTaghmataMyrmidonSect)
withType(MechanicumTaghmataTarantulaBattery)
withType(MechanicumTaghmataMinotaurBattery)
withType(MechanicumTaghmataOrdinatusMinorisTormenta)
withType(MechanicumTaghmataAvengerWing)
withType(MechanicumTaghmataPrimarisWing)
withType(MechanicumTaghmataSuperHeavyTankDestroyer)
withType(MechanicumTaghmataOrdinatusMajorisDetachment)
