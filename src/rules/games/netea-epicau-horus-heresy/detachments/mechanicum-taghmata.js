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
import MechanicumTaghmataDetachment from './mechanicum-taghmata-detachment'
import {
  Unique
} from '../constraints'
import withType from '../with-type'

export class MechanicumTaghmataAdsecularisCovenent extends MechanicumTaghmataDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new MechanicumTaghmataTechPriest(this),
      new MechanicumTaghmataTechThrall(this)
    )
    this.setUpgrades(
      new Krios(),
      new Magos(),
      new Scyllax(),
      new MechanicumTransport()
    )
  }
}

export class MechanicumTaghmataThallaxCohort extends MechanicumTaghmataDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new MechanicumTaghmataThallax(this)
    )
    this.setUpgrades(
      new Krios(),
      new Magos(),
      new Scyllax(),
      new MechanicumTransport(),
      new TechPriest()
    )
  }
}

export class MechanicumTaghmataUrsaraxCohort extends MechanicumTaghmataDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new MechanicumTaghmataUrsarax(this)
    )
    this.setUpgrades(
      new MechanicumTransport(),
      new TechPriest()
    )
  }
}

export class MechanicumTaghmataVoraxManiple extends MechanicumTaghmataDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new MechanicumTaghmataVorax(this)
    )
    this.setUpgrades(
      new TechPriest()
    )
  }
}

export class MechanicumTaghmataCastellaxManiple extends MechanicumTaghmataDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new MechanicumTaghmataTechPriest(this),
      new MechanicumTaghmataCastellax(this)
    )
    this.setUpgrades(
      new Magos(),
      new Scyllax(),
      new Thanatar()
    )
  }
}

export class MechanicumTaghmataThanatarManiple extends MechanicumTaghmataDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new MechanicumTaghmataThanatar(this)
    )
    this.setUpgrades(
      new Magos(),
      new Scyllax(),
      new TechPriest()
    )
  }
}

export class MechanicumTaghmataKriosSquadron extends MechanicumTaghmataDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new MechanicumTaghmataKrios(this)
    )
    this.setUpgrades(
      new Krios()
    )
  }
}

export class MechanicumTaghmataKaracnosSquadron extends MechanicumTaghmataDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new MechanicumTaghmataKaracnos(this)
    )
    this.setUpgrades(
      new Krios()
    )
  }
}

export class MechanicumTaghmataMyrmidonSect extends MechanicumTaghmataDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new MechanicumTaghmataMyrmidonUnit(this)
    )
    this.setUpgrades(
      new Krios(),
      new Magos(),
      new Scyllax(),
      new MechanicumTransport()
    )
  }
}

export class MechanicumTaghmataTarantulaBattery extends MechanicumTaghmataDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new MechanicumTaghmataTarantulaUnit(this)
    )
  }
}

export class MechanicumTaghmataMinotaurBattery extends MechanicumTaghmataDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new MechanicumTaghmataMinotaur(this)
    )
  }
}

export class MechanicumTaghmataOrdinatusMinorisTormenta extends MechanicumTaghmataDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new MechanicumTaghmataOrdinatusMinoris(this)
    )
    this.setConstraints(
      new Unique()
    )
  }
}

export class MechanicumTaghmataAvengerWing extends MechanicumTaghmataDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new MechanicumTaghmataAvengerStrikeFighter(this)
    )
  }
}

export class MechanicumTaghmataPrimarisWing extends MechanicumTaghmataDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new MechanicumTaghmataPrimarisStrikeFighter(this)
    )
  }
}

export class MechanicumTaghmataSuperHeavyTankDestroyer extends MechanicumTaghmataDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new MechanicumTaghmataFalchion(this)
    )
  }
}

export class MechanicumTaghmataOrdinatusMajorisDetachment extends MechanicumTaghmataDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new MechanicumTaghmataOrdinatusMajoris(this)
    )
    this.setConstraints(
      new Unique()
    )
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
