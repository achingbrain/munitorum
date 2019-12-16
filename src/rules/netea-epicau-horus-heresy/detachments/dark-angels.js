import {
  Hyperios,
  Tank,
  TransportOption,
  DropAssault,
  HeavyTransport,
  Teleport,
  CommanderOption,
  Centurion,
  ArmouryAssets,
  AssaultClaw,
  Praetor,
  Rhinos,
  Dreadnought,
  RapierBattery,
  MultipleChoiceOption
} from '../upgrades'
import {
  LegionDestroyerSquad,
  LegionTacticalDetachmentUnit
} from '../units/space-marine-legion'
import {
  DarkAngelsPrimarch,
  DarkAngelsBodyguardSquad,
  DarkAngelsSuperHeavyTankSquadronUnit,
  DarkAngelsTacticalSupportSquad,
  DarkAngelsHeavySupportSquad
} from '../units/dark-angels'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../with-type'

export class DarkAngelsPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new DarkAngelsPrimarch(this),
      new DarkAngelsBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new HeavyTransport(),
        new Teleport()
      ),
      new Tank(),
      new ArmouryAssets(),
      new Hyperios()
    )
    this.setConstraints(
      new Unique()
    )
  }
}

export class DarkAngelsDestroyerDetachment extends SpaceMarineLegionDetachment {
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

export class DarkAngelsSuperHeavyTankSquadron extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new DarkAngelsSuperHeavyTankSquadronUnit(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Centurion()
      )
    )
  }
}

export class DarkAngelsTacticalDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionTacticalDetachmentUnit(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new AssaultClaw(),
        new HeavyTransport()
      ),
      new CommanderOption(
        new Praetor(),
        new Centurion()
      ),
      new Hyperios(),
      new Dreadnought(),
      new Tank(),
      new ArmouryAssets(),
      new MultipleChoiceOption(
        DarkAngelsTacticalSupportSquad,
        DarkAngelsHeavySupportSquad
      ),
      new RapierBattery()
    )
  }
}

withType(DarkAngelsPrimarchDetachment)
withType(DarkAngelsSuperHeavyTankSquadron)
withType(DarkAngelsDestroyerDetachment)
withType(DarkAngelsTacticalDetachment)
