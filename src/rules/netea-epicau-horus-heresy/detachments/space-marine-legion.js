import {
  LegionArtilleryUnit,
  LegionAssaultSquad,
  LegionAssaultSupportSquad,
  LegionBreacherSquad,
  LegionBreacherSupportSquad,
  LegionContemptorDreadnoughtTalonUnit,
  LegionContemptorDreadnought,
  LegionTacticalSupportSquad,
  LegionHeavySupportSquad,
  LegionDestroyerSquad,
  LegionDreadnought,
  LegionGunship,
  LegionXiphonInterceptor,
  LegionJavelinAttackSpeeder,
  LegionLandRaiderPhobosSquadronUnit,
  LegionLandRaiderPhobos,
  LegionLandRaiderProteusSquadronUnit,
  LegionLandRaiderProteus,
  LegionLandSpeeder,
  LegionLeviathanSupportDreadnought,
  LegionOutriderUnit,
  LegionPredator,
  LegionPredatorStrikeSquadronUnit,
  LegionRapierSupport,
  LegionReconnaissanceSquad,
  LegionSicaranBattleTankSquadronUnit,
  LegionScimitarJetbike,
  LegionSpacecraftUnit,
  LegionStormEagleAttackShip,
  LegionStormbird,
  LegionSuperHeavyTankBatteryUnit,
  LegionFalchion,
  LegionSuperHeavyTankUnit,
  LegionTacticalDetachmentUnit,
  LegionTerminatorSquad,
  LegionThunderhawkGunship,
  LegionThunderhawkTransporter,
  LegionVindicatorSquadronUnit,
  LegionVindicatorSquadronVindicator,
  LegionSabreStrikeTank
} from '../units/space-marine-legion'
import {
  Upgrade,
  MultipleChoiceOption,
  RapierBattery,
  Hyperios,
  CommanderOption,
  Centurion,
  Praetor,
  TransportOption,
  Rhinos,
  DropAssault,
  AssaultRam,
  AssaultClaw,
  HeavyTransport,
  Teleport,
  Dreadnought,
  Tank,
  ArmouryAssets
} from '../upgrades'
import {
  LimitedPerPoints
} from '../constraints'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../with-type'

export class LegionArtilleryBattery extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionArtilleryUnit(this)
    )
    this.setUpgrades(
      new Hyperios()
    )
    this.setConstraints(
      new LimitedPerPoints(1, 2000)
    )
  }
}

export class LegionAssaultDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionAssaultSquad(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Praetor(),
        new Centurion()
      ),
      new TransportOption(
        new DropAssault()
      )
    )
  }
}

export class LegionAssaultSupportDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionAssaultSupportSquad(this)
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

export class LegionBreacherDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionBreacherSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
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
      new ArmouryAssets()
    )
  }
}

export class LegionBreacherSupportDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionBreacherSupportSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new AssaultClaw(),
        new HeavyTransport()
      ),
      new CommanderOption(
        new Centurion()
      )
    )
  }
}

class ContemptorDreadnoughtUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === LegionContemptorDreadnought.type || item.type === LegionContemptorDreadnoughtTalonUnit.type).length === 6) {
      return []
    }

    return [
      new LegionContemptorDreadnought(detachment)
    ]
  }
}

export class LegionContemptorDreadnoughtTalon extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionContemptorDreadnoughtTalonUnit(this),
      new LegionContemptorDreadnoughtTalonUnit(this),
      new LegionContemptorDreadnought(this),
      new LegionContemptorDreadnought(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault()
      ),
      new ContemptorDreadnoughtUpgrade(),
      new CommanderOption(
        new Centurion()
      )
    )
  }
}

export class LegionDestroyerDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionDestroyerSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault()
      )
    )
    this.setConstraints(
      new LimitedPerPoints(1, 4000)
    )
  }
}

class DreadnoughtUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === LegionDreadnought.type).length === 6) {
      return []
    }

    return [
      new LegionDreadnought(detachment)
    ]
  }
}

