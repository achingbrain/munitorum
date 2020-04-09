import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  FirstStrike,
  AntiTank,
  RangedWeapon,
  MultipleShot,
  AntiPersonnel,
  Fleshbane,
  IgnoreCover
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
  LegionTerminatorSquad,
  LegionFellblade,
  LegionGlaive,
  LegionPrimarchUnit,
  LegionTacticalSquad
} from './space-marine-legion'
import MultipleChoiceUnit from './multiple-choice-unit'
import withType from '../with-type'

export class DarkAngelsPrimarch extends LegionPrimarchUnit {
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
      new InvulnerableSave('6+')
    ]
    this.stats = {
      type: 'INF',
      speed: 15,
      armour: 3,
      cc: 2,
      ff: 3
    }
    this.weapons = [
      new Weapon('the-lion-sword', new AssaultWeapon(new FirstStrike(), new MacroWeapon(), new ExtraAttacks('+2'))),
      new Weapon('master-crafted-volkite-pistol', new SmallArms('15cm', new MacroWeapon(), new ExtraAttacks('+1')))
    ]
  }
}

export class DarkAngelsBodyguardSquad extends LegionTerminatorSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 0
    this.min = 3
    this.max = undefined
    this.quantity = 3
  }
}

class DarkAngelsFellblade extends LegionFellblade {
  constructor (detachment) {
    super(detachment)

    this.cost = 700
    this.min = 3
    this.quantity = 3
  }
}

class DarkAngelsGlaive extends LegionGlaive {
  constructor (detachment) {
    super(detachment)

    this.cost = 700
    this.min = 3
    this.quantity = 3
  }
}

export class DarkAngelsSuperHeavyTankSquadronUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(
      detachment,
      new DarkAngelsFellblade(detachment),
      new DarkAngelsGlaive(detachment)
    )
  }
}

export class DarkAngelsDreadwingInteremptorSquad extends LegionTacticalSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 250
    this.min = 4
    this.quantity = 4

    this.weapons = [
      new Weapon('plasma-burners',
        new RangedWeapon('15cm', new MultipleShot('2x', new AntiPersonnel('4+'), new AntiTank('4+')), new Fleshbane(), new IgnoreCover()),
        new SmallArms('15cm', new Fleshbane(), new ExtraAttacks('+1'))
      )
    ]
  }
}

withType(DarkAngelsPrimarch)
withType(DarkAngelsBodyguardSquad)
withType(DarkAngelsFellblade)
withType(DarkAngelsGlaive)
withType(DarkAngelsSuperHeavyTankSquadronUnit)
withType(DarkAngelsDreadwingInteremptorSquad)
