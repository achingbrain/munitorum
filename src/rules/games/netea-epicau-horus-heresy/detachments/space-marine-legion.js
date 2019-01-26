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
  LegionFireRaptorGunship,
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
  LegionVindicatorSquadronVindicator
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
  Tank
} from '../upgrades'
import {
  LimitedPerPoints
} from '../constraints'
import {
  PlusTransports
} from '../special-rules'
import SpaceMarineLegionDetachment from './space-marine-legion-detachment'
import withType from '../../../../utils/with-type'

export class LegionArtilleryBattery extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionArtilleryUnit()
    ], [
      new Hyperios()
    ], [
      new LimitedPerPoints(1, 2000)
    ])
  }
}

export class LegionAssaultDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionAssaultSquad()
    ], [
      new CommanderOption(
        new Praetor(),
        new Centurion()
      )
    ])
  }
}

export class LegionAssaultSupportDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionAssaultSupportSquad()
    ], [
      new TransportOption(
        new DropAssault()
      ),
      new CommanderOption(
        new Centurion()
      )
    ])
  }
}

export class LegionBreacherDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionBreacherSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new AssaultClaw(),
        new HeavyTransport()
      ),
      new CommanderOption(
        new Praetor(),
        new Centurion()
      )
    ])
  }
}

export class LegionBreacherSupportDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionBreacherSupportSquad()
    ], [
      new TransportOption(
        new DropAssault(),
        new AssaultRam(),
        new AssaultClaw(),
        new HeavyTransport()
      ),
      new CommanderOption(
        new Centurion()
      )
    ])
  }
}

class ContemptorDreadnoughtUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === LegionContemptorDreadnought.type || item.type === LegionContemptorDreadnoughtTalonUnit.type).length === 6) {
      return []
    }

    return [
      LegionContemptorDreadnought
    ]
  }
}

export class LegionContemptorDreadnoughtTalon extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionContemptorDreadnoughtTalonUnit(),
      new LegionContemptorDreadnoughtTalonUnit(),
      new LegionContemptorDreadnought(),
      new LegionContemptorDreadnought()
    ], [
      new TransportOption(
        new DropAssault()
      ),
      new ContemptorDreadnoughtUpgrade()
    ])
  }
}

export class LegionDestroyerDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionDestroyerSquad()
    ], [
      new TransportOption(
        new DropAssault()
      )
    ], [
      new LimitedPerPoints(1, 4000)
    ])
  }
}

class DreadnoughtUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === LegionDreadnought.type).length === 6) {
      return []
    }

    return [
      LegionDreadnought
    ]
  }
}

export class LegionDreadnoughtTalon extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionDreadnought(),
      new LegionDreadnought(),
      new LegionDreadnought(),
      new LegionDreadnought()
    ], [
      new TransportOption(
        new DropAssault()
      ),
      new DreadnoughtUpgrade()
    ])

    this.units[0].mandatory = true
  }
}

export class LegionGunshipWing extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionFireRaptorGunship()
    ])
  }
}

export class LegionInterceptorAttackWing extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionXiphonInterceptor()
    ])
  }
}

export class LegionJavelinAttackSpeederSquadron extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionJavelinAttackSpeeder(),
      new LegionJavelinAttackSpeeder(),
      new LegionJavelinAttackSpeeder(),
      new LegionJavelinAttackSpeeder(),
      new LegionJavelinAttackSpeeder()
    ], [
      new CommanderOption(
        new Centurion()
      )
    ])
  }
}

class LegionLandRaiderPhobosSquadronUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === LegionLandRaiderPhobosSquadronUnit.type || item.type === LegionLandRaiderPhobos).length === 6) {
      return []
    }

    return [
      LegionLandRaiderPhobos
    ]
  }
}

export class LegionLandRaiderPhobosSquadron extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionLandRaiderPhobosSquadronUnit(),
      new LegionLandRaiderPhobosSquadronUnit(),
      new LegionLandRaiderPhobos(),
      new LegionLandRaiderPhobos()
    ], [
      new CommanderOption(
        new Centurion()
      ),
      new Hyperios(),
      new LegionLandRaiderPhobosSquadronUpgrade()
    ])
  }
}

class LegionLandRaiderProteusSquadronUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === LegionLandRaiderProteusSquadronUnit.type || item.type === LegionLandRaiderProteus).length === 6) {
      return []
    }

    return [
      LegionLandRaiderProteus
    ]
  }
}

export class LegionLandRaiderProteusSquadron extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionLandRaiderProteusSquadronUnit(),
      new LegionLandRaiderProteusSquadronUnit(),
      new LegionLandRaiderProteus(),
      new LegionLandRaiderProteus()
    ], [
      new CommanderOption(
        new Centurion()
      ),
      new Hyperios(),
      new LegionLandRaiderProteusSquadronUpgrade()
    ])
  }
}

