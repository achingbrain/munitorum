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
  Disrupt
} from '../weapons'
import {
  ReinforcedArmour,
  DemiGod,
  ThickRearArmour,
  Fearless,
  SupremeCommander,
  Inspiring,
  InvulnerableSave
} from '../special-rules'
import {
  LegionTerminatorSquad
} from '../units/space-marine-legion'
import PrimarchUnit from './primarch-unit'
import Unit from './unit'
import withType from '../../../../utils/with-type'

export class EmperorsChildrenPrimarch extends PrimarchUnit {
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
      new InvulnerableSave()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 2,
      ff: 3
    }
    this.weapons = [
      new Weapon('blade-of-the-laer', new AssaultWeapon(new FirstStrike(), new MacroWeapon(), new ExtraAttacks('+2'))),
      new Weapon('firebrand', new SmallArms('15cm', new Sniper(), new ExtraAttacks('+1')))
    ]
  }
}

export class EmperorsChildrenBodyguardSquad extends LegionTerminatorSquad {
  constructor (detachment) {
    super(detachment, detachment)

    this.cost = 0
    this.min = 3
    this.max = undefined
    this.quantity = 3
  }
}

export class EmperorsChildrenPhoenixTerminatorSquad extends Unit {
  constructor (detachment) {
    super(detachment, 340, 4)

    this.transportType = 'terminator'
    this.rules = [
      new ReinforcedArmour(),
      new ThickRearArmour()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 3,
      ff: 5
    }
    this.weapons = [
      new Weapon('phoenix-power-spear', new AssaultWeapon(new FirstStrike(), new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class EmperorsChildrenPalatineBladesSquad extends Unit {
  constructor (detachment) {
    super(detachment, 60, 4, 6)

    this.transportType = 'tactical'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('dueling-weapons', new AssaultWeapon(new FirstStrike(), new ExtraAttacks('+2')))
    ]
  }
}

export class EmperorsChildrenKakophoniSquad extends Unit {
  constructor (detachment) {
    super(detachment, 60, 4, 6)

    this.transportType = 'tactical'
    this.rules = [
      new Fearless()
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('the-cacophony',
        new RangedWeapon('30cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('6+')), new Disrupt()),
        new AssaultWeapon(new FirstStrike(), new ExtraAttacks('+2'))
      )
    ]
  }
}

withType(EmperorsChildrenPrimarch)
withType(EmperorsChildrenBodyguardSquad)
withType(EmperorsChildrenPhoenixTerminatorSquad)
withType(EmperorsChildrenPalatineBladesSquad)
withType(EmperorsChildrenKakophoniSquad)
