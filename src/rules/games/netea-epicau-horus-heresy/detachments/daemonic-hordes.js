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
  DaemonicHordesChaosFuryFlightUnit,
  DaemonicHordesChaosSpawn,
  DaemonicHordesChaosSpawnPackUnit,
  DaemonicHordesSoulGrinder,
  DaemonicHordesSoulGrinderManipleUnit,
  DaemonicHordesChaosAltar
} from '../units/daemonic-hordes'
import Detachment from './detachment'
import {
  Unique
} from '../constraints'
import withType from '../../../../utils/with-type'

export class DaemonicHordesWarpRiftDetachment extends Detachment {
  constructor () {
    super([
      new DaemonicHordesWarpRift()
    ], [], [
      new Unique()
    ])
  }
}

export class DaemonicHordesKhorneHorde extends Detachment {
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

export class DaemonicHordesNurgleHorde extends Detachment {
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

export class DaemonicHordesSlaaneshHorde extends Detachment {
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

export class DaemonicHordesTzeenchHorde extends Detachment {
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

export class DaemonicHordesKhorneGreaterDaemonHorde extends Detachment {
  constructor () {
    super([
      new DaemonicHordesBloodThirsterHordeUnit()
    ], [], [
      new Unique()
    ])
  }
}

export class DaemonicHordesNurgleGreaterDaemonHorde extends Detachment {
  constructor () {
    super([
      new DaemonicHordesGreatUncleanOneHordeUnit()
    ], [], [
      new Unique()
    ])
  }
}

export class DaemonicHordesSlaaneshGreaterDaemonHorde extends Detachment {
  constructor () {
    super([
      new DaemonicHordesKeeperOfSecretsHordeUnit()
    ], [], [
      new Unique()
    ])
  }
}

export class DaemonicHordesTzeenchGreaterDaemonHorde extends Detachment {
  constructor () {
    super([
      new DaemonicHordesLordOfChangeHordeUnit()
    ], [], [
      new Unique()
    ])
  }
}

export class DaemonicHordesKhorneFollowers extends Detachment {
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

export class DaemonicHordesNurgleFollowers extends Detachment {
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

export class DaemonicHordesSlaaneshFollowers extends Detachment {
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

export class DaemonicHordesTzeenchFollowers extends Detachment {
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

export class DaemonicHordesChaosFuryFlight extends Detachment {
  constructor () {
    super([
      new DaemonicHordesChaosFuryFlightUnit()
    ], [
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    ])
  }
}

export class DaemonicHordesChaosSpawnPack extends Detachment {
  constructor () {
    super([
      new DaemonicHordesChaosSpawnPackUnit()
    ], [
      new AdditionalUnitOption(DaemonicHordesChaosSpawn),
      new AdditionalUnitOption(DaemonicHordesChaosFury),
      new AdditionalUnitOption(DaemonicHordesChaosAltar),
      new AdditionalUnitOption(DaemonicHordesSoulGrinder)
    ])
  }
}

export class DaemonicHordesSoulGrinderManiple extends Detachment {
  constructor () {
    super([
      new DaemonicHordesSoulGrinderManipleUnit()
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
withType(DaemonicHordesChaosFuryFlight)
withType(DaemonicHordesChaosSpawnPack)
withType(DaemonicHordesSoulGrinderManiple)
