import {
  Weapon,
  RangedWeapon,
  MultipleShot,
  AntiPersonnel,
  AntiTank,
  AntiAircraft,
  MacroWeapon,
  TitanKiller,
  BarragePoints,
  SmallArms,
  ExtraAttacks,
  AssaultWeapon,
  IgnoreCover,
  Lance,
  Disrupt,
  FirstStrike,
  IndirectFire,
  Or
} from '../weapons'
import {
  ReinforcedArmour,
  CortexController,
  DamageCapacity,
  CriticalHit,
  Walker,
  IonShield,
  IonGauntlet,
  Singularity,
  Leader,
  SupremeCommander,
  InvulnerableSave,
  Commander,
  Scout,
  Notes
} from '../special-rules'
import {
  Unique
} from '../constraints'
import MultipleChoiceUnit from './multiple-choice-unit'
import Unit from './unit'
import withType from '../with-type'

class KnightHouseholdQuestorisKnightPaladin extends Unit {
  constructor (detachment) {
    super(detachment, 325 / 3, 1)

    this.rules = [
      new DamageCapacity(2),
      new IonShield('4+'),
      new ReinforcedArmour(),
      new Walker(),
      new CriticalHit('knight-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 25,
      armour: 5,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('questoris-battle-cannon', new RangedWeapon('75cm', new AntiPersonnel('3+'), new AntiTank('5+'))),
      new Weapon('reaper-chainsword', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

class KnightHouseholdQuestorisKnightPaladinExtra extends KnightHouseholdQuestorisKnightPaladin {
  constructor (detachment) {
    super(detachment)

    this.cost = 100
  }

  getName () {
    return KnightHouseholdQuestorisKnightPaladin.code
  }
}

class KnightHouseholdQuestorisKnightErrant extends Unit {
  constructor (detachment) {
    super(detachment, 325 / 3, 1)

    this.rules = [
      new DamageCapacity(2),
      new IonShield('4+'),
      new ReinforcedArmour(),
      new Walker(),
      new CriticalHit('knight-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 25,
      armour: 5,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('thermal-cannon',
        new RangedWeapon('30cm', new MacroWeapon('4+')),
        new SmallArms('15cm', new MacroWeapon())
      ),
      new Weapon('reaper-chainsword', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

class KnightHouseholdQuestorisKnightErrantExtra extends KnightHouseholdQuestorisKnightErrant {
  constructor (detachment) {
    super(detachment)

    this.cost = 100
  }

  getName () {
    return KnightHouseholdQuestorisKnightErrant.code
  }
}

class KnightHouseholdQuestorisKnightCrusader extends Unit {
  constructor (detachment) {
    super(detachment, (325 / 3) + 25, 1)

    this.rules = [
      new DamageCapacity(2),
      new IonShield('4+'),
      new ReinforcedArmour(),
      new Walker(),
      new CriticalHit('knight-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 5,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('rapid-fire-battle-cannon', new RangedWeapon('75cm', new AntiPersonnel('3+'), new AntiTank('3+'))),
      new Weapon('avenger-gatling-cannon', new RangedWeapon('30cm', new MultipleShot('3x', new AntiPersonnel('3+'), new AntiTank('5+')))),
      new Weapon('twin-linked-icarus-autocannon', new RangedWeapon('45cm', new AntiPersonnel('4+'), new AntiTank('5+'), new AntiAircraft('5+')))
    ]
  }
}

class KnightHouseholdQuestorisKnightCrusaderExtra extends KnightHouseholdQuestorisKnightCrusader {
  constructor (detachment) {
    super(detachment)

    this.cost = 125
  }

  getName () {
    return KnightHouseholdQuestorisKnightCrusader.code
  }
}

class KnightHouseholdQuestorisKnightGallant extends Unit {
  constructor (detachment) {
    super(detachment, (325 / 3) + 25, 1)

    this.rules = [
      new DamageCapacity(2),
      new IonShield('4+'),
      new ReinforcedArmour(),
      new Walker(),
      new CriticalHit('knight-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 25,
      armour: 5,
      cc: 4,
      ff: 5
    }
    this.weapons = [
      new Weapon('thunderstrike-gauntlet', new AssaultWeapon(new ExtraAttacks('+1'), new TitanKiller())),
      new Weapon('reaper-chainsword', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('stormspear-rocket-pod', new RangedWeapon('45cm', new MultipleShot('2x', new AntiTank('5+'))))
    ]
  }
}

class KnightHouseholdQuestorisKnightGallantExtra extends KnightHouseholdQuestorisKnightGallant {
  constructor (detachment) {
    super(detachment)

    this.cost = 125
  }

  getName () {
    return KnightHouseholdQuestorisKnightGallant.code
  }
}

class KnightHouseholdQuestorisKnightMagera extends Unit {
  constructor (detachment) {
    super(detachment, (325 / 3) + 25, 1)

    this.rules = [
      new DamageCapacity(2),
      new IonShield('4+'),
      new ReinforcedArmour(),
      new Walker(),
      new CortexController(),
      new CriticalHit('knight-critical-hit'),
      new Notes('hekaton-siege-claw', 'hekaton-siege-claw-notes')
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 4,
      cc: 5,
      ff: 4
    }
    this.weapons = [
      new Weapon('lightning-cannon', new RangedWeapon('45cm', new MacroWeapon('5+'))),
      new Weapon('twin-linked-rad-cleanser', new RangedWeapon('15cm', new AntiPersonnel('3+'), new IgnoreCover())),
      new Weapon('hekaton-siege-claw',
        new AssaultWeapon(new ExtraAttacks('+1'), new Or(), new MacroWeapon(), new ExtraAttacks('+2'))
      )
    ]
  }
}

class KnightHouseholdQuestorisKnightMageraExtra extends KnightHouseholdQuestorisKnightMagera {
  constructor (detachment) {
    super(detachment)

    this.cost = 125
  }

  getName () {
    return KnightHouseholdQuestorisKnightMagera.code
  }
}

class KnightHouseholdQuestorisKnightStyrix extends Unit {
  constructor (detachment) {
    super(detachment, (325 / 3) + 25, 1)

    this.rules = [
      new DamageCapacity(2),
      new IonShield('4+'),
      new ReinforcedArmour(),
      new Walker(),
      new CortexController(),
      new CriticalHit('knight-critical-hit'),
      new Notes('hekaton-siege-claw', 'hekaton-siege-claw-notes')
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 4,
      cc: 5,
      ff: 4
    }
    this.weapons = [
      new Weapon('volkite-chieorovile', new RangedWeapon('45cm', new MultipleShot('2x', new AntiPersonnel('3+'), new AntiTank('6+')), new Disrupt())),
      new Weapon('twin-linked-rad-cleanser', new RangedWeapon('15cm', new AntiPersonnel('3+'), new IgnoreCover())),
      new Weapon('hekaton-siege-claw',
        new AssaultWeapon(new ExtraAttacks('+1'), new Or(), new MacroWeapon(), new ExtraAttacks('+2'))
      )
    ]
  }
}

class KnightHouseholdQuestorisKnightStyrixExtra extends KnightHouseholdQuestorisKnightStyrix {
  constructor (detachment) {
    super(detachment)

    this.cost = 125
  }

  getName () {
    return KnightHouseholdQuestorisKnightStyrix.code
  }
}

class KnightHouseholdQuestorisKnightWarden extends Unit {
  constructor (detachment) {
    super(detachment, (325 / 3) + 25, 1)

    this.rules = [
      new DamageCapacity(2),
      new IonShield('4+'),
      new ReinforcedArmour(),
      new Walker(),
      new CriticalHit('knight-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 5,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('avenger-gatling-cannon', new RangedWeapon('30cm', new MultipleShot('3x', new AntiPersonnel('3+'), new AntiTank('5+')))),
      new Weapon('thunderstrike-gauntlet', new AssaultWeapon(new ExtraAttacks('+1'), new TitanKiller())),
      new Weapon('ironstorm-missile-pod', new RangedWeapon('60cm', new BarragePoints(1), new IndirectFire()))
    ]
  }
}

class KnightHouseholdQuestorisKnightWardenExtra extends KnightHouseholdQuestorisKnightWarden {
  constructor (detachment) {
    super(detachment)

    this.cost = 125
  }

  getName () {
    return KnightHouseholdQuestorisKnightWarden.code
  }
}

export class KnightHouseholdQuestorisPaladinKnight extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new KnightHouseholdQuestorisKnightPaladin(detachment),
      new KnightHouseholdQuestorisKnightCrusader(detachment),
      new KnightHouseholdQuestorisKnightGallant(detachment),
      new KnightHouseholdQuestorisKnightMagera(detachment),
      new KnightHouseholdQuestorisKnightStyrix(detachment),
      new KnightHouseholdQuestorisKnightWarden(detachment)
    )
  }
}

export class KnightHouseholdQuestorisPaladinKnightExtra extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new KnightHouseholdQuestorisKnightPaladinExtra(detachment),
      new KnightHouseholdQuestorisKnightCrusaderExtra(detachment),
      new KnightHouseholdQuestorisKnightGallantExtra(detachment),
      new KnightHouseholdQuestorisKnightMageraExtra(detachment),
      new KnightHouseholdQuestorisKnightStyrixExtra(detachment),
      new KnightHouseholdQuestorisKnightWardenExtra(detachment)
    )
  }
}

export class KnightHouseholdQuestorisErrantKnight extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new KnightHouseholdQuestorisKnightErrant(detachment),
      new KnightHouseholdQuestorisKnightCrusader(detachment),
      new KnightHouseholdQuestorisKnightGallant(detachment),
      new KnightHouseholdQuestorisKnightMagera(detachment),
      new KnightHouseholdQuestorisKnightStyrix(detachment),
      new KnightHouseholdQuestorisKnightWarden(detachment)

    )
  }
}

export class KnightHouseholdQuestorisErrantKnightExtra extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new KnightHouseholdQuestorisKnightErrantExtra(detachment),
      new KnightHouseholdQuestorisKnightCrusaderExtra(detachment),
      new KnightHouseholdQuestorisKnightGallantExtra(detachment),
      new KnightHouseholdQuestorisKnightMageraExtra(detachment),
      new KnightHouseholdQuestorisKnightStyrixExtra(detachment),
      new KnightHouseholdQuestorisKnightWardenExtra(detachment)
    )
  }
}

class KnightHouseholdCerastusKnightLancer extends Unit {
  constructor (detachment) {
    super(detachment, 125, 1)

    this.rules = [
      new DamageCapacity(2),
      new IonGauntlet(),
      new ReinforcedArmour(),
      new Walker(),
      new CriticalHit('knight-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 30,
      armour: 5,
      cc: 4,
      ff: 5
    }
    this.weapons = [
      new Weapon('cerastus-shock-lance', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'), new FirstStrike(), new TitanKiller())),
      new Weapon('shock-blast', new RangedWeapon('15cm', new AntiPersonnel('4+'), new AntiTank('5+'), new Disrupt()))
    ]
  }
}

class KnightHouseholdCerastusKnightCastigator extends Unit {
  constructor (detachment) {
    super(detachment, 125, 1)

    this.rules = [
      new DamageCapacity(2),
      new IonShield('4+'),
      new ReinforcedArmour(),
      new Walker(),
      new CriticalHit('knight-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 30,
      armour: 5,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('castigator-pattern-bolt-cannon', new RangedWeapon('45cm', new MultipleShot('2x', new AntiPersonnel('3+'), new AntiTank('5+')))),
      new Weapon('tempest-warblade', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+2')))
    ]
  }
}

class KnightHouseholdCerastusKnightAtropos extends Unit {
  constructor (detachment) {
    super(detachment, 150, 1)

    this.rules = [
      new DamageCapacity(2),
      new IonShield('4+'),
      new ReinforcedArmour(),
      new Walker(),
      new CriticalHit('knight-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 30,
      armour: 5,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('atropos-lascutter',
        new SmallArms('15cm', new ExtraAttacks('+1'), new MacroWeapon()),
        new AssaultWeapon(new ExtraAttacks('+1'), new MacroWeapon())
      ),
      new Weapon('graviton-singularity-cannon', new RangedWeapon('30cm', new MultipleShot('2x', new AntiTank('4+'), new AntiPersonnel('5+')), new Lance(), new Singularity()))
    ]
  }
}

class KnightHouseholdCerastusKnightAcheron extends Unit {
  constructor (detachment) {
    super(detachment, 150, 1)

    this.rules = [
      new DamageCapacity(2),
      new IonShield('4+'),
      new ReinforcedArmour(),
      new Walker(),
      new CriticalHit('knight-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 30,
      armour: 5,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('flame-cannon',
        new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('3+'), new AntiTank('6+')), new IgnoreCover()),
        new SmallArms('15cm', new IgnoreCover())
      ),
      new Weapon('twin-linked-heavy-bolters', new RangedWeapon('30cm', new AntiPersonnel('4+'))),
      new Weapon('destroyer-chainfist', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'), new TitanKiller()))
    ]
  }
}

export class KnightHouseholdCerastusLancerKnight extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new KnightHouseholdCerastusKnightLancer(detachment),
      new KnightHouseholdCerastusKnightAtropos(detachment),
      new KnightHouseholdCerastusKnightAcheron(detachment)
    )
  }
}

export class KnightHouseholdCerastusCastigatorKnight extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new KnightHouseholdCerastusKnightCastigator(detachment),
      new KnightHouseholdCerastusKnightAtropos(detachment),
      new KnightHouseholdCerastusKnightAcheron(detachment)
    )
  }
}

export class KnightHouseholdLordScion extends Unit {
  constructor (detachment) {
    super(detachment, 25, 1)

    this.rules = [
      new Leader()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('master-knight-commander', new AssaultWeapon(new ExtraAttacks('+1')))
    ]
  }
}

export class KnightHouseholdPreceptor extends Unit {
  constructor (detachment) {
    super(detachment, 25, 1)

    this.rules = [
      new Commander(),
      new Leader()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = []
  }
}

export class KnightHouseholdSeneschal extends Unit {
  constructor (detachment) {
    super(detachment, 75, 1)

    this.rules = [
      new InvulnerableSave(),
      new SupremeCommander(),
      new Unique()
    ]
    this.stats = {
      type: 'CH',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = [
      new Weapon('master-knight-commander', new AssaultWeapon(new ExtraAttacks('+1')))
    ]
  }
}

export class KnightHouseholdAcastusKnightPorphyrion extends Unit {
  constructor (detachment) {
    super(detachment, 250, 1, 2)

    this.rules = [
      new DamageCapacity(3),
      new IonShield('4+'),
      new ReinforcedArmour(),
      new Walker(),
      new CriticalHit('knight-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 20,
      armour: 4,
      cc: 6,
      ff: 4
    }
    this.weapons = [
      new Weapon('2-twin-linked-magna-lascannon', new RangedWeapon('60cm', new AntiTank('3+'), new Lance())),
      new Weapon('lascannon', new RangedWeapon('45cm', new AntiTank('5+'))),
      new Weapon('autocannon', new RangedWeapon('45cm', new AntiPersonnel('5+'), new AntiTank('6+'))),
      new Weapon('ironstorm-missile-pod', new RangedWeapon('45cm', new BarragePoints(3), new AntiAircraft('5+')))
    ]
  }
}

export class KnightHouseholdAspirants extends Unit {
  constructor (detachment) {
    super(detachment, -50)

    this.rules = [
      new Notes(null, 'knight-household-aspirants-notes')
    ]
    this.stats = {
      type: '-',
      speed: 0,
      armour: 7,
      cc: 7,
      ff: 7
    }
    this.weapons = []
  }
}

export class KnightHouseholdDominusKnightCastellan extends Unit {
  constructor (detachment) {
    super(detachment, 250, 1, 2)

    this.rules = [
      new DamageCapacity(2),
      new IonShield('4+'),
      new ReinforcedArmour(),
      new Walker(),
      new CriticalHit('knight-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [

    ]
  }
}

export class KnightHouseholdDominusKnightVallant extends Unit {
  constructor (detachment) {
    super(detachment, 250, 1, 2)

    this.rules = [
      new DamageCapacity(2),
      new IonShield('4+'),
      new ReinforcedArmour(),
      new Walker(),
      new CriticalHit('knight-critical-hit')
    ]
    this.stats = {
      type: 'WE',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [

    ]
  }
}

export class KnightHouseholdArmigerKnightHelverin extends Unit {
  constructor (detachment) {
    super(detachment, 200, 5)

    this.rules = [
      new IonShield('5+'),
      new Scout(),
      new Walker()
    ]
    this.stats = {
      type: 'LV',
      speed: 30,
      armour: 5,
      cc: 5,
      ff: 5
    }
    this.weapons = [
      new Weapon('2-armiger-autocannon', new RangedWeapon('45cm', new AntiPersonnel('3+'), new AntiTank('5+')))
    ]
  }
}

export class KnightHouseholdArmigerKnightWarglaive extends Unit {
  constructor (detachment) {
    super(detachment, 200, 5)

    this.rules = [
      new IonShield('5+'),
      new Scout(),
      new Walker()
    ]
    this.stats = {
      type: 'LV',
      speed: 30,
      armour: 5,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('reaper-chain-cleaver', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('thermal-spear', new SmallArms('15cm', new MacroWeapon()))
    ]
  }
}

export class KnightHouseholdArmigerKnightUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new KnightHouseholdArmigerKnightWarglaive(detachment),
      new KnightHouseholdArmigerKnightHelverin(detachment)
    )
  }
}

withType(KnightHouseholdQuestorisKnightPaladin)
withType(KnightHouseholdQuestorisKnightErrant)
withType(KnightHouseholdQuestorisKnightCrusader)
withType(KnightHouseholdQuestorisKnightGallant)
withType(KnightHouseholdQuestorisKnightMagera)
withType(KnightHouseholdQuestorisKnightStyrix)
withType(KnightHouseholdQuestorisKnightWarden)
withType(KnightHouseholdQuestorisKnightCrusaderExtra)
withType(KnightHouseholdQuestorisKnightGallantExtra)
withType(KnightHouseholdQuestorisKnightMageraExtra)
withType(KnightHouseholdQuestorisKnightStyrixExtra)
withType(KnightHouseholdQuestorisKnightWardenExtra)
withType(KnightHouseholdQuestorisPaladinKnight)
withType(KnightHouseholdQuestorisPaladinKnightExtra)
withType(KnightHouseholdQuestorisErrantKnight)
withType(KnightHouseholdQuestorisErrantKnightExtra)
withType(KnightHouseholdCerastusKnightLancer)
withType(KnightHouseholdCerastusKnightCastigator)
withType(KnightHouseholdCerastusKnightAtropos)
withType(KnightHouseholdCerastusKnightAcheron)
withType(KnightHouseholdCerastusLancerKnight)
withType(KnightHouseholdCerastusCastigatorKnight)
withType(KnightHouseholdLordScion)
withType(KnightHouseholdPreceptor)
withType(KnightHouseholdSeneschal)
withType(KnightHouseholdAspirants)
withType(KnightHouseholdAcastusKnightPorphyrion)
withType(KnightHouseholdDominusKnightCastellan)
withType(KnightHouseholdDominusKnightVallant)
withType(KnightHouseholdArmigerKnightUnit)
withType(KnightHouseholdArmigerKnightHelverin)
withType(KnightHouseholdArmigerKnightWarglaive)
