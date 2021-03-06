import {
  TransportOption,
  DropAssault,
  AssaultClaw,
  HeavyTransport,
  Teleport,
  CommanderOption,
  Centurion,
  Praetor
} from '../upgrades'
import {
  WhiteScarsPrimarch,
  WhiteScarsBodyguardSquad,
  WhiteScarsChogorianBrotherhoodBikeUnit,
  WhiteScarsChogorianBrotherhoodJetBikeUnit,
  WhiteScarsEbonKeshig,
  WhiteScarsJavelinAttackUnit
} from '../units/white-scars'
import {
  LegionDestroyerSquad
} from '../units/space-marine-legion'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../with-type'

export class WhiteScarsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new WhiteScarsPrimarch(this),
      new WhiteScarsBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
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

export class WhiteScarsChogorianBrotherhood extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new WhiteScarsChogorianBrotherhoodBikeUnit(this),
      new WhiteScarsChogorianBrotherhoodJetBikeUnit(this),
      new WhiteScarsChogorianBrotherhoodJetBikeUnit(this),
      new WhiteScarsChogorianBrotherhoodJetBikeUnit(this),
      new WhiteScarsChogorianBrotherhoodJetBikeUnit(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Praetor(),
        new Centurion()
      )
    )
  }
}

export class WhiteScarsEbonKeshigDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new WhiteScarsEbonKeshig(this)
    )
    this.setUpgrades(
      new TransportOption(
        new AssaultClaw(),
        new HeavyTransport(),
        new Teleport()
      )
    )
  }
}

export class WhiteScarsDestroyerDetachment extends SpaceMarineLegionDetachment {
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

export class WhiteScarsJavelinAttackDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new WhiteScarsJavelinAttackUnit(this),
      new WhiteScarsJavelinAttackUnit(this),
      new WhiteScarsJavelinAttackUnit(this),
      new WhiteScarsJavelinAttackUnit(this),
      new WhiteScarsJavelinAttackUnit(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault()
      ),
      new CommanderOption(
        new Centurion()
      )
    )
  }
}

withType(WhiteScarsPrimarchDetachment)
withType(WhiteScarsChogorianBrotherhood)
withType(WhiteScarsEbonKeshigDetachment)
withType(WhiteScarsDestroyerDetachment)
withType(WhiteScarsJavelinAttackDetachment)
