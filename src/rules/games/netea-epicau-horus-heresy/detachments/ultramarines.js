import {
  TransportOption,
  DropAssault,
  AssaultRam,
  AssaultClaw,
  HeavyTransport,
  CommanderOption,
  Praetor,
  Centurion,
  Teleport,
  Tank,
  Hyperios,
  Rhinos,
  Dreadnought,
  RapierBattery,
  MultipleChoiceOption,
  UltramarinesRhinos,
  ArmouryAssets
} from '../upgrades'
import {
  LegionDestroyerSquad,
  LegionChampion,
  LegionTacticalDetachmentUnit,
  LegionTacticalSupportSquad,
  LegionHeavySupportSquad
} from '../units/space-marine-legion'
import {
  UltramarinesPrimarch,
  UltramarinesBodyguardSquad,
  UltramarinesFulmentarusTerminatorSquad,
  UltramarinesLoctarusStormSquad,
  UltramarinesInvictarusSuzerainSquad
} from '../units/ultramarines'
import {
  Unique,
  LimitedPerPoints
} from '../constraints'
import {
  PlusTransports
} from '../special-rules'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../with-type'

export class UltramarinesPrimarchDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new UltramarinesPrimarch(this),
      new UltramarinesBodyguardSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new HeavyTransport()
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

export class UltramarinesFulmentarusTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new UltramarinesFulmentarusTerminatorSquad(this)
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

export class UltramarinesLoctarusDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new UltramarinesLoctarusStormSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      )
    )
  }
}

export class UltramarinesInvictarusSuzerainDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new UltramarinesInvictarusSuzerainSquad(this),
      new LegionChampion(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultClaw()
      )
    )
    this.setConstraints(
      new LimitedPerPoints(1, 4000)
    )
  }
}

export class UltramarinesDestroyerDetachment extends SpaceMarineLegionDetachment {
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

export class UltramarinesTacticalDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionTacticalDetachmentUnit(this)
    )
    this.setUpgrades(
      new TransportOption(
        new UltramarinesRhinos(),
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
      new MultipleChoiceOption(
        LegionTacticalSupportSquad,
        LegionHeavySupportSquad
      ),
      new RapierBattery()
    )
    this.setConstraints(
      new PlusTransports()
    )
  }
}

withType(UltramarinesPrimarchDetachment)
withType(UltramarinesFulmentarusTerminatorDetachment)
withType(UltramarinesLoctarusDetachment)
withType(UltramarinesInvictarusSuzerainDetachment)
withType(UltramarinesDestroyerDetachment)
withType(UltramarinesTacticalDetachment)
