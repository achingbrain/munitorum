import {
  Weapon,
  AssaultWeapon,
  MacroWeapon,
  ExtraAttacks,
  SmallArms,
  FirstStrike,
  SingleShot,
  RangedWeapon,
  AntiPersonnel,
  Disrupt,
  Fleshbane
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
import withType from '../with-type'

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
      new InvulnerableSave('6+')
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

export class WhiteScarsEbonKeshig extends LegionTerminatorSquad {
  constructor (detachment) {
    super(detachment)

    this.cost = 300
    this.min = 4
    this.max = undefined
    this.quantity = 4

    this.stats.ff = 4

    this.rules.push(new Fearless())

    this.weapons = [
      new Weapon('power-glaive', new AssaultWeapon(new MacroWeapon(), new ExtraAttacks('+1'), new FirstStrike()))
    ]
  }
}

export class WhiteScarsChogorianBrotherhoodBike extends LegionBike {
  constructor (detachment) {
    super(detachment)

    this.min = 4
    this.max = undefined
    this.quantity = 4

    this.cost = 135
  }
}

export class WhiteScarsChogorianBrotherhoodAttackBike extends LegionAttackBike {
  constructor (detachment) {
    super(detachment)

    this.min = 4
    this.max = undefined
    this.quantity = 4

    this.cost = 135
  }
}

export class WhiteScarsChogorianBrotherhoodBikeUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new WhiteScarsChogorianBrotherhoodBike(detachment),
      new WhiteScarsChogorianBrotherhoodAttackBike(detachment)
    )
  }
}

export class WhiteScarsChogorianBrotherhoodJetbike extends LegionScimitarJetbike {
  constructor (detachment) {
    super(detachment)

    this.min = 4
    this.max = undefined
    this.quantity = 4

    this.cost = 140
  }
}

export class WhiteScarsGoldenKeshig extends LegionScimitarJetbike {
  constructor (detachment) {
    super(detachment)

    this.cost = 215
    this.min = 4
    this.max = undefined
    this.quantity = 4

    this.stats.cc = 4

    this.rules.push(new Fearless())
    this.rules.push(new InvulnerableSave())

    this.weapons = [
      new Weapon('scatterbolt-launcher', new RangedWeapon('15cm', new AntiPersonnel('5+'), new Disrupt())),
      new Weapon('kontos-power-lance', new AssaultWeapon(new MacroWeapon(), new SingleShot(), new FirstStrike())),
      new Weapon('power-weapons', new AssaultWeapon(new Fleshbane(), new ExtraAttacks('+1')))
    ]
  }
}

export class WhiteScarsChogorianBrotherhoodJetBikeUnit extends MultipleChoiceUnit {
  constructor (detachment) {
    super(detachment,
      new WhiteScarsChogorianBrotherhoodJetbike(detachment),
      new WhiteScarsGoldenKeshig(detachment)
    )
  }
}

withType(WhiteScarsPrimarch)
withType(WhiteScarsBodyguardSquad)
withType(WhiteScarsOutriderUnit)
withType(WhiteScarsBike)
withType(WhiteScarsAttackBike)
withType(WhiteScarsScimitarJetbike)
withType(WhiteScarsEbonKeshig)
withType(WhiteScarsChogorianBrotherhoodBike)
withType(WhiteScarsChogorianBrotherhoodAttackBike)
withType(WhiteScarsChogorianBrotherhoodBikeUnit)
withType(WhiteScarsChogorianBrotherhoodJetBikeUnit)
withType(WhiteScarsGoldenKeshig)
