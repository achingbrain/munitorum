import {
  Weapon,
  AssaultWeapon,
  TitanKiller,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  Sniper,
  RangedWeapon,
  MultipleShot,
  AntiPersonnel,
  AntiTank
} from '../weapons'
import {
  ReinforcedArmour,
  DemiGod,
  ThickRearArmour,
  Fearless,
  SupremeCommander,
  Inspiring,
  InvulnerableSave,
  Infiltrator
} from '../special-rules'
import {
  LegionTerminatorSquad,
  LegionUnit,
  LegionPrimarchUnit
} from '../units/space-marine-legion'
import withType from '../with-type'

export class SonsOfHorusPrimarch extends LegionPrimarchUnit {
  constructor (detachment) {
    super(detachment, 450)

    this.transportType = 'terminator'
    this.rules = [
      new DemiGod(),
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new Fearless(),
      new SupremeCommander(),
      new Inspiring(),
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
      new Weapon('world-breaker', new AssaultWeapon(new TitanKiller(1))),
      new Weapon('warmasters-talon',
        new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+2')),
        new SmallArms('15cm', new ExtraAttacks('+2'))
      )
    ]
  }
}

export class SonsOfHorusBodyguardSquad extends LegionTerminatorSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 0
    this.min = 3
    this.max = undefined
    this.quantity = 3
  }
}

export class SonsOfHorusReaverAttackSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 300, 6)

    this.transportType = 'tactical'
    this.rules = [
      new Infiltrator()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('chainswords', new AssaultWeapon(new Sniper(), new ExtraAttacks('+1'))),
      new Weapon('signum-bolt-pistols', new SmallArms('15cm', new Sniper()))
    ]
  }
}

export class SonsOfHorusJustaerinTerminatorSquad extends LegionTerminatorSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 350
    this.min = 4
    this.max = undefined
    this.quantity = 4
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 3,
      ff: 4
    }
    this.weapons = [
      new Weapon('power-axes', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('multi-melta', new RangedWeapon('15cm', new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('reaper-autocannon', new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('6+'))))
    ]
  }
}

withType(SonsOfHorusPrimarch)
withType(SonsOfHorusBodyguardSquad)
withType(SonsOfHorusReaverAttackSquad)
withType(SonsOfHorusJustaerinTerminatorSquad)