export class LegionDreadnoughtTalon extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionDreadnought(this),
      new LegionDreadnought(this),
      new LegionDreadnought(this),
      new LegionDreadnought(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault()
      ),
      new DreadnoughtUpgrade()
    )
  }
}

export class LegionGunshipWing extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionGunship(this)
    )
  }
}

export class LegionInterceptorAttackWing extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionXiphonInterceptor(this)
    )
  }
}

export class LegionJavelinAttackSpeederSquadron extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionJavelinAttackSpeeder(this),
      new LegionJavelinAttackSpeeder(this),
      new LegionJavelinAttackSpeeder(this),
      new LegionJavelinAttackSpeeder(this),
      new LegionJavelinAttackSpeeder(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Centurion()
      )
    )
  }
}

class LegionLandRaiderPhobosSquadronUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === LegionLandRaiderPhobosSquadronUnit.type || item.type === LegionLandRaiderPhobos.type).length === 6) {
      return []
    }

    return [
      new LegionLandRaiderPhobos(detachment)
    ]
  }
}

export class LegionLandRaiderPhobosSquadron extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionLandRaiderPhobosSquadronUnit(this),
      new LegionLandRaiderPhobosSquadronUnit(this),
      new LegionLandRaiderPhobos(this),
      new LegionLandRaiderPhobos(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Centurion()
      ),
      new Hyperios(),
      new LegionLandRaiderPhobosSquadronUpgrade()
    )
  }
}

class LegionLandRaiderProteusSquadronUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === LegionLandRaiderProteusSquadronUnit.type || item.type === LegionLandRaiderProteus.type).length === 6) {
      return []
    }

    return [
      new LegionLandRaiderProteus(detachment)
    ]
  }
}

export class LegionLandRaiderProteusSquadron extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionLandRaiderProteusSquadronUnit(this),
      new LegionLandRaiderProteusSquadronUnit(this),
      new LegionLandRaiderProteus(this),
      new LegionLandRaiderProteus(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Centurion()
      ),
      new Hyperios(),
      new LegionLandRaiderProteusSquadronUpgrade()
    )
  }
}

export class LegionLandSpeederSquadron extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionLandSpeeder(this),
      new LegionLandSpeeder(this),
      new LegionLandSpeeder(this),
      new LegionLandSpeeder(this),
      new LegionLandSpeeder(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Centurion()
      )
    )
  }
}

export class LegionLeviathanDreadnoughtTalon extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionLeviathanSupportDreadnought(this),
      new LegionLeviathanSupportDreadnought(this),
      new LegionLeviathanSupportDreadnought(this)
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

export class LegionOutriderSquadron extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionOutriderUnit(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Centurion()
      )
    )
  }
}

class PredatorUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.length === 6) {
      return []
    }

    return [
      new LegionPredator(detachment)
    ]
  }
}

export class LegionPredatorStrikeSquadron extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionPredatorStrikeSquadronUnit(this),
      new LegionPredatorStrikeSquadronUnit(this),
      new LegionPredator(this),
      new LegionPredator(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Centurion()
      ),
      new Hyperios(),
      new PredatorUpgrade()
    )
  }
}

export class LegionRapierWeaponsBattery extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionRapierSupport(this),
      new LegionRapierSupport(this),
      new LegionRapierSupport(this),
      new LegionRapierSupport(this),
      new LegionRapierSupport(this),
      new LegionRapierSupport(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault()
      )
    )
  }
}

export class LegionReconnaissanceDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionReconnaissanceSquad(this)
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
  }
}

class LegionSicaranBattleTankSquadronUnitUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === LegionSicaranBattleTankSquadronUnit.type).length === 6) {
      return []
    }

    return [
      new LegionSicaranBattleTankSquadronUnit(detachment)
    ]
  }
}

