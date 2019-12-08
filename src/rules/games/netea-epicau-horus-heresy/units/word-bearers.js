import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  FirstStrike,
  RangedWeapon,
  AntiPersonnel,
  AntiTank,
  AntiAircraft,
  Disrupt,
  IgnoreCover,
  Fleshbane
} from '../weapons'
import {
  ReinforcedArmour,
  DemiGod,
  ThickRearArmour,
  Fearless,
  SupremeCommander,
  Inspiring,
  InvulnerableSave,
  Infiltrator,
  Walker,
  JumpPacks,
  Scout
} from '../special-rules'
import {
  LegionTacticalSquad,
  LegionDeredeoDreadnought,
  LegionUnit,
  LegionPrimarchUnit
} from './space-marine-legion'
import MultipleChoiceUnit from './multiple-choice-unit'
import withType from '../with-type'

export class WordBearersPrimarch extends LegionPrimarchUnit {
  constructor (detachment) {
    super(detachment, 450, 1)

    this.transportType = 'tactical'
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
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('illuminarum', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('volkite-pistol', new SmallArms('15cm', new ExtraAttacks('+1'))),
      new Weapon('burning-lore', new RangedWeapon('30cm', new AntiPersonnel('4+'), new AntiTank('4+'), new AntiAircraft('+4'), new Fleshbane()))
    ]
  }
}

export class WordBearersBodyguardSquad extends LegionTacticalSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 0
    this.min = 7
    this.max = undefined
    this.quantity = 7
  }
}

export class WordBearersGalVorbakDarkBrethrenSquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 250, 6)

    this.transportType = 'tactical'
    this.rules = [
      new Infiltrator(),
      new Scout(),
      new InvulnerableSave('6+')
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 4,
      cc: 3,
      ff: 5
    }
    this.weapons = [
      new Weapon('daemonic-blade', new AssaultWeapon(new ExtraAttacks('+1')))
    ]
  }
}

export class WordBearersIncendiarySquad extends LegionUnit {
  constructor (detachment) {
    super(detachment, 350, 8)

    this.transportType = 'assault'
    this.rules = [
      new JumpPacks(),
      new Fearless()
    ]
    this.stats = {
      type: 'INF',
      speed: 30,
      armour: 4,
      cc: 4,
      ff: 4
    }
    this.weapons = [
      new Weapon('axe-rakes', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('inferno-pistols',
        new RangedWeapon('15cm', new AntiPersonnel('3+'), new IgnoreCover()),
        new SmallArms('15cm', new FirstStrike(), new IgnoreCover(), new ExtraAttacks('+1'))
      )
    ]
  }
}

export class WordBearersMalGharaTaintedContemptorDreadnought extends LegionUnit {
  constructor (detachment) {
    super(detachment, 70, 1)

    this.transportType = 'tactical'
    this.rules = [
      new Walker(),
      new InvulnerableSave('6+')
    ]
    this.stats = {
      type: 'AV',
      speed: 15,
      armour: 3,
      cc: 3,
      ff: 5
    }
    this.weapons = [
      new Weapon('tainted-power-claw', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('warpfire-plasma-cannon',
        new RangedWeapon('30cm', new AntiPersonnel('5+'), new AntiTank('+5'), new Disrupt()),
        new SmallArms('15cm', new MacroWeapon())
      )
    ]
  }
}

export class WordBearersMalGharaTaintedContemptorDreadnoughtTalonUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(
      detachment,
      new WordBearersMalGharaTaintedContemptorDreadnought(detachment),
      new LegionDeredeoDreadnought(detachment)
    )

    this.transportType = 'dreadnought'
  }
}

withType(WordBearersPrimarch)
withType(WordBearersBodyguardSquad)
withType(WordBearersGalVorbakDarkBrethrenSquad)
withType(WordBearersIncendiarySquad)
withType(WordBearersMalGharaTaintedContemptorDreadnought)
withType(WordBearersMalGharaTaintedContemptorDreadnoughtTalonUnit)
