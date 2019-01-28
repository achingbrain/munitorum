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
  constructor () {
    super([
      new DaemonicHordesWarpRift()
    ], [], [
      new Unique()
    ])
  }
}

export class DaemonicHordesKhorneHorde extends DaemonicHordesDetachment {
  constructor () {
    super([
      new DaemonicHordesKhorneHordeLeader(),
      new DaemonicHordesBloodletters()
    ], [
      new AdditionalUnitOption(DaemonicHordesFleshHounds),
      new AdditionalUnitOption(DaemonicHordesBloodcrushers),
      new AdditionalUnitOption(DaemonicHordesSkullCannonOfKhorne),
      new AdditionalUnitOption(DaemonicHordesBloodThirster),
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    ])
  }
}

export class DaemonicHordesNurgleHorde extends DaemonicHordesDetachment {
  constructor () {
    super([
      new DaemonicHordesNurgleHordeLeader(),
      new DaemonicHordesPlagueBearers()
    ], [
      new AdditionalUnitOption(DaemonicHordesNurglings),
      new AdditionalUnitOption(DaemonicHordesBeastsOfNurgle),
      new AdditionalUnitOption(DaemonicHordesPlagueDrones),
      new AdditionalUnitOption(DaemonicHordesGreatUncleanOne),
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    ])
  }
}

export class DaemonicHordesSlaaneshHorde extends DaemonicHordesDetachment {
  constructor () {
    super([
      new DaemonicHordesSlaaneshHordeLeader(),
      new DaemonicHordesDaemonettes()
    ], [
      new AdditionalUnitOption(DaemonicHordesSeekersOfSlaanesh),
      new AdditionalUnitOption(DaemonicHordesSeekerChariot),
      new AdditionalUnitOption(DaemonicHordesFiendsOfSlaanesh),
      new AdditionalUnitOption(DaemonicHordesKeeperOfSecrets),
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    ])
  }
}

export class DaemonicHordesTzeenchHorde extends DaemonicHordesDetachment {
  constructor () {
    super([
      new DaemonicHordesTzeenchHordeLeader(),
      new DaemonicHordesHorrorsOfTzeench()
    ], [
      new AdditionalUnitOption(DaemonicHordesFlamersOfTzeench),
      new AdditionalUnitOption(DaemonicHordesScreamersOfTzeench),
      new AdditionalUnitOption(DaemonicHordesBurningChariotOfTzeench),
      new AdditionalUnitOption(DaemonicHordesLordOfChange),
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    ])
  }
}

export class DaemonicHordesKhorneGreaterDaemonHorde extends DaemonicHordesDetachment {
  constructor () {
    super([
      new DaemonicHordesBloodThirsterHordeUnit()
    ], [], [
      new Unique()
    ])
  }
}

export class DaemonicHordesNurgleGreaterDaemonHorde extends DaemonicHordesDetachment {
  constructor () {
    super([
      new DaemonicHordesGreatUncleanOneHordeUnit()
    ], [], [
      new Unique()
    ])
  }
}

export class DaemonicHordesSlaaneshGreaterDaemonHorde extends DaemonicHordesDetachment {
  constructor () {
    super([
      new DaemonicHordesKeeperOfSecretsHordeUnit()
    ], [], [
      new Unique()
    ])
  }
}

export class DaemonicHordesTzeenchGreaterDaemonHorde extends DaemonicHordesDetachment {
  constructor () {
    super([
      new DaemonicHordesLordOfChangeHordeUnit()
    ], [], [
      new Unique()
    ])
  }
}

export class DaemonicHordesKhorneFollowers extends DaemonicHordesDetachment {
  constructor () {
    super([

    ], [
      new AdditionalUnitOption(DaemonicHordesBloodcrushersFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesFleshHoundsFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesSkullCannonOfKhorneFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    ])
  }
}

export class DaemonicHordesNurgleFollowers extends DaemonicHordesDetachment {
  constructor () {
    super([], [
      new AdditionalUnitOption(DaemonicHordesBeastsOfNurgleFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesNurglingsFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesPlagueDronesFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    ])
  }
}

export class DaemonicHordesSlaaneshFollowers extends DaemonicHordesDetachment {
  constructor () {
    super([], [
      new AdditionalUnitOption(DaemonicHordesSeekersOfSlaaneshFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesSeekerChariotFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesFiendsOfSlaaneshFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    ])
  }
}

export class DaemonicHordesTzeenchFollowers extends DaemonicHordesDetachment {
  constructor () {
    super([], [
      new AdditionalUnitOption(DaemonicHordesFlamersOfTzeenchFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesScreamersOfTzeenchFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesBurningChariotOfTzeenchFollowerUnit),
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    ])
  }
}

export class DaemonicHordesChaosUndividedFuryFlight extends DaemonicHordesDetachment {
  constructor () {
    super([
      new DaemonicHordesChaosUndividedFuryFlightUnit()
    ], [
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    ])
  }
}

export class DaemonicHordesChaosUndividedSpawnPack extends DaemonicHordesDetachment {
  constructor () {
    super([
      new DaemonicHordesChaosUndividedSpawnPackUnit()
    ], [
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    ])
  }
}

export class DaemonicHordesChaosUndividedSoulGrinderManiple extends DaemonicHordesDetachment {
  constructor () {
    super([
      new DaemonicHordesChaosUndividedSoulGrinderManipleUnit()
    ], [
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    ])
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
