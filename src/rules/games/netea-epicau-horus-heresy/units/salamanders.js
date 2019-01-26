import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  RangedWeapon,
  Or,
  TitanKiller
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
import PrimarchUnit from './primarch-unit'
import Unit from './unit'
import withType from '../../../../utils/with-type'

export class SalamandersPrimarch extends PrimarchUnit {
  constructor () {
    super(450, 1)

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
        new RangedWeapon('15cm', new MacroWeapon('4+')),
        new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1'))
      )
    ]
  }
}

export class SalamandersPyroclastSquad extends Unit {
  constructor () {
    super(60, 4, 6)

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
        new AssaultWeapon(new MacroWeapon())
      )
    ]
  }
}

export class SalamandersFiredrakeTerminatorSquad extends Unit {
  constructor () {
    super(85, 4, 6)

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
      ff: 3
    }
    this.weapons = [
      new Weapon('thunder-hammer-and-shield', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('combi-bolters', new SmallArms('15cm'))
    ]
  }
}

export class SalamandersBodyguardSquad extends SalamandersFiredrakeTerminatorSquad {
  constructor () {
    super()

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