export class LegionSicaranBattleTankSquadron extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionSicaranBattleTankSquadronUnit(this),
      new LegionSicaranBattleTankSquadronUnit(this),
      new LegionSicaranBattleTankSquadronUnit(this),
      new LegionSicaranBattleTankSquadronUnit(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Centurion()
      ),
      new Hyperios(),
      new LegionSicaranBattleTankSquadronUnitUpgrade()
    )
  }
}

export class LegionSkyHunterAttackSquadron extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionScimitarJetbike(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Centurion()
      )
    )
  }
}

export class LegionSpacecraft extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionSpacecraftUnit(this)
    )
  }
}

export class LegionStormEagleAttackWing extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionStormEagleAttackShip(this)
    )
  }
}

export class LegionStormbirdWing extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionStormbird(this)
    )
  }
}

export class LegionSuperHeavyTankBattery extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionSuperHeavyTankBatteryUnit(this)
    )
  }
}

export class LegionSuperHeavyTankDestroyer extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionFalchion(this)
    )
  }
}

export class LegionSuperHeavyTank extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionSuperHeavyTankUnit(this)
    )
  }
}

export class LegionTacticalDetachment extends SpaceMarineLegionDetachment {
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
        LegionTacticalSupportSquad,
        LegionHeavySupportSquad
      ),
      new RapierBattery()
    )
  }
}

export class LegionTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionTerminatorSquad(this)
    )
    this.setUpgrades(
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new AssaultClaw(),
        new HeavyTransport(),
        new Teleport()
      ),
      new CommanderOption(
        new Praetor(),
        new Centurion()
      ),
      new Hyperios(),
      new Dreadnought(),
      new Tank(),
      new ArmouryAssets()
    )
  }
}

export class LegionThunderhawkGunshipWing extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionThunderhawkGunship(this)
    )
  }
}

export class LegionThunderhawkTransporterWing extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionThunderhawkTransporter(this)
    )
  }
}

export class LegionVindicatorSquadron extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionVindicatorSquadronUnit(this),
      new LegionVindicatorSquadronUnit(this),
      new LegionVindicatorSquadronVindicator(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Centurion()
      ),
      new Hyperios()
    )

    this.units[2].min = 2
    this.units[2].max = 4
  }
}

export class LegionSabreStrikeSquadron extends SpaceMarineLegionDetachment {
  constructor (list) {
    super(list)

    this.setMandatoryUnits(
      new LegionSabreStrikeTank(this)
    )
    this.setUpgrades(
      new CommanderOption(
        new Centurion()
      )
    )
  }
}

withType(LegionArtilleryBattery)
withType(LegionAssaultDetachment)
withType(LegionAssaultSupportDetachment)
withType(LegionBreacherDetachment)
withType(LegionBreacherSupportDetachment)
withType(LegionContemptorDreadnoughtTalon)
withType(LegionDestroyerDetachment)
withType(LegionDreadnoughtTalon)
withType(LegionGunshipWing)
withType(LegionInterceptorAttackWing)
withType(LegionJavelinAttackSpeederSquadron)
withType(LegionLandRaiderPhobosSquadron)
withType(LegionLandRaiderProteusSquadron)
withType(LegionLandSpeederSquadron)
withType(LegionLeviathanDreadnoughtTalon)
withType(LegionOutriderSquadron)
withType(LegionPredatorStrikeSquadron)
withType(LegionRapierWeaponsBattery)
withType(LegionReconnaissanceDetachment)
withType(LegionSicaranBattleTankSquadron)
withType(LegionSkyHunterAttackSquadron)
withType(LegionSpacecraft)
withType(LegionStormEagleAttackWing)
withType(LegionStormbirdWing)
withType(LegionSuperHeavyTankBattery)
withType(LegionSuperHeavyTankDestroyer)
withType(LegionSuperHeavyTank)
withType(LegionTacticalDetachment)
withType(LegionTerminatorDetachment)
withType(LegionThunderhawkGunshipWing)
withType(LegionThunderhawkTransporterWing)
withType(LegionVindicatorSquadron)
withType(LegionSabreStrikeSquadron)
