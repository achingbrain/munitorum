import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  FirstStrike,
  Sniper,
  Fleshbane,
  RangedWeapon,
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
  JumpPacks
} from '../special-rules'
import {
  LegionAssaultSquad,
  LegionPrimarchUnit,
  LegionTerminatorSquad,
  LegionDestroyerSquad
} from './space-marine-legion'
import withType from '../with-type'

export class BloodAngelsPrimarch extends LegionPrimarchUnit {
  constructor (detachment) {
    super(detachment, 450)

    this.transportType = 'assault'
    this.rules = [
      new DemiGod(),
      new ReinforcedArmour(),
      new ThickRearArmour(),
      new Fearless(),
      new SupremeCommander(),
      new Inspiring(),
      new InvulnerableSave(),
      new JumpPacks()
    ]
    this.stats = {
      type: 'INF',
      speed: 30,
      armour: 3,
      cc: 2,
      ff: 3
    }
    this.weapons = [
      new Weapon('the-spear-of-telesto', new AssaultWeapon(new FirstStrike(), new MacroWeapon(), new ExtraAttacks('+1'), new Sniper())),
      new Weapon('archaeotech-pistol', new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class BloodAngelsBodyguardSquad extends LegionAssaultSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 0
    this.min = 5
    this.max = undefined
    this.quantity = 5
  }
}

export class BloodAngelsDawnbreakerSquad extends LegionAssaultSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 50
    this.min = 4
    this.max = 6
    this.quantity = 4
    this.stats = {
      type: 'INF',
      speed: 35,
      armour: 4,
      cc: 4,
      ff: 5
    }
    this.weapons = [
      new Weapon('falling-star-pattern-power-spear', new AssaultWeapon(new FirstStrike(), new Fleshbane(), new ExtraAttacks('+1')))
    ]
  }
}

export class BloodAngelsAngelsTearsSquad extends LegionDestroyerSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 50
    this.min = 4
    this.max = 6
    this.quantity = 4
    this.weapons = [
      new Weapon('2x-assault-launcher', new RangedWeapon('30cm', new AntiPersonnel('4+'), new Fleshbane()))
    ]
  }
}

export class BloodAngelsCrimsonPaladinsSquad extends LegionTerminatorSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 75
    this.min = 4
    this.max = 4
    this.quantity = 4
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 3,
      ff: 4
    }
    this.weapons = [
      new Weapon('power-weapons', new AssaultWeapon(new Fleshbane(), new ExtraAttacks('+1'))),
      new Weapon('iliastus-assault-cannon', new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('5+')))
    ]
  }
}

withType(BloodAngelsPrimarch)
withType(BloodAngelsBodyguardSquad)
withType(BloodAngelsDawnbreakerSquad)
withType(BloodAngelsAngelsTearsSquad)
withType(BloodAngelsCrimsonPaladinsSquad)
