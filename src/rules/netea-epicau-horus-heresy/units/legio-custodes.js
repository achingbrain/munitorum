import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  FirstStrike,
  Sniper,
  RangedWeapon,
  MultipleShot,
  AntiPersonnel,
  AntiTank,
  WeaponBlank,
  MultipleChoiceWeapon,
  TitanKiller,
  IgnoreCover,
  Fleshbane
} from '../weapons'
import {
  ReinforcedArmour,
  ThickRearArmour,
  Fearless,
  Inspiring,
  InvulnerableSave,
  InvulnerableSaveCCOnly,
  Scout,
  Skimmer,
  Commander,
  Mounted,
  Walker,
  Infiltrator,
  DamageCapacity,
  Teleport,
  JumpPacks
} from '../special-rules'
import {
  LegionTeleport
} from './space-marine-legion'
import MultipleChoiceUnit from './multiple-choice-unit'
import Unit, { TransportUnit } from './unit'
import withType from '../with-type'

class LegioCustodesUnit extends Unit {
  getRules () {
    const rules = super.getRules()
    const teleport = this.detachment.units.find(item => item instanceof LegionTeleport)

    if (teleport && (this.stats.type === 'INF' || this.stats.type === 'CH')) {
      return rules.concat(new Teleport())
    }

    return rules
  }
}

class LegioCustodesSentinelGuard extends LegioCustodesUnit {
  constructor (detachment) {
    super(detachment, 350, 6)

    this.transportType = 'sentinel'
    this.rules = [
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 4,
      ff: 5
    }
    this.weapons = [
      new Weapon('sentinel-warblade', new AssaultWeapon(new Fleshbane()))
    ]
  }
}

class LegioCustodesCustodianGuard extends LegioCustodesUnit {
  constructor (detachment) {
    super(detachment, 350, 6)

    this.transportType = 'sentinel'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('guardian-spear',
        new SmallArms('15cm', new ExtraAttacks('+1')),
        new AssaultWeapon(new ExtraAttacks('+1'))
      )
    ]
  }
}

export class LegioCustodesHykanatoiUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new LegioCustodesSentinelGuard(detachment),
      new LegioCustodesCustodianGuard(detachment)
    )
  }
}

export class LegioCustodesVenatariSquad extends LegioCustodesUnit {
  constructor (detachment) {
    super(detachment, 350, 4)

    this.transportType = 'aquilon'
    this.rules = [
      new Scout(),
      new InvulnerableSaveCCOnly('6+'),
      new JumpPacks()
    ]
    this.stats = {
      type: 'INF',
      speed: 30,
      armour: 3,
      cc: 4,
      ff: 3
    }
    this.weapons = [
      new Weapon('kinetic-destroyer', new SmallArms('15cm'))
    ]
  }
}

