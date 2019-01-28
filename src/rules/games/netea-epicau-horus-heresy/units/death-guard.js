import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  RangedWeapon,
  MultipleShot,
  AntiPersonnel,
  AntiTank,
  Disrupt,
  IgnoreCover
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
  LegionTerminatorSquad
} from './space-marine-legion'
import PrimarchUnit from './primarch-unit'
import Unit from './unit'
import withType from '../../../../utils/with-type'

export class DeathGuardPrimarch extends PrimarchUnit {
  constructor (detachment) {
    super(detachment, 450, 1)

    this.transportType = 'terminator'
    this.rules = [
      new DemiGod(),
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new Fearless(),
      new SupremeCommander(),
      new Inspiring(),
      new InvulnerableSave(),
      new Infiltrator()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 3,
      ff: 4
    }
    this.weapons = [
      new Weapon('silence', new AssaultWeapon(new MacroWeapon('2+'), new ExtraAttacks('+2'))),
      new Weapon('lantern',
        new SmallArms('15cm', new ExtraAttacks('+2'))
      )
    ]
  }
}

export class DeathGuardBodyguardSquad extends LegionTerminatorSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 0
    this.min = 3
    this.max = undefined
    this.quantity = 3
  }
}

export class DeathGuardDeathshroudTerminatorSquad extends Unit {
  constructor (detachment) {
    super(detachment, 300, 4)

    this.transportType = 'terminator'
    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 3,
      ff: 5
    }
    this.weapons = [
      new Weapon('power-scythes', new AssaultWeapon(new ExtraAttacks('+2'))),
      new Weapon('chem-flamers', new SmallArms('15cm', new IgnoreCover()))
    ]
  }
}

export class DeathGuardGraveWardenTerminatorSquad extends Unit {
  constructor (detachment) {
    super(detachment, 85, 4, 6)

    this.transportType = 'terminator'
    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 3
    }
    this.weapons = [
      new Weapon('power-fist', new AssaultWeapon(new ExtraAttacks('+2'))),
      new Weapon('assault-grenade-launchers',
        new RangedWeapon('15cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('6+')), new Disrupt(), new IgnoreCover()),
        new SmallArms('15cm', new IgnoreCover(), new ExtraAttacks('+1'))
      )
    ]
  }
}

withType(DeathGuardPrimarch)
withType(DeathGuardBodyguardSquad)
withType(DeathGuardDeathshroudTerminatorSquad)
withType(DeathGuardGraveWardenTerminatorSquad)
