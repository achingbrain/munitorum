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
  IgnoreCover
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
  CriticalHit
} from '../special-rules'
import MultipleChoiceUnit from './multiple-choice-unit'
import TransportUnit from './transport-unit'
import Unit from './unit'
import withType from '../with-type'

class LegioCustodesSentinelGuard extends Unit {
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
      new Weapon('sentinel-warblade', new AssaultWeapon(new MacroWeapon()))
    ]
  }
}

class LegioCustodesCustodianGuard extends Unit {
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

class LegioCustodesVenatariSquad extends Unit {
  constructor (detachment) {
    super(detachment, 350, 6)

    this.transportType = 'sentinel'
    this.rules = [
      new InvulnerableSaveCCOnly()
    ]
    this.stats = {
      type: 'INF',
      speed: 35,
      armour: 3,
      cc: 4,
      ff: 3
    }
    this.weapons = [
      new Weapon('kinetic-destroyer', new SmallArms())
    ]
  }
}

export class LegioCustodesCaptainGeneral extends Unit {
  constructor (detachment) {
    super(detachment, 100, 1)

    this.rules = [
      new InvulnerableSave(),
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

export class LegioCustodesTribune extends Unit {
  constructor (detachment) {
    super(detachment, 50, 1)

    this.rules = [
      new InvulnerableSave(),
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
      new Weapon('iliastus-accelerator-cannon', new RangedWeapon('45cm', new MacroWeapon('4+'))),
      new Weapon('arachnus-blaze-cannon', new RangedWeapon('30cm', new AntiPersonnel('4+'), new AntiTank('5+')))
    ]
  }
}

export class LegioCustodesAgamatus extends Unit {
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

export class LegioCustodesAquilionTerminator extends Unit {
  constructor (detachment) {
    super(detachment, 375, 4)

    this.transportType = 'aquilon'
    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new InvulnerableSave()
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

export class LegioCustodesEphoroiCustodes extends Unit {
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

export class LegioCustodesSistersOfSilence extends Unit {
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

class LegioCustodesContemptorAchillusDreadnought extends Unit {
  constructor (detachment) {
    super(detachment, 87.5, 1)

    this.transportType = 'dreadnought'
    this.rules = [
      new InvulnerableSave(),
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

class LegioCustodesContemptorGalatusDreadnought extends Unit {
  constructor (detachment) {
    super(detachment, 87.5, 1)

    this.transportType = 'dreadnought'
    this.rules = [
      new ReinforcedArmour(),
      new InvulnerableSave(),
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

class LegioCustodesTelemonHeavyDreadnought extends Unit {
  constructor (detachment) {
    super(detachment, 87.5, 1)

    this.transportType = 'dreadnought'
    this.rules = [
      new ReinforcedArmour(),
      new InvulnerableSave(),
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
          new RangedWeapon('15cm', new MacroWeapon('4+'), new TitanKiller())
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

export class LegioCustodesPallasGravAttackVehicle extends Unit {
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
      new Weapon('arachnus-blaze-cannon', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('5+'))))
    ]
  }
}

export class LegioCustodesCaladiusGravTank extends Unit {
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
      new Weapon('iliastus-accelerator-cannon', new RangedWeapon('45cm', new MacroWeapon('4+')))
    ]
  }
}

export class LegioCustodesOrionAssaultDropship extends Unit {
  constructor (detachment) {
    super(detachment, 300, 1, 2)

    this.transportTypes = {
      sentinel: 6,
      aquilon: 4
    }
    this.rules = [
      new DamageCapacity(2),
      new InvulnerableSave(),
      new CriticalHit('custodes-orion-assault-dropship-critical-hit')
    ]
    this.stats = {
      type: 'AV',
      speed: 0,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('2-arachnus-blaze-cannon', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('5+')))),
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
