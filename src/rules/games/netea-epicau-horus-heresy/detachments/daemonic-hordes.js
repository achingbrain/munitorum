import {
  AdditionalUnitOption
} from '../upgrades'
import {
  DaemonicHordesWarpRift,
  DaemonicHordesKhorneHordeLeader,
  DaemonicHordesBloodletters,
  DaemonicHordesFleshHounds,
  DaemonicHordesFleshHoundsFollowerUnit,
  DaemonicHordesBloodcrushers,
  DaemonicHordesBloodcrushersFollowerUnit,
  DaemonicHordesSkullCannonOfKhorne,
  DaemonicHordesSkullCannonOfKhorneFollowerUnit,
  DaemonicHordesBloodThirster,
  DaemonicHordesBloodThirsterHordeUnit,
  DaemonicHordesNurgleHordeLeader,
  DaemonicHordesPlagueBearers,
  DaemonicHordesNurglings,
  DaemonicHordesNurglingsFollowerUnit,
  DaemonicHordesBeastsOfNurgle,
  DaemonicHordesBeastsOfNurgleFollowerUnit,
  DaemonicHordesPlagueDrones,
  DaemonicHordesPlagueDronesFollowerUnit,
  DaemonicHordesGreatUncleanOne,
  DaemonicHordesGreatUncleanOneHordeUnit,
  DaemonicHordesSlaaneshHordeLeader,
  DaemonicHordesDaemonettes,
  DaemonicHordesFiendsOfSlaanesh,
  DaemonicHordesFiendsOfSlaaneshFollowerUnit,
  DaemonicHordesSeekersOfSlaanesh,
  DaemonicHordesSeekersOfSlaaneshFollowerUnit,
  DaemonicHordesSeekerChariot,
  DaemonicHordesSeekerChariotFollowerUnit,
  DaemonicHordesKeeperOfSecrets,
  DaemonicHordesKeeperOfSecretsHordeUnit,
  DaemonicHordesTzeenchHordeLeader,
  DaemonicHordesHorrorsOfTzeench,
  DaemonicHordesFlamersOfTzeench,
  DaemonicHordesFlamersOfTzeenchFollowerUnit,
  DaemonicHordesScreamersOfTzeench,
  DaemonicHordesScreamersOfTzeenchFollowerUnit,
  DaemonicHordesBurningChariotOfTzeench,
  DaemonicHordesBurningChariotOfTzeenchFollowerUnit,
  DaemonicHordesLordOfChange,
  DaemonicHordesLordOfChangeHordeUnit,
  DaemonicHordesChaosFury,
  DaemonicHordesChaosUndividedFuryFlightUnit,
  DaemonicHordesChaosSpawn,
  DaemonicHordesChaosUndividedSpawnPackUnit,
  DaemonicHordesSoulGrinder,
  DaemonicHordesChaosUndividedSoulGrinderManipleUnit,
  DaemonicHordesChaosAltar
} from '../units/daemonic-hordes'
import DaemonicHordesDetachment from './daemonic-hordes-detachment'
import {
  Unique
} from '../constraints'
import withType from '../../../../utils/with-type'

export class DaemonicHordesWarpRiftDetachment extends DaemonicHordesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new DaemonicHordesWarpRift(this)
    )
    this.setConstraints(
      new Unique()
    )
  }
}

export class DaemonicHordesKhorneHorde extends DaemonicHordesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new DaemonicHordesKhorneHordeLeader(this),
      new DaemonicHordesBloodletters(this)
    )
    this.setUpgrades(
      new AdditionalUnitOption(DaemonicHordesFleshHounds),
      new AdditionalUnitOption(DaemonicHordesBloodcrushers),
      new AdditionalUnitOption(DaemonicHordesSkullCannonOfKhorne),
      new AdditionalUnitOption(DaemonicHordesBloodThirster),
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    )
  }
}

export class DaemonicHordesNurgleHorde extends DaemonicHordesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new DaemonicHordesNurgleHordeLeader(this),
      new DaemonicHordesPlagueBearers(this)
    )
    this.setUpgrades(
      new AdditionalUnitOption(DaemonicHordesNurglings),
      new AdditionalUnitOption(DaemonicHordesBeastsOfNurgle),
      new AdditionalUnitOption(DaemonicHordesPlagueDrones),
      new AdditionalUnitOption(DaemonicHordesGreatUncleanOne),
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    )
  }
}

