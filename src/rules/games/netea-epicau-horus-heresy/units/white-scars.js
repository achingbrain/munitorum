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
  LegionBike,
  LegionAttackBike,
  LegionScimitarJetbike,
  LegionTerminatorSquad,
  LegionPrimarchUnit
} from './space-marine-legion'
import MultipleChoiceUnit from './multiple-choice-unit'
import withType from '../../../../utils/with-type'

export class WhiteScarsPrimarch extends LegionPrimarchUnit {
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
      cc: 3,
      ff: 4
    }
    this.weapons = [
      new Weapon('vengence-lance', new AssaultWeapon(new FirstStrike(), new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('sabre-of-unity', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'))),
      new Weapon('bolt-pistol', new SmallArms('15cm', new ExtraAttacks('+1')))
    ]
  }
}

export class WhiteScarsBodyguardSquad extends LegionTerminatorSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 0
    this.min = 3
    this.max = undefined
    this.quantity = 3
  }
}

class WhiteScarsAttackBike extends LegionAttackBike {
  constructor (detachment) {
    super(detachment)

    this.cost = 275
    this.min = 8
    this.max = undefined
    this.quantity = 8
  }
}

class WhiteScarsBike extends LegionBike {
  constructor (detachment) {
    super(detachment)

    this.cost = 275
    this.min = 8
    this.max = undefined
    this.quantity = 8
  }
}

export class WhiteScarsOutriderUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(
      detachment,
      new WhiteScarsAttackBike(detachment),
      new WhiteScarsBike(detachment)
    )
  }
}

export class WhiteScarsScimitarJetbike extends LegionScimitarJetbike {
  constructor (detachment) {
    super(detachment, 1)

    this.cost = 275
    this.min = 8
    this.max = undefined
    this.quantity = 8
  }
}

withType(WhiteScarsPrimarch)
withType(WhiteScarsBodyguardSquad)
withType(WhiteScarsOutriderUnit)
withType(WhiteScarsBike)
withType(WhiteScarsAttackBike)
withType(WhiteScarsScimitarJetbike)