export class LegionLandSpeederSquadron extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionLandSpeeder(),
      new LegionLandSpeeder(),
      new LegionLandSpeeder(),
      new LegionLandSpeeder(),
      new LegionLandSpeeder()
    ], [
      new CommanderOption(
        new Centurion()
      )
    ])
  }
}

export class LegionLeviathanDreadnoughtTalon extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionLeviathanSupportDreadnought(),
      new LegionLeviathanSupportDreadnought(),
      new LegionLeviathanSupportDreadnought()
    ], [
      new TransportOption(
        new DropAssault()
      )
    ])
  }
}

export class LegionOutriderSquadron extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionOutriderUnit()
    ], [
      new CommanderOption(
        new Centurion()
      )
    ])
  }
}

class PredatorUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.length === 6) {
      return []
    }

    return [
      LegionPredator
    ]
  }
}

export class LegionPredatorStrikeSquadron extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionPredatorStrikeSquadronUnit(),
      new LegionPredatorStrikeSquadronUnit(),
      new LegionPredator(),
      new LegionPredator()
    ], [
      new CommanderOption(
        new Centurion()
      ),
      new Hyperios(),
      new PredatorUpgrade()
    ])
  }
}

export class LegionRapierWeaponsBattery extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionRapierSupport(),
      new LegionRapierSupport(),
      new LegionRapierSupport(),
      new LegionRapierSupport(),
      new LegionRapierSupport(),
      new LegionRapierSupport()
    ], [
      new TransportOption(
        new DropAssault()
      )
    ])
  }
}

export class LegionReconnaissanceDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionReconnaissanceSquad()
    ], [
      new TransportOption(
        new Rhinos(),
        new DropAssault(),
        new AssaultClaw()
      ),
      new CommanderOption(
        new Centurion()
      )
    ])
  }
}

class LegionSicaranBattleTankSquadronUnitUpgrade extends Upgrade {
  getAvailableUpgrades (detachment) {
    if (detachment.units.filter(item => item.type === LegionSicaranBattleTankSquadronUnit.type).length === 6) {
      return []
    }

    return [
      LegionSicaranBattleTankSquadronUnit
    ]
  }
}

export class LegionSicaranBattleTankSquadron extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionSicaranBattleTankSquadronUnit(),
      new LegionSicaranBattleTankSquadronUnit(),
      new LegionSicaranBattleTankSquadronUnit(),
      new LegionSicaranBattleTankSquadronUnit()
    ], [
      new CommanderOption(
        new Centurion()
      ),
      new Hyperios(),
      new LegionSicaranBattleTankSquadronUnitUpgrade()
    ])
  }
}

export class LegionSkyHunterAttackSquadron extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionScimitarJetbike()
    ], [
      new CommanderOption(
        new Centurion()
      )
    ])
  }
}

export class LegionSpacecraft extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionSpacecraftUnit()
    ])
  }
}

export class LegionStormEagleAttackWing extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionStormEagleAttackShip()
    ])
  }
}

export class LegionStormbirdWing extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionStormbird()
    ])
  }
}

export class LegionSuperHeavyTankBattery extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionSuperHeavyTankBatteryUnit()
    ])
  }
}

export class LegionSuperHeavyTankDestroyer extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionFalchion()
    ])
  }
}

export class LegionSuperHeavyTank extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionSuperHeavyTankUnit()
    ])
  }
}

export class LegionTacticalDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionTacticalDetachmentUnit()
    ], [
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
      new MultipleChoiceOption(
        LegionTacticalSupportSquad,
        LegionHeavySupportSquad
      ),
      new RapierBattery()
    ], [], [
      new PlusTransports()
    ])
  }
}

export class LegionTerminatorDetachment extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionTerminatorSquad()
    ], [
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
      new Tank()
    ])
  }
}

export class LegionThunderhawkGunshipWing extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionThunderhawkGunship()
    ])
  }
}

export class LegionThunderhawkTransporterWing extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionThunderhawkTransporter()
    ])
  }
}

export class LegionVindicatorSquadron extends SpaceMarineLegionDetachment {
  constructor () {
    super([
      new LegionVindicatorSquadronUnit(),
      new LegionVindicatorSquadronUnit(),
      new LegionVindicatorSquadronVindicator()
    ], [
      new CommanderOption(
        new Centurion()
      ),
      new Hyperios()
    ])

    this.units[2].min = 2
    this.units[2].max = 4
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