export class DaemonicHordesSlaaneshHorde extends DaemonicHordesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new DaemonicHordesSlaaneshHordeLeader(this),
      new DaemonicHordesDaemonettes(this)
    )
    this.setUpgrades(
      new AdditionalUnitOption(DaemonicHordesSeekersOfSlaanesh),
      new AdditionalUnitOption(DaemonicHordesSeekerChariot),
      new AdditionalUnitOption(DaemonicHordesFiendsOfSlaanesh),
      new AdditionalUnitOption(DaemonicHordesKeeperOfSecrets),
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    )
  }
}

export class DaemonicHordesTzeenchHorde extends DaemonicHordesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new DaemonicHordesTzeenchHordeLeader(this),
      new DaemonicHordesHorrorsOfTzeench(this)
    )
    this.setUpgrades(
      new AdditionalUnitOption(DaemonicHordesFlamersOfTzeench),
      new AdditionalUnitOption(DaemonicHordesScreamersOfTzeench),
      new AdditionalUnitOption(DaemonicHordesBurningChariotOfTzeench),
      new AdditionalUnitOption(DaemonicHordesLordOfChange),
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    )
  }
}

export class DaemonicHordesKhorneGreaterDaemonHorde extends DaemonicHordesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new DaemonicHordesBloodThirsterHordeUnit(this)
    )
  }
}

export class DaemonicHordesNurgleGreaterDaemonHorde extends DaemonicHordesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new DaemonicHordesGreatUncleanOneHordeUnit(this)
    )
  }
}

export class DaemonicHordesSlaaneshGreaterDaemonHorde extends DaemonicHordesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new DaemonicHordesKeeperOfSecretsHordeUnit(this)
    )
  }
}

export class DaemonicHordesTzeenchGreaterDaemonHorde extends DaemonicHordesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new DaemonicHordesLordOfChangeHordeUnit(this)
    )
  }
}

export class DaemonicHordesKhorneFollowers extends DaemonicHordesDetachment {
  constructor (list) {
    super(list)

    this.setUpgrades(
      new AdditionalUnitOption(DaemonicHordesBloodcrushersFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesFleshHoundsFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesSkullCannonOfKhorneFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    )
  }
}

export class DaemonicHordesNurgleFollowers extends DaemonicHordesDetachment {
  constructor (list) {
    super(list)

    this.setUpgrades(
      new AdditionalUnitOption(DaemonicHordesBeastsOfNurgleFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesNurglingsFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesPlagueDronesFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    )
  }
}

export class DaemonicHordesSlaaneshFollowers extends DaemonicHordesDetachment {
  constructor (list) {
    super(list)

    this.setUpgrades(
      new AdditionalUnitOption(DaemonicHordesSeekersOfSlaaneshFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesSeekerChariotFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesFiendsOfSlaaneshFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    )
  }
}

export class DaemonicHordesTzeenchFollowers extends DaemonicHordesDetachment {
  constructor (list) {
    super(list)

    this.setUpgrades(
      new AdditionalUnitOption(DaemonicHordesFlamersOfTzeenchFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesScreamersOfTzeenchFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesBurningChariotOfTzeenchFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    )
  }
}

export class DaemonicHordesChaosUndividedFuryFlight extends DaemonicHordesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new DaemonicHordesChaosUndividedFuryFlightUnit(this)
    )
    this.setUpgrades(
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    )
  }
}

export class DaemonicHordesChaosUndividedSpawnPack extends DaemonicHordesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new DaemonicHordesChaosUndividedSpawnPackUnit(this)
    )
    this.setUpgrades(
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    )
  }
}

export class DaemonicHordesChaosUndividedSoulGrinderManiple extends DaemonicHordesDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new DaemonicHordesChaosUndividedSoulGrinderManipleUnit(this)
    )
    this.setUpgrades(
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    )
  }
}

withType(DaemonicHordesWarpRiftDetachment)
withType(DaemonicHordesKhorneHorde)
withType(DaemonicHordesNurgleHorde)
withType(DaemonicHordesSlaaneshHorde)
withType(DaemonicHordesTzeenchHorde)
withType(DaemonicHordesKhorneGreaterDaemonHorde)
withType(DaemonicHordesNurgleGreaterDaemonHorde)
withType(DaemonicHordesSlaaneshGreaterDaemonHorde)
withType(DaemonicHordesTzeenchGreaterDaemonHorde)
withType(DaemonicHordesKhorneFollowers)
withType(DaemonicHordesNurgleFollowers)
withType(DaemonicHordesSlaaneshFollowers)
withType(DaemonicHordesTzeenchFollowers)
withType(DaemonicHordesChaosUndividedFuryFlight)
withType(DaemonicHordesChaosUndividedSpawnPack)
withType(DaemonicHordesChaosUndividedSoulGrinderManiple)
