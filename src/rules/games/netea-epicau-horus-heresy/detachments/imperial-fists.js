import {
  TransportOption,
  DropAssault,
  AssaultRam,
  AssaultClaw,
  HeavyTransport,
  CommanderOption,
  Centurion,
  Teleport,
  Tank,
  Hyperios
} from '../upgrades'
import {
  LegionDestroyerSquad,
  LegionChampion
} from '../units/space-marine-legion'
import {
  ImperialFistsPrimarch,
  ImperialFistsBodyguardSquad,
  ImperialFistsPhalanxWarderSquad,
  ImperialFistsTemplarBrethrenSquad,
  ImperialFistsCastellumStronghold,
  ImperialFistsPrimusRedoubt,
  ImperialFistsFellblade
} from '../units/imperial-fists'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../with-type'

export class ImperialFistsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialFistsPrimarch(this),
      new ImperialFistsBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new HeavyTransport()
      ),
      new Tank(),
      new Hyperios()
    )
    this.setConstraints(
      new Unique()
    )
  }
}

export class ImperialFistsPhalanxWarderDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialFistsPhalanxWarderSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new Teleport()
      ),
      new CommanderOption(
        new Centurion()
      )
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
  }
}

export class ImperialFistsTemplarBrethrenDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialFistsTemplarBrethrenSquad(this),
      new LegionChampion()
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      )
    )
  }
}

export class ImperialFistsSuperHeavyTankSquadron extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialFistsFellblade(this)
    )
  }
}

export class ImperialFistsDestroyerDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionDestroyerSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault()
      ),
      new CommanderOption(
        new Centurion()
      )
    )
    this.setMandatoryUnits(
      new LimitedPerPoints(1, 2000)
    )
  }
}

export class ImperialFistsCastellumStrongholdDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialFistsCastellumStronghold(this)
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
  }
}

export class ImperialFistsPrimusRedoubtDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new ImperialFistsPrimusRedoubt(this)
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
  }
}

withType(ImperialFistsPrimarchDetachment)
withType(ImperialFistsPhalanxWarderDetachment)
withType(ImperialFistsTemplarBrethrenDetachment)
withType(ImperialFistsSuperHeavyTankSquadron)
withType(ImperialFistsDestroyerDetachment)
withType(ImperialFistsCastellumStrongholdDetachment)
withType(ImperialFistsPrimusRedoubtDetachment)
