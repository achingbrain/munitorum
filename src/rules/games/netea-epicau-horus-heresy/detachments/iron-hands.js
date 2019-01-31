import {
  Hyperios,
  Tank,
  TransportOption,
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
  LegionDestroyerSquad
} from '../units/space-marine-legion'
import {
  IronHandsPrimarch,
  IronHandsBodyguardSquad,
  IronHandsMedusanImmortalsSquad,
  IronHandsGorgonTerminatorSquad,
  IronHandsPredatorStrikeSquadronUnit,
  IronHandsSuperHeavyTankSquadronUnit,
  IronHandsPredator
} from '../units/iron-hands'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../with-type'

export class IronHandsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new IronHandsPrimarch(this),
      new IronHandsBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new AssaultClaw(),
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

export class IronHandsGorgonTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new IronHandsGorgonTerminatorSquad(this)
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

export class IronHandsMedusanImmortalsDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new IronHandsMedusanImmortalsSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new HeavyTransport(),
        new AssaultRam()
      )
    )
    this.setConstraints(
      new LimitedPerPoints(1, 1000)
    )
  }
}

export class IronHandsPredatorDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new IronHandsPredatorStrikeSquadronUnit(this),
      new IronHandsPredatorStrikeSquadronUnit(this),
      new IronHandsPredator(this),
      new IronHandsPredator(this),
      new IronHandsPredator(this),
      new IronHandsPredator(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Centurion()
      ),
      new Hyperios()
    )
  }
}

export class IronHandsDestroyerDetachment extends SpaceMarineLegionDetachment {
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
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
  }
}

export class IronHandsSuperHeavyTankSquadron extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new IronHandsSuperHeavyTankSquadronUnit(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Centurion()
      )
    )
  }
}

withType(IronHandsPrimarchDetachment)
withType(IronHandsGorgonTerminatorDetachment)
withType(IronHandsMedusanImmortalsDetachment)
withType(IronHandsPredatorDetachment)
withType(IronHandsSuperHeavyTankSquadron)
withType(IronHandsDestroyerDetachment)
