import {
  TransportOption,
  DropAssault,
  AssaultRam,
  HeavyTransport,
  CommanderOption,
  Praetor,
  Centurion,
  Teleport,
  Tank,
  Hyperios
} from '../upgrades'
import {
  SalamandersPrimarch,
  SalamandersBodyguardSquad,
  SalamandersPyroclastSquad,
  SalamandersFiredrakeTerminatorSquad
} from '../units/salamanders'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../with-type'

export class SalamandersPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SalamandersPrimarch(this),
      new SalamandersBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new HeavyTransport(),
        new Teleport()
      ),
      new Tank(),
      new Hyperios()
    )
    this.setConstraints(
      new Unique()
    )
  }
}

export class SalamandersPyroclastDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SalamandersPyroclastSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new AssaultRam(),
        new HeavyTransport()
      )
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
  }
}

export class SalamandersFiredrakeTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new SalamandersFiredrakeTerminatorSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new HeavyTransport(),
        new Teleport()
      ),
      new CommanderOption(
        new Praetor(),
        new Centurion()
      )
    )
  }
}

withType(SalamandersPrimarchDetachment)
withType(SalamandersPyroclastDetachment)
withType(SalamandersFiredrakeTerminatorDetachment)
