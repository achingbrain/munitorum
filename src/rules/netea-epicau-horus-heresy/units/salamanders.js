import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  RangedWeapon,
  Or,
  TitanKiller,
  AntiPersonnel,
  AntiTank,
  Armourbane
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
  LegionUnit,
  LegionPrimarchUnit,
  LegionTerminatorSquad
} from './space-marine-legion'
import withType from '../with-type'

export class SalamandersPrimarch extends LegionPrimarchUnit {
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
      new InvulnerableSave('4+')
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 3,
      ff: 4
    }
    this.weapons = [
      new Weapon('dawnbringer', new AssaultWeapon(new TitanKiller(1), new Or(), new MacroWeapon(), new ExtraAttacks('+2'))),
      new Weapon('the-furnaces-heart',
        new RangedWeapon('15cm', new AntiPersonnel('4+'), new AntiTank('4+'), new MacroWeapon()),
        new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1'))
      )
    ]
  }
}

export class SalamandersPyroclastSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 60, 4, 6)

    this.transportType = 'tactical'
    this.rules = []
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 5,
      ff: 3
    }
    this.weapons = [
      new Weapon('flame-projector',
        new SmallArms('15cm', new ExtraAttacks('+1')),
        new AssaultWeapon(new Armourbane())
      )
    ]
  }
}

export class SalamandersFiredrakeTerminatorSquad extends LegionTerminatorSquad {
  constructor (detachment) {
    super(detachment, 85, 4, 6)

    this.cost = 85
    this.min = 4
    this.max = 6
    this.quantity = 4
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 3,
      ff: 5
    }
    this.weapons = [
      new Weapon('thunder-hammer-and-shield', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class SalamandersBodyguardSquad extends SalamandersFiredrakeTerminatorSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 0
    this.min = 3
    this.max = undefined
    this.quantity = 3
  }
}

withType(SalamandersPrimarch)
withType(SalamandersBodyguardSquad)
withType(SalamandersPyroclastSquad)
withType(SalamandersFiredrakeTerminatorSquad)
