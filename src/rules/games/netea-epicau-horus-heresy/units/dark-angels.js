import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  FirstStrike
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
  LegionGlaive
} from './space-marine-legion'
import MultipleChoiceUnit from './multiple-choice-unit'
import PrimarchUnit from './primarch-unit'
import withType from '../../../../utils/with-type'

export class DarkAngelsPrimarch extends PrimarchUnit {
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

withType(DarkAngelsPrimarch)
withType(DarkAngelsBodyguardSquad)
withType(DarkAngelsFellblade)
withType(DarkAngelsGlaive)
withType(DarkAngelsSuperHeavyTankSquadronUnit)