export class LegioCustodesCaptainGeneral extends LegioCustodesUnit {
  constructor (detachment) {
    super(detachment, 100, 1)

    this.rules = [
      new InvulnerableSave('6+'),
      new Commander(),
      new Inspiring()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('apollonian-spear', new AssaultWeapon(new Sniper(), new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class LegioCustodesTribune extends LegioCustodesUnit {
  constructor (detachment) {
    super(detachment, 25, 1)

    this.rules = [
      new InvulnerableSave('6+'),
      new Commander()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new WeaponBlank()
    ]
  }
}

export class LegioCustodesCoronusGravCarrier extends TransportUnit {
  constructor (detachment) {
    super(detachment, 75)

    this.transportTypes = {
      sentinel: 2,
      aquilon: 1
    }
    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new InvulnerableSave(),
      new Skimmer()
    ]
    this.stats = {
      type: 'AV',
      speed: 25,
      armour: 4,
      cc: 6,
      ff: 5
    }
    this.weapons = [
      new Weapon('iliastus-accelerator-cannon', new RangedWeapon('45cm', new AntiPersonnel('4+'), new AntiTank('4+'), new Fleshbane())),
      new Weapon('arachnus-blaze-cannon', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('5+'))))
    ]
  }
}

export class LegioCustodesAgamatus extends LegioCustodesUnit {
  constructor (detachment) {
    super(detachment, 300, 6)

    this.rules = [
      new Mounted(),
      new Skimmer()
    ]
    this.stats = {
      type: 'AV',
      speed: 35,
      armour: 5,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('power-lance', new AssaultWeapon(new FirstStrike(), new MacroWeapon())),
      new Weapon('iliastus-bolt-cannon', new SmallArms('15cm'))
    ]
  }
}

export class LegioCustodesAquilionTerminator extends LegioCustodesUnit {
  constructor (detachment) {
    super(detachment, 375, 4)

    this.transportType = 'aquilon'
    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new InvulnerableSave('6+')
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 3,
      ff: 3
    }
    this.weapons = [
      new Weapon('lastrum-storm-bolter', new SmallArms('15cm', new ExtraAttacks('+1'))),
      new Weapon('solerite-power-gauntlet', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class LegioCustodesEphoroiCustodes extends LegioCustodesUnit {
  constructor (detachment) {
    super(detachment, 375, 4)

    this.transportType = 'sentinel'
    this.rules = [
      new Scout(),
      new Infiltrator()
    ]
    this.stats = {
      type: 'INF',
      speed: 20,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('guardian-spear',
        new SmallArms('15cm', new ExtraAttacks('+1')),
        new AssaultWeapon(new ExtraAttacks('+1'))
      )
    ]
  }
}

export class LegioCustodesSistersOfSilence extends LegioCustodesUnit {
  constructor (detachment) {
    super(detachment, 250, 4)

    this.transportType = 'sentinel'
    this.rules = [
      new Fearless()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 5,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('bolters', new SmallArms('15cm'))
    ]
  }
}

class LegioCustodesContemptorAchillusDreadnought extends LegioCustodesUnit {
  constructor (detachment) {
    super(detachment, 87.5, 1)

    this.transportType = 'dreadnought'
    this.rules = [
      new InvulnerableSave('6+'),
      new Walker()
    ]
    this.stats = {
      type: 'AV',
      speed: 15,
      armour: 3,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('achilles-dreadspear', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+2')))
    ]
  }
}

class LegioCustodesContemptorGalatusDreadnought extends LegioCustodesUnit {
  constructor (detachment) {
    super(detachment, 87.5, 1)

    this.transportType = 'dreadnought'
    this.rules = [
      new ReinforcedArmour(),
      new InvulnerableSave('6+'),
      new Walker()
    ]
    this.stats = {
      type: 'AV',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('galatus-warblade',
        new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')),
        new SmallArms('15cm', new ExtraAttacks('+1'), new IgnoreCover())
      )
    ]
  }
}

class LegioCustodesTelemonHeavyDreadnought extends LegioCustodesUnit {
  constructor (detachment) {
    super(detachment, 87.5, 1)

    this.transportType = 'dreadnought'
    this.rules = [
      new ReinforcedArmour(),
      new InvulnerableSave('6+'),
      new Walker()
    ]
    this.stats = {
      type: 'AV',
      speed: 15,
      armour: 3,
      cc: 4,
      ff: 5
    }
    this.weapons = [
      new MultipleChoiceWeapon(
        new Weapon('2-telemon-caestus',
          new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))
        ),
        new Weapon('arachnus-storm-cannon',
          new RangedWeapon('15cm', new AntiPersonnel('4+'), new AntiTank('4+'), new MacroWeapon(), new TitanKiller())
        )
      )
    ]
  }
}

export class LegioCustodesDreadnoughtUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new LegioCustodesContemptorAchillusDreadnought(detachment),
      new LegioCustodesContemptorGalatusDreadnought(detachment),
      new LegioCustodesTelemonHeavyDreadnought(detachment)
    )
  }
}

export class LegioCustodesPallasGravAttackVehicle extends LegioCustodesUnit {
  constructor (detachment) {
    super(detachment, 250, 3)

    this.rules = [
      new ReinforcedArmour(),
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'AV',
      speed: 35,
      armour: 5,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('arachnus-blaze-cannon', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('5+')), new Fleshbane()))
    ]
  }
}

export class LegioCustodesCaladiusGravTank extends LegioCustodesUnit {
  constructor (detachment) {
    super(detachment, 325, 3)

    this.rules = [
      new ReinforcedArmour(),
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'AV',
      speed: 35,
      armour: 5,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('lastrum-bolt-cannon', new RangedWeapon('30cm', new AntiPersonnel('4+'))),
      new Weapon('iliastus-accelerator-cannon', new RangedWeapon('45cm', new AntiPersonnel('4+'), new AntiTank('4+'), new Fleshbane()))
    ]
  }
}

export class LegioCustodesOrionAssaultDropship extends LegioCustodesUnit {
  constructor (detachment) {
    super(detachment, 300, 1, 2)

    this.transportTypes = {
      sentinel: 6,
      aquilon: 4
    }
    this.rules = [
      new DamageCapacity(2),
      new InvulnerableSave('6+')
    ]
    this.stats = {
      type: 'AV',
      speed: 0,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('2-arachnus-blaze-cannon', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('5+')), new Fleshbane())),
      new Weapon('2-lastrum-bolt-cannon', new RangedWeapon('30cm', new AntiPersonnel('4+'))),
      new Weapon('2-spiculus-heavy-bolt-launchers', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('5+')))
    ]
  }
}

withType(LegioCustodesSentinelGuard)
withType(LegioCustodesCustodianGuard)
withType(LegioCustodesHykanatoiUnit)
withType(LegioCustodesVenatariSquad)
withType(LegioCustodesCaptainGeneral)
withType(LegioCustodesTribune)
withType(LegioCustodesCoronusGravCarrier)
withType(LegioCustodesAgamatus)
withType(LegioCustodesAquilionTerminator)
withType(LegioCustodesEphoroiCustodes)
withType(LegioCustodesSistersOfSilence)
withType(LegioCustodesContemptorAchillusDreadnought)
withType(LegioCustodesContemptorGalatusDreadnought)
withType(LegioCustodesTelemonHeavyDreadnought)
withType(LegioCustodesDreadnoughtUnit)
withType(LegioCustodesPallasGravAttackVehicle)
withType(LegioCustodesCaladiusGravTank)
withType(LegioCustodesOrionAssaultDropship)
