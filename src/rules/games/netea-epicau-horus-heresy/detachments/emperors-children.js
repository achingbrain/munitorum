import {
  Hyperios,
  Tank,
  TransportOption,
  Rhinos,
  DropAssault,
  AssaultRam,
  AssaultClaw,
  HeavyTransport,
  Teleport,
  CommanderOption,
  Centurion,
  Praetor
} from '../upgrades'
import {
  EmperorsChildrenPrimarch,
  EmperorsChildrenBodyguardSquad,
  EmperorsChildrenPhoenixTerminatorSquad,
  EmperorsChildrenPalatineBladesSquad,
  EmperorsChildrenKakophoniSquad
} from '../units/emperors-children'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import {
  PlusTransports
} from '../special-rules'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class EmperorsChildrenPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new EmperorsChildrenPrimarch(this),
      new EmperorsChildrenBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new AssaultClaw(),
        new HeavyTransport(),
        new Teleport()
      )
    )
    this.setConstraints(
      new Unique()
    )
  }
}

export class EmperorsChildrenPhoenixTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new EmperorsChildrenPhoenixTerminatorSquad(this)
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
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
  }
}

export class EmperorsChildrenPalatineBladesDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new EmperorsChildrenPalatineBladesSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new AssaultClaw()
      ),
      new CommanderOption(
        new Centurion()
      )
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
    this.setRules(
      new PlusTransports()
    )
  }
}

export class EmperorsChildrenKakophoniDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new EmperorsChildrenKakophoniSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new HeavyTransport()
      ),
      new Tank(),
      new Hyperios()
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
    this.setRules(
      new PlusTransports()
    )
  }
}

withType(EmperorsChildrenPrimarchDetachment)
withType(EmperorsChildrenPhoenixTerminatorDetachment)
withType(EmperorsChildrenPalatineBladesDetachment)
withType(EmperorsChildrenKakophoniDetachment)
